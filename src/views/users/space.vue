<!-- component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <!-- Personal information -->
            <div class="row">
                <h1>{{language.info}}</h1>
                <hr />
            </div>
            <!-- Display mode -->
            <div class="row" v-if="!edit_mode">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <img class="portrait" src="https://media.52poke.com/wiki/thumb/5/53/054Psyduck.png/240px-054Psyduck.png" />
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4">
                    <p><strong>{{language.username}}</strong><br/>{{user.username}}</p>
                    <p><strong>{{language.email}}</strong><br/>{{user.email}}</p>
                    <p><strong>{{language.occupation}}</strong><br/>{{user.job}}</p>
                    <p><strong>{{language.score}}</strong><br />{{user.contribution}}</p>
                </div>
                <div class="col-sm-5 col-md-5 col-lg-5">
                    <div class="form-group">
                        <label>{{language.introduction}}</label>
                        <p v-if="!user.self_introduction">{{user.intro_content}}</p>
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
o                        <label>{{language.portrait}}</label>
                        <input type="file" id="avatar-picker" />
                    </div>
                </div>
                <!-- User information -->
                <div class="col-sm-4 col-md-4 col-lg-4">
                    <div class="form-group">
                        <label>{{language.username}}</label>
                        <br />
                        {{user.username}}
                    </div>
                    <div class="form-group">
                        <label>{{language.email}}</label>
                        <input type="text" class="form-control" v-model="update_info.email" />
                    </div>
                    <div class="form-group">
                        <label>{{language.occupation}}</label>
                        <input type="text" class="form-control" v-model="update_info.job" />
                    </div>
                    <div class="form-group">
                        <label>{{language.score}}</label>
                        <br />
                        {{user.contribution}}
                    </div>
                </div>
                <!-- Introduction -->
                <div class="col-sm-5 col-md-5 col-lg-5">
                    <div class="form-group">
                        <label>{{language.introduction}}</label>
                        <textarea class="form-control" v-model="update_info.self_introduction"></textarea>
                    </div>
                </div>
            </div>
            <!-- Display mode actions -->
            <div class="row" v-if="!edit_mode">
                <div class="col-sm-9 col-md-9 col-lg-9"></div>
                <button id="modify-user-info-btn" class="btn btn-primary" @click="set_edit_mode(true)">{{language.edit}}</button>
            </div>
            <!-- Edit mode actions -->
            <div class="row" v-if="edit_mode">
                <div class="col-sm-9 col-md-9 col-lg-9"></div>
                <button id="save-modify-info" class="btn btn-primary" @click="update_user_info()">{{language.save}}</button>
                <button class="btn btn-default" @click="set_edit_mode(false)">{{language.cancel}}</button>
            </div>
            <!-- Collected papers -->
            <div class="row">
                <h2>{{language.paper_collect}}</h2>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="list-group">
                    <router-link :id="`paper_title_${paper.id}`" :to="`/papers/detail?paper_id=${paper.id}`" class="list-group-item paper-list" v-for="paper of user.collect_papers">
                        <h2 class="list-group-item-heading">{{paper.title}}</h2>
                        <p class="list-group-item-text">{{language.author}}{{paper.authors}}</p>
                        <p class="list-group-item-text">{{language.conf}}{{paper.conference}}</p>
                    </router-link>
                </div>
            </div>
            <!-- Collected notes -->
            <div class="row">
                <h2>{{language.note_collect}}</h2>
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
            edit_mode: false,
            //Language setting
            language: {}
        };
    },
    beforeRouteEnter: pre_route(login_required),
    methods: {
        //Initialization
        async init() {   
            //User instance
            let user_id = this.$route.query.user_id || this.$root.user.id;

            //User model instance
            this._user = await User.find(user_id, {
                params: {
                    with: ["collect_papers"]
                }
            });

            //Vue user data
            this.user = to_plain(this._user, ["collect_papers"]);
            // Setting language
            let lang = this.$root.settings.lang;
            this.language.info = lang == '#langCN' ? '个人信息' : 'Personal';
            this.language.username = lang == '#langCN' ? '用户名：' : 'Username:';
            this.language.email = lang == '#langCN' ? '邮箱：' : 'E-mail:';
            this.language.occupation = lang == '#langCN' ? '职业：' : 'Occupation:';
            this.language.score = lang == '#langCN' ? '贡献值：' : 'Score:';
            this.language.introduction = lang == '#langCN' ? '个人简介：' : 'Introduction:';
            this.language.intro_content = lang == '#langCN' ? '这个用户太懒了，什么都没写。' : 'The user is too lazy to write a single word here.';
            this.language.portrait = lang == '#langCN' ? '选择头像' : 'choose picture';
            this.language.edit = lang == '#langCN' ? '编辑用户信息' : 'edit';
            this.language.save = lang == '#langCN' ? '保存' : 'save';
            this.language.paper_collect = lang == '#langCN' ? '我收藏的论文' : 'Paper collection';
            this.language.note_collect = lang == '#langCN' ? '我收藏的笔记' : 'Note collection';
            this.language.author = lang == '#langCN' ? '作者：' : 'Author: ';
            this.language.conf = lang == '#langCN' ? '会议：' : 'Conference: ';
            this.language.cancel = lang == '#langCN' ? '取消' : 'cancel';
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
