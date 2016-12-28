<!-- component template -->
<template>
<div>
  <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="prefChangeSuccessModal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        {{language.modal_content}}
      </div>
    </div>
  </div>
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
        <div class="form-group">
          <label class="col-md-2 col-lg-2 control-label">{{language.bknd_addr}}</label>
          <div class="col-sm-6">
            <input class="form-control" :placeholder="language.bknd_addr" v-model="bknd_addr">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-9 col-md-9 col-lg-9"></div>
        <button class="btn btn-primary" @click="update_settings()">{{language.save}}</button>
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
import {on_route_change, pre_route} from "academia/util/route";
import {msgbox} from "academia/util/core";

export default {
  beforeRouteEnter: pre_route(),
  data(){
    return {
      language: {
        preference: "",
        language: ""
      },
      bknd_addr: ""
    };
  },
  methods: {
    init() {
      let lang = this.$root.settings.lang;
      this.language.preference = lang == '#langCN' ? '偏好设置' : 'Preference';
      this.language.language = lang == '#langCN' ? '语言：' : 'Language:';
      this.language.save = lang == '#langCN' ? '保存修改' : 'Save Change';
      this.language.bknd_addr = lang == '#langCN' ? '服务器地址：' : 'Server Address:';
      this.language.modal_content = lang == '#langCN' ? '设置修改成功' : 'Success';
      this.bknd_addr = this.$root.settings.bknd_url;
    },
    //Update user information
    update_settings() {
      let settings = {};
      let lang = this.$root.settings.lang;
      if ($('#langCN', this.$root.$el)[0].checked) {
        settings['lang'] = '#langCN';
      } else {
        settings['lang'] = '#langEN';
      }
      this.$root.change_language(settings['lang']);
      if (this.bknd_addr != this.$root.settings.bknd_url) {
        if (this.$root.change_bknd_addr(this.bknd_addr)) {
          this.language.modal_content = lang == '#langCN' ? '设置修改成功' : 'Success';
        } else {
          this.language.modal_content = lang == '#langCN' ? '失败：服务器地址不正确' : 'Failed: Invalid Server Address';
        }
        $("#prefChangeSuccessModal").modal("toggle");
      }
      // this.$router.push("/setting");
      this.init();
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
