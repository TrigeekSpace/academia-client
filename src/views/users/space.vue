<!-- component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <!-- Personal information -->
            <div class="row">
                <h1>个人信息</h1>
                <hr />
            </div>
            <!-- Display mode -->
            <div class="row" v-if="!edit_mode">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <img class="portrait" src="https://media.52poke.com/wiki/thumb/5/53/054Psyduck.png/240px-054Psyduck.png" />
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <p><strong>邮箱：</strong>{{user.email}}</p>
                    <p><strong>职业：</strong>{{user.job}}</p>
                    <p><strong>贡献值：</strong>{{user.contribution}}</p>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                        <label>个人简介</label>
                        <p v-if="!user.self_introduction">这个用户太懒了，什么都没写。</p>
                        <p v-if="user.self_introduction">{{user.self_introduction}}</p>
                    </div>
                </div>
            </div>
            <!-- Edit mode -->
            <div class="row" v-if="edit_mode">
                <!-- Avatar -->
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="form-group">
                        <img class="portrait" src="https://media.52poke.com/wiki/thumb/5/53/054Psyduck.png/240px-054Psyduck.png" />
                    </div>
                    <div class="form-group">
                        <label>选择头像</label>
                        <input type="file" id="avatar-picker" />
                    </div>
                </div>
                <!-- User information -->
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="form-group">
                        <label>用户名</label>
                        <br />
                        {{user.username}}
                    </div>
                    <div class="form-group">
                        <label>邮箱</label>
                        <input type="text" class="form-control" v-model="update_info.email" />
                    </div>
                    <div class="form-group">
                        <label>职业</label>
                        <input type="text" class="form-control" v-model="update_info.job" />
                    </div>
                    <div class="form-group">
                        <label>贡献值</label>
                        <br />
                        {{user.contribution}}
                    </div>
                </div>
                <!-- Introduction -->
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                        <label>个人简介</label>
                        <textarea class="form-control" v-model="update_info.self_introduction"></textarea>
                    </div>
                </div>
            </div>
            <!-- Display mode actions -->
            <div class="row" align="right" v-if="!edit_mode">
                <button id="modify-user-info-btn" class="btn btn-primary" @click="set_edit_mode(true)">编辑用户信息</button>
            </div>
            <!-- Edit mode actions -->
            <div class="row" align="right" v-if="edit_mode">
                <button id="save-modify-info" class="btn btn-primary" @click="update_user_info()">保存</button>
                <button class="btn btn-default" @click="set_edit_mode(false)">取消</button>
            </div>
            <!-- Collected papers -->
            <div class="row">
                <h2>我收藏的论文</h2>
            </div>
            <div class="row">
                <!-- <div class="col-sm-1 col-md-1 col-lg-1" v-for="paper in this.papers">
                    <div class="well paper_item" align="center">
                        aaa
                    </div>
                </div> -->

                <div class="col-sm-1 col-md-1 col-lg-1"></div>
                <div class="col-sm-10 col-md-10 col-lg-10">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="paper of user.collect_papers">
                            <p><router-link :id="`paper-title-${paper.id}`" :to="`/papers/detail?paper_id=${paper.id}`"><strong>{{paper.title}}</strong></router-link></p>
                            <p>作者：{{paper.authors}}</p>
                            <p>会议：{{paper.conference}}</p>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-1 col-md-1 col-lg-1"></div>
            </div>
            <!-- Collected notes -->
            <div class="row">
                <h2>我收藏的笔记</h2>
                <hr />
            </div>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
</div>
</template>
<!-- script -->
<script>
import {User} from "academia/models";
import {to_plain} from "academia/util/api";
import {on_route_change, pre_route, login_required} from "academia/util/route";

export default {
    data()
    {   return {
            //User information
            user: {
                id: null,
                username: null,
                email: null,
                job: null,
                contribution: null,
                collect_papers: []
            },
            //Updated user information
            update_info: {
                email: null,
                job: null,
                self_introduction: null
            },
            //Edit mode
            edit_mode: false
        };
    },
    beforeRouteEnter: pre_route(login_required),
    methods: {
        //Initialization
        async init()
        {   //User instance
            let user_id = this.$route.query.user_id||this.$root.user.id;

            //User model instance
            this._user = await User.find(user_id, {
                params: {
                    with: ["collect_papers"]
                }
            });

            //Vue user data
            this.user = to_plain(this._user, ["collect_papers"]);
            //
        },
        //Update user information
        async update_user_info()
        {   //Update user information
            await this._user.DSUpdate(this.update_info, {
                method: "PATCH"
            });
            //Vue user data
            this.user = to_plain(this._user);

            //Leave edit mode
            this.set_edit_mode(false);
        },
        //Set edit mode
        set_edit_mode(mode)
        {   //Edit mode; copy original user data
            if (mode)
                _.extend(this.update_info, {
                    email: this.user.email,
                    job: this.user.job,
                    self_introduction: this.user.self_introduction
                });

            //Set edit mode variable
            this.edit_mode = mode;
        }
    },
    watch: {
        $route: on_route_change
    }
};
</script>

<style>
.paper_item {
    width: 70%;
}

.portrait {
    max-width: 90%;
    max-height: 90%;
    border: solid 1px grey;
    border-radius: 5px;
}

.center {
    width: 300px;
    display: block;
    position: relative;
    margin: 12% auto;
}

.btn-front {
    width: 230px;
}
</style>
