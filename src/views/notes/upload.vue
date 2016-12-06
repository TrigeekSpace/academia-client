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
                        <input type="file" id="input-file" placeholder="笔记内容" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="create_note()">发布</button>&nbsp;
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

import {Paper, adaptor} from "academia/models";
import {to_plain} from "academia/util";
import {AUTH_TOKEN_HEADER} from "academia/config";

export default {
    //View data
    data()
    {   return {
            note_title: null,
            related_paper: null,
            note_content: null,
            paper: null,
        };
    },
    mounted()
    {
      //let p_id = this.$route.params.paper_id
      //this.paper = to_plain(Paper.get(p_id))
      //this.related_paper = paper.title
      //Editor
      this.editor = new SimpleMDE({
          elements: $("#note_content")
      });
    },
    //Methods
    methods: {
        create_note()
        {
            Note.create({
                title: this.note_title,
                password: this.password,
                content: this.note_content,
            }).then((resp) => {
                let data = resp.data;

                //Set user and token
                let token = this.$root.token = data.token;
                this.$root.user = data.user;
                //Set token header
                adaptor.defaults.httpConfig.headers[AUTH_TOKEN_HEADER] = token;

                //Jump to index page
                this.$router.push("index");
            }, (e) => {
                alert(JSON.stringify(e));
            });
        }
    },
    //Computed properties
    computed: {
        note_content: {
            get()
            {   if (this.editor)
                    return this.editor.value();
                else
                    return null;
            },
            set(markdown)
            {   if (this.editor)
                    this.editor.value(markdown);
            }
        }
    }
};
</script>
