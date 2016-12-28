<template>
<div class="row">
    <div class="hidden-sm hidden-md col-lg-1"></div>
    <div class="col-sm-12 col-md-12 col-lg-10">
        <h1>{{paper.title}}</h1>
        <hr />
        <!-- Author -->
        <p><b>{{language.author}}</b>{{paper.authors}}</p>
        <!-- Conference -->
        <p><b>{{language.conf}}</b>{{paper.conference}}</p>
        <!-- Publish date -->
        <p><b>{{language.date}}</b>{{paper.publish_date}}</p>
        <!-- Abstract -->
        <blockquote class="blockquote">{{paper.abstract}}</blockquote>
        <!-- Paper operations -->
        <div align="right">
            <button id="download-paper" class="btn btn-default" @click="download_paper()" :disabled="!$root.online">{{language.download}}</button>
            <button id="collect-paper" class="btn btn-primary" v-if="$root.user&&(!collected)" @click="toggle_collect_status()" :disabled="!$root.online">{{language.mark}}</button>
            <button id="decollect-paper" class="btn btn-primary" v-if="$root.user&&collected" @click="toggle_collect_status()" :disabled="!$root.online">{{language.undo}}</button>
            <router-link tag="button" id="upload-note" class="btn btn-success" :to="`/notes/upload?paper_id=${paper.id}`" :disabled="!$root.online">{{language.write}}</router-link>
            <router-link tag="button" id="view-paper-content" class="btn btn-info" :to="`/papers/content?paper_id=${paper.id}`">{{language.view}}</router-link>
        </div>
        <!-- Questions -->
        <!-- <h2>{{language.question}}</h2>
        <hr /> -->
        <!-- Notes -->
        <h2>{{language.recom}}</h2>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="list-group">
                <router-link :id="`note_title_${note.id}`" :to="`/papers/content?paper_id=${paper.id}&note_id=${note.id}`" class="list-group-item paper-list" v-for="note of paper.notes">
                    <h2 class="list-group-item-heading">{{note.title}}</h2>
                    <p class="list-group-item-text">{{language.author}}{{note.author.username}}</p>
                    <p class="list-group-item-text">{{language.date}}{{note.last_modified}}</p>
                </router-link>
            </div>
            </div>
        </div>
        <hr />
    </div>
<div class="hidden-sm hidden-md col-lg-1"></div>
</div>
</template>
<!-- Script -->
<script>
import _ from "lodash";
import fs from "fs";

import {Paper, adaptor, local_db} from "academia/models";
import {to_plain, progress_listener} from "academia/util/api";
import {pre_route, on_route_change} from "academia/util/route";
import {data_path} from "academia/util/core";

export default {
    beforeRouteEnter: pre_route(),
    //Data
    data()
    {   return {
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
        {
            let paper_id = Number(this.$route.query.paper_id);
            let db = await local_db;

            //Get paper information
            if (this.$root.online)
            {   let _paper = this._paper = await Paper.find(paper_id, {
                  params: {
                      with: ["notes", "notes.author"],
                      // order: {
                      //   collectors: False
                      // }
                  },
                  bypassCache: true
                });
                this.paper = to_plain(this._paper, ["notes"]);
            }
            else
            {   let paper = await db.papers.get(paper_id);
                this.paper = _.clone(paper);
                this._paper = Paper.inject(paper);
            }

            //Collection status (Logged user only)
            let user = this.$root.user;
            if (user)
                this.collected = _.includes(this._paper.collectors, user.id);

            //Language settings
            let lang = this.$root.settings.lang;
            this.language = this.$root.language_dict[lang].papers.detail;
        },
        //Toggle collect status
        async toggle_collect_status()
        {   let resp = await this._paper.toggle_collect_status();
            this.collected = resp.data.collected;
        },
        //Download current paper
        async download_paper()
        {   //Create new download task
            let new_download_task = {
                name: this.paper.title,
                type: "论文",
                progress: 0,
                transfered: 0,
                total: 1
            };
            //Add download task
            this.$root.download_tasks.push(new_download_task);
            //root addr
            let bknd_url = this.$root.settings.bknd_url;
            //Begin downloading paper
            let paper_file_resp = await adaptor.http({
                url: `${bknd_url}/depot/${this.paper.paper_file}`,
                onDownloadProgress: progress_listener(new_download_task),
                responseType: "arraybuffer"
            });
            //Remove download task
            _.pull(this.$root.download_tasks, new_download_task);

            //Get paper data
            let paper = await Paper.find(this.paper.id, {
                params: {with: ["notes", "notes.author"]},
                bypassCache: true
            });

            let db = await local_db;
            //Insert paper data into local DB
            await db.papers.add({
                item: to_plain(paper, ["notes", "notes.author"]),
                key: paper.id
            });
            //Save paper file
            let paper_fd = fs.openSync(data_path("papers", String(paper.id)), "w");
            fs.writeFileSync(paper_fd, new Buffer(paper_file_resp.data));
            fs.closeSync(paper_fd);
        }
    },
    watch: {
        $route: on_route_change
    }
}
</script>

<style>
</style>
