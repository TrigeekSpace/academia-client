<!-- Component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-3 col-md-4 col-lg-4"></div>
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="well" align="center">
                <h1>Login</h1>
                <hr />
                <div class="alert alert-info">
                    Haven't got an account?
                    <router-link to="/users/register" class="alert-link">Register here</router-link>.
                </div>
                <form class="form-horizontal" @submit.prevent>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" v-model="username" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" v-model="password" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="login()">Log In</button>&nbsp;
                        <button class="btn btn-default">I Forget Password</button>
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
import {to_plain} from "academia/util";

export default {
    //View data
    data()
    {   return {
            username: null,
            password: null
        };
    },
    //Methods
    methods: {
        login()
        {   User.login({
                data: {
                    username: this.username,
                    password: this.password
                }
            }).then((resp) => {
                window.root_view = this.$root;
                //Set user and token
                console.log(resp);
                let token = this.$root.token = resp.data.token;
                this.$root.user = resp.data.user;
                //Set token header
                adaptor.defaults.httpConfig.headers["X-Academia-Auth-Token"] = token;
                //Jump to index page
                this.$router.push("index");
            }, (e) => {
                alert(JSON.stringify(e));
            });
        }
    }
};
</script>
