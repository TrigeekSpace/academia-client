<template>
<div>
    <div class="col-sm-9 col-md-9 col-lg-9">
        <ul class="nav nav-pills" v-if="display_mode=='note'">
            <li :class="{active: active_option=='pdf'}">
                <a href="javascript:void(0)" @click="active_option = 'pdf';">论文批注</a>
            </li>
            <li :class="{active: active_option=='note'}">
                <a href="javascript:void(0)" @click="active_option = 'note';">论文笔记</a>
            </li>
        </ul>
        <iframe class="show-area" v-if="active_option=='pdf'" :src="`./dist/pdf.js/web/viewer.html?file=${pdf_url}`"></iframe>
        <div class="show-area" v-if="active_option=='note'" v-html="note_html"></div>
    </div>
    <div class="col-sm-3 col-md-3 col-lg-3">
        <h2>热门版本</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="note of paper.notes" @click="show_note(note)">
                名称：{{note.title}}<br />
                作者：{{note.author.username}}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import marked from "marked";

import {Paper} from "academia/models";
import {to_plain, pre_route, on_change} from "academia/util";
import {BKND_URL} from "academia/config";

export default {
    beforeRouteEnter: pre_route(),
    //Mount
    methods: {
        async init()
        {   let paper_id = this.$route.query.paper_id;
            let paper = await Paper.find(paper_id, {
                params: {
                    with: ["notes", "notes.author"]
                }
            });

            this.paper = to_plain(paper, ["notes", "notes.author"]);
            this.pdf_url = `${BKND_URL}/depot/${paper.paper_file}`;
            this.display_mode = "paper";
        },
        show_note(note)
        {   this.pdf_url = `${BKND_URL}/depot/${note.annotation_file}`;
            this.display_mode = "note";
            this.active_option = "pdf";
            this.note_html = marked(note.content);
        }
    },
    //Data
    data()
    {   return {
            paper: {
                notes: []
            },
            pdf_url: null,
            display_mode: null,
            active_option: "pdf",
            note_html: ""
        };
    },
    watch: {
        $route: on_change
    }
}
</script>

<style>
.show-area
{   width: 100%;
    height: 600px;
    border-style: solid;
    border-width: 1px;
}
</style>
