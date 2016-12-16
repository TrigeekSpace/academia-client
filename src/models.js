//Models.js: Academia backend API-mapped models.
import {DS} from "js-data";
import DSHttpAdapter from "js-data-http";
import _ from "lodash";
import {to_plain} from "academia/util/api";

import {ADAPTOR_NAME, BKND_URL} from "academia/config"
import {mock_transport} from "academia/util/test";
import {
    transform_query,
    transform_request_form_data,
    transform_response,
    res_action,
    inst_action,
    model_proto
} from "academia/util/api";

//[ Data store ]
//Data store
export let store = new DS();
//HTTP adaptor
export let adaptor = new DSHttpAdapter({
    //Deserialize
    deserialize: transform_response,
    //Query transform
    queryTransform: transform_query,
    //HTTP default configuration
    httpConfig: {headers: {}}
});
window.adaptor = adaptor;

//Test mode; use mock HTTP backend
if (process.env.NODE_ENV=="test")
{   adaptor.defaults.basePath = "/";
    adaptor.http = mock_transport();
}
else
{   //Backend base path
    adaptor.defaults.basePath = BKND_URL;
    //Request transformer (Cannot be added to adaptor settings)
    adaptor.http.defaults.transformRequest.unshift(transform_request_form_data);
}

//Register adaptor
store.registerAdapter(ADAPTOR_NAME, adaptor, {default: true});

//[ Models ]
//User model
export let User = store.defineResource("users");

export let Paper = store.defineResource({
    name: "papers",
    relations: {
        hasMany: {
            notes: {
                localField: "$notes",
                foreignKey: "paper"
            }
        }
    }
});

export let Note = store.defineResource({
    name: "notes",
    relations: {
        hasOne: {
            users: {
                localField: "$author",
                localKey: "author"
            }
        }
    }
});

window.User = User
window.Paper = Paper
window.Note = Note
window.to_plain = to_plain

//[ Resource Actions & Data ]
//User model
_.merge(User, {
    login: res_action(User, "login"),
    logout: res_action(User, "logout")
});

//Paper model
_.extend(model_proto(Paper), {
    toggle_collect_status: inst_action(Paper, "toggle_collect_status")
});

//Note model
_.extend(model_proto(Note), {
    toggle_collect_status: inst_action(Note, "toggle_collect_status")
});
