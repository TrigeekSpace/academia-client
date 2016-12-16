<!-- Component Template -->
<template>
<div class="row">
    <!-- Main area -->
    <div class="col-sm-9 col-md-9 col-lg-9">
        <!-- Active view choice -->
        <ul class="nav nav-pills" v-if="display_mode=='note'">
            <li :class="{active: active_view=='pdf'}">
                <a href="javascript:void(0)" @click="active_view = 'pdf'">论文批注</a>
            </li>
            <li :class="{active: active_view=='note'}">
                <a href="javascript:void(0)" @click="active_view = 'note'">论文笔记</a>
            </li>
        </ul>
        <!-- Note operations -->
        <div align="right" v-if="$root.user&&(active_view=='note')">
            <button class="btn btn-primary" v-if="!note_collected" @click="toggle_collect_status()">收藏笔记</button>
            <button class="btn btn-primary" v-if="note_collected" @click="toggle_collect_status()">取消收藏</button>
            <router-link class="btn btn-success" v-if="$root.user.id==current_note.author" :to="`/notes/upload?paper_id=${paper.id}&note_id=${current_note.id}`">编辑笔记</router-link>
            <button class="btn btn-danger" v-if="$root.user.id==current_note.author" @click="delete_note()">删除笔记</button>
        </div>
        <!-- PDF view -->
        <iframe class="show-area" v-if="active_view=='pdf'" :src="`./dist/pdf.js/web/viewer.html?file=${pdf_url}`"></iframe>
        <!-- Note markdown view -->
        <div class="show-area" v-if="active_view=='note'" v-html="note_html"></div>
    </div>
    <!-- Note area -->
    <div class="col-sm-3 col-md-3 col-lg-3">
        <h2>热门版本</h2>
        <ul class="list-group">
            <li class="list-group-item" @click="show_paper()">
                <b>原版论文</b>
            </li>
            <li class="list-group-item" v-for="note in paper.notes" @click="show_note(note.id)">
                <b>{{note.title}}</b><br />
                <span class="glyphicon glyphicon-user"></span> {{note.$author.username}}
            </li>
        </ul>
    </div>
</div>
</template>
<!-- Script -->
<script>
import marked from "marked";

import {Paper, Note} from "academia/models";
import {BKND_URL} from "academia/config";
import {to_plain} from "academia/util/api";
import {pre_route, on_route_change} from "academia/util/route";

export default {
    //Pre-route actions
    beforeRouteEnter: pre_route(),
    //Data
    data()
    {   return {
            paper: {
                notes: []
            },
            //PDF URL
            pdf_url: null,
            //Display control variables
            display_mode: null,
            active_view: "pdf",
            //Current note
            current_note: null,
            //Note collected
            note_collected: false
        };
    },
    //Mount
    methods: {
        async init()
        {   //Paper ID
            let paper_id = parseInt(this.$route.query.paper_id);
            //Display mode
            this.display_mode = this.$route.query.note_id?"note":"paper";

            //Fetch paper and related data from remote
            this._paper = await Paper.find(paper_id);
            await Paper.loadRelations(this._paper, ["notes", "users"]);
            //Show on page
            console.log(this._paper);
            this.paper = to_plain(this._paper, ["notes", "notes.$author"]);

            //Show paper
            if (this.display_mode=="paper")
            {   //Set PDF URL
                this.pdf_url = `${BKND_URL}/depot/${this.paper.paper_file}`;
                //Show PDF file
                this.active_view = "pdf";
            }
            //Show note
            else
            {   let note_id = parseInt(this.$route.query.note_id);
                //Fetch note
                let note = this._note = await Note.find(note_id);
                this.current_note = to_plain(note);

                //Set PDF URL
                this.pdf_url = `${BKND_URL}/depot/${note.annotation_file}`;
                //Show PDF file
                this.active_view = "pdf";
                //Note collected
                let user = this.$root.user;
                if (user)
                    this.note_collected = _.includes(note.collectors, user.id);
            }
        },
        //Delete note
        async delete_note()
        {   //Remove note
            await this._note.DSDestroy();
            //Show paper
            this.$router.go({path: "/papers/content", query: {paper_id: this.paper.id}})
        },
        //Toggle collect status
        async toggle_collect_status()
        {   let resp = await this._note.toggle_collect_status();
            this.collected = resp.data.collected;
        },
        //Show paper
        show_paper()
        {   this.$router.push({
                path: "/papers/content",
                query: {
                    paper_id: this.paper.id
                }
            });
        },
        //Show note
        show_note(note_id)
        {   console.log(note_id);
            this.$router.push({
                path: "/papers/content",
                query: {
                    paper_id: this.paper.id,
                    note_id
                }
            });
        }
    },
    //Computed properties
    computed: {
        //Note HTML
        note_html()
        {   return this.current_note?marked(this.current_note.content):null;
        },
    },
    watch: {
        $route: on_route_change
    }
}
</script>
<!-- Stylesheet -->
<style>
.show-area
{   width: 100%;
    height: 600px;
    padding: 5px;
}
</style>
