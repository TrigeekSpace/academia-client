<!-- Component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <div>
                <form class="form-horizontal" @submit.prevent>
                  <div class="input-group">
                    <span class="input-group-addon">
                      Academia
                    </span>
                    <input type="text" class="form-control" placeholder="输入论文信息以进行搜索" v-model="query_arg" />
                    <span class="input-group-btn">
                      <button class="btn btn-default" @click="">GO</button>&nbsp;
                    </span>
                  </div>
                </form>
                <hr />
            </div>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
    <div class="row result-container" v-for="item in papers_list">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10 result-div">
            <div>
                <h5>{{item.title}}</h5>
                <h6>{{item.author}}</h5>
                <h6>{{item.date}}</h5>
            </div>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
</div>
</template>
<!-- Script -->
<script>
import {Paper, adaptor} from "academia/models";
import {to_plain} from "academia/util";
import {AUTH_TOKEN_HEADER} from "academia/config";

export default {
    //View data
    data()
    {   return {
            papers_list: null,
            query_arg: null
        };
    },
    ready()
    {
      console.log("fuck")
    },
    //Methods
    methods: {
    }
};
</script>
<style>
/* Sidebar */
.result-div
{
    border-style: solid;
    border-width: 2px;
    border-color: black;
    background-color: #f5f5f5;
}

.result-container
{
    padding: 7px;
}


</style>
