<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <h1>上传论文</h1>
            <hr />
            <form class="form-horizontal" role="form" @submit.prevent>
                <div class="control-group">
                    <div class="col-sm-10">
                        <label for="paper_title">论文标题</label>
                        <input type="text" class="form-control" id="paper_title" placeholder="Title of the paper" v-model="title">
                    </div>
                </div>
                <div class="control-group">
                    <div class="col-sm-10">
                        <label for="paper_author">论文作者</label>
                        <input type="text" class="form-control" id="paper_author" placeholder="Authors of the paper" v-model="authors">
                    </div>
                </div>
                <div class="control-group">
                    <div class="col-sm-10">
                        <label for="paper_conf">发表会议</label>
                        <input type="text" class="form-control" id="paper_conf" placeholder="Conference this paper was originally published on" v-model="conference">
                    </div>
                </div>
                <div class="control-group">
                    <div class="col-sm-10">
                        <label>发表时间</label>
                        <select class="form-control" id="year_select" v-model="year">
                            <option>选择年份</option>
                        </select>
                        <select class="form-control" v-model="month">
                            <option>选择月份</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                </div>
                <div class="control-group">
                    <div class="col-sm-10">
                        <label>论文摘要</label>
                        <div class="textarea">
                            <textarea type="" class="col-sm-12 form-control" v-model="abstract"></textarea>
                        </div>
                    </div>
                </div>
                <div class="control-group">
                    <div class="col-sm-10">
                        <label>选择文件</label>
                        <input class="input-file" type="file" id="file_selector">
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <button class="btn btn-default" @click="upload()">提交</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
</div>
</template>

<script>
import $ from "jquery";
export default {
    data() {
        return {
            title: "",
            authors: "",
            abstract: "",
            conference: "",
            year: "",
            month: ""
        }
    },
    mounted() {
        let sel = $("#year_select");
        const year_start = 2016;
        for (let i = 0; i < 50; i++) {
            sel.append(`<option>${year_start - i}</option>`);
        }
        console.log("added");
    },
    methods: {
        upload() {

            console.log(`${this.title}, ${this.authors}`);

            if (!this.check_input()) {
                alert("有一些必填项没有填写");
                return;
            }

            let sel = $("#file_selector")[0];
            if (sel && sel.files.length > 0) {
                this.upload_file = sel.files[0];
            } else {
                alert("你需要选择上传的文件");
                return;
            }
            Paper.create({
                title: this.title,
                authors: this.authors,
                abstract: this.abstract,
                conference: this.conference,
                // publish_date: this.publish_date(),
                paper_file: this.upload_file
            }).then((paper) => {
                this.$router.push({path: "detail", query: {paper_id: paper.id}});
            });
        },
        publish_date() {
            return `${this.year}-${this.month}`;
        },
        check_input() {
            return this.title.length > 0 && this.authors.length > 0;
        }
    }
};
</script>

<style>
textarea {
    max-width: 100%;
}
</style>
