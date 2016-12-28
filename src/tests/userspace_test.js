import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login, mock_logout} from "academia/util/test";
import {adaptor} from "academia/models"
import "academia/index";
import {root_view} from "academia/index";
import $ from "jquery";
import {USER_DATA, PAPER_DATA, NOTE_DATA} from "academia/tests/data";

describe("Userspace Page", function() {
  it("should be able to visit the paper detail page", async function(){
    root_view.user = USER_DATA;
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

    $("#paper_title_1", root_view.$el)[0].click();
    await delay(100);
    assert.equal(location.hash, "#/papers/detail?paper_id=1");
    root_view.user = undefined;
  });
  it("should be able to visit user's notes", async function(){
    adaptor.http.oneshot("/users/1", {
      ...USER_DATA,
      collect_papers: [PAPER_DATA],
      collect_notes: [NOTE_DATA]
    })

    adaptor.http.oneshot("/papers/1", PAPER_DATA);
    adaptor.http.oneshot("/notes/1", NOTE_DATA);
    root_view.$router.push({name: "user_space"});
    await delay(100);
    let c_view = get_current_view(root_view);

    // $("#paper-title-1", root_view.$el)[0].click();
    // await delay(100);
    // assert.equal(location.hash, "#/papers/detail?paper_id=1");
    root_view.user = undefined;
  });
  it("should be able to modify user's message", async function(){
    root_view.user = USER_DATA;
    adaptor.http.oneshot("/users/1", {
      ...USER_DATA,
      collect_papers: [PAPER_DATA],
      collect_notes: [NOTE_DATA]
    });

    adaptor.http.oneshot("/papers/1", PAPER_DATA);
    adaptor.http.oneshot("/notes/1", NOTE_DATA);
    root_view.$router.push({name: "user_space"});
    await delay(100);
    console.log(location.hash);
    let c_view = get_current_view(root_view);
    $("#modify-user-info-btn", root_view.$el)[0].click();
    await delay(100);
    console.log(c_view)
    c_view.update_info.email = "233@33.dd";
    c_view.update_info.job = "test_job";
    c_view.update_info.self_introduction = "self_introduction";
    console.log(c_view.update_info.email);

    //Modified user data
    adaptor.http.oneshot("/users/1", {
      ...USER_DATA,
      email: "233@33.dd",
      job: "test_job",
      self_introduction: "self_introduction",
      collect_papers: [PAPER_DATA],
      collect_notes: [NOTE_DATA]
    });

    $("#save-modify-info", root_view.$el)[0].click();
    await delay(100);

    assert.equal(c_view.user.email, "233@33.dd");
    root_view.user = undefined;
  });
});
