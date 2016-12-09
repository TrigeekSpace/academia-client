//Index.js: Entry point of Academia client
import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap-cosmo";
import "bootstrap";
import "simplemde-css";

import {inject_route_ctx} from "academia/util";
import Root from "academia/views/root.vue";

//[ Router ]
//Use Vue router
Vue.use(VueRouter);
//Routes
let routes = [
    //Index page (Paper search)
    {name: "index", path: "/", component: require("academia/views/index.vue")},
    //User actions
    {name: "login", path: "/users/login", component: require("academia/views/users/login.vue")},
    {name: "register", path: "/users/register", component: require("academia/views/users/register.vue")},
    {name: "user_space", path: "/users/space", component: require("academia/views/users/space.vue")},
    //Paper actions
    {name: "paper_detail", path: "/papers/detail", component: require("academia/views/papers/detail.vue")},
    {name: "paper_content", path: "/papers/content", component: require("academia/views/papers/content.vue")},
    {name: "paper_list", path: "/papers/list", component: require("academia/views/papers/list.vue")},
    {name: "upload_paper", path: "/papers/upload", component: require("academia/views/papers/upload.vue")},
    //Note actions
    {name: "upload_note", path: "/notes/upload", component: require("academia/views/notes/upload.vue")},
    //Other actions
    {name: "transfer_tasks", path: "/local/transfer", component: require("academia/views/local/transfer.vue")}
];
//Router
let router = new VueRouter({routes});
//Enable context injection
router.beforeEach(inject_route_ctx(router));

//[ Root View ]
let root_view = new Vue({
    //Root level data
    data: {
        //Current user
        user: null,
        //Show or hide sidebar
        show_side_bar: false,
        //File uploads
        upload_tasks: [],
        //File downloads
        download_tasks: []
    },
    //Methods
    methods: {
        //Toggle sidebar
        toggle_sidebar()
        {   this.show_side_bar = !this.show_side_bar;
            if (this.show_side_bar) {
                $("#root-side-bar").animate({
                    left: 0
                }, 100);
            }
            else {
                $("#root-side-bar").animate({
                    left: "-200px"
                }, 100);
            }
        }
    },
    el: "body",
    render: (resolve) => resolve(Root),
    router
});
window.root_view = root_view;
