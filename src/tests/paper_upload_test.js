import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login} from "academia/util/test";
import {root_view} from "academia/index";
import {adaptor} from "academia/models"
import "academia/index";
import $ from "jquery";
import {USER_DATA, PAPER_DATA, NOTE_DATA} from "academia/tests/data";
import {append} from "academia/util/core"

describe("Paper Upload Page", function() {
  it("should be able to successfully upload paper", async function(){
    adaptor.http.oneshot("/papers", PAPER_DATA)
    root_view.user = USER_DATA;
    root_view.$router.push({path: "/papers/upload"});
    await delay(100);
    console.log(location.hash);
    let c_view = get_current_view(root_view);
    c_view.title = "test_paper_title";
    c_view.authors = "test_authors";
    c_view.abstract = "test_abs";
    c_view.conference = "test_conf";
    c_view.year = "2010";
    c_view.month = "10";
    let file_selector = $("#file-selector", root_view.$el)[0];
    append(file_selector.files, "file_placeholder");
    $("#paper-upload", root_view.$el).click();
    await delay(100);
    assert.notEqual(root_view.$route.path, "/papers/upload");
  });

  it("should be able to reject illegal uploading", async function() {
    adaptor.http.oneshot("/papers", PAPER_DATA);
    root_view.user = USER_DATA;
    root_view.$router.push({path: "/papers/upload"});
    await delay(100);
    console.log(location.hash);
    let c_view = get_current_view(root_view);
    c_view.title = "test_paper_title";
    c_view.author = "";
    c_view.abstract = "";
    c_view.conference = "";
    c_view.year = "2010";
    c_view.month = "10";
    let file_selector = $("#file-selector", root_view.$el)[0];
    console.log(file_selector.files);
    append(file_selector.files, "file_placeholder");
    $("#paper_upload", root_view.$el).click();
    await delay(100);
    assert.equal(root_view.$route.path, "/papers/upload");
  });
});
