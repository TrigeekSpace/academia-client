<!-- Component template -->
<template>
<div>
  <div class="row">
    <div class="hidden-sm hidden-md col-lg-1"></div>
    <div class="col-sm-12 col-md-12 col-lg-10">
      <div>
        <h1>{{language.upload_note}}</h1>
        <hr />
        <form @submit.prevent>
          <!-- Note title -->
          <div class="form-group">
            <label>{{language.note_title}}</label>
            <input type="text" class="form-control" :placeholder="language.note_title" v-model="note_title" />
          </div>
          <!-- Related paper title -->
          <div class="form-group">
            <label>{{language.relate_paper}}</label>
            <input disabled="disable" type="text" class="form-control" :placeholder="language.relate_paper" v-model="paper_title" />
          </div>
          <!-- Note content -->
          <div class="form-group">
            <label>{{language.note_content}}</label>
            <textarea id="note-content"></textarea>
          </div>
          <!-- Annotation file -->
          <div class="form-group">
            <label>{{language.annotation}}</label>
            <input type="file" id="file-selector" />
          </div>
          <!-- Note operations -->
          <div class="form-group" align="right">
            <button class="btn btn-primary" @click="update_note()" v-if="update_mode">{{language.save}}</button>&nbsp;
            <button id="note_upload" class="btn btn-primary" @click="create_note()" v-if="!update_mode">{{language.publish}}</button>&nbsp;
            <button class="btn btn-default" @click="$router.back()">{{language.cancel}}</button>
          </div>
        </form>
      </div>
    </div>
    <div class="hidden-sm hidden-md col-lg-1"></div>
  </div>
</div>
</template>
<!-- Script -->
<script>
import $ from "jquery";
import SimpleMDE from "simplemde";

import {Paper, Note, adaptor} from "academia/models";
import {to_plain, progress_listener} from "academia/util/api";
import {pre_route, login_required, on_route_change, online_only} from "academia/util/route";
import {unify_error} from "academia/util/error";
import {msgbox} from "academia/util/core";

export default {
  //View data
  data()
  {   return {
      //Note data
      note_title: "",
      paper_title: "",
      //Update mode
      update_mode: false,
      language: {
        note_title: "",
        relate_paper: ""
      }
    };
  },
  beforeRouteEnter: pre_route(login_required, online_only),
  //Methods
  methods: {
    async init()
    {   //Note and paper ID
      let paper_id = parseInt(this.$route.query.paper_id);
      let note_id = parseInt(this.$route.query.note_id);
      //Update mode
      this.update_mode = !isNaN(note_id);

      //Paper
      this._paper = await Paper.find(paper_id);
      //Paper title
      this.paper_title = this._paper.title;

      //Editor
      this.editor = new SimpleMDE({
        element: $("#note-content", this.$root.$el)[0],
        spellChecker: false
      });

      //Fetch note in update mode
      if (this.update_mode)
      {   let note = this._note = await Note.find(note_id);
        //Set note title and content
        this.note_title = note.title;
        this.note_content = note.content;
      }
      // Setting language
      let lang = this.$root.settings.lang;
      this.language = this.$root.language_dict[lang].notes.upload;
    },
    //Update note
    async update_note()
    {   try
      {   //Update data
        let update_data = {
          paper: this._paper.id,
          title: this.note_title,
          content: this.note_content
        };
        //Update annotation file
        let file_selector = $("#file-selector", this.$root.$el)[0];
        if (file_selector.files.length>0)
          update_data.annotation_file = file_selector.files[0];

        //Create upload transfer task
        let new_upload_task = {
          name: this.note_title,
          type: "笔记",
          progress: 0,
          transfered: 0,
          total: 1
        }
        this.$root.upload_tasks.push(new_upload_task);

        //Do update
        this._note.DSUpdate(update_data, {
          method: "PATCH",
          onUploadProgress: progress_listener(new_upload_task)
        }).then(() => {
          _.pull(this.$root.upload_tasks, new_upload_task);
        });
        //Go to note detail page
        this.$router.push({
          name: "paper_content",
          query: {
            paper_id: this._paper.id
          }
        });
      }
      catch (e)
      {   e = unify_error(e);
        //Prompt error
        msgbox({
          type: "error",
          title: "无法上传笔记",
          message: e.message
        });
      }
    },
    //Create note
    async create_note()
    {   if ((!this.note_title) || (!this.note_content))
      {   msgbox({
          type: "error",
          title: "无法上传笔记",
          message: "您尚未填写笔记标题或内容。"
        });
        return;
      }

      let file_selector = $("#file-selector", this.$root.$el)[0];
      //Must select a file
      if (file_selector.files.length<1)
      {   msgbox({
          type: "error",
          title: "无法上传笔记",
          message: "您尚未选择批注论文文件。"
        });
        return;
      }

      //Create upload transfer task
      let new_upload_task = {
        name: this.note_title,
        type: "笔记",
        progress: 0,
        transfered: 0,
        total: 1
      }
      this.$root.upload_tasks.push(new_upload_task);

      try
      {   //Create note
        Note.create({
          paper: this._paper.id,
          title: this.note_title,
          content: this.note_content,
          annotation_file: file_selector.files[0]
        }, {
          onUploadProgress: progress_listener(new_upload_task)
        }).then(() => {
          //Remove upload task
          _.pull(this.$root.upload_tasks, new_upload_task);
        });

        //Go to note detail page
        this.$router.push({
          name: "index",
          query: {
            paper_id: this._paper.id
          }
        });
      }
      catch (e)
      {   e = unify_error(e);
        //Prompt error
        msgbox({
          type: "error",
          title: "无法上传笔记",
          message: e.toString()
        });
      }
    }
  },
  watch: {
    $route: on_route_change
  },
  //Computed properties
  computed: {
    note_content: {
      get()
      {   return this.editor?this.editor.value():null;
      },
      set(markdown)
      {   if (this.editor)
          this.editor.value(markdown);
      }
    }
  }
};
</script>
