import {root_view} from "academia/index";

export function get_current_view(root_view) {
  console.log(root_view);
  for (let c of root_view.$children[0].$children) {
    if (c.$el instanceof HTMLDivElement){
      return c;
    }
  }
}

export function mock_login() {
  root_view.$root.user = {
    "active":false,
    "collect_notes":[],
    "collect_papers":[
      {
        id: 1,
        title: "aaa",
        authors: "bbb",
        conference: "ccc"
      }
    ],
    "comments":[],
    "contribution":0,
    "email":"aa@bbb.ccc",
    "groups":[],"id":1,
    "job":null,
    "join_date":"2016-12-10T07:23:56.270261+00:00",
    "notes":[1,2,3,4,5,6,8],
    "papers":[],
    "questions_asked":[],
    "questions_downvote":[],
    "questions_upvote":[],
    "replies":[],
    "replies_downvote":[],
    "replies_upvote":[],
    "self_introduction":null,
    "username":"user111"
  }
}
export function mock_logout() {
  root_view.$root.user = undefined;
}

export function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
