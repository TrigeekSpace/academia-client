//Data.js: Data and model utilities for frontend
import _ from "lodash";
import Vue from "vue";

//Encode unicode string to byte string
export function encode(unicode_str, encoding="utf-8")
{   let bytes = new TextEncoder(encoding).encode(unicode_str);
    return String.fromCharCode.apply(null, bytes);
}

//Decode byte string to unicode string
export function decode(bytes_str, encoding="utf-8")
{   let bytes = new Uint8Array(bytes_str.length);
    for (let i=0;i<bytes_str.length;i++)
        bytes[i] = bytes_str.charCodeAt(i);
    return new TextDecoder(encoding).decode(bytes);
}

//Base64 encode
export function b64encode(str, encoding="utf-8")
{   return btoa(encode(str, encoding));
}

//Base64 decode
export function b64decode(str, encoding="utf-8")
{   return decode(atob(str), encoding);
}

//URL-safe Base64 encode
export function urlsafe_b64encode(str, encoding="utf-8")
{   return encodeURIComponent(b64encode(str, encoding));
}

//URL-safe Base64 decode
export function urlsafe_b64decode(str, encoding="utf-8")
{   return b64decode(decodeURIComponent(str), encoding);
}

//[ Store & Model ]
//Parse response data
export function parse_resp(config, resp)
{   //Response
    if (!resp)
        return null;
    //Response data
    let resp_data = resp.data;
    if (!resp_data)
        return resp;
    //Main data
    let main_data = resp_data.data;
    if (!main_data)
        return resp_data;
    return main_data;
}

//

//[ Query Builder ]
//Command query operators
export let and = _.bind(Array, null, "and"),
    or = _.bind(Array, null, "or"),
    not = _.bind(Array, null, "not"),
    eq = _.bind(Array, null, "eq"),
    neq = _.bind(Array, null, "neq"),
    gt = _.bind(Array, null, "gt"),
    gte = _.bind(Array, null, "gte"),
    lt = _.bind(Array, null, "lt"),
    lte = _.bind(Array, null, "lte"),
    in_ = _.bind(Array, null, "in"),
    nin = _.bind(Array, null, "nin");

//[ Model-data Convertion ]
//Convert to plain object
export function to_plain(obj)
{   //Array
    if (obj instanceof Array)
        return obj.map(to_plain);

    return _.extend({}, obj);
}
