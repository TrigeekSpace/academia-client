import Vue from 'vue';
import assert from "assert";
import {get_current_view, delay, mock_login} from "academia/util/test";
import {root_view} from "academia/index";
import {adaptor} from "academia/models"
import "academia/index";
import $ from "jquery";
import {USER_DATA, PAPER_DATA} from "academia/tests/data";

describe("Login Page", function() {
  it("should be able to successfully login", async function(){

    adaptor.http.oneshot("/users/login", {
      user: USER_DATA,
      status: "success",
      token: "hsiaghdvfskaghbfalsdghjvsdahdkjlwaghvkja"
    })

    root_view.$router.push({name: "paper_detail", query: {paper_id: 1}});
    let c_view = get_current_view(root_view);
    c_view.username = "user111";
    c_view.password = "asdf1234";
    // $("#login_btn", root_view.$el).click();
    $("button:contains('登录')", root_view.$el).click();
    await delay(100);
    assert.notEqual(root_view.$route.path, "/users/login");
    root_view.user = undefined;
  });

  it("should be able to refuse login", async function(){
    root_view.$router.push("/users/space");
    root_view.$router.push("/users/login");
    let c_view = get_current_view(root_view);
    c_view.username = "dkosahndhjiflfhsvjilz";
    c_view.password = "asdf1234";
    $(".btn-primary", root_view.$el).click();
    await delay(200);
    assert.notEqual(location.hash, "#/users/login");
  });
});
