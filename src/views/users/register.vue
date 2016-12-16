<!-- Component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-3 col-md-4 col-lg-4"></div>
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="well" align="center">
                <h2>注册</h2>
                <hr />
                <!-- Log-in prompt -->
                <div class="alert alert-info">
                    已经拥有Academia账户？
                    <router-link to="/users/login" class="alert-link">点此登录</router-link>。
                </div>
                <!-- Register form -->
                <form class="form-horizontal" @submit.prevent>
                    <!-- Username -->
                    <div class="form-group form-group-padding-fixes">
                        <input type="text" class="form-control" placeholder="用户名" v-model="username" />
                    </div>
                    <!-- E-mail -->
                    <div class="form-group form-group-padding-fixes">
                        <input type="email" class="form-control" placeholder="邮箱" v-model="email" />
                    </div>
                    <!-- Password -->
                    <div class="form-group form-group-padding-fixes">
                        <input type="password" class="form-control" placeholder="密码" v-model="password" />
                    </div>
                    <!-- Password again -->
                    <div class="form-group form-group-padding-fixes">
                        <input type="password" class="form-control" placeholder="再次输入密码" v-model="password2" />
                    </div>
                    <!-- Operations -->

                    <div class="form-group form-group-well">
                        <button id="register-btn" class="btn btn-primary" @click="register_user()">注册</button>&nbsp;&nbsp;
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
import {unify_error} from "academia/util/error";

export default {
    //View model data
    data()
    {   return {
            username: null,
            email: null,
            password: null,
            password2: null
        };
    },
    //Methods
    methods: {
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
                alert({
                    type: "error",
                    title: "注册失败",
                    message: error_text(e.data)
                });
            }
        }
    }
};
</script>
