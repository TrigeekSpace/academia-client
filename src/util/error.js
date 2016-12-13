//Error.js: Front error handling utilities.
import _ from "lodash";

//Unknown error prompt
const UNKNOWN_ERROR_PROMPT = "未知的客户端错误，前端攻城狮正在修复中。";
//Server error prompt
const SERVER_ERROR_PROMPT = "远端服务器发生了蜜汁错误，请等待程序猿修复。";
//Incorrect credential prompt
const INCORRECT_CREDENTIAL_PROMPT = "用户名或密码有误，请再试一次。";

//API error to handler mapping
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
    {   let prompt = "您的输入有误，请重新输入：";
        //Print each field and reason
        let errors = data.errors;
        for (let field in errors)
            prompt += `\n* ${field}: ${errors[field]}`;

        return prompt;
    },
    //Incorrect credential
    incorrect_credential(data)
    {   return INCORRECT_CREDENTIAL_PROMPT;
    }
};

//API error class
export class APIError extends Error
{   //Constructor
    constructor(resp)
    {   //Copy response data to error
        _.extend(this, resp.data);

        //Get handler and error message
        let handler = error_handler_mapping[this.type];
        let error_msg = handler?handler(this):UNKNOWN_ERROR_PROMPT;
        //Call super class constructor
        super(error_msg);
    }

    //Error description
    toString()
    {   return this.message;
    }
};

/**
 * Convert API response error data to APIError instance.
 * Return original data otherwise.
 *
 * @param resp Error response data.
 */
export function unify_error(data)
{   //API response data check
    if (_.isPlainObject(data)&&(data.status>=400)&&data.data)
        return new APIError(data);
    return data;
}
