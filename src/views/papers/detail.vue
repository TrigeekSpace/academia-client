<template>
<div class="row">
    <div class="hidden-xs hidden-sm hidden-md col-lg-1"></div>
    <div class="col-lg-10">
        <h1>{{paper.title}}</h1>
        <hr />
        <p>Author: {{paper.authors}}</p>
        <p>Conference: {{paper.conference}}</p>
        <p>Time: {{paper.publish_date}}</p>
        <br />
        <p>{{paper.abstract}}</p>
        <!-- Paper operations -->
        <div align="right">
            <button class="btn btn-primary">下载论文</button>
            <router-link class="btn btn-success" :to="`/notes/upload?paper_id=${paper.id}`">撰写笔记</router-link>
            <router-link class="btn btn-info" :to="`/papers/content?paper_id=${paper.id}`">在线查看</router-link>
        </div>
        <!-- Questions -->
        <h2>热门问答</h2>
        <hr />
        <!-- Notes -->
        <h2>推荐笔记</h2>
        <hr />
    </div>
    <div class="hidden-xs hidden-sm hidden-md col-lg-1"></div>
</div>
</template>

<script>
import {Paper} from "academia/models";
import {to_plain} from "academia/util/api";

export default {
    //Data
    data()
    {   return {
            paper: {
                id: 0,
                title: null,
                authors: null,
                conference: null,
                publish_date: null,
                abstract: null
            }
        };
    },
    //Mounted
    async mounted()
    {   let paper_id = this.$route.query.paper_id;
        this.paper = to_plain(await Paper.find(paper_id));
    }
}
</script>

<style>
</style>
