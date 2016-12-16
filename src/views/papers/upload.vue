<template>
<div>
    <div class="row">
        <div class="hidden-sm hidden-md col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <h1>上传论文</h1>
            <hr />
            <form class="form-horizontal" role="form" @submit.prevent>
                <!-- Paper title -->
                <div class="form-group form-group-padding-fixes">
                    <label>论文标题</label>
                    <input type="text" class="form-control" id="paper_title" placeholder="论文标题" v-model="title">
                </div>
                <!-- Paper authors -->
                <div class="form-group form-group-padding-fixes">
                    <label>论文作者</label>
                    <input type="text" class="form-control" id="paper_author" placeholder="论文作者" v-model="authors">
                </div>
                <!-- Paper conferences -->
                <div class="form-group form-group-padding-fixes">
                    <label>发布会议</label>
                    <input type="text" class="form-control" id="paper_conf" placeholder="发布会议" v-model="conference">
                </div>
                <!-- Publish time -->
                <div class="form-group form-group-padding-fixes">
                    <label>发表时间</label>
                    <div class="form-inline">
                        <select class="form-control" id="year_select" v-model="year">
                            <option>选择年份</option>
                        </select>
                        年
                        <select class="form-control" v-model="month">
                            <option>选择月份</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        月
                    </div>
                </div>
                <!-- Abstract -->
                <div class="form-group form-group-padding-fixes">
                    <label>论文摘要</label>
                    <div class="textarea">
                        <textarea type="" class="col-sm-12 form-control" v-model="abstract"></textarea>
                    </div>
                </div>
                <!-- Paper PDF file -->
                <div class="form-group form-group-padding-fixes">
                    <label>选择文件</label>
                    <input class="file-selector" type="file" id="file-selector">
                </div>
                <!-- Submit paper -->
                <div class="form-group form-group-padding-fixes">
                    <button id="paper-upload" class="btn btn-default" @click="upload()">提交</button>
                </div>
            </form>
        </div>
        <div class="hidden-sm hidden-md col-lg-1"></div>
    </div>
</div>
</template>

<script>
import $ from "jquery";

import {pre_route, login_required, on_route_change} from "academia/util/route";
import {Paper, Note, adaptor} from "academia/models";
import {to_plain} from "academia/util/api";
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
            month: "选择月份"
        }
    },
    beforeRouteEnter: pre_route(login_required),
    methods: {
        init() {
            let sel = $("#year_select");
            const year_start = 2016;
            for (let i = 0; i < 50; i++) {
                sel.append(`<option>${year_start - i}</option>`);
            }
            console.log("added");
        },
        upload() {

            console.log(`${this.title}, ${this.authors}`);

            if (!this.check_input()) {
              msgbox({
                      type: "error",
                      title: "无法上传论文",
                      message: "您尚未填写笔记标题或内容。"
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
                      message: "你需要选择上传的文件"
                  });
                return;
            }
            Paper.create({
                title: this.title,
                authors: this.authors,
                abstract: this.abstract,
                conference: this.conference,
                // publish_date: this.publish_date(),
                paper_file: this.upload_file
            }).then((paper) => {
                this.$router.push({path: "detail", query: {paper_id: paper.id}});
            });
        },
        publish_date() {
            return `${this.year}-${this.month}`;
        },
        check_input() {
            return this.title.length > 0 && this.authors.length > 0;
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
