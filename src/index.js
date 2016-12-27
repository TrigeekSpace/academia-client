//Index.js: Entry point of Academia client
import Vue from "vue";
import VueRouter from "vue-router";
import _ from "lodash";
import "bootstrap";
import fs from "fs";

import "bootstrap-cosmo";
import "simplemde-css";

import {data_path} from "academia/util/core";
import {inject_route_ctx} from "academia/util/route";
import Root from "academia/views/root.vue";
import "academia/common.css";

//[ Router ]
//Use Vue router
Vue.use(VueRouter);
//Routes
let routes = [
    //Index page (Paper search)
    {name: "index", path: "/", component: require("academia/views/index.vue")},
    //Index page (Paper search)
    {name: "setting", path: "/setting", component: require("academia/views/setting.vue")},
    //User pages
    {name: "login", path: "/users/login", component: require("academia/views/users/login.vue")},
    {name: "register", path: "/users/register", component: require("academia/views/users/register.vue")},
    {name: "user_space", path: "/users/space", component: require("academia/views/users/space.vue")},
    //Paper pages
    {name: "paper_detail", path: "/papers/detail", component: require("academia/views/papers/detail.vue")},
    {name: "paper_content", path: "/papers/content", component: require("academia/views/papers/content.vue")},
    {name: "paper_list", path: "/papers/list", component: require("academia/views/papers/list.vue")},
    {name: "upload_paper", path: "/papers/upload", component: require("academia/views/papers/upload.vue")},
    //Note pages
    {name: "upload_note", path: "/notes/upload", component: require("academia/views/notes/upload.vue")},
    //Local pages
    {name: "transfer_tasks", path: "/local/transfer", component: require("academia/views/local/transfer.vue")},
    {name: "offline", path: "/local/offline", component: require("academia/views/local/offline.vue")},
    {name: "local_files", path: "/local/files", component: require("academia/views/local/files.vue")}
];
//Router
let router = new VueRouter({routes});
//Enable context injection
router.beforeEach(inject_route_ctx(router));

//[ Files Folder ]
//Data root
if (!fs.existsSync(data_path()))
    fs.mkdirSync(data_path());
//Paper files directory
if (!fs.existsSync(data_path("papers")))
    fs.mkdirSync(data_path("papers"));
//Note files directory
if (!fs.existsSync(data_path("notes")))
    fs.mkdirSync(data_path("notes"));

//[ Online Detection ]
setInterval(() => {
    root_view.online = navigator.onLine;
}, 10000);

//[ Root View ]
//Root node
export let root_node = $("<div />");
//Do not show UI in test mode
if (process.env.NODE_ENV!="test")
    root_node.appendTo("body");

//Root view
export let root_view = new Vue({
    //Root level data
    data: {
        //Current user
        user: null,
        //Show or hide sidebar
        show_side_bar: false,
        //File uploads & downloads
        upload_tasks: [],
        download_tasks: [],
        show_copyright: false,
        settings: {
            lang: '#langCN'
        },
        //Side bar
        side_bar_list: {
            search: "",
            space: "",
            upload: "",
            setting: "",
            mission: ""
        },
        //Online
        online: true
    },
    //Methods
    methods: {
        change_language(lang) {
            this.settings['lang'] = lang;
            this.side_bar_list.search = lang == '#langCN' ? '论文搜索' : 'Search';
            this.side_bar_list.space = lang == '#langCN' ? '我的空间' : 'Space';
            this.side_bar_list.upload = lang == '#langCN' ? '上传论文' : 'Upload';
            this.side_bar_list.setting = lang == '#langCN' ? '偏好设置' : 'Setting';
            this.side_bar_list.mission = lang == '#langCN' ? '传输任务' : 'Mission';
        },
        //Toggle sidebar
        toggle_sidebar()
        {   if (!this.show_side_bar) {
                this.show_side_bar = !this.show_side_bar;
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
        //close sidebar
        close_sidebar()
        {   if (this.show_side_bar) {
                this.show_side_bar = !this.show_side_bar;
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
        }
    },
    el: root_node[0],
    render: (resolve) => resolve(Root),
    router
});

router.beforeEach((to, from, next)=>{
    let $root = root_view;
    if (to.path == '/')
        $root.show_copyright = false;
    else
        $root.show_copyright = true;
    next();
});
