<template>
<div>
    <div class="col-sm-9 col-md-9 col-lg-9">
        <iframe id="paper-pdf" src="./dist/pdf.js/web/viewer.html?file=file:///Users/lqf/Playground/1.pdf"></iframe>
    </div>
    <div class="col-sm-3 col-md-3 col-lg-3">
        <h2>热门版本</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="note in paper.notes">
                名称：{{note.title}}<br />
                作者：{{note.author.username}}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {Paper} from "academia/models";
import {to_plain} from "academia/util";

export default {
    //Mount
    async mounted()
    {   console.log(this);

        let paper_id = this.$route.query.paper_id;
        let paper = await Paper.find(paper_id, {
            params: {
                with: ["notes", "notes.author"]
            }
        });

        let notes = to_plain(paper.notes);
        console.log(paper);
        for (let i=0;i<notes.length;i++)
            notes[i].author = to_plain(paper.notes[i].author);

        this.paper = {
            ...to_plain(paper),
            notes
        };
    },
    //Data
    data()
    {   return {
            paper: {
                notes: []
            }
        };
    }
}
</script>

<style>
#paper-pdf
{   width: 100%;
    height: 600px;
    border-style: solid;
    border-width: 1px;
}
</style>
