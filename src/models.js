//Models.js: Academia backend API-mapped models.
import {DS} from "js-data";
import DSHttpAdapter from "js-data-http";

import {parse_resp} from "academia/util";

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
store.registerAdapter("http", adaptor, {default: true});

//[ Models ]
//User model
export let User = store.defineResource({
    name: "users",
    actions: {
        login: {
            method: "POST"
        }
    }
});
window.User = User;
