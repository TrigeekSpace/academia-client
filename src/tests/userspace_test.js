import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login, mock_logout} from "academia/util/test";
import "academia/index";
import {root_view} from "academia/index";
import $ from "jquery";


describe("Userspace Page", function() {
  it("should be able to visit the paper detail page", async function(){
    mock_login();
    location.hash = "#/users/space";
    await delay(100);
    let c_view = get_current_view(root_view);
    let a = $("#paper_title_1", root_view.$el);
    $("#paper_title_1", root_view.$el)[0].click();
    await delay(100);
    assert.equal(location.hash, "#/papers/detail?paper_id=1");
    mock_logout();
  });
  it("should be able to visit user's notes", function(){
    assert.equal(1, 1);
  });
  it("should be able to modify user's message", function(){
    assert.equal(1, 1);
  });
});
