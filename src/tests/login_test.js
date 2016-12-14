import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login} from "academia/util/test";
import "academia/index";
import {root_view} from "academia/index";

describe("Login Page", function() {
  it("should be able to successfully login", async function(){
    location.hash = "#/users/space";
    let c_view = get_current_view(root_view);
    c_view.username = "user12";
    c_view.password = "asdf1234";
    $("#login_btn", root_view.$el).click();
    mock_login()
    await delay(200);
    assert.equal(location.hash, "#/users/space");
  });
  it("should be able to refuse login", async function(){
    root_view.$router.push("#/users/space");
    root_view.$router.push("#/users/login");
    let c_view = get_current_view(root_view);
    c_view.username = "dkosahndhjiflfhsvjilz";
    c_view.password = "asdf1234";
    $(".btn-primary", root_view.$el).click();
    await delay(200);
    assert.notEqual(location.hash, "#/users/login");
  });
});
