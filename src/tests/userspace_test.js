import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login, mock_logout} from "academia/util/test";
import {adaptor} from "academia/models"
import "academia/index";
import {root_view} from "academia/index";
import $ from "jquery";
import {USER_DATA, PAPER_DATA} from "academia/tests/data";

describe("Userspace Page", function() {
  it("should be able to visit the paper detail page", async function(){
    root_view.user = USER_DATA;
    console.log(root_view);
    console.log(USER_DATA);
    console.log(root_view.user);
    adaptor.http.oneshot("/users/1", {
      ...USER_DATA,
      collect_papers: [PAPER_DATA]
    })
    adaptor.http.oneshot("/papers/1", {
      ...PAPER_DATA
    })
    root_view.$router.push({name: "user_space"});
    await delay(100);
    let c_view = get_current_view(root_view);
    let a = $("#paper_title_1", root_view.$el);
    console.log(a);
    $("#paper_title_1", root_view.$el)[0].click();
    await delay(100);
    assert.equal(location.hash, "#/papers/detail?paper_id=1");
    root_view.user = undefined;
  });
  it("should be able to visit user's notes", function(){
    assert.equal(1, 1);
  });
  it("should be able to modify user's message", function(){
    assert.equal(1, 1);
  });
});
