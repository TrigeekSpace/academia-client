<!-- component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <!-- Personal information -->
            <div class="row">
                <h1>偏好设置</h1>
                <hr />
            </div>
            <div class="row">
                <div class="form-group">
                    <label class="col-md-2 col-lg-2 control-label">语言：</label>
                    <div class="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                        中文
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                        English
                    </label>
                </div>
            </div>
            </div>
            <!-- Display mode actions -->
            <div class="row">
                <div class="col-sm-9 col-md-9 col-lg-9"></div>
                <button class="btn btn-primary" @click="">保存修改</button>
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
