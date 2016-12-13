//Api.js: Frontend API utilities
import _ from "lodash";

import {ADAPTOR_NAME} from "academia/config";
import {urlsafe_b64encode} from "academia/util/core";

//[ Data Transformers ]
/**
 * Query transformer.
 *
 * @param config JS-Data model.
 * @param params Parameters to be transformed.
 */
export function transform_query(config, params)
{   if (!(_.isEmpty(params)))
        params = {json_params: urlsafe_b64encode(JSON.stringify(params))};
    return params;
}

/**
 * Parse response data.
 *
 * @param config - JS-Data model configuration.
 * @param resp - HTTP response object.
 * @return Response data.
 */
export function transform_response(config, resp)
{   //Response
    if (!resp)
        return null;
    //Response data
    let resp_data = resp.data;
    if (!resp_data)
        return resp;
    //Main data
    let data = resp_data.data;
    if (!data)
        return resp_data;

    return data;
}

/**
 * Transform request to FormData, if data contains File or Blob instance.
 *
 * @param data Data to be transformed.
 * @return FormData object if blobs or files are found, the same data object otherwise.
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
    {   let form_data = new FormData();

        for (let key in data)
            if (data[key] instanceof Blob)
                form_data.append(key, data[key]);
            else
                //JSON-stringify data to prevent type loss
                form_data.append(key, JSON.stringify(data[key]));

        return form_data;
    }
    else
        return data;
}

/**
 * Convert JS-Data model to plain object.
 *
 * @param obj Single or multiple JS-Data model instance(s).
 * @param nested Keypath of nested fields to be converted.
 * @return Converted plain object.
 */
export function to_plain(obj, nested=[])
{   //Multiple objects
    if (_.isArray(obj))
        return obj.map((single) => to_plain(single, nested));
    //Convert nested fields to hierarchical representation
    if (_.isArray(nested))
    {   let hierarchy = {}
        for (let key_path of nested)
            _.set(hierarchy, key_path, {});
        nested = hierarchy;
    }

    let plain_obj = {};
    //Copy original object
    for (let key of _.keys(obj))
        plain_obj[key] = obj[key];
    for (let key of _.keys(nested))
        plain_obj[key] = to_plain(obj[key], nested[key]);

    return plain_obj;
}

//[ API Endpoints ]
/**
 * Get resource path from model.
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
    let adaptor = model.getAdapter(ADAPTOR_NAME);

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, data: params, method: "POST"},
            default_http_opts,
            http_opts
        );
        //Fetch data
        return adaptor.HTTP(final_opts);
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
    let adaptor = model.getAdapter(ADAPTOR_NAME);

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, params: params, method: "GET"},
            default_http_opts,
            http_opts
        );
        //Fetch data
        return adaptor.HTTP(final_opts);
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
    let adaptor = model.getAdapter(ADAPTOR_NAME);

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, data: params, method: "POST"},
            default_http_opts,
            http_opts
        );
        //Fetch data
        return adaptor.HTTP(final_opts);
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
    let adaptor = model.getAdapter(ADAPTOR_NAME);

    return function(params=null, http_opts={})
    {   //HTTP options
        let final_opts = _.merge(
            {url: path, params: params, method: "GET"},
            default_http_opts,
            http_opts
        );
        //Fetch data
        return adaptor.HTTP(final_opts);
    };
}

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
    nin = _.bind(Array, null, "nin"),
    contains = _.bind(Array, null, "contains");
