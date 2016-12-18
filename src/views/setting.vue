<!-- component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <div class="row">
                <h1>偏好设置</h1>
                <hr />
            </div>
            <div class="row">
                <div class="form-group">
                    <label class="col-md-2 col-lg-2 control-label">语言：</label>
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

export default {
    beforeRouteEnter: pre_route(login_required),
    methods: {
        //Update user information
        update_settings()
        {   
            let settings = {};
            if ($('#langCN').checked) {
                settings['lang'] = '#langCN';
            } else {
                settings['lang'] = '#langEN';
            }
            this.$root.settings = settings;
        },
    },
    mounted() {
        //Initialization
        let settings = this.$root.settings;
        console.log(settings['lang']);
        $(settings['lang']).checked = true;
        alert( $(settings['lang']).checked );
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
