<template>
<div>
  <div class="row">
    <div class="col-sm-1 col-md-1 col-lg-1"></div>
    <div class="col-sm-10 col-md-10 col-lg-10">
      <h1>{{language.upload_paper}}</h1>
      <hr />
      <form class="form-horizontal" role="form" @submit.prevent>
        <!-- Paper title -->
        <div class="form-group form-group-padding-fixes">
          <label>{{language.paper_title}}</label>
          <input type="text" class="form-control" id="paper_title" :placeholder="language.paper_title" v-model="title">
        </div>
        <!-- Paper authors -->
        <div class="form-group form-group-padding-fixes">
          <label>{{language.author}}</label>
          <input type="text" class="form-control" id="paper_author" :placeholder="language.author" v-model="authors">
        </div>
        <!-- Paper conferences -->
        <div class="form-group form-group-padding-fixes">
          <label>{{language.conference}}</label>
          <input type="text" class="form-control" id="paper_conf" :placeholder="language.conference" v-model="conference">
        </div>
        <!-- Publish time -->
        <div class="form-group form-group-padding-fixes">
          <label>{{language.date}}</label>
          <div class="form-inline">
            <select class="form-control" id="year_select" v-model="year">
              <option>{{language.choose_year}}</option>
              <option v-for="n in 50" :value="n">{{n+1970}}</option>
            </select>
            {{language.year}}
            <select class="form-control" v-model="month">
              <option>{{language.choose_month}}</option>
              <option v-for="n in 12" :value="n">{{n}}</option>
            </select>
            {{language.month}}
          </div>
        </div>
        <!-- Abstract -->
        <div class="form-group form-group-padding-fixes">
          <label>{{language.abstract}}</label>
          <div class="textarea">
            <textarea type="" class="col-sm-12 form-control" v-model="abstract"></textarea>
          </div>
        </div>
        <!-- Paper PDF file -->
        <div class="form-group form-group-padding-fixes">
          <label>{{language.choose_file}}</label>
          <input class="file-selector" type="file" id="file-selector">
        </div>
        <!-- Submit paper -->
        <div class="form-group form-group-padding-fixes">
          <button id="paper-upload" class="btn btn-default" @click="upload()">{{language.submit}}</button>
        </div>
      </form>
    </div>
    <div class="hidden-sm hidden-md col-lg-1"></div>
  </div>
</div>
</template>

<script>
import $ from "jquery";
import _ from "lodash";

import {pre_route, login_required, on_route_change, online_only} from "academia/util/route";
import {Paper, Note, adaptor} from "academia/models";
import {to_plain, progress_listener} from "academia/util/api";
import {unify_error} from "academia/util/error";
import {msgbox} from "academia/util/core";

export default {
  data() {
    return {
      title: "",
      authors: "",
      abstract: "",
      conference: "",
      year: "选择年份",
      month: "选择月份",
      language: {
        paper_title: "",
        authors: "",
        conference: ""
      }
    }
  },
  beforeRouteEnter: pre_route(login_required, online_only),
  methods: {
    init() {
      /*let sel = $("#year_select");
      const year_start = 2016;
      for (let i = 0; i < 50; i++) {
        sel.append(`<option>${year_start - i}</option>`);
    }*/
      // Setting language
      let lang = this.$root.settings.lang;
      this.language = this.$root.language_dict[lang].papers.upload;
    },
    upload() {
      console.log(`${this.title}, ${this.authors}`);

      if (!this.check_input()) {
        msgbox({
          type: "error",
          title: "无法上传论文",
          message: "您尚未填写笔记标题或内容，或尚未输入论文发布日期。"
        });
        return;
      }

      let sel = $("#file-selector", this.$root.$el)[0];
      console.log(sel);
      if (sel && sel.files.length > 0) {
        this.upload_file = sel.files[0];
      } else {
        console.log("bbb");
        msgbox({
            type: "error",
            title: "无法上传论文",
            message: "你需要选择上传的文件。"
          });
        return;
      }

      //Create upload transfer task
      let new_upload_task = {
        name: this.title,
        type: "论文",
        progress: 0,
        transfered: 0,
        total: 1
      }
      this.$root.upload_tasks.push(new_upload_task);

      Paper.create({
        title: this.title,
        authors: this.authors,
        abstract: this.abstract,
        conference: this.conference,
        publish_date: new Date(
            Number(this.year)+1970,
            Number(this.month)-1
        ),
        paper_file: this.upload_file
      }, {
        onUploadProgress: progress_listener(new_upload_task)
      }).then((paper) => {
        _.pull(this.$root.upload_tasks, new_upload_task);
      });

      this.$router.push("/");
    },
    check_input() {
      return (this.title.length>0)
        &&(this.authors.length>0)
        &&(!isNaN(Number(this.year)))
        &&(!isNaN(Number(this.month)));
    }
  },
  watch: {
    $route: on_route_change
  }
};
</script>

<style>
textarea {
  max-width: 100%;
}
[class^='col-'] {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
