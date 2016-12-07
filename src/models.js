//Models.js: Academia backend API-mapped models.
import {DS} from "js-data";
import DSHttpAdapter from "js-data-http";
import _ from "lodash";

import {transform_query, parse_resp, res_action} from "academia/util";
import {ADAPTOR_NAME} from "academia/config"

//[ Data store ]
//Data store
export let store = new DS();
//HTTP adaptor
export let adaptor = new DSHttpAdapter({
    //Base path
    basePath: "http://101.200.176.184:8080",
    //Deserialize
    deserialize: parse_resp,
    //Query transform
    queryTransform: transform_query,
    //HTTP default configuration
    httpConfig: {
        headers: {}
    }
});
//Register adaptor
store.registerAdapter(ADAPTOR_NAME, adaptor, {default: true});

//[ Models ]
//User model
export let User = store.defineResource("users");
export let Paper = store.defineResource("papers");
export let Note = store.defineResource("notes");
window.User = User
window.Paper = Paper
window.Note = Note

//[ Resource Actions & Data ]
//User model
_.extend(User, {
    login: res_action(User, "login"),
    logout: res_action(User, "logout")
});
