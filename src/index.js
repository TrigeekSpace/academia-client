//Index.js: Entry point of Academia client
import Vue from "vue";
import VueRouter from "vue-router";
import _ from "lodash";
import "bootstrap";

import "bootstrap-cosmo";
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
        //File uploads & downloads
        upload_tasks: [],
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
        },
        //Create file transfer task
        create_transfer_task(name, type, transfer_type)
        {   let new_task = {
                name,
                type,
                transfer_type,
                transfered: 0,
                total: 1,
                get progress()
                {   return Math.round(this.transfered/this.total*100);
                }
            };
            this[transfer_type+"_tasks"].push(new_task);

            let progress_handler = (event) => {
                console.log(event);
                console.log(new_task);
                new_task.transfered = event.loaded;
                new_task.total = event.total;
            };

            return [new_task, progress_handler];
        },
        //Complete a file transfer task
        complete_transfer_task(task)
        {   _.pull(this[task.transfer_type+"_tasks"], task);
        }
    },
    el: "body",
    render: (resolve) => resolve(Root),
    router
});
window.root_view = root_view;
