<!-- Component template -->
<template>
<div>
  <!-- Navigation bar -->
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Academia</a>
      </div>
      <!-- Menu -->
      <ul class="nav navbar-nav">
        <li class="active" href="javascript:void(0)" @click="$root.toggle_sidebar()" id="menu-button"><a href="javascript:void(0)"><span class="glyphicon glyphicon-list"></span>&nbsp;&nbsp;{{$root.side_bar_list.menu}}</a></li>
        <li id="back-button"><a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a></li>
        <li id="forward-button"><a href="#"><span class="glyphicon glyphicon-chevron-right"></span></a></li>
      </ul>
      <!-- Anonymous user -->
      <ul class="nav navbar-nav navbar-right" v-if="!$root.user">
        <li><router-link id="register-btn" to="/users/register"><span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;{{$root.side_bar_list.register}}</router-link></li>
        <li><router-link id="login-btn" to="/users/login"><span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;{{$root.side_bar_list.login}}</router-link></li>
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
  <!-- Sidebar -->
  <div class="sidebar" id="root-side-bar">
    <ul class="nav sidebar-group">
      <li><router-link to="/"><span class="glyphicon glyphicon-search"></span> {{$root.side_bar_list.search}}</router-link></li>
      <li><router-link to="/users/space"><span class="glyphicon glyphicon-globe"></span> {{$root.side_bar_list.space}}</router-link></li>
      <li><router-link to="/papers/upload"><span class="glyphicon glyphicon-upload"></span> {{$root.side_bar_list.upload}}</router-link></li>
      <li><router-link to="/setting"><span class="glyphicon glyphicon-cog"></span> {{$root.side_bar_list.setting}}</router-link></li>
    </ul>
    <ul class="nav sidebar-group">
      <li><router-link to="/local/transfer"><span class="glyphicon glyphicon-transfer"></span> {{$root.side_bar_list.mission}}</router-link></li>
      <li><router-link to="/local/files"><span class="glyphicon glyphicon-file"></span> {{$root.side_bar_list.local}}</router-link></li>
    </ul>
  </div>
  <!-- Content view -->
  <div class="container-fluid" id="content-view">
    <router-view></router-view>
    <!-- Page bottom -->
    <div align="center">
      <hr v-if="$root.show_copyright" />
      <h6 v-if="$root.show_copyright">Copyright &copy; Trigeek 2016. Released under BSD license.</h6>
    </div>
  </div>
</div>
</template>
<!-- Script -->
<script>
import {User, adaptor} from "academia/models";
import {AUTH_TOKEN_HEADER} from "academia/config";
import {on_route_change, pre_route} from "academia/util/route";

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

      localStorage.removeItem("login");

      //Go to index page
      this.$router.push("/");
    }
  },
  mounted(){
    $("#root-side-bar").mouseleave(() => {
      this.$root.close_sidebar();
    });
    $("#menu-button").mouseleave((e) => {
      if (e.pageY <= $("#menu-button").offset().top + $("#menu-button").outerHeight())
      this.$root.close_sidebar();
    });
    $("#back-button").click(() => {
      this.$router.back();
    });
    $("#forward-button").click(() => {
      this.$router.forward();
    });
    this.$root.change_language(this.$root.settings.lang);
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

/* Content view */
#content-view
{   margin-top: 80px;
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
