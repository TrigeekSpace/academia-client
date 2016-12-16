import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login} from "academia/util/test";
import {root_view} from "academia/index";
import {adaptor} from "academia/models"
import "academia/index";
import $ from "jquery";
import {USER_DATA, PAPER_DATA, NOTE_DATA} from "academia/tests/data";
import {append} from "academia/util/core"

describe("Note Upload Page", function() {

  it("should be able to successfully upload note", async function(){
    adaptor.http.mock("/papers/1", PAPER_DATA)
    adaptor.http.mock("/notes", NOTE_DATA)
    root_view.user = USER_DATA;
    root_view.$router.push({path: "/notes/upload", query: {paper_id: 1}});
    //console.log(location.hash);
    await delay(100);
    let c_view = get_current_view(root_view);
    c_view.note_title = "user12_test_title";
    c_view.note_content = "test_content";
    let file_selector = $("#file-selector", root_view.$el)[0];
    console.log(file_selector.files);
    append(file_selector.files, "file_placeholder");
    $("#note_upload", root_view.$el).click();
    await delay(100);
    assert.equal(root_view.$route.path, "/");
  });

  it("should be able to successfully upload note", async function(){
    root_view.$router.push({path: "/notes/upload", query: {paper_id: 1}});
    await delay(100);
    let c_view = get_current_view(root_view);
    c_view.note_title = "";
    c_view.note_content = "";
    let file_selector = $("#file-selector", root_view.$el)[0];
    append(file_selector.files, "file_placeholder");
    $("#note_upload", root_view.$el).click();
    await delay(100);
    assert.notEqual(root_view.$route.path, "/");
  });

});
