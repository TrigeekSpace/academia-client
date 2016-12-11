//Data.js: Data and model utilities for frontend
import _ from "lodash";
import Vue from "vue";
import $ from "jquery";

import {ADAPTOR_NAME} from "academia/config";

//[ Encoding ]
//Encode unicode string to byte string
export function encode(unicode_str, encoding="utf-8")
{   let bytes = new TextEncoder(encoding).encode(unicode_str);
    return String.fromCharCode.apply(null, bytes);
}

//Decode byte string to unicode string
export function decode(bytes_str, encoding="utf-8")
{   let bytes = new Uint8Array(bytes_str.length);
    for (let i=0;i<bytes_str.length;i++)
        bytes[i] = bytes_str.charCodeAt(i);
    return new TextDecoder(encoding).decode(bytes);
}

//Base64 encode
export function b64encode(str, encoding="utf-8")
{   return btoa(encode(str, encoding));
}

//Base64 decode
export function b64decode(str, encoding="utf-8")
{   return decode(atob(str), encoding);
}

//URL-safe Base64 encode
export function urlsafe_b64encode(str, encoding="utf-8")
{   return encodeURIComponent(b64encode(str, encoding));
}

//URL-safe Base64 decode
export function urlsafe_b64decode(str, encoding="utf-8")
{   return b64decode(decodeURIComponent(str), encoding);
}

//Query transformer
export function transform_query(config, params)
{   if (!(_.isEmpty(params)))
        params = {json_params: urlsafe_b64encode(JSON.stringify(params))};
    return params;
}

//[ Store & Model ]
/**
 * Parse response data.
 *
 * @param config - JS-Data model configuration.
 * @param resp - HTTP response object.
 * @return Response data.
 */
export function parse_resp(config, resp)
{   //Response
    if (!resp)
        return null;
    //Response data
    let resp_data = resp.data;
    if (!resp_data)
        return resp;
    //Main data
    let main_data = resp_data.data;
    if (!main_data)
        return resp_data;
    return main_data;
}

/**
 * Transform request to FormData.
 */
export function transform_request_form_data(data)
{   //Transform detection
    let need_transform = false;
    for (let key in data)
        if (data[key] instanceof Blob)
        {   need_transform = true;
            break;
        }

    //Transform data to FormData
    if (need_transform)
    {   let form_data = new FormData()
        for (let key in data)
            if (data[key] instanceof Blob)
                form_data.append(key, data[key]);
            else
                form_data.append(key, JSON.stringify(data[key]));
        data = form_data;
    }

    return data;
}

/**
 * Convert JS-Data model to plain object.
 *
 * @param obj Single or multiple JS-Data model instance(s).
 * @param nested Keypath of nested fields to be converted.
 * @return Converted plain object.
 */
export function to_plain(obj, nested=[])
{   //Multiple objects
    if (_.isArray(obj))
        return obj.map((single) => to_plain(single, nested));
    //Convert nested fields to hierarchical representation
    if (_.isArray(nested))
    {   let hierarchy = {}
        for (let key_path of nested)
            _.set(hierarchy, key_path, {});
        nested = hierarchy;
    }

    let plain_obj = {};
    //Copy original object
    for (let key of _.keys(obj))
        plain_obj[key] = obj[key];
    for (let key of _.keys(nested))
        plain_obj[key] = to_plain(obj[key], nested[key]);

    return plain_obj;
}

//[ Model Actions & Data ]
/**
 * Get resource path from model
 *
 * @param model - Model object.
 * @return Base path of the resource associated with the model.
 */
function get_res_path(model)
{   let adaptor = model.getAdapter(ADAPTOR_NAME);
    let base_path = adaptor.defaults.basePath||model.basePath||"";
    return `${base_path}/${model.endpoint}`;
}

/**
 * Define resource action.
 *
 * @param model - Model object.
 * @param name - Resource action data name.
 * @param default_http_opts - Default options used by underlying transport.
 * @return A function corresponding with given resource action API endpoint.
 */
export function res_action(model, name, default_http_opts={})
{   //Path
    let path = `${get_res_path(model)}/${name}`;
    //Adaptor and transport
    let adaptor = model.getAdapter(ADAPTOR_NAME),
        http = adaptor.http;

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, data: params, method: "POST"},
            adaptor.defaults.httpConfig,
            default_http_opts,
            http_opts
        );
        //Fetch data
        return http(final_opts);
    };
}

