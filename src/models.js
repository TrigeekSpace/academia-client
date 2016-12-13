//Models.js: Academia backend API-mapped models.
import {DS} from "js-data";
import DSHttpAdapter from "js-data-http";
import _ from "lodash";

import {ADAPTOR_NAME, BKND_URL} from "academia/config"
import {transform_query, transform_request_form_data, transform_response, res_action} from "academia/util/api";

//[ Data store ]
//Data store
export let store = new DS();
//HTTP adaptor
export let adaptor = new DSHttpAdapter({
    //Base path
    basePath: `${BKND_URL}`,
    //Deserialize
    deserialize: transform_response,
    //Query transform
    queryTransform: transform_query,
    //HTTP default configuration
    httpConfig: {
        headers: {}
    }
});
window.adaptor = adaptor;

//Request transformer (Cannot be added to adaptor settings)
adaptor.http.defaults.transformRequest.unshift(transform_request_form_data);
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
                localField: "notes",
                foreignKey: "id"
            }
        }
    }
});

export let Note = store.defineResource("notes");
/*export let Note = store.defineResource({
    name: "notes",
    relations: {
        belongsTo: {
            users: {
                localField: "",
                foreignKey: "id"
            }
        }
    }
});*/

window.User = User
window.Paper = Paper
window.Note = Note

//[ Resource Actions & Data ]
//User model
_.extend(User, {
    login: res_action(User, "login"),
    logout: res_action(User, "logout")
});
