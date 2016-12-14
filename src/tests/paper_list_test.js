import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login, mock_logout} from "academia/util/test";
import "academia/index";
import {root_view} from "academia/index";
import $ from "jquery";


describe("Search Result Page", function() {
  it("should be able to visit the paper detail page", async function(){
    location.hash = "#/papers/list?query=k";
    await delay(100);
    let c_view = get_current_view(root_view);
    let a = $("#paper_id_1", root_view.$el);
    $("#paper_id_1", root_view.$el)[0].click();
    await delay(100);
    assert.equal(location.hash, "#/papers/detail?paper_id=1");
    mock_logout();
  });
  it("should be able to re-search user's notes", function(){
    location.hash = "#/papers/list?query=k";
    await delay(100);
    let c_view = get_current_view(root_view);
    c_view.query_arg = "c"
    let a = $("#paper_id_1", root_view.$el);
    $("#paper_id_1", root_view.$el)[0].click();
    await delay(100);
    assert.equal(location.hash, "#/papers/detail?paper_id=1");
    mock_logout();
  });
});
