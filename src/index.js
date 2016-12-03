//Index.js: Entry point of Academia client
import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap-cosmo";
import "bootstrap";

//Root component
import Root from "academia/views/root.vue";

//Use Vue router
Vue.use(VueRouter);
//Routes
let routes = [
    {name: "index", path: "/", component: require("academia/views/index.vue")},
    {name: "login", path: "/users/login", component: require("academia/views/users/login.vue")},
    {name: "register", path: "/users/register", component: require("academia/views/users/register.vue")}
];
//Router
let router = new VueRouter({routes});

//Root view
let root_view = new Vue({
    //Root level data
    data: {
        user: null,
        token: null
    },
    el: "body",
    render: (resolve) => resolve(Root),
    router
});
