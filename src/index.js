//Index.js: Entry point of Academia client
import Vue from "vue";
import VueRouter from "vue-router";
import "bootstrap-cosmo";
import "bootstrap";
import "simplemde-css";

//Root component
import Root from "academia/views/root.vue";

//Use Vue router
Vue.use(VueRouter);
//Routes
let routes = [
    {name: "index", path: "/", component: require("academia/views/index.vue")},

    {name: "login", path: "/users/login", component: require("academia/views/users/login.vue")},
    {name: "register", path: "/users/register", component: require("academia/views/users/register.vue")},
    {name: "user_space", path: "/users/space", component: require("academia/views/users/space.vue")},

    {name: "paper_detail", path: "/papers/detail", component: require("academia/views/papers/detail.vue")},
    {name: "paper_content", path: "/papers/content", component: require("academia/views/papers/content.vue")},
    {name: "paper_list", path: "/papers/list", component: require("academia/views/papers/list.vue")},
    {name: "upload_paper", path: "/papers/upload", component: require("academia/views/papers/upload.vue")},

    {name: "upload_note", path: "/notes/upload", component: require("academia/views/notes/upload.vue")},

    {name: "transfer_tasks", path: "/misc/transfer", component: require("academia/views/misc/transfer.vue")}
];
//Router
let router = new VueRouter({routes});

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
        
    },
    //Methods
    methods: {
        //Toggle side bar
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
window.router =  router
