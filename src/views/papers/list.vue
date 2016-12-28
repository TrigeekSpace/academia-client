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
          <input id="query-arg" type="text" class="form-control" :placeholder="language.search" v-model="query_arg"  data-container="body" data-toggle="popover" data-placement="bottom" :data-content="language.lack_of_word"/>
          <span class="input-group-btn">
            <button id="search-btn" class="btn btn-default" @click="search()">Search!</button>&nbsp;
          </span>
          </div>
        </form>
        <hr />
      </div>
    </div>
    <div class="col-sm-1 col-md-1 col-lg-1"></div>
  </div>
  <div class="row">
    <div class="col-sm-1 col-md-1 col-lg-1"></div>
    <div class="col-sm-10 col-md-10 col-lg-10">
      <div class="list-group">
        <router-link :id="`paper_title_${paper.id}`" :to="`/papers/detail?paper_id=${paper.id}`" class="list-group-item paper-list" v-for="paper in papers_list">
          <h2 class="list-group-item-heading">{{paper.title}}</h2>
          <p class="list-group-item-text">{{language.author}}{{paper.authors}}</p>
          <p class="list-group-item-text">{{language.conf}}{{paper.conference}}</p>
        </router-link>
      </div>
    </div>
  </div>
  <div id="more-paper-div" class="row result-container" @click="more_paper()">
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
import {to_plain, icontains} from "academia/util/api";
import {pre_route, on_route_change, online_only} from "academia/util/route";
import {AUTH_TOKEN_HEADER} from "academia/config";

export default {
  //View data
  data() {
  return {
    papers_list: [],
    query_arg: "",
    language: {
    search: "",
    lack_of_word: ""
    }
  };
  },
  beforeRouteEnter: pre_route(online_only),
  //Methods
  methods: {
  init() {
    this.query_arg = decodeURIComponent(this.$route.query.query);
    this.current_num = 0;
    this.each_load = 10;
    Paper.findAll({
    query: icontains("title", this.query_arg),
    offset: 0,
    limit: this.each_load
    }).then((plist) => {
    this.current_num += plist.length
    this.papers_list = plist
    return plist;
    });
    //Setting language
    let lang = this.$root.settings.lang;
    this.language = this.$root.language_dict[lang].papers.list;
  },
  search() {
    if (this.query_arg.length == 0) {
    $("#query-arg").popover('show');
    } else {
    $("#query-arg").popover('hide');
    this.$router.push({path: "/papers/list", query: {query: encodeURIComponent(this.query_arg)}});
    }
  },
  detail(p_id) {
    this.$router.push({path: "/papers/detail", query: {paper_id: p_id}});
  },
  more_paper() {
    console.log("more_paper")
    Paper.findAll({
    query: icontains("title", this.query_arg),
    offset: this.current_num,
    limit: this.each_load
    }).then((plist) => {
    this.current_num += plist.length
    for (let item of plist) {
      this.papers_list.push(item)
    }
    return plist;
    })
  },
  },
  watch: {
    $route: on_route_change
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
