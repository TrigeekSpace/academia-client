import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login} from "academia/util/test";
import {root_view} from "academia/index";
import {adaptor} from "academia/models"
import "academia/index";
import $ from "jquery";
import {USER_DATA, PAPER_DATA, NOTE_DATA} from "academia/tests/data";
import {append} from "academia/util/core"

function make_id(len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i = 0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

describe("Register Page", function() {

  it("should be able to successfully register", async function(){
    root_view.user = undefined;
    adaptor.http.mock("/users", USER_DATA)
    root_view.$router.push({path: "/users/register"});
    await delay(100);
    console.log("----------------------------------------------");
    console.log(location.hash);
    console.log("----------------------------------------------");
    let c_view = get_current_view(root_view);
    c_view.username = "user111";
    c_view.email = "aa@bbb.ccc";
    c_view.password = "asdf1234";
    c_view.password2 = "asdf1234";
    $("#register-btn", root_view.$el).click();
    await delay(100);

    assert.equal(location.hash.startsWith("#/users/login"), true);
  });

  it("should be able to refuse invalid register -- password error", function(){
    root_view.user = undefined;
    root_view.$router.push({name: "register"});
    let c_view = get_current_view(root_view);
    c_view.username = "user_testHIBGISohuisadfjlashui3904u2";
    c_view.email = "aa@bb.cc";
    c_view.password = "asdf1234";
    c_view.password2 = "asdf1234jj";
    $("#register_confirm", root_view.$el).click();
    assert.equal(location.hash.startsWith("#/users/login"), false);
  });

  it("should be able to refuse invalid register -- username error", function(){
    root_view.user = undefined;
    root_view.$router.push({name: "register"});
    let c_view = get_current_view(root_view);
    c_view.username = "";
    c_view.email = "aa@bb.cc";
    c_view.password = "asdf1234";
    c_view.password2 = "asdf1234jj";
    $("#register_confirm", root_view.$el).click();
    assert.equal(location.hash.startsWith("#/users/login"), false);
  });

  it("should be able to refuse invalid register -- email error", function(){
    root_view.user = undefined;
    root_view.$router.push({name: "register"});
    let c_view = get_current_view(root_view);
    c_view.username = "user_testHIBGISohuisadfjlaskjlahui3904u2";;
    c_view.email = "aadsafnjo.cc",
    c_view.password = "asdf1234";
    c_view.password2 = "asdf1234afjnashdjkw";
    $("#register_confirm", root_view.$el).click();
    assert.equal(location.hash.startsWith("#/users/login"), false);
  });
});
