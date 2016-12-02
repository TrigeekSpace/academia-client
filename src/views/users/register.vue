<!-- Component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-3 col-md-4 col-lg-4"></div>
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="well" align="center">
                <h1>Register</h1>
                <hr />
                <div class="alert alert-info">
                    Already have an account?
                    <router-link to="/users/login" class="alert-link">Log-in here</router-link>.
                </div>
                <form class="form-horizontal" @submit.prevent>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" v-model="username" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="E-Mail" v-model="email" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" v-model="password" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="register_user()">Register</button>
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

export default {
    //View model data
    data()
    {   return {
            username: null,
            email: null,
            password: null
        };
    },
    //Methods
    methods: {
        //User register
        register_user()
        {   User.create({
                username: this.username,
                email: this.email,
                password: this.password
            }).then((user) => {
                this.$router.push("login");
            }, (e) => {
                alert(JSON.stringify(e));
            });
        }
    }
};
</script>
