<template>
<div>
    <div class="col-sm-9 col-md-9 col-lg-9">
        <iframe id="paper-pdf"></iframe>
    </div>
    <div class="col-sm-3 col-md-3 col-lg-3">
        <h2>热门版本</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="note of notes">
                名称：{{note.title}}<br />
                作者：{{note.author.username}}
            </li>
        </ul>
    </div>
</div>
</template>

<script>

export default {
    //Data
    data()
    {   return {
            notes: [{
                title: null,
                author: {
                    username: ""
                }
            }]
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
