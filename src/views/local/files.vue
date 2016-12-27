<!-- Component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <!-- Local files -->
            <div class="row">
                <h1>本地文件</h1>
                <hr />
            </div>
            <!-- Local notes -->
            <div class="row">
                <h2>论文</h2>
                <div class="list-group">
                    <router-link :to="`/papers/detail?paper_id=${paper.id}`" class="list-group-item" v-for="paper of local_papers">
                        <h3 class="list-group-item-heading">{{paper.title}}</h3>
                        <p class="list-group-item-text">作者：{{paper.authors}}</p>
                        <p class="list-group-item-text">会议：{{paper.conference}}</p>
                    </router-link>
                </div>
            </div>
            <!-- Local notes -->
            <div class="row">
                <h2>笔记</h2>
                <div class="list-group">
                    <router-link :to="`/papers/content?paper_id=${note.paper.id}&note_id=${note.id}`" class="list-group-item" v-for="note of local_notes">
                        <h3 class="list-group-item-heading">{{note.title}}</h3>
                        <p class="list-group-item-text">论文：{{note.paper.title}}</p>
                        <p class="list-group-item-text">用户：{{note.author.username}}</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
</div>
</template>
<!-- Script -->
<script>
import {local_db} from "academia/models";
import {on_route_change, pre_route} from "academia/util/route";

export default {
    data()
    {   return {
            local_papers: [],
            local_notes: []
        };
    },
    beforeRouteEnter: pre_route(),
    methods: {
        async init()
        {   //Get database
            let db = await local_db;

            //Get all papers and notes
            this.local_papers = await db.papers.query().all().execute();
            this.local_notes = await db.notes.query().all().execute();
        }
    },
    watch: {
        $route: on_route_change
    }
}
</script>
