<!-- Component template -->
<template>
<div>
  <div class="row">
    <div class="col-sm-3 col-md-4 col-lg-4"></div>
    <div class="col-sm-6 col-md-4 col-lg-4">
      <div class="well" align="center">
        <h2>{{language.register}}</h2>
        <hr />
        <!-- Log-in prompt -->
        <div class="alert alert-info">
          {{language.already}}
          <router-link to="/users/login" class="alert-link">{{language.login}}</router-link>。
        </div>
        <!-- Register form -->
        <form class="form-horizontal" @submit.prevent>
          <!-- Username -->
          <div class="form-group form-group-padding-fixes">
            <input type="text" class="form-control" :placeholder="language.username" v-model="username" />
          </div>
          <!-- E-mail -->
          <div class="form-group form-group-padding-fixes">
            <input type="email" class="form-control" :placeholder="language.email" v-model="email" />
          </div>
          <!-- Password -->
          <div class="form-group form-group-padding-fixes">
            <input type="password" class="form-control" :placeholder="language.passwd" v-model="password" />
          </div>
          <!-- Password again -->
          <div class="form-group form-group-padding-fixes">
            <input type="password" class="form-control" :placeholder="language.pass2" v-model="password2" data-trigger="manual" v-on:keyup.enter="register_user()"/>
          </div>
          <!-- Operations -->

          <div class="form-group form-group-well">
            <button id="register-btn" class="btn btn-primary" @click="register_user()">{{language.register}}</button>&nbsp;&nbsp;
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
import {User} from "academia/models";
import {msgbox} from "academia/util/core";
import {unify_error} from "academia/util/error";
import {on_route_change, pre_route} from "academia/util/route";

export default {
  //View model data
  data()
  {   return {
      username: null,
      email: null,
      password: null,
      password2: null,
      language: {
        username: "",
        email: "",
        passwd: "",
        pass2: ""
      }
    };
  },
  beforeRouteEnter: pre_route(),
  //Methods
  methods: {
    //Initialization
    async init() {
      // Setting language
      let lang = this.$root.settings.lang;
      this.language = this.$root.language_dict[lang].user.register;
    },
    //User register
    async register_user()
    {   try
      {   //Check passwords
        if (this.password!=this.password2)
          throw "确认密码有误，请重新输入。";
        //Create user
        let user = await User.create({
          username: this.username,
          email: this.email,
          password: this.password
        });
        //Jump to log-in page
        this.$router.push({name: "login"});
      }
      catch (e)
      {   e = unify_error(e);
        //Prompt error
        msgbox({
          type: "error",
          title: "注册失败",
          message: e.message
        });
      }
    }
  }
};
</script>
