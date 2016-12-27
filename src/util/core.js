//Core.js: Core frontend utilities, usually enhanced version of built-in functions.
import {remote} from "electron";
import os from "os";
import path from "path";

import {test_log} from "academia/util/test";

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

//[ Base64 ]
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

//[ Dialogs ]
/**
 * Show native message box.
 *
 * @param options Electron message box options.
 * @return Index of the button pressed.
 */
export function msgbox(options)
{   //Mix default options
    options = {buttons: [], ...options};

    //Test mode
    if (process.env.NODE_ENV=="test")
    {   test_log("msgbox", options);
        return;
    }

    let platform = os.platform()
    //macOS special behavior
    if (platform=="darwin")
    {   options.detail = options.message;
        if ("title" in options)
        {   options.message = options.title;
            delete options.title;
        }
    }

    return remote.dialog.showMessageBox(options);
}

//[ Async Operations ]
/**
 * Delay execution of program.
 *
 * @param time Time in milliseconds.
 * @return A promise that will be resolved after given time.
 */
export function delay(time)
{   return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

//[ Array-like Operations ]
/**
 * Append to array-like object.
 *
 * @param array_like Array-like object.
 * @return obj Object to be added.
 */
export function append(array_like, obj)
{   return Array.prototype.push.call(array_like, obj);
}

//[ Path Utilities ]
//Get path from data root
export function data_path(...paths)
{   return path.join(remote.app.getPath("userData"), "data", ...paths);
}
