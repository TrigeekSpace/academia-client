<!-- Component template -->
<template>
<div>
    <div class="row">
        <div class="hidden-sm hidden-md col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div>
                <h1>上传笔记</h1>
                <hr />
                <form @submit.prevent>
                    <!-- Note title -->
                    <div class="form-group">
                        <label>笔记名称</label>
                        <input type="text" class="form-control" placeholder="笔记名称" v-model="note_title" />
                    </div>
                    <!-- Related paper title -->
                    <div class="form-group">
                        <label>相关论文</label>
                        <input disabled="disable" type="text" class="form-control" placeholder="相关论文" v-model="paper_title" />
                    </div>
                    <!-- Note content -->
                    <div class="form-group">
                        <label>笔记内容</label>
                        <textarea id="note-content"></textarea>
                    </div>
                    <!-- Annotation file -->
                    <div class="form-group">
                        <label>批注论文</label>
                        <input type="file" id="file-selector" />
                    </div>
                    <!-- Note operations -->
                    <div class="form-group" align="right">
                        <button class="btn btn-primary" @click="update_note()" v-if="update_mode">保存</button>&nbsp;
                        <button id="note_upload" class="btn btn-primary" @click="create_note()" v-if="!update_mode">发布</button>&nbsp;
                        <button class="btn btn-default" @click="$router.back()">取消</button>
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
import {to_plain} from "academia/util/api";
import {pre_route, login_required, on_route_change} from "academia/util/route";
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
            update_mode: false
        };
    },
    beforeRouteEnter: pre_route(login_required),
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

                //Do update
                await this._note.DSUpdate(update_data, {method: "PATCH"});
                //Go to note detail page
                this.$router.push({
                    name: "paper_content",
                    query: {
                        paper_id: this._paper.id,
                        note_id: this._note.id
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

            try
            {   //Create note
                let note = await Note.create({
                    paper: this._paper.id,
                    title: this.note_title,
                    content: this.note_content,
                    annotation_file: file_selector.files[0]
                });
                //Go to note detail page
                this.$router.push({
                    name: "index",
                    query: {
                        paper_id: this._paper.id,
                        note_id: note.id
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
