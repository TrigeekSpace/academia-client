//User.js: User-related test
import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay} from "academia/util/test";
import "academia/index";
import {root_view} from "academia/index";
// let root_view = $(window).data("root_view");

describe("Index Page", function() {
  it("should be able to visit the collection's detail page", async function(){
    location.hash = "#/";
    await delay(100)
    //console.log(root_view);
    let c_view = get_current_view(root_view);
    c_view.search_text = "new"
    $("#search_btn", root_view.$el).click();
    await delay(100)
    assert.equal(location.hash, "#/papers/list?query=new");
  });

  it("should be able to visit the register page", async function(){
    root_view.$router.push("#/");
    let a = $("[href='#/users/register']", root_view.$el)[0];
    console.log(a);
    a.click();
    await delay(100)
    assert.equal(location.hash, "#/users/register");
  });

  it("should be able to visit the login page", function(){
    root_view.$router.push("#/");
    let a = $("[href='#/users/login']", root_view.$el)[0];
    console.log(a);
    a.click();
    Vue.nextTick(function () {
      assert.equal(location.hash, "#/users/login")
    })
  });

});
