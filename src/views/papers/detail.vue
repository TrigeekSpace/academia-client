<template>
<div class="row">
    <div class="hidden-sm hidden-md col-lg-1"></div>
    <div class="col-sm-12 col-md-12 col-lg-10">
        <h1>{{paper.title}}</h1>
        <hr />
        <!-- Author -->
        <p><b>{{language.author}}</b>：{{paper.authors}}</p>
        <!-- Conference -->
        <p><b>{{language.conf}}</b>：{{paper.conference}}</p>
        <!-- Publish date -->
        <p><b>{{language.date}}</b>：{{paper.publish_date}}</p>
        <!-- Abstract -->
        <blockquote class="blockquote">{{paper.abstract}}</blockquote>
        <!-- Paper operations -->
        <div align="right">
            <button id="download-paper" class="btn btn-default">{{language.download}}</button>
            <button id="collect-paper" class="btn btn-primary" v-if="$root.user&&(!collected)" @click="toggle_collect_status()">{{language.mark}}</button>
            <button id="decollect-paper" class="btn btn-primary" v-if="$root.user&&collected" @click="toggle_collect_status()">{{language.undo}}</button>
            <router-link id="upload-note" class="btn btn-success" :to="`/notes/upload?paper_id=${paper.id}`">{{language.write}}</router-link>
            <router-link id="view-paper-content" class="btn btn-info" :to="`/papers/content?paper_id=${paper.id}`">{{language.view}}</router-link>
        </div>
        <!-- Questions -->
        <h2>{{language.question}}</h2>
        <hr />
        <!-- Notes -->
        <h2>{{language.recom}}</h2>
        <hr />
    </div>
    <div class="hidden-sm hidden-md col-lg-1"></div>
</div>
</template>
<!-- Script -->
<script>
import _ from "lodash";

import {Paper} from "academia/models";
import {to_plain} from "academia/util/api";
import {pre_route, on_route_change} from "academia/util/route";

export default {
    beforeRouteEnter: pre_route(),
    //Data
    data()
    {
      return {
            paper: {
                id: 1,
                title: null,
                authors: null,
                conference: null,
                publish_date: null,
                abstract: null
            },
            collected: false,
            language: {}
        };
    },
    //Methods
    methods: {
        //Initialization
        async init()
        {   let paper_id = this.$route.query.paper_id;
            //Get paper information
            let _paper = this._paper = await Paper.find(paper_id);
            console.log(this._paper);
            this.paper = to_plain(this._paper);
            //Collection status (Logged user only)
            let user = this.$root.user;
            if (user)
                this.collected = _.includes(_paper.collectors, user.id);
            //Setting language
            let lang = this.$root.settings.lang;
            this.language.author = lang == '#langCN' ? '作者' : 'Author';
            this.language.conf = lang == '#langCN' ? '会议' : 'Conference';
            this.language.date = lang == '#langCN' ? '会议日期' : 'Date';
            this.language.download = lang == '#langCN' ? '下载论文' : 'Download';
            this.language.mark = lang == '#langCN' ? '收藏论文' : 'Mark';
            this.language.undo = lang == '#langCN' ? '取消收藏' : 'Undo';
            this.language.write = lang == '#langCN' ? '撰写笔记' : 'Write';
            this.language.view = lang == '#langCN' ? '在线查看' : 'View';
            this.language.question = lang == '#langCN' ? '热门问答' : 'Questions';
            this.language.recom = lang == '#langCN' ? '推荐笔记' : 'Recommendations';
        },
        //Toggle collect status
        async toggle_collect_status()
        {   let resp = await this._paper.toggle_collect_status();
            this.collected = resp.data.collected;
        }
    },
    watch: {
        $route: on_route_change
    }
}
</script>

<style>
</style>
