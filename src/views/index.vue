<template>
  <div class="row vertical center-vertical">
    <div class="col-sm-2 col-md-3 col-lg-3"></div>
    <div class="col-sm-8 col-md-6 col-lg-6">
      <div align="center">
        <h1 class="big-title">Academia Search</h1>
        <br>
        <div class="input-group">
          <input type="text" class="form-control" id="search_input" :placeholder="language.search" v-model="search_text" data-toggle="popover" data-placement="bottom" :data-content="language.lack_of_word" data-trigger="manual" v-on:keyup.enter="search()">
          <span class="input-group-btn">
            <button id="search-btn" class="btn btn-default" @click="search()">
              Search!
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="col-sm-2 col-md-3 col-lg-3"></div>
  </div>
</template>

<script>
import {on_route_change, pre_route, online_only} from "academia/util/route";

export default {
  data() {
  return {
    search_text: "",
    //Language setting
    language: {
    search: "",
    lack_of_word: ""
    }
  };
  },
  beforeRouteEnter: pre_route(online_only),
  methods: {
  init() {
    // Setting language
    let lang = this.$root.settings.lang;
    this.language = this.$root.language_dict[lang].index;
  },
  search() {
    if (this.search_text.length == 0) {
    $("#search_input").popover('show');
    } else {
    $("#search_input").popover('hide');
    this.$router.push({path: "papers/list", query: {query: encodeURIComponent(this.search_text)}});
    }
  }
  }
};
</script>
