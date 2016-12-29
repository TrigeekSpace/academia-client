<!-- component template -->
<template>
<div>
  <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="prefChangeSuccessModal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content" align="center">
        {{language.modal_content}}
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-1 col-md-2 col-lg-3"></div>
    <div class="col-sm-10 col-md-8 col-lg-6">
      <div class="row">
        <h1>{{language.preference}}</h1>
        <hr />
      </div>
      <div class="row">
        <div class="form-group">
          <label class="control-label">{{language.language}}</label>
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
          <label class="control-label">{{language.bknd_addr}}</label>
          <input class="form-control" :placeholder="language.bknd_addr" v-model="bknd_addr" />
          <p class="help-block">{{language.help_content}}</p>
        </div>
      </div>
      <div class="row" align="right">
        <button class="btn btn-primary" @click="update_settings()">{{language.save}}</button>
      </div>
    </div>
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
        language: "",
        save: "",
        bknd_addr: "",
        modal_content: "",
        help_content: "",
      },
      bknd_addr: "",
      bknd_change_success: true
    };
  },
  methods: {
    init() {
      let lang = this.$root.settings.lang;
      this.language.preference = lang == '#langCN' ? '偏好设置' : 'Preference';
      this.language.language = lang == '#langCN' ? '语言：' : 'Language:';
      this.language.save = lang == '#langCN' ? '保存修改' : 'Save Change';
      this.language.bknd_addr = lang == '#langCN' ? '服务器地址：' : 'Server Address:';
      this.language.help_content = lang == '#langCN' ? '改变地址后自动登出' : 'You will automatically logout when changed';
      // this.language.modal_content = lang == '#langCN' ? '设置修改成功' : 'Success';
      this.bknd_addr = this.$root.settings.bknd_url;

      $('#prefChangeSuccessModal').on('hidden.bs.modal', (e) => {
        // console.log(this.$router);
        if (this.bknd_change_success) {
          this.$router.push("/");
        }
      });
    },
    //Update settings
    async update_settings() {
      // update language
      let settings = {};
      if ($('#langCN', this.$root.$el)[0].checked) {
        settings['lang'] = '#langCN';
      } else {
        settings['lang'] = '#langEN';
      }
      this.$root.change_language(settings['lang']);

      // update server address
      let lang = this.$root.settings.lang;
      if (this.bknd_addr != this.$root.settings.bknd_url) {
        if (await this.$root.change_bknd_addr(this.bknd_addr)) {
          this.language.modal_content = lang == '#langCN' ? '设置修改成功' : 'Success';
          this.bknd_change_success = true;
        } else {
          this.language.modal_content = lang == '#langCN' ? '失败：服务器地址不正确' : 'Failed: Invalid Server Address';
          this.bknd_change_success = false;
        }
      }
      $("#prefChangeSuccessModal").modal("toggle");
      
      this.language.preference = lang == '#langCN' ? '偏好设置' : 'Preference';
      this.language.language = lang == '#langCN' ? '语言：' : 'Language:';
      this.language.save = lang == '#langCN' ? '保存修改' : 'Save Change';
      this.language.bknd_addr = lang == '#langCN' ? '服务器地址：' : 'Server Address:';
      this.language.help_content = lang == '#langCN' ? '改变地址后自动登出' : 'You will automatically logout when changed';
      this.bknd_addr = this.$root.settings.bknd_url;
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
