<!-- Component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <div>
                <h1>上传笔记</h1>
                <hr />
                <form class="form-horizontal" @submit.prevent>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="笔记名称" v-model="note_title" />
                    </div>
                    <div class="form-group">
                        <input disabled="disable" type="text" class="form-control" placeholder="对应论文" v-model="related_paper" />
                    </div>
                    <div class="form-group">
                        <textarea id="note_content"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="file" id="file-selector" placeholder="笔记内容" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="create_or_modify_note()">发布</button>&nbsp;
                        <button class="btn btn-primary" @click="create_note()">暂存</button>&nbsp;
                    </div>
                </form>
            </div>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
</div>
</template>
<!-- Script -->
<script>
import SimpleMDE from "simplemde";
import $ from "jquery";
import {Paper, Note, adaptor} from "academia/models";
import {to_plain} from "academia/util";
import {AUTH_TOKEN_HEADER} from "academia/config";

export default {
    //View data
    data()
    {   return {
            note_title: "",
            related_paper: "",
            note_content: "",
            paper: null,
        };
    },
    mounted()
    {
      let p_id = this.$route.query.paper_id
      let n_id = this.$route.query.note_id
      console.log(p_id)
      this.paper = Paper.get(p_id)
      if (n_id) {
        Note.find(n_id).then((x)=>{
          this.note_title = x.title
          this.note_content = x.content
          this.note = x
        })
      }

      if (this.paper == null) {
        Paper.find(p_id).then((x)=>{
          this.paper = x
          this.related_paper = this.paper.title
          if (this.note && this.note.paper != p_id) {
            this.error_visit = true
            alert("错误的访问");
            return;
          }
        })
      } else {
        this.related_paper = this.paper.title
      }
      //Editor
      this.query_arg = decodeURIComponent(this.$route.query.note_id)
      this.editor = new SimpleMDE({
          elements: $("#note_content")
      });
    },
    //Methods
    methods: {
        create_or_modify_note(event) {
          if (this.error_visit) {
              alert("错误的访问");
              return;
          }
          if (!this.check_input()) {
              alert("有一些必填项没有填写");
              return;
          }
          if ($("#file-selector")[0].files.length == 0) {
            alert("至少上传一份注释文件！")
            return;
          }
          if (this.$route.query.note_id === undefined) {
            Note.create({
              title: this.note_title,
              content: this.note_content,
              annotation_file: $("#file-selector")[0].files[0],
              paper: this.paper.id,
            }).then((resp) => {
              //Jump to index page
              this.$router.go(-1)
            }, (e) => {
              alert(JSON.stringify(e));
            });
          } else {

          }
        },
        check_input() {
          return this.note_title !== "" && this.related_paper !== "" && this.note_content !== "" && this.paper !== null;
        }
      },

    //Computed properties
    computed: {
        note_content: {
            get() {
              if (this.editor)
                return this.editor.value();
              else
                return null;
            },
            set(markdown){
              if (this.editor)
              this.editor.value(markdown);
            }
        }
    }
};
</script>
