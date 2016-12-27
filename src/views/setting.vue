<!-- component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <div class="row">
                <h1>{{language.preference}}</h1>
                <hr />
            </div>
            <div class="row">
                <div class="form-group">
                    <label class="col-md-2 col-lg-2 control-label">{{language.language}}</label>
                    <div class="radio">
                        <label>
                        <input type="radio" name="langOptions" id="langCN" value="option1" checked="">
                        中文
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                        <input type="radio" name="langOptions" id="langEN" value="option2" checked="">
                        English
                    </label>
                </div>
            </div>
            </div>
            <!-- Display mode actions -->
            <div class="row">
                <div class="col-sm-9 col-md-9 col-lg-9"></div>
                <button class="btn btn-primary" @click="update_settings()">保存修改</button>
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
import {msgbox} from "academia/util/core";

export default {
    beforeRouteEnter: pre_route(login_required),
    data(){
        return {
            language: {
                preference: "",
                language: ""
            }
        };
    },
    methods: {
        init() {
            let lang = this.$root.settings.lang;
            this.language.preference = lang == '#langCN' ? '偏好设置' : 'Preference';
            this.language.language = lang == '#langCN' ? '语言：' : 'language:';
        },
        //Update user information
        update_settings() {
            let settings = {};
            if ($('#langCN', this.$root.$el)[0].checked) {
                settings['lang'] = '#langCN';
            } else {
                settings['lang'] = '#langEN';
            }
            this.$root.change_language(settings['lang']);
            this.$router.push("/");
        },
    },
    mounted() {
        //Initialization
        let settings = this.$root.settings;
        $(settings['lang'], this.$root.$el)[0].checked = true;
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

.btn-front {
    width: 230px;
}
</style>
