//Models.js: Academia backend API-mapped models.
import {DS} from "js-data";
import DSHttpAdapter from "js-data-http";

//HTTP adaptor
let http_adapter = new DSHttpAdapter({
    //Deserialize data from server
    deserialize(conf, data)
    {   return data.data;
    }
});
//Data store
let store = new DS();

//User model
export let User = store.defineResource("users");
