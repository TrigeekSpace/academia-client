//Data.js: Data and model utilities for frontend
import _ from "lodash";
import Vue from "vue";

import {ADAPTOR_NAME} from "academia/config";

//[ Encoding ]
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

//Query transformer
export function transform_query(config, params)
{   if (!(_.isEmpty(params)))
        params = {json_params: urlsafe_b64encode(JSON.stringify(params))};
    return params;
}

//[ Store & Model ]
/**
 * Parse response data.
 *
 * @param config - JS-Data model configuration.
 * @param resp - HTTP response object.
 * @return Response data.
 */
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

/**
 * Transform request to FormData.
 */
export function transform_request_form_data(data)
{   //Transform detection
    let need_transform = false;
    for (let key in data)
        if (data[key] instanceof Blob)
        {   need_transform = true;
            break;
        }

    //Transform data to FormData
    if (need_transform)
    {   let form_data = new FormData()
        for (let key in data)
            if (data[key] instanceof Blob)
                form_data.append(key, data[key]);
            else
                form_data.append(key, JSON.stringify(data[key]));
        data = form_data;
    }

    return data;
}

//To plain object
export function to_plain(obj)
{   if (_.isArray(obj))
        return obj.map(to_plain);

    let plain_obj = {};
    for (let key in obj)
        if (!key.startsWith("DS"))
            plain_obj[key] = obj[key];

    return plain_obj;
}

//[ Model Actions & Data ]
/**
 * Get resource path from model
 *
 * @param model - Model object.
 * @return Base path of the resource associated with the model.
 */
function get_res_path(model)
{   let adaptor = model.getAdapter(ADAPTOR_NAME);
    let base_path = adaptor.defaults.basePath||model.basePath||"";
    return `${base_path}/${model.endpoint}`;
}

/**
 * Define resource action.
 *
 * @param model - Model object.
 * @param name - Resource action data name.
 * @param default_http_opts - Default options used by underlying transport.
 * @return A function corresponding with given resource action API endpoint.
 */
export function res_action(model, name, default_http_opts={})
{   //Path
    let path = `${get_res_path(model)}/${name}`;
    //Adaptor and transport
    let adaptor = model.getAdapter(ADAPTOR_NAME),
        http = adaptor.http;

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, data: params, method: "POST"},
            adaptor.defaults.httpConfig,
            default_http_opts,
            http_opts
        );
        //Fetch data
        return http(final_opts);
    };
}

/**
 * Define resource data.
 *
 * @param model - Model object.
 * @param name - Resource sub-resource data name.
 * @param default_http_opts - Default options used by underlying transport.
 * @return A function corresponding with given resource API endpoint.
 */
export function res_data(model, name, default_http_opts={})
{   //Path
    let path = `${get_res_path(model)}/${name}`;
    //Adaptor and transport
    let adaptor = model.getAdapter(ADAPTOR_NAME),
        http = adaptor.http;

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, params: params, method: "GET"},
            adaptor.defaults.httpConfig,
            default_http_opts,
            http_opts
        );
        //Fetch data
        return http(final_opts);
    };
}

/**
 * Define instance action.
 *
 * @param model - Model object.
 * @param name - Instance action name.
 * @param default_http_opts - Default options used by underlying transport.
 * @return A function corresponding with given instance action API endpoint.
 */
export function inst_action(model, name, default_http_opts={})
{   //Path
    let path = `${get_res_path(model)}/${this.id}/${name}`;
    //Adaptor and transport
    let adaptor = model.getAdapter(ADAPTOR_NAME),
        http = adaptor.http;

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, data: params, method: "POST"},
            adaptor.defaults.httpConfig,
            default_http_opts,
            http_opts
        );
        //Fetch data
        return http(final_opts);
    };
}

/**
 * Define instance data.
 *
 * @param model - Model object.
 * @param name - Instance sub-resource data name.
 * @param default_http_opts - Default options used by underlying transport.
 * @return A function corresponding with given instance data API endpoint.
 */
export function inst_data(model, name, default_http_opts={})
{   //Path
    let path = `${get_res_path(model)}/${this.id}/${name}`;
    //Adaptor and transport
    let adaptor = model.getAdapter(ADAPTOR_NAME),
        http = adaptor.http;

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, params: params, method: "GET"},
            adaptor.defaults.httpConfig,
            default_http_opts,
            http_opts
        );
        //Fetch data
        return http(final_opts);
    };
}

//[ Query Builder ]
//Command query operators
export let and = _.bind(Array, null, "and");
export let or = _.bind(Array, null, "or");
export let not = _.bind(Array, null, "not");
export let eq = _.bind(Array, null, "eq");
export let neq = _.bind(Array, null, "neq");
export let gt = _.bind(Array, null, "gt");
export let gte = _.bind(Array, null, "gte");
export let lt = _.bind(Array, null, "lt");
export let lte = _.bind(Array, null, "lte");
export let in_ = _.bind(Array, null, "in");
export let nin = _.bind(Array, null, "nin");
export let contains = _.bind(Array, null, "contains");

//[ Error Handling ]
//Unknown error prompt
const UNKNOWN_ERROR_PROMPT = "Something wrong happened. But I don't understand.";
//Server error prompt
const SERVER_ERROR_PROMPT = "The remote server exploded. :(";

//Error name to handler mapping
let error_handler_mapping = {
    //Server error
    exception(data)
    {   //Print back trace
        console.error(`A(n) ${data.exception_type} occured at server side.\n\n${data.backtrace}`);
        //Humorous prompt
        return SERVER_ERROR_PROMPT;
    },
    //Argument format
    arg_fmt(data)
    {   let html = "Illegal input found:<ul>";
        //Print each field and reason
        let errors = data.errors;
        for (let field in data.errors)
            html += `<li>${field}: ${errors[field]}</li>`;
        html += "</ul>"

        return html;
    }
};

/**
 * Convert error information to HTML.
 *
 * @param data - Error data.
 * @return HTML error description.
 */
export function html_error(data)
{   //Delegate to specific error handler
    if (data.type in error_handler_mapping)
        return error_handler_mapping[data.type](resp);
    //No error handler found
    else
        return UNKNOWN_ERROR_PROMPT;
}

//[ Routing ]
export function pre_route(...hooks)
{   //Pre-route handler
    return function(from, to, next) {
        next((vm) => {
            console.log(vm);
            //View initialization
            vm.init(to, from);
        });
    };
}

export async function on_reload(to, from)
{   //View initialization
    this.init(to, from);
}

export function auth_required()
{

}
