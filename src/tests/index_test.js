//User.js: User-related test
import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay} from "academia/util/test";
import "academia/index";
import {root_view} from "academia/index";
// let root_view = $(window).data("root_view");

describe("Index Page", function() {
  it("should be able to visit the collection's detail page", async function(){
    root_view.$router.push({name: "index"});
    await delay(100)
    let c_view = get_current_view(root_view);
    c_view.search_text = "new"
    $("#search-btn", root_view.$el).click();
    assert.equal(location.hash, "#/papers/list?query=new");
  });

  it("should be able to visit the register page", async function(){
    root_view.$router.push({name: "index"});
    $("a:contains('Register')", root_view.$el)[0].click();
    assert.equal(location.hash, "#/users/register");
  });

  it("should be able to visit the login page", function(){
    root_view.$router.push({name: "index"});
    //let a = $("[href='#/users/login']", root_view.$el)[0];
    let a = $("a:contains('Log-in')", root_view.$el)[0];
    console.log(a);
    a.click();
    Vue.nextTick(function () {
      assert.equal(location.hash, "#/users/login")
    })
  });

});
