import Vue from 'vue';
import assert from "assert";
import {get_current_view, mock_login, mock_logout, delay} from "academia/util/test";
import "academia/index";
import {root_view} from "academia/index";


describe("Note Upload Page", function() {

  it("should be able to successfully upload note", async function(){
    mock_login()
    location.hash = "#/notes/upload?paper_id=1";
    let c_view = get_current_view(root_view);
    c_view.note_title = "user12_test_title";
    c_view.note_content = "test_content";
    c_view.note_content = "";
    $("#note_upload", root_view.$el).click();
    await delay(300);
    assert.equal(1,1);
    assert.equal(location.hash, "#/papers/detail?paper_id=1");
  });

  it("should be able to refuse empty value", function(){
    mock_login()
    location.hash = "#/notes/upload?paper_id=1";
    let c_view = get_current_view(root_view);
    c_view.note_title = "";
    c_view.related_paper = "paper_1_name";
    c_view.note_content = "";
    c_view.paper = {
      abstract: "wkeudhweiud",
      authors: "bbb",
      collectors: [],
      conference: "ccc",
      id: 1,
      owners: [],
      owngroup: [],
      paper_file: "default/61c83864-beaa-11e6-a8e0-0242c0a81003",
      publish_date:"2016-12-10T07:29:27.567482+00:00",
      title:"aaaaa"
    }
    $("#note_upload", root_view.$el).click();
    assert.equal(location.hash, "#/notes/upload?paper_id=1");
  });
});