/**
 * Define resource data.
 *
 * @param model - Model object.
 * @param name - Resource sub-resource data name.
 * @param default_http_opts - Default options used by underlying transport.
 * @return A function corresponding with given resource API endpoint.
 */
export function res_data(model, name, default_http_opts={})
{   //Path
    let path = `${get_res_path(model)}/${name}`;
    //Adaptor and transport
    let adaptor = model.getAdapter(ADAPTOR_NAME),
        http = adaptor.http;

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, params: params, method: "GET"},
            adaptor.defaults.httpConfig,
            default_http_opts,
            http_opts
        );
        //Fetch data
        return http(final_opts);
    };
}

/**
 * Define instance action.
 *
 * @param model - Model object.
 * @param name - Instance action name.
 * @param default_http_opts - Default options used by underlying transport.
 * @return A function corresponding with given instance action API endpoint.
 */
export function inst_action(model, name, default_http_opts={})
{   //Path
    let path = `${get_res_path(model)}/${this.id}/${name}`;
    //Adaptor and transport
    let adaptor = model.getAdapter(ADAPTOR_NAME),
        http = adaptor.http;

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, data: params, method: "POST"},
            adaptor.defaults.httpConfig,
            default_http_opts,
            http_opts
        );
        //Fetch data
        return http(final_opts);
    };
}

/**
 * Define instance data.
 *
 * @param model - Model object.
 * @param name - Instance sub-resource data name.
 * @param default_http_opts - Default options used by underlying transport.
 * @return A function corresponding with given instance data API endpoint.
 */
export function inst_data(model, name, default_http_opts={})
{   //Path
    let path = `${get_res_path(model)}/${this.id}/${name}`;
    //Adaptor and transport
    let adaptor = model.getAdapter(ADAPTOR_NAME),
        http = adaptor.http;

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, params: params, method: "GET"},
            adaptor.defaults.httpConfig,
            default_http_opts,
            http_opts
        );
        //Fetch data
        return http(final_opts);
    };
}

//[ Query Builder ]
//Command query operators
export let and = _.bind(Array, null, "and");
export let or = _.bind(Array, null, "or");
export let not = _.bind(Array, null, "not");
export let eq = _.bind(Array, null, "eq");
export let neq = _.bind(Array, null, "neq");
export let gt = _.bind(Array, null, "gt");
export let gte = _.bind(Array, null, "gte");
export let lt = _.bind(Array, null, "lt");
export let lte = _.bind(Array, null, "lte");
export let in_ = _.bind(Array, null, "in");
export let nin = _.bind(Array, null, "nin");
export let contains = _.bind(Array, null, "contains");

//[ Error Handling ]
//Unknown error prompt
const UNKNOWN_ERROR_PROMPT = "Something wrong happened. But I don't understand.";
//Server error prompt
const SERVER_ERROR_PROMPT = "The remote server exploded. :(";

//Error name to handler mapping
let error_handler_mapping = {
    //Server error
    exception(data)
    {   //Print back trace
        console.error(`A(n) ${data.exception_type} occured at server side.\n\n${data.backtrace}`);
        //Humorous prompt
        return SERVER_ERROR_PROMPT;
    },
    //Argument format
    arg_fmt(data)
    {   let html = "Illegal input found:<ul>";
        //Print each field and reason
        let errors = data.errors;
        for (let field in data.errors)
            html += `<li>${field}: ${errors[field]}</li>`;
        html += "</ul>"

        return html;
    }
};

/**
 * Convert error information to HTML.
 *
 * @param data - Error data.
 * @return HTML error description.
 */
export function html_error(data)
{   //Delegate to specific error handler
    if (data.type in error_handler_mapping)
        return error_handler_mapping[data.type](resp);
    //No error handler found
    else
        return UNKNOWN_ERROR_PROMPT;
}

//[ Routing ]
//Inject route context
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
 * Create a pre-route handler with hooks
 *
 * @param hooks An array of router middlewares
 * @return Pre-route handler
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
 * Handle route change on the same component
 *
 * @param to Destination route object.
 * @param from Source route object.
 */
export async function on_reload(to, from)
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

//Navigate user to log-in page if user not logged in
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
