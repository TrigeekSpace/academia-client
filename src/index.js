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

//[ Root View ]
//Side bar visible classes
const SIDEBAR_VISIBLE_CLASSES = ["hidden-xs col-sm-3", "col-md-3", "col-lg-2"];
//Side bar hidden classes
const SIDEBAR_HIDDEN_CLASSES = ["hidden"];

//Router view with side bar classes
const ROUTER_VIEW_SIDEBAR_CLASSES = [
    "col-sm-offset-3",
    "col-sm-9",
    "col-md-offset-3",
    "col-md-9",
    "col-lg-offset-2",
    "col-lg-10"
];
//Router view only classes
const ROUTER_VIEW_ONLY_CLASSES = [];

//Root view
let root_view = new Vue({
    //Root level data
    data: {
        //Current user
        user: null,
        //Current session token
        token: null,
        //Show or hide sidebar
        show_side_bar: false,
        //File transfer tasks
        transfer_tasks: []
    },
    //Computed properties
    computed: {
        //Sidebar classes
        sidebar_classes()
        {   return this.show_side_bar?SIDEBAR_VISIBLE_CLASSES:SIDEBAR_HIDDEN_CLASSES;
        },
        //Router view classes
        router_view_classes()
        {   return this.show_side_bar?ROUTER_VIEW_SIDEBAR_CLASSES:ROUTER_VIEW_ONLY_CLASSES;
        }
    },
    //Methods
    methods: {
        //Toggle side bar
        toggle_sidebar()
        {   this.show_side_bar = !this.show_side_bar;
        }
    },
    el: "body",
    render: (resolve) => resolve(Root),
    router
});
