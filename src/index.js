//Index.js: Entry point of Academia client
import Vue from "vue";
import Vuex, {Store} from "vuex";
import _ from "underscore";
import {Router, history} from "backbone";

//jQuery
import $ from "jquery";
window.$ = window.jQuery = $;
//Bootstrap
import "bootstrap-cosmo";
//import "bootstrap";

import NavBar from "academia/views/navbar.vue";

//[ Vuex State Store ]
//Use Vuex
Vue.use(Vuex);
//State store
let store = new Store();

//[ Top-level Views ]
//Navigation bar view
let nav_bar = new Vue({
    el: "#navbar-view",
    render: (resolve) => resolve(NavBar),
    store
});
//Content view
let content_view = null;

//[ Routing ]
//Make route handler
function route_handler(view_component)
{   return (...args) => {
        //Destroy old content view
        if (content_view)
            content_view.$destroy();

        //Create new content view
        content_view = new Vue({
            render: (resolve) => resolve(view_component),
            store
        });
        //Prepare and inject route information object
        content_view.$route = {
            _params: args
        };
        //Mount new view to element
        content_view.$mount("#content-view");
        console.log("666");
    };
}

//[ Configuration ]
//Frontend routes
var routes = {
    "/": route_handler(require("./views/welcome.vue"))
};

//[ Router ]
//Create router
let router = new Router({routes});
history.start();
router.navigate("/", true);
console.log("2333");
