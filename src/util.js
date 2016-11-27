//Util.js: Frontend utility functions and classes.

//Map function for object
export function map_obj(obj, transformer)
{   let new_obj = {};

    for (key in obj)
    {   let [new_key, new_value] = transformer(key, obj[key]);
        new_obj[new_key] = new_value;
    }

    return new_obj;
}
