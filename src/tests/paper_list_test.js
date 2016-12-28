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
    console.log(location.hash)
    let c_view = get_current_view(root_view);
    console.log($("#paper_title_1", root_view.$el));
    $("#paper_title_1", root_view.$el)[0].click();
    await delay(100);
    assert.equal(location.hash, "#/papers/detail?paper_id=1");
  });

  it("should be able to add more paper", async function(){
    adaptor.http.oneshot("/papers", [PAPER_DATA])
    root_view.$router.push({path: "/papers/list", query: {query: "k"}});
    await delay(100);
    let a = $("#more-paper-div", root_view.$el);


    adaptor.http.oneshot("/papers", [{...PAPER_DATA, id: 2}])
    $("#more-paper-div", root_view.$el).click();
    await delay(100);

    let c_view = get_current_view(root_view);

    $("#paper_title_2", root_view.$el)[0].click();
    await delay(100);
    assert.equal(location.hash, "#/papers/detail?paper_id=2");
  });

  it("should be able to re-search paper", async function(){
    root_view.$router.push({path: "/papers/list", query: {query: "k"}});
    adaptor.http.oneshot("/papers", [PAPER_DATA])
    await delay(100);
    let c_view = get_current_view(root_view);
    console.log(c_view.query_arg);
    c_view.query_arg = "c"
    $("#search-btn", root_view.$el).click();
    await delay(100);
    assert.equal(location.hash, "#/papers/list?query=c");
    root_view.$router.push({path: "/"});
  });
});
