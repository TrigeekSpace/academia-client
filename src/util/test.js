//Test.js: Frontend test utilties
import _ from "lodash";
import {root_view} from "academia/index";

//[ API Test ]
/**
 * Create a mock API handler for given path.
 *
 * @param path - Mock API path (prefix).
 * @param resp - Mock API response data or handler.
 */
function mock_resp(path, handler)
{   this.__api_map[path] = handler;
}

/**
 * Create a oneshot API handler for given path.
 *
 * @param path - Mock API path (prefix).
 * @param resp - Mock API response.
 */
function mock_oneshot(path, handler)
{   this.__oneshot_map[path] = handler;
}

/**
 * Create a mock HTTP transport.
 *
 * @return A mock HTTP transport.
 */
export function mock_transport()
{   //Mock HTTP transport function
    function mock_http(options)
    {   let url = options.url;
        let handler;

        //Test log
        test_log("http", options);

        //Mock APIs
        let api_map = mock_http.__api_map;
        for (let path in api_map)
            if (url.match(path))
            {   handler = api_map[path];
                break;
            }
        //Oneshot APIs
        let oneshot_map = mock_http.__oneshot_map;
        for (let path in oneshot_map)
            if (url.match(path))
            {   handler = oneshot_map[path];
                delete oneshot_map[path];
                break;
            }

        if (handler)
        {   //Function handler
            if (_.isFunction(handler))
                handler = handler(config);
            //Make mock response
            return Promise.resolve({
                config: options,
                headers: {},
                data: handler,
                status: 200,
                statusText: "OK"
            });
        }
        //No path matched
        else
            return Promise.reject({
                config: options,
                headers: {},
                status: 404,
                statusText: "Not Found"
            });
    }

    //Utility methods
    _.extend(mock_http, {
        //Methods
        mock: mock_resp,
        oneshot: mock_oneshot,
        //Private data
        __oneshot_map: {},
        __api_map: {}
    });

    return mock_http;
}

//[ Test Log ]
//Test log queues
let test_log_queues = {};

//Test log
export function test_log(queue_name, data)
{   //Only valid in test mode
    if (process.env.NODE_ENV!="test")
        return;

    //Get log queue
    if (!(queue_name in test_log_queues))
        test_log_queues[queue_name] = [];
    let queue = test_log_queues[queue_name];
    //Append data to write
    queue.push(data);
}

//Clear test log
export function clear_log(queue_name=null)
{   //Clear all
    if (!queue_name)
        test_log_queues = [];
    //Clear given queue
    else
        delete test_log_queues[queue_name];
}

//Get log
export function get_log(queue_name)
{   //Get log queue
    let queue = test_log_queues[queue_name];
    if (!queue)
        return null;
    //Pop next log
    return queue.shift();
}

//[ File Upload ]
//Test mode; make FileList length modifiable
if (process.env.NODE_ENV=="test")
{   //Original file list length getter
    let orig_getter = Object.getOwnPropertyDescriptor(FileList.prototype, "length").get;
    //Modifiable FileList length
    Object.defineProperty(FileList.prototype, "length", {
        configurable: true,
        enumerable: true,
        //New getter
        get()
        {   return this.__length||orig_getter.call(this);
        },
        //New setter
        set(length)
        {   this.__length = length;
        }
    });

//[ Legacy / Compat ]
export function get_current_view(root_view) {
  console.log(root_view);
  for (let c of root_view.$children[0].$children) {
    if (c.$el instanceof HTMLDivElement){
      return c;
    }
  }
}

export function mock_login() {
  root_view.$root.user = {
    "active":false,
    "collect_notes":[],
    "collect_papers":[
      {
        id: 1,
        title: "aaa",
        authors: "bbb",
        conference: "ccc"
      }
    ],
    "comments":[],
    "contribution":0,
    "email":"aa@bbb.ccc",
    "groups":[],"id":1,
    "job":null,
    "join_date":"2016-12-10T07:23:56.270261+00:00",
    "notes":[1,2,3,4,5,6,8],
    "papers":[],
    "questions_asked":[],
    "questions_downvote":[],
    "questions_upvote":[],
    "replies":[],
    "replies_downvote":[],
    "replies_upvote":[],
    "self_introduction":null,
    "username":"user111"
  }
}
export function mock_logout() {
  root_view.$root.user = undefined;
}

export function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
