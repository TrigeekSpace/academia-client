<!-- Component template -->
<template>
<div>
  <div class="row">
    <div class="col-sm-3 col-md-4 col-lg-4"></div>
    <div class="col-sm-6 col-md-4 col-lg-4">
      <div class="well" align="center">
        <h2>{{language.login}}</h2>
        <hr />
        <!-- Log-in first prompt -->
        <div class="alert alert-warning" v-if="$route.query.next">
          {{language.login_first}}
        </div>
        <!-- Register prompt -->
        <div class="alert alert-info">
          {{language.no_account}}
          <router-link to="/users/register" class="alert-link">{{language.register}}</router-link>。
        </div>
        <!-- Log-in form -->
        <form class="form-horizontal" @submit.prevent>
          <!-- Username -->
          <div class="form-group form-group-padding-fixes">
            <input type="text" class="form-control" :placeholder="language.username" v-model="username" />
          </div>
          <!-- Password -->
          <div class="form-group form-group-padding-fixes">
            <input type="password" class="form-control" :placeholder="language.passwd" v-model="password" data-trigger="manual" v-on:keyup.enter="login()"/>
          </div>
          <!-- Operations -->
          <div class="form-group form-group-well">
            <button id="login_btn" class="btn btn-primary" @click="login()">{{language.login}}</button>&nbsp;&nbsp;
             <button class="btn btn-default">{{language.forget}}</button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-sm-3 col-md-4 col-lg-4"></div>
  </div>
</div>
</template>
<!-- Script -->
<script>
import {User, adaptor} from "academia/models";
import {AUTH_TOKEN_HEADER} from "academia/config";
import {urlsafe_b64decode, msgbox} from "academia/util/core";
import {to_plain} from "academia/util/api";
import {unify_error} from "academia/util/error";
import {on_route_change, pre_route, online_only} from "academia/util/route";

export default {
  //View data
  data()
  {   return {
      username: null,
      password: null,
      language: {
        username: "",
        passwd: "",
      }
    };
  },
  beforeRouteEnter: pre_route(online_only),
  //Methods
  methods: {
    //Initialization
    async init() {
      // Setting language
      let lang = this.$root.settings.lang;
      this.language = this.$root.language_dict[lang].user.login;
    },
    //Log-in
    async login()
    {   try
      {   //Try to log-in
        let resp = await User.login({
          username: this.username,
          password: this.password
        });
        let data = resp.data;

        //Set user
        this.$root.user = data.user;
        //Set token header
        adaptor.defaults.httpConfig.headers[AUTH_TOKEN_HEADER] = data.token;

        localStorage.setItem("login", JSON.stringify({
          user: data.user,
          token: data.token
        }));

        //Next page; fallback to index page
        let next = this.$route.query.next;
        next = next?JSON.parse(urlsafe_b64decode(next)):"/";
        //Jump to given page
        this.$router.push(next);
      }
      catch (e)
      {   e = unify_error(e);
        //Prompt error
        msgbox({
          type: "error",
          title: "登录失败",
          message: e.message
        });
      }
    }
  }
};
</script>
