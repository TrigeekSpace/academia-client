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
        <div class="pull-right" v-if="$root.user&&(active_view=='note')">
            <button class="btn btn-primary" v-if="note_collected" @click="toggle_collect_status()">收藏笔记</button>
            <button class="btn btn-primary" v-if="!note_collected" @click="toggle_collect_status()">取消收藏</button>
            <router-link class="btn btn-success" v-if="$root.user.id==current_note.author.id" :to="`/notes/upload/?note_id=${current_note.id}`">编辑笔记</router-link>
            <button class="btn btn-danger" v-if="$root.user.id==current_note.author.id" @click="delete_note()">删除笔记</button>
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
            <li class="list-group-item" v-for="note of paper.notes" @click="show_note(note)">
                <b>{{note.title}}</b><br />
                <span class="glyphicon glyphicon-user"></span> {{note.author.username}}
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
            let paper_id = this.$route.query.paper_id;

            //Fetch paper metadata from remote
            let paper = await Paper.find(paper_id, {
                params: {
                    with: ["notes", "notes.author"]
                }
            });
            this.paper = to_plain(paper, ["notes", "notes.author"]);
            //Show paper
            this.show_paper();
        },
        //Show note
        show_note(note)
        {   //Set current note
            this.current_note = note;

            //PDF URL
            this.pdf_url = `${BKND_URL}/depot/${note.annotation_file}`;
            //Display control variables
            this.display_mode = "note";
            this.active_view = "pdf";
        },
        //Show paper
        show_paper()
        {   //Set PDF URL and then display paper
            this.pdf_url = `${BKND_URL}/depot/${this.paper.paper_file}`;
            //Display control variables
            this.display_mode = "paper";
            this.active_view = "pdf";
        },
        //Delete note
        async delete_note()
        {   let note = this.current_note;
            //Remove note with given ID
            await Note.destroy(note.id);
            //Remove note from notes list
            _.pull(this.paper.notes, note);

            //Shoe paper
            this.show_paper();
        }
    },
    //Computed properties
    computed: {
        //Note HTML
        note_html()
        {   return this.current_note?
                marked(this.current_note.content):
                null;
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
