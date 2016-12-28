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
                    <img class="portrait" :src="avatar_url" />
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
                        <img class="portrait" :src="avatar_url" />
                    </div>
                    <div class="form-group">
                        <label>{{language.portrait}}</label>
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
            </div>

            <div class="row">
                <h2>{{language.note_collect}}</h2>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="list-group">
                    <router-link :id="`note_title_${note.id}`" :to="`/papers/content?paper_id=${note.paper}&note_id=${note.id}`" class="list-group-item paper-list" v-for="note of user.collect_notes">
                        <h2 class="list-group-item-heading">{{note.title}}</h2>
                        <p class="list-group-item-text">{{language.author}}{{note.author.username}}</p>
                    </router-link>
                </div>
                </div>
            </div>
            <!-- Collected notes -->
            <!--
            <div class="row">
                <h2>{{language.note_collect}}</h2>
                <hr />
            </div>
            -->
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        </div>
</div>
</template>
<!-- script -->
<script>
import $ from "jquery";

import {User} from "academia/models";
import {to_plain} from "academia/util/api";
import {on_route_change, pre_route, login_required, online_only} from "academia/util/route";
import {DEFAULT_AVATAR} from "academia/config";

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
    beforeRouteEnter: pre_route(login_required, online_only),
    methods: {
        //Initialization
        async init() {
            //User instance
            let user_id = this.$route.query.user_id || this.$root.user.id;

            //User model instance
            this._user = await User.find(user_id, {
                params: {
                    with: ["collect_papers", "collect_notes", "collect_notes.author"]
                }
            });

            //Vue user data
            this.user = to_plain(this._user, ["collect_papers", "collect_notes"]);
            // Setting language
            let lang = this.$root.settings.lang;
            this.language = this.$root.language_dict[lang].user.space;
        },
        //Update user information
        async update_user_info()
        {   let update_info = {};

            //Avatar upload
            let avatar_picker = $("#avatar-picker")[0];
            if (avatar_picker.files.length>0)
            {   update_info.avatar = avatar_picker.files[0];
            }
            //Mix-in updated data
            _.extend(update_info, this.update_info);
            console.log(update_info);
            //Update user information
            await this._user.DSUpdate(update_info, {
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
    computed: {
        avatar_url()
        {   if (this.user&&this.user.avatar)
                return `${this.$root.settings.bknd_url}/depot/${this.user.avatar}`;
            else
                return DEFAULT_AVATAR;
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
