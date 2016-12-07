<!-- Component template -->
<template>
<body>
    <!-- Navigation bar -->
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="javascript:void(0)" @click="$root.toggle_sidebar()">Academia</a>
            </div>
            <!-- Menu -->
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">test</a></li>
            </ul>
            <!-- Anonymous user -->
            <ul class="nav navbar-nav navbar-right" v-if="!$root.user">
                <li><router-link to="/users/register"><span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Register</router-link></li>
                <li><router-link to="/users/login"><span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;Log-in</router-link></li>
            </ul>
            <!-- Current user -->
            <ul class="nav navbar-nav navbar-right" v-if="$root.user">
                <li class="dropdown">
                    <button class="btn btn-link dropdown-toggle" data-toggle="dropdown">
                        <span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;
                        {{$root.user.username}}
                        <b class="caret"></b>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" @click="logout()"><span class="glyphicon glyphicon-log-out"></span>&nbsp;&nbsp;Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Content view -->
    <div class="container-fluid">
        <div class="sidebar" :class="$root.sidebar_classes" id="root-side-bar">
            <ul class="nav sidebar-group">
                <li><router-link to="/"><span class="glyphicon glyphicon-search"></span> 论文搜索</router-link></li>
                <li><router-link to="/users/space"><span class="glyphicon glyphicon-globe"></span> 我的空间</router-link></li>
                <li><router-link to="/papers/upload"><span class="glyphicon glyphicon-upload"></span> 上传论文</router-link></li>
            </ul>
        </div>
        <div :class="$root.router_view_classes" id="main-view">
            <router-view></router-view>
        </div>
    </div>
</body>
</template>
<!-- Script -->
<script>
import {User, adaptor} from "academia/models";
import {AUTH_TOKEN_HEADER} from "academia/config";

export default {
    //Methods
    methods: {
        //Logout
        logout()
        {   //Log user out
            User.logout();
            //Remove authentication token
            delete adaptor.defaults.httpConfig.headers[AUTH_TOKEN_HEADER];
            //Reset user
            this.$root.user = null;
        }
    },
    mounted(){
        $("#root-side-bar").mouseleave(()=>{
            this.$root.toggle_sidebar();
        });
    }
};
</script>
<!-- Style -->
<style>
/* Sidebar */
.sidebar
{   position: fixed;
    top: 52px;
    bottom: 0;
    left: -200px;
    width: 200px;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    background-color: #f5f5f5;
    opacity: 0.9;
}

#main-view {
    margin-top: 100px;
}

/* Sidebar group */
.sidebar-group
{   margin-right: -21px;
    margin-bottom: 20px;
    margin-left: -20px;
}

/* Sidebar group links */
.sidebar-group > li > a
{   padding-right: 20px;
    padding-left: 20px;
}

.sidebar-group > .active > a,
.sidebar-group > .active > a:hover,
.sidebar-group > .active > a:focus
{   color: #fff;
    background-color: #428bca;
}
</style>
