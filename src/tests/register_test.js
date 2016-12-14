import Vue from 'vue';
import assert from "assert";
import {get_current_view, mock_login, mock_logout, delay} from "academia/util/test";
import "academia/index";
import {root_view} from "academia/index";

describe("Register Page", function() {

  it("should be able to successfully register", async function(){
    mock_logout();
    location.hash = "#/users/space";
    let c_view = get_current_view(root_view);
    c_view.username = "user_testHIBGISohuihui3904u2";
    c_view.email = "aa@bb.cc";
    c_view.password = "asdf1234";
    c_view.password2 = "asdf1234";
    $("#register_btn").click();
    await delay(200);
    assert.equal(location.hash, "#/users/login");
  });

  it("should be able to refuse invalid register -- password error", function(){
    mock_logout();
    location.hash = "#/users/register";
    let c_view = get_current_view(root_view);
    c_view.username = "user_testHIBGISohuisadfjlashui3904u2";
    c_view.email = "aa@bb.cc";
    c_view.password = "asdf1234";
    c_view.password2 = "asdf1234jj";
    $("#register_confirm").click();
    assert.equal(location.hash, "#/users/register");
  });

  it("should be able to refuse invalid register -- username error", function(){
    mock_logout();
    location.hash = "#/users/register";
    let c_view = get_current_view(root_view);
    c_view.username = "";
    c_view.email = "aa@bb.cc";
    c_view.password = "asdf1234";
    c_view.password2 = "asdf1234jj";
    $("#register_confirm").click();
    assert.equal(location.hash, "#/users/register");
  });

  it("should be able to refuse invalid register -- email error", function(){
    mock_logout();
    location.hash = "#/users/register";
    let c_view = get_current_view(root_view);
    c_view.username = "user_testHIBGISohuisadfjlaskjlahui3904u2";;
    c_view.email = "aadsafnjo.cc",
    c_view.password = "asdf1234";
    c_view.password2 = "asdf1234afjnashdjkw";
    $("#register_confirm").click();
    assert.equal(location.hash, "#/users/register");
  });
});
