//Index.js: Entry point of Academia client
import Vue from "vue";
import Vuex, {Store} from "vuex";
import VueRouter from "vue-router";
import "bootstrap-cosmo";
import "bootstrap";

import Root from "academia/views/root.vue";

//[ Routing ]
//Use Vue router
Vue.use(VueRouter);
//Routes
let routes = [
    {path: "/", component: require("academia/views/welcome.vue")},
    {path: "/users/login", component: require("academia/views/users/login.vue")},
    {path: "/users/register", component: require("academia/views/users/register.vue")}
];
//Router
let router = new VueRouter({routes});

//[ Vuex State Store ]
//Use Vuex
Vue.use(Vuex);
//State store
let store = new Store({
    state: {},
    mutations: {}
});

//[ Root View ]
//Root view
let root_view = new Vue({
    el: "body",
    render: (resolve) => resolve(Root),
    store,
    router
});
