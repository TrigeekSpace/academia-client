import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay} from "academia/util/test";
import {root_view} from "academia/index";
import {adaptor} from "academia/models"
import "academia/index";
import $ from "jquery";
import {USER_DATA, PAPER_DATA, NOTE_DATA} from "academia/tests/data";
import {append} from "academia/util/core"

describe("Paper Detail Page", function() {
  it("should be able to go to upload note page", async function() {
    adaptor.http.oneshot("/papers/1", PAPER_DATA);
    root_view.user = USER_DATA;
    root_view.$router.push({path: "/papers/detail", query: {paper_id:1}});
    await delay(100);
    $("#upload-note", root_view.$el).click();
    await delay(100);
    assert.notEqual(root_view.$route.path, "/papers/detail?paper_id=1");
  });
  it("should be able to collect paper", async function() {
    adaptor.http.oneshot("/papers/1", PAPER_DATA);
    root_view.user = {
      ...USER_DATA,
      "collect_papers":[]
    };
    root_view.$router.push({path: "/papers/detail", query: {paper_id:1}});
    await delay(100);
    let c_view = get_current_view(root_view);
    adaptor.http.oneshot("/papers/1/toggle_collect_status", {
      collected: true
    });
    $("#collect-paper", root_view.$el).click();
    await delay(100);
    assert.equal(c_view.collected, true);
  });
  it("should be able to go to view notes", async function() {
  });
  it("should be able to go to view paper", async function() {
    adaptor.http.oneshot("/papers/1", PAPER_DATA);
    root_view.user = USER_DATA;
    root_view.$router.push({path: "/papers/detail", query: {paper_id:1}});
    await delay(100);
    $("#view-paper-content", root_view.$el).click();
    await delay(100);
    assert.notEqual(root_view.$route.path, "/papers/detail?paper_id=1");
  });
});
