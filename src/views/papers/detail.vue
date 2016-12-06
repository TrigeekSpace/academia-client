<template>
<div>
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
        <router-link class="btn btn-info" :to="`/papers/detail?paper_id=${paper.id}`">在线查看</router-link>
    </div>
    <!-- Questions -->
    <h2>热门问答</h2>
    <hr />
    <!-- Notes -->
    <h2>推荐笔记</h2>
    <hr />
</div>
</template>

<script>
export default {
    //Data
    data()
    {   return {
            //Current paper
            paper: {
                id: 1,
                title: "towards very, very, very long paper title",
                authors: "Xue Yujing",
                conference: "Trigeek Private Meeting",
                publish_date: "2333-3-3",
                abstract: "liwfh;iweufheorufhireughvurygeuiruhgoeurhgevjdfxykhdsmhajwhsdb,cbjseh,wuadhqwudhwa"
            }
        };
    }
}
</script>

<style>
</style>
