//Route.js: Frontend routing utilities
import _ from "lodash";

import {urlsafe_b64encode} from "academia/util/core";

/**
 * Inject route context.
 *
 * @param router Vue router instance.
 * @return Vue router middleware which injects a context with root component.
 */
export function inject_route_ctx(router)
{   //Routing hook
    return (to, from, next) => {
        //Create context object with root component
        to.meta.__ctx = {$root: router.app};
        //Call next hook
        next();
    };
}

/**
 * Create a pre-route handler with hooks.
 *
 * @param hooks An array of router middlewares
 * @return Pre-route handler.
 */
export function pre_route(...hooks)
{   //Pre-route handler
    return _.extend(async (to, from, next) => {
        //Context object
        let ctx = to.meta.__ctx;
        delete to.meta.__ctx;

        //Run hooks
        for (let hook of hooks)
        {   //Call hook
            let next_arg = await new Promise((resolve) => {
                hook.call(ctx, to, from, resolve);
            });

            //Pass to "next" function
            if (next_arg!=null)
            {   next(next_arg);
                return;
            }
        }

        //Enter new route
        next((vm) => {
            if (vm.init)
                vm.init();
        });
    }, {hooks});
}

//Deactivate oneshot flag
let deactivate_oneshot = false;

/**
 * Handle route changes on the same component.
 *
 * @param to Destination route object.
 * @param from Source route object.
 */
export async function on_route_change(to, from)
{   //Deactivate oneshot
    if (deactivate_oneshot)
    {   deactivate_oneshot = false;
        return;
    }

    //Leave old route
    if (this.beforeRouteLeave)
        this.beforeRouteLeave();

    let pre_route = this.beforeRouteEnter;
    //Make context object
    let ctx = {$root: this.$root};
    //Run pre-route hooks if exist
    if (pre_route&&pre_route.hooks)
        for (let hook of pre_route.hooks)
        {   //Call hook
            let next_arg = await new Promise((resolve) => {
                hook.call(ctx, to, from, resolve);
            });

            //Stop navigation
            if (next_arg==false)
            {   deactivate_oneshot = true;
                this.$router.back();
                return;
            }
            //Navigate to given position
            else if (next_arg!=null)
            {   this.$router.go(next_arg);
                return;
            }
        }

    //Enter new route
    if (this.init)
        this.init();
}

/**
 * Navigate user to log-in page if user not logged in.
 *
 * @param to Destination route object.
 * @param from Source route object.
 * @param next Continue route navigation.
 */
export function login_required(to, from, next)
{   if (this.$root.user)
        next();
    else
    {   //Next route parameters
        let next_params = {path: to.path, query: to.query, params: to.params};
        next_params = urlsafe_b64encode(JSON.stringify(next_params));
        //Go to log-in page
        next({name: "login", query: {next: next_params}});
    }
}

/**
 * Prevent user from opening the page if offline.
 *
 * @param to Destination route object.
 * @param from Source route object.
 * @param next Continue route navigation.
 */
export function online_only(to, from, next)
{   if (navigator.onLine)
        next();
    else
    {   //Next route parameters
        let next_params = {path: to.path, query: to.query, params: to.params};
        next_params = urlsafe_b64encode(JSON.stringify(next_params));
        //Go to offline page
        next({name: "offline", query: {next: next_params}});
    }
}
