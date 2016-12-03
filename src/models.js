//Models.js: Academia backend API-mapped models.
import {DS} from "js-data";
import DSHttpAdapter from "js-data-http";
import _ from "lodash";

import {parse_resp, res_action} from "academia/util";
import {ADAPTOR_NAME} from "academia/config"

//[ Data store ]
//Data store
export let store = new DS();
//HTTP adaptor
export let adaptor = new DSHttpAdapter({
    //Base path
    basePath: "http://127.0.0.1:8080",
    //Deserialize
    deserialize: parse_resp,
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

//[ Resource Actions & Data ]
//User model
_.extend(User, {
    login: res_action(User, "login"),
    logout: res_action(User, "logout")
});
