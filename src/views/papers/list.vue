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
                    <input id="query_arg" type="text" class="form-control" placeholder="在Academia上搜索论文" v-model="query_arg"  data-container="body" data-toggle="popover" data-placement="bottom" data-content="你至少需要一个关键词"/>
                    <span class="input-group-btn">
                      <button id="search_btn" class="btn btn-default" @click="search()">Search!</button>&nbsp;
                    </span>
                  </div>
                </form>
                <hr />
            </div>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
    <div class="row result-container" v-for="item in papers_list" >
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div :id="`paper_id_${item.id}`"  class="col-sm-10 col-md-10 col-lg-10 result-div" @click="detail(item.id)">
            <div>
                <h5>{{item.title}}</h5>
                <h6>{{item.authors}}</h5>
                <h6>{{item.date}}</h5>
            </div>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
    <div class="row result-container" @click="more_paper()">
        <div class="col-sm-5 col-md-5 col-lg-5"></div>
        <div class="col-sm-2 col-md-2 col-lg-2 result-div">
            <div align="center">
                <h5>more paper</h5>
            </div>
        </div>
        <div class="col-sm-5 col-md-5 col-lg-5"></div>
    </div>
    </template>

<!-- Script -->
<script>
import {Paper, adaptor} from "academia/models";
import {to_plain, contains} from "academia/util/api";
import {pre_route, on_route_reload} from "academia/util/route";
import {AUTH_TOKEN_HEADER} from "academia/config";

export default {
    //View data
    data() {
      return {
        papers_list: [],
        query_arg: ""
      };
    },
    beforeRouteEnter: pre_route(),
    //Methods
    methods: {
        init() {
          this.query_arg = decodeURIComponent(this.$route.query.query);
          console.log("----------------------------")
          console.log(this.query_arg);
          console.log("----------------------------")
          this.current_num = 0
          this.each_load = 10
          Paper.findAll({
            query: contains("title", this.query_arg),
            offset: 0,
            limit: this.each_load
          }).then((plist) => {
            this.current_num += this.each_load
            this.papers_list = plist
            return plist;
          })
        },
      search() {
        if (this.query_arg.length == 0) {
          $("#query_arg").popover('show');
        } else {
          $("#query_arg").popover('hide');
          this.$router.push({path: "/papers/list", query: {query: encodeURIComponent(this.query_arg)}});
        }
      },
      detail(p_id) {
        console.log(p_id)
        this.$router.push({path: "/papers/detail", query: {paper_id: p_id}});
      },
      more_paper() {
        Paper.findAll({
          query: contains("title", this.query_arg),
          offset: this.current_num,
          limit: this.each_load
        }).then((plist) => {
          this.current_num += this.each_load
          for (let item of plist) {
            this.papers_list.push(item)
          }
          return plist;
        })
      },
  },
  watch: {
      $route: on_route_reload
  }
};
</script>
<style>
/* Sidebar */
.result-div {
    border-style: solid;
    border-width: 1px;
    border-color: grey;
    background-color: #FFFFFF;
}

.result-container
{
    padding: 7px;
}

</style>
