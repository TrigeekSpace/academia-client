<!-- Component template -->
<template>
<body>
    <!-- Navigation bar -->
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#/">Academia</a>
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
                        <li><button class="btn btn-link" @click="logout()"><span class="glyphicon glyphicon-log-out"></span>&nbsp;&nbsp;Logout</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Router view -->
    <router-view></router-view>
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
    }
};
</script>
