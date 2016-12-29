<!-- Component Template -->
<template>
<div class="row">
  <!-- Main area -->
  <div class="col-sm-9 col-md-9 col-lg-9">
    <!-- Active view choice -->
    <ul class="nav nav-pills" v-if="display_mode=='note'">
      <li :class="{active: active_view=='pdf'}">
        <a href="javascript:void(0)" @click="active_view = 'pdf'">{{language.annotation}}</a>
      </li>
      <li :class="{active: active_view=='note'}">
        <a href="javascript:void(0)" @click="active_view = 'note'">{{language.note}}</a>
      </li>
    </ul>
    <!-- Note operations -->
    <div align="right" v-if="$root.user&&(active_view=='note')">
      <button class="btn btn-default" @click="download_note()">下载笔记</button>
      <button class="btn btn-primary" v-if="!note_collected" @click="toggle_collect_status()" :disabled="!$root.online">{{language.collect}}</button>
      <button class="btn btn-primary" v-if="note_collected" @click="toggle_collect_status()" :disabled="!$root.online">{{language.decollect}}</button>
      <router-link tag="button" class="btn btn-success" v-if="$root.user.id==current_note.author.id" :to="`/notes/upload?paper_id=${paper.id}&note_id=${current_note.id}`" :disabled="!$root.online">{{language.edit}}</router-link>
      <button class="btn btn-danger" v-if="$root.user.id==current_note.author.id" @click="delete_note()" :disabled="!$root.online">{{language.remove}}</button>
    </div>
    <!-- PDF view -->
    <iframe class="show-area" v-if="active_view=='pdf'" :src="`./dist/pdf.js/web/viewer.html?file=${pdf_url}`"></iframe>
    <!-- Note markdown view -->
    <div class="show-area" v-if="active_view=='note'" v-html="note_html"></div>
  </div>
  <!-- Note area -->
  <div class="col-sm-3 col-md-3 col-lg-3">
    <h2>{{language.popular}}</h2>
    <ul class="list-group">
      <li class="list-group-item" @click="show_paper()">
        <b>{{language.origin}}</b>
      </li>
      <li class="list-group-item" v-for="note in paper.notes" @click="show_note(note.id)">
        <b>{{note.title}}</b><br />
        <span class="glyphicon glyphicon-user"></span> {{note.author.username}}
      </li>
    </ul>
  </div>
</div>
</template>
<!-- Script -->
<script>
import _ from "lodash";
import marked from "marked";
import fs from "fs";

import {Paper, Note, local_db} from "academia/models";
import {to_plain, progress_listener} from "academia/util/api";
import {pre_route, on_route_change} from "academia/util/route";
import {data_path} from "academia/util/core";

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
      note_collected: false,
      language: {}
    };
  },
  //Mount
  methods: {
    async init()
    { let db = await local_db;
      let bknd_url = this.$root.settings.bknd_url;
      //Paper ID
      let paper_id = parseInt(this.$route.query.paper_id);
      //Display mode
      this.display_mode = this.$route.query.note_id?"note":"paper";

      if (this.$root.online)
      {   //Fetch paper and related data from remote
        var paper = await Paper.find(paper_id, {
          params: {with: ["notes", "notes.author"]},
          bypassCache: true
        });
        //Show on page
        this.paper = to_plain(paper, ["notes", "notes.author"]);
      }
      else
      {   //Get paper ID from store
        var paper = await db.papers.get(paper_id);
        this.paper = _.clone({}, paper);
      }

      //Show paper
      if (this.display_mode=="paper")
      {   //Set PDF URL
        this.pdf_url = (this.$root.online)
          ?`${bknd_url}/depot/${this.paper.paper_file}`
          :"file://"+data_path("papers", String(paper_id));
        //Show PDF file
        this.active_view = "pdf";
      }
      //Show note
      else
      {   let note_id = parseInt(this.$route.query.note_id);
        //Fetch note
        if (this.$root.online)
        {   var note = this._note = await Note.find(note_id, {
            params: {with: ["author"]},
            bypassCache: true
          });
          this.current_note = to_plain(note, ["author"]);
        }
        else
        {   let _note = await db.notes.get(note_id);
          var note = Note.inject(_note);
          this.current_note = _.clone(_note);
        }

        //Set PDF URL
        this.pdf_url = (this.$root.online)
          ?`${bknd_url}/depot/${note.annotation_file}`
          :"file://"+data_path("notes", String(note_id));
        //Show PDF file
        this.active_view = "pdf";
        //Note collected
        let user = this.$root.user;
        if (user)
          this.note_collected = _.includes(note.collectors, user.id);
      }

      // Setting language
      let lang = this.$root.settings.lang;
      this.language = this.$root.language_dict[lang].papers.content;
    },
    //Delete note
    async delete_note()
    {   //Remove note
      await this._note.DSDestroy();
      //Show paper
      this.$router.push({
        path: "/papers/content",
        query: {paper_id: this.paper.id}
      });
    },
    //Toggle collect status
    async toggle_collect_status()
    {   let resp = await this._note.toggle_collect_status();
      this.note_collected = resp.data.collected;
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
    {   this.$router.push({
        path: "/papers/content",
        query: {
          paper_id: this.paper.id,
          note_id
        }
      });
    },
    //Download note
    async download_note()
    {   //Create new download task
      let new_download_task = {
        name: this._note.title,
        type: "笔记",
        progress: 0,
        transfered: 0,
        total: 1
      };
      //Add download task
      this.$root.download_tasks.push(new_download_task);

      //Begin downloading paper
      let note_file_resp = await adaptor.http({
        url: `${this.$root.settings.bknd_url}/depot/${this._note.annotation_file}`,
        onDownloadProgress: progress_listener(new_download_task),
        responseType: "arraybuffer"
      });
      //Remove download task
      _.pull(this.$root.download_tasks, new_download_task);

      //Get note data
      let note_data = await Note.find(this._note.id, {
        params: {"with": ["author", "paper"]},
        bypassCache: true
      });

      let db = await local_db;
      //Insert paper data into local DB
      await db.notes.add({
        item: to_plain(note_data, ["author", "paper"]),
        key: note_data.id
      });
      //Save note file
      let note_fd = fs.openSync(data_path("notes", String(note_data.id)), "w");
      fs.writeFileSync(note_fd, new Buffer(note_file_resp.data));
      fs.closeSync(note_fd);
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
