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
                    <input id="query_arg" type="text" class="form-control" placeholder="输入论文信息以进行搜索" v-model="query_arg"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="你至少需要一个关键词"/>
                    <span class="input-group-btn">
                      <button class="btn btn-default" @click="search()">GO</button>&nbsp;
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
            query_arg: ""
        };
    },
    ready()
    {
      console.log("fuck")
    },
    //Methods
    methods: {
      search() {
          if (this.query_arg.length == 0) {
              $("#query_arg").popover('show');
          } else {
              $("#query_arg").popover('hide');
              this.$router.push({path: "list", query: {query: encodeURIComponent(this.query_arg)}});
          }
      }
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
