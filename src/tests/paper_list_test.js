import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login} from "academia/util/test";
import {root_view} from "academia/index";
import {adaptor} from "academia/models"
import "academia/index";
import $ from "jquery";
import {USER_DATA, PAPER_DATA, NOTE_DATA} from "academia/tests/data";
import {append} from "academia/util/core"


describe("Search Result Page", function() {
  it("should be able to visit the paper detail page", async function(){
    adaptor.http.oneshot("/papers", [PAPER_DATA])
    root_view.$router.push({path: "/papers/list", query: {query: "k"}});
    await delay(100);
    let c_view = get_current_view(root_view);
    let a = $("#paper-id-1", root_view.$el);
    $("#paper-id-1", root_view.$el).click();
    await delay(100);
    assert.equal(location.hash, "#/papers/detail?paper_id=1");
  });

  it("should be able to add more paper", async function(){
    adaptor.http.oneshot("/papers", [PAPER_DATA])
    root_view.$router.push({path: "/papers/list", query: {query: "k"}});

    let a = $("#more-paper-div", root_view.$el);
    console.log(a);
    adaptor.http.oneshot("/papers", [{...PAPER_DATA, id: 2}])
    $("#more-paper-div", root_view.$el).click();
    await delay(100);

    let c_view = get_current_view(root_view);
    console.log(c_view.papers_list.length)
    $("#paper-id-2", root_view.$el).click();
    await delay(100);
    assert.equal(location.hash, "#/papers/detail?paper_id=2");
  });

  it("should be able to re-search user's notes", async function(){
    root_view.$router.push({path: "/papers/list", query: {query: "k"}});
    adaptor.http.oneshot("/papers", [PAPER_DATA])
    await delay(100);
    let c_view = get_current_view(root_view);
    c_view.query_arg = "c"
    $("#search-btn", root_view.$el).click();
    await delay(100);
    assert.equal(location.hash, "#/papers/list?query=c");
  });
});
