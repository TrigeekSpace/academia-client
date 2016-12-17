webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(3);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	__webpack_require__(4);
	
	__webpack_require__(23);
	
	__webpack_require__(36);
	
	var _root = __webpack_require__(38);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Use Vue router
	//Index.js: Entry point of Academia client
	_vue2.default.use(_vueRouter2.default);
	//Routes
	
	
	//Root component
	let routes = [{ name: "index", path: "/", component: __webpack_require__(51) }, { name: "login", path: "/users/login", component: __webpack_require__(56) }, { name: "register", path: "/users/register", component: __webpack_require__(59) }, { name: "user_space", path: "/users/space", component: __webpack_require__(62) }, { name: "paper_detail", path: "/papers/detail", component: __webpack_require__(67) }, { name: "paper_content", path: "/papers/content", component: __webpack_require__(72) }, { name: "paper_list", path: "/papers/list", component: __webpack_require__(77) }, { name: "upload_paper", path: "/papers/upload", component: __webpack_require__(82) }, { name: "upload_note", path: "/notes/upload", component: __webpack_require__(87) }, { name: "transfer_tasks", path: "/misc/transfer", component: __webpack_require__(106) }];
	//Router
	let router = new _vueRouter2.default({ routes });
	
	//Root view
	let root_view = new _vue2.default({
	    //Root level data
	    data: {
	        //Current user
	        user: null,
	        //Current session token
	        token: null,
	        //Show or hide sidebar
	        show_side_bar: false,
	        //File transfer tasks
	        transfer_tasks: []
	    },
	    //Computed properties
	    computed: {},
	    //Methods
	    methods: {
	        //Toggle side bar
	        toggle_sidebar() {
	            this.show_side_bar = !this.show_side_bar;
	            if (this.show_side_bar) {
	                $("#root-side-bar").animate({
	                    left: 0
	                }, 100);
	            } else {
	                $("#root-side-bar").animate({
	                    left: "-200px"
	                }, 100);
	            }
	        }
	    },
	    el: "body",
	    render: resolve => resolve(_root2.default),
	    router
	});
	window.router = router;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(39)
	
	/* script */
	__vue_exports__ = __webpack_require__(42)
	
	/* template */
	var __vue_template__ = __webpack_require__(50)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/root.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1e11b50c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1e11b50c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] root.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e11b50c!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./root.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e11b50c!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./root.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Sidebar */\n.sidebar\n{   position: fixed;\n    top: 52px;\n    bottom: 0;\n    left: -200px;\n    width: 200px;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    background-color: #f5f5f5;\n    opacity: 0.9;\n}\n#main-view {\n    margin-top: 100px;\n}\n\n/* Sidebar group */\n.sidebar-group\n{   margin-right: -21px;\n    margin-bottom: 20px;\n    margin-left: -20px;\n}\n\n/* Sidebar group links */\n.sidebar-group > li > a\n{   padding-right: 20px;\n    padding-left: 20px;\n}\n.sidebar-group > .active > a,\n.sidebar-group > .active > a:hover,\n.sidebar-group > .active > a:focus\n{   color: #fff;\n    background-color: #428bca;\n}\n", "", {"version":3,"sources":["/./src/views/root.vue?5bc3be18"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2EA,aAAA;AACA;IACA,gBAAA;IACA,UAAA;IACA,UAAA;IACA,aAAA;IACA,aAAA;IACA,cAAA;IACA,eAAA;IACA,cAAA;IACA,mBAAA;IACA,0BAAA;IACA,aAAA;CACA;AAEA;IACA,kBAAA;CACA;;AAEA,mBAAA;AACA;IACA,oBAAA;IACA,oBAAA;IACA,mBAAA;CACA;;AAEA,yBAAA;AACA;IACA,oBAAA;IACA,mBAAA;CACA;AAEA;;;IAGA,YAAA;IACA,0BAAA;CACA","file":"root.vue","sourcesContent":["<!-- Component template -->\n<template>\n<body>\n    <!-- Navigation bar -->\n    <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\" @click=\"$root.toggle_sidebar()\">Academia</a>\n            </div>\n            <!-- Menu -->\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"#\">test</a></li>\n            </ul>\n            <!-- Anonymous user -->\n            <ul class=\"nav navbar-nav navbar-right\" v-if=\"!$root.user\">\n                <li><router-link to=\"/users/register\"><span class=\"glyphicon glyphicon-plus\"></span>&nbsp;&nbsp;Register</router-link></li>\n                <li><router-link to=\"/users/login\"><span class=\"glyphicon glyphicon-log-in\"></span>&nbsp;&nbsp;Log-in</router-link></li>\n            </ul>\n            <!-- Current user -->\n            <ul class=\"nav navbar-nav navbar-right\" v-if=\"$root.user\">\n                <li class=\"dropdown\">\n                    <button class=\"btn btn-link dropdown-toggle\" data-toggle=\"dropdown\">\n                        <span class=\"glyphicon glyphicon-user\"></span>&nbsp;&nbsp;\n                        {{$root.user.username}}\n                        <b class=\"caret\"></b>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        <li><a class=\"dropdown-item\" @click=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span>&nbsp;&nbsp;Logout</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    <!-- Content view -->\n    <div class=\"container-fluid\">\n        <div class=\"sidebar\" :class=\"$root.sidebar_classes\" id=\"root-side-bar\">\n            <ul class=\"nav sidebar-group\">\n                <li><router-link to=\"/\"><span class=\"glyphicon glyphicon-search\"></span> 论文搜索</router-link></li>\n                <li><router-link to=\"/users/space\"><span class=\"glyphicon glyphicon-globe\"></span> 我的空间</router-link></li>\n                <li><router-link to=\"/papers/upload\"><span class=\"glyphicon glyphicon-upload\"></span> 上传论文</router-link></li>\n            </ul>\n        </div>\n        <div :class=\"$root.router_view_classes\" id=\"main-view\">\n            <router-view></router-view>\n        </div>\n    </div>\n</body>\n</template>\n<!-- Script -->\n<script>\nimport {User, adaptor} from \"academia/models\";\nimport {AUTH_TOKEN_HEADER} from \"academia/config\";\n\nexport default {\n    //Methods\n    methods: {\n        //Logout\n        logout()\n        {   //Log user out\n            User.logout();\n            //Remove authentication token\n            delete adaptor.defaults.httpConfig.headers[AUTH_TOKEN_HEADER];\n            //Reset user\n            this.$root.user = null;\n        }\n    },\n    mounted(){\n        $(\"#root-side-bar\").mouseleave(()=>{\n            this.$root.toggle_sidebar();\n        });\n    }\n};\n</script>\n<!-- Style -->\n<style>\n/* Sidebar */\n.sidebar\n{   position: fixed;\n    top: 52px;\n    bottom: 0;\n    left: -200px;\n    width: 200px;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    background-color: #f5f5f5;\n    opacity: 0.9;\n}\n\n#main-view {\n    margin-top: 100px;\n}\n\n/* Sidebar group */\n.sidebar-group\n{   margin-right: -21px;\n    margin-bottom: 20px;\n    margin-left: -20px;\n}\n\n/* Sidebar group links */\n.sidebar-group > li > a\n{   padding-right: 20px;\n    padding-left: 20px;\n}\n\n.sidebar-group > .active > a,\n.sidebar-group > .active > a:hover,\n.sidebar-group > .active > a:focus\n{   color: #fff;\n    background-color: #428bca;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _models = __webpack_require__(43);
	
	var _config = __webpack_require__(49);
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    //Methods
	    methods: {
	        //Logout
	        logout() {
	            //Log user out
	            _models.User.logout();
	            //Remove authentication token
	            delete _models.adaptor.defaults.httpConfig.headers[_config.AUTH_TOKEN_HEADER];
	            //Reset user
	            this.$root.user = null;
	        }
	    },
	    mounted() {
	        $("#root-side-bar").mouseleave(() => {
	            this.$root.toggle_sidebar();
	        });
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Note = exports.Paper = exports.User = exports.adaptor = exports.store = undefined;
	
	var _jsData = __webpack_require__(44);
	
	var _jsDataHttp = __webpack_require__(45);
	
	var _jsDataHttp2 = _interopRequireDefault(_jsDataHttp);
	
	var _lodash = __webpack_require__(46);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _util = __webpack_require__(48);
	
	var _config = __webpack_require__(49);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//[ Data store ]
	//Data store
	let store = exports.store = new _jsData.DS();
	//HTTP adaptor
	//Models.js: Academia backend API-mapped models.
	let adaptor = exports.adaptor = new _jsDataHttp2.default({
	    //Base path
	    basePath: "http://101.200.176.184:8080",
	    //Deserialize
	    deserialize: _util.parse_resp,
	    //Query transform
	    queryTransform: _util.transform_query,
	    //HTTP default configuration
	    httpConfig: {
	        headers: {}
	    }
	});
	
	//Request transformer (Cannot be added to adaptor settings)
	adaptor.http.defaults.transformRequest.unshift(_util.transform_request_form_data);
	//Register adaptor
	store.registerAdapter(_config.ADAPTOR_NAME, adaptor, { default: true });
	
	//[ Models ]
	//User model
	let User = exports.User = store.defineResource("users");
	
	let Paper = exports.Paper = store.defineResource({
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
	
	let Note = exports.Note = store.defineResource("notes");
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
	
	window.User = User;
	window.Paper = Paper;
	window.Note = Note;
	
	//[ Resource Actions & Data ]
	//User model
	_lodash2.default.extend(User, {
	    login: (0, _util.res_action)(User, "login"),
	    logout: (0, _util.res_action)(User, "logout")
	});

/***/ },
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.contains = exports.nin = exports.in_ = exports.lte = exports.lt = exports.gte = exports.gt = exports.neq = exports.eq = exports.not = exports.or = exports.and = undefined;
	exports.encode = encode;
	exports.decode = decode;
	exports.b64encode = b64encode;
	exports.b64decode = b64decode;
	exports.urlsafe_b64encode = urlsafe_b64encode;
	exports.urlsafe_b64decode = urlsafe_b64decode;
	exports.transform_query = transform_query;
	exports.parse_resp = parse_resp;
	exports.transform_request_form_data = transform_request_form_data;
	exports.to_plain = to_plain;
	exports.res_action = res_action;
	exports.res_data = res_data;
	exports.inst_action = inst_action;
	exports.inst_data = inst_data;
	exports.html_error = html_error;
	
	var _lodash = __webpack_require__(46);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _config = __webpack_require__(49);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//[ Encoding ]
	//Encode unicode string to byte string
	function encode(unicode_str, encoding = "utf-8") {
	    let bytes = new TextEncoder(encoding).encode(unicode_str);
	    return String.fromCharCode.apply(null, bytes);
	}
	
	//Decode byte string to unicode string
	//Data.js: Data and model utilities for frontend
	function decode(bytes_str, encoding = "utf-8") {
	    let bytes = new Uint8Array(bytes_str.length);
	    for (let i = 0; i < bytes_str.length; i++) bytes[i] = bytes_str.charCodeAt(i);
	    return new TextDecoder(encoding).decode(bytes);
	}
	
	//Base64 encode
	function b64encode(str, encoding = "utf-8") {
	    return btoa(encode(str, encoding));
	}
	
	//Base64 decode
	function b64decode(str, encoding = "utf-8") {
	    return decode(atob(str), encoding);
	}
	
	//URL-safe Base64 encode
	function urlsafe_b64encode(str, encoding = "utf-8") {
	    return encodeURIComponent(b64encode(str, encoding));
	}
	
	//URL-safe Base64 decode
	function urlsafe_b64decode(str, encoding = "utf-8") {
	    return b64decode(decodeURIComponent(str), encoding);
	}
	
	//Query transformer
	function transform_query(config, params) {
	    if (!_lodash2.default.isEmpty(params)) params = { json_params: urlsafe_b64encode(JSON.stringify(params)) };
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
	function parse_resp(config, resp) {
	    //Response
	    if (!resp) return null;
	    //Response data
	    let resp_data = resp.data;
	    if (!resp_data) return resp;
	    //Main data
	    let main_data = resp_data.data;
	    if (!main_data) return resp_data;
	    return main_data;
	}
	
	/**
	 * Transform request to FormData.
	 */
	function transform_request_form_data(data) {
	    //Transform detection
	    let need_transform = false;
	    for (let key in data) if (data[key] instanceof Blob) {
	        need_transform = true;
	        break;
	    }
	
	    //Transform data to FormData
	    if (need_transform) {
	        let form_data = new FormData();
	        for (let key in data) if (data[key] instanceof Blob) form_data.append(key, data[key]);else form_data.append(key, JSON.stringify(data[key]));
	        data = form_data;
	    }
	
	    return data;
	}
	
	//To plain object
	function to_plain(obj) {
	    if (_lodash2.default.isArray(obj)) return obj.map(to_plain);
	
	    let plain_obj = {};
	    for (let key in obj) if (!key.startsWith("DS")) plain_obj[key] = obj[key];
	
	    return plain_obj;
	}
	
	//[ Model Actions & Data ]
	/**
	 * Get resource path from model
	 *
	 * @param model - Model object.
	 * @return Base path of the resource associated with the model.
	 */
	function get_res_path(model) {
	    let adaptor = model.getAdapter(_config.ADAPTOR_NAME);
	    let base_path = adaptor.defaults.basePath || model.basePath || "";
	    return `${ base_path }/${ model.endpoint }`;
	}
	
	/**
	 * Define resource action.
	 *
	 * @param model - Model object.
	 * @param name - Resource action data name.
	 * @param default_http_opts - Default options used by underlying transport.
	 * @return A function corresponding with given resource action API endpoint.
	 */
	function res_action(model, name, default_http_opts = {}) {
	    //Path
	    let path = `${ get_res_path(model) }/${ name }`;
	    //Adaptor and transport
	    let adaptor = model.getAdapter(_config.ADAPTOR_NAME),
	        http = adaptor.http;
	
	    return function (params = null, http_opts = {}) {
	        //HTTP options
	        let final_opts = _lodash2.default.merge({ url: path, data: params, method: "POST" }, adaptor.defaults.httpConfig, default_http_opts, http_opts);
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
	function res_data(model, name, default_http_opts = {}) {
	    //Path
	    let path = `${ get_res_path(model) }/${ name }`;
	    //Adaptor and transport
	    let adaptor = model.getAdapter(_config.ADAPTOR_NAME),
	        http = adaptor.http;
	
	    return function (params = null, http_opts = {}) {
	        //HTTP options
	        let final_opts = _lodash2.default.merge({ url: path, params: params, method: "GET" }, adaptor.defaults.httpConfig, default_http_opts, http_opts);
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
	function inst_action(model, name, default_http_opts = {}) {
	    //Path
	    let path = `${ get_res_path(model) }/${ this.id }/${ name }`;
	    //Adaptor and transport
	    let adaptor = model.getAdapter(_config.ADAPTOR_NAME),
	        http = adaptor.http;
	
	    return function (params = null, http_opts = {}) {
	        //HTTP options
	        let final_opts = _lodash2.default.merge({ url: path, data: params, method: "POST" }, adaptor.defaults.httpConfig, default_http_opts, http_opts);
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
	function inst_data(model, name, default_http_opts = {}) {
	    //Path
	    let path = `${ get_res_path(model) }/${ this.id }/${ name }`;
	    //Adaptor and transport
	    let adaptor = model.getAdapter(_config.ADAPTOR_NAME),
	        http = adaptor.http;
	
	    return function (params = null, http_opts = {}) {
	        //HTTP options
	        let final_opts = _lodash2.default.merge({ url: path, params: params, method: "GET" }, adaptor.defaults.httpConfig, default_http_opts, http_opts);
	        //Fetch data
	        return http(final_opts);
	    };
	}
	
	//[ Query Builder ]
	//Command query operators
	let and = exports.and = _lodash2.default.bind(Array, null, "and");
	let or = exports.or = _lodash2.default.bind(Array, null, "or");
	let not = exports.not = _lodash2.default.bind(Array, null, "not");
	let eq = exports.eq = _lodash2.default.bind(Array, null, "eq");
	let neq = exports.neq = _lodash2.default.bind(Array, null, "neq");
	let gt = exports.gt = _lodash2.default.bind(Array, null, "gt");
	let gte = exports.gte = _lodash2.default.bind(Array, null, "gte");
	let lt = exports.lt = _lodash2.default.bind(Array, null, "lt");
	let lte = exports.lte = _lodash2.default.bind(Array, null, "lte");
	let in_ = exports.in_ = _lodash2.default.bind(Array, null, "in");
	let nin = exports.nin = _lodash2.default.bind(Array, null, "nin");
	let contains = exports.contains = _lodash2.default.bind(Array, null, "contains");
	
	//[ Error Handling ]
	//Unknown error prompt
	const UNKNOWN_ERROR_PROMPT = "Something wrong happened. But I don't understand.";
	//Server error prompt
	const SERVER_ERROR_PROMPT = "The remote server exploded. :(";
	
	//Error name to handler mapping
	let error_handler_mapping = {
	    //Server error
	    exception(data) {
	        //Print back trace
	        console.error(`A(n) ${ data.exception_type } occured at server side.\n\n${ data.backtrace }`);
	        //Humorous prompt
	        return SERVER_ERROR_PROMPT;
	    },
	    //Argument format
	    arg_fmt(data) {
	        let html = "Illegal input found:<ul>";
	        //Print each field and reason
	        let errors = data.errors;
	        for (let field in data.errors) html += `<li>${ field }: ${ errors[field] }</li>`;
	        html += "</ul>";
	
	        return html;
	    }
	};
	
	/**
	 * Convert error information to HTML.
	 *
	 * @param data - Error data.
	 * @return HTML error description.
	 */
	function html_error(data) {
	    //Delegate to specific error handler
	    if (data.type in error_handler_mapping) return error_handler_mapping[data.type](resp);
	    //No error handler found
	    else return UNKNOWN_ERROR_PROMPT;
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//Config.js: Configurations and constants
	
	//Adaptor
	const ADAPTOR_NAME = exports.ADAPTOR_NAME = "http";
	//Authentication token header
	const AUTH_TOKEN_HEADER = exports.AUTH_TOKEN_HEADER = "X-Academia-Auth-Token";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('body', [_h('nav', {
	    staticClass: "navbar navbar-default navbar-fixed-top",
	    attrs: {
	      "role": "navigation"
	    }
	  }, [_h('div', {
	    staticClass: "container-fluid"
	  }, [_h('div', {
	    staticClass: "navbar-header"
	  }, [_h('a', {
	    staticClass: "navbar-brand",
	    attrs: {
	      "href": "javascript:void(0)"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$root.toggle_sidebar()
	      }
	    }
	  }, ["Academia"])]), " ", " ", _vm._m(0), " ", " ", (!_vm.$root.user) ? _h('ul', {
	    staticClass: "nav navbar-nav navbar-right"
	  }, [_h('li', [_h('router-link', {
	    attrs: {
	      "to": "/users/register"
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-plus"
	  }), "  Register"])]), " ", _h('li', [_h('router-link', {
	    attrs: {
	      "to": "/users/login"
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-log-in"
	  }), "  Log-in"])])]) : _vm._e(), " ", " ", (_vm.$root.user) ? _h('ul', {
	    staticClass: "nav navbar-nav navbar-right"
	  }, [_h('li', {
	    staticClass: "dropdown"
	  }, [_h('button', {
	    staticClass: "btn btn-link dropdown-toggle",
	    attrs: {
	      "data-toggle": "dropdown"
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-user"
	  }), "  \n                        " + _vm._s(_vm.$root.user.username) + "\n                        ", _h('b', {
	    staticClass: "caret"
	  })]), " ", _h('ul', {
	    staticClass: "dropdown-menu"
	  }, [_h('li', [_h('a', {
	    staticClass: "dropdown-item",
	    on: {
	      "click": function($event) {
	        _vm.logout()
	      }
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-log-out"
	  }), "  Logout"])])])])]) : _vm._e()])]), " ", " ", _h('div', {
	    staticClass: "container-fluid"
	  }, [_h('div', {
	    staticClass: "sidebar",
	    class: _vm.$root.sidebar_classes,
	    attrs: {
	      "id": "root-side-bar"
	    }
	  }, [_h('ul', {
	    staticClass: "nav sidebar-group"
	  }, [_h('li', [_h('router-link', {
	    attrs: {
	      "to": "/"
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-search"
	  }), " 论文搜索"])]), " ", _h('li', [_h('router-link', {
	    attrs: {
	      "to": "/users/space"
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-globe"
	  }), " 我的空间"])]), " ", _h('li', [_h('router-link', {
	    attrs: {
	      "to": "/papers/upload"
	    }
	  }, [_h('span', {
	    staticClass: "glyphicon glyphicon-upload"
	  }), " 上传论文"])])])]), " ", _h('div', {
	    class: _vm.$root.router_view_classes,
	    attrs: {
	      "id": "main-view"
	    }
	  }, [_h('router-view')])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('ul', {
	    staticClass: "nav navbar-nav"
	  }, [_h('li', {
	    staticClass: "active"
	  }, [_h('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, ["test"])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1e11b50c", module.exports)
	  }
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(52)
	
	/* script */
	__vue_exports__ = __webpack_require__(54)
	
	/* template */
	var __vue_template__ = __webpack_require__(55)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ab5e9bd0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ab5e9bd0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ab5e9bd0!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ab5e9bd0!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.center-vertical {\n    display: block;\n    position:absolute;\n    top:50%;\n    transform:translateY(-50%);\n}\n", "", {"version":3,"sources":["/./src/views/index.vue?d3e30128"],"names":[],"mappings":";AA6CA;IACA,eAAA;IACA,kBAAA;IACA,QAAA;IACA,2BAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div>\n        <div class=\"row center-vertical\">\n            <div class=\"col-sm-2 col-md-3 col-lg-3\"></div>\n            <div class=\"col-sm-8 col-md-6 col-lg-6\">\n                <div align=\"center\">\n                    <h1 class=\"big-title\">Academia Search</h1>\n                    <br>\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"search_input\" placeholder=\"在Academia上搜索论文\" v-model=\"search_text\" data-toggle=\"popover\" data-placement=\"bottom\" data-content=\"你至少需要一个关键词\" data-trigger=\"manual\" v-on:keyup.enter=\"search()\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" @click=\"search()\">\n                                Search!\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-2 col-md-3 col-lg-3\"></div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            search_text: \"\"\n        };\n    },\n    methods: {\n        search() {\n            if (this.search_text.length == 0) {\n                $(\"#search_input\").popover('show');\n            } else {\n                $(\"#search_input\").popover('hide');\n                this.$router.push({path: \"papers/list\", query: {query: encodeURIComponent(this.search_text)}});\n            }\n        }\n    }\n};\n</script>\n\n<style>\n\n.center-vertical {\n    display: block;\n    position:absolute;\n    top:50%;\n    transform:translateY(-50%);\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    data() {
	        return {
	            search_text: ""
	        };
	    },
	    methods: {
	        search() {
	            if (this.search_text.length == 0) {
	                $("#search_input").popover('show');
	            } else {
	                $("#search_input").popover('hide');
	                this.$router.push({ path: "papers/list", query: { query: encodeURIComponent(this.search_text) } });
	            }
	        }
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "row center-vertical"
	  }, [_h('div', {
	    staticClass: "col-sm-2 col-md-3 col-lg-3"
	  }), " ", _h('div', {
	    staticClass: "col-sm-8 col-md-6 col-lg-6"
	  }, [_h('div', {
	    attrs: {
	      "align": "center"
	    }
	  }, [_h('h1', {
	    staticClass: "big-title"
	  }, ["Academia Search"]), " ", _h('br'), " ", _h('div', {
	    staticClass: "input-group"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.search_text),
	      expression: "search_text"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "id": "search_input",
	      "placeholder": "在Academia上搜索论文",
	      "data-toggle": "popover",
	      "data-placement": "bottom",
	      "data-content": "你至少需要一个关键词",
	      "data-trigger": "manual"
	    },
	    domProps: {
	      "value": _vm._s(_vm.search_text)
	    },
	    on: {
	      "keyup": function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        _vm.search()
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.search_text = $event.target.value
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "input-group-btn"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    on: {
	      "click": function($event) {
	        _vm.search()
	      }
	    }
	  }, ["\n                            Search!\n                        "])])])])]), " ", _h('div', {
	    staticClass: "col-sm-2 col-md-3 col-lg-3"
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ab5e9bd0", module.exports)
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(57)
	
	/* template */
	var __vue_template__ = __webpack_require__(58)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/users/login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-bf887930", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-bf887930", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] login.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _models = __webpack_require__(43);
	
	var _util = __webpack_require__(48);
	
	var _config = __webpack_require__(49);
	
	exports.default = {
	    //View data
	    data() {
	        return {
	            username: null,
	            password: null
	        };
	    },
	    //Methods
	    methods: {
	        login() {
	            _models.User.login({
	                username: this.username,
	                password: this.password
	            }).then(resp => {
	                let data = resp.data;
	
	                //Set user and token
	                let token = this.$root.token = data.token;
	                this.$root.user = data.user;
	                //Set token header
	                _models.adaptor.defaults.httpConfig.headers[_config.AUTH_TOKEN_HEADER] = token;
	
	                //Jump to index page
	                this.$router.push("/");
	            }, e => {
	                alert(JSON.stringify(e));
	            });
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-sm-3 col-md-4 col-lg-4"
	  }), " ", _h('div', {
	    staticClass: "col-sm-6 col-md-4 col-lg-4"
	  }, [_h('div', {
	    staticClass: "well",
	    attrs: {
	      "align": "center"
	    }
	  }, [_h('h1', ["Login"]), " ", _h('hr'), " ", _h('div', {
	    staticClass: "alert alert-info"
	  }, ["\n                    Haven't got an account?\n                    ", _h('router-link', {
	    staticClass: "alert-link",
	    attrs: {
	      "to": "/users/register"
	    }
	  }, ["Register here"]), ".\n                "]), " ", _h('form', {
	    staticClass: "form-horizontal",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_h('div', {
	    staticClass: "form-group"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.username),
	      expression: "username"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "Username"
	    },
	    domProps: {
	      "value": _vm._s(_vm.username)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.username = $event.target.value
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.password),
	      expression: "password"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "password",
	      "placeholder": "Password"
	    },
	    domProps: {
	      "value": _vm._s(_vm.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.password = $event.target.value
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('button', {
	    staticClass: "btn btn-primary",
	    on: {
	      "click": function($event) {
	        _vm.login()
	      }
	    }
	  }, ["Log In"]), " \n                        ", _h('button', {
	    staticClass: "btn btn-default"
	  }, ["I Forget Password"])])])])]), " ", _h('div', {
	    staticClass: "col-sm-3 col-md-4 col-lg-4"
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-bf887930", module.exports)
	  }
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(60)
	
	/* template */
	var __vue_template__ = __webpack_require__(61)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/users/register.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4909bc74", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4909bc74", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] register.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _models = __webpack_require__(43);
	
	exports.default = {
	    //View model data
	    data() {
	        return {
	            username: null,
	            email: null,
	            password: null
	        };
	    },
	    //Methods
	    methods: {
	        //User register
	        register_user() {
	            _models.User.create({
	                username: this.username,
	                email: this.email,
	                password: this.password
	            }).then(user => {
	                this.$router.push("login");
	            }, e => {
	                alert(JSON.stringify(e));
	            });
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-sm-3 col-md-4 col-lg-4"
	  }), " ", _h('div', {
	    staticClass: "col-sm-6 col-md-4 col-lg-4"
	  }, [_h('div', {
	    staticClass: "well",
	    attrs: {
	      "align": "center"
	    }
	  }, [_h('h1', ["Register"]), " ", _h('hr'), " ", _h('div', {
	    staticClass: "alert alert-info"
	  }, ["\n                    Already have an account?\n                    ", _h('router-link', {
	    staticClass: "alert-link",
	    attrs: {
	      "to": "/users/login"
	    }
	  }, ["Log-in here"]), ".\n                "]), " ", _h('form', {
	    staticClass: "form-horizontal",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_h('div', {
	    staticClass: "form-group"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.username),
	      expression: "username"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "Username"
	    },
	    domProps: {
	      "value": _vm._s(_vm.username)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.username = $event.target.value
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.email),
	      expression: "email"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "email",
	      "placeholder": "E-Mail"
	    },
	    domProps: {
	      "value": _vm._s(_vm.email)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.email = $event.target.value
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.password),
	      expression: "password"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "password",
	      "placeholder": "Password"
	    },
	    domProps: {
	      "value": _vm._s(_vm.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.password = $event.target.value
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('button', {
	    staticClass: "btn btn-primary",
	    on: {
	      "click": function($event) {
	        _vm.register_user()
	      }
	    }
	  }, ["Register"])])])])]), " ", _h('div', {
	    staticClass: "col-sm-3 col-md-4 col-lg-4"
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4909bc74", module.exports)
	  }
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(63)
	
	/* script */
	__vue_exports__ = __webpack_require__(65)
	
	/* template */
	var __vue_template__ = __webpack_require__(66)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/users/space.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-644aa2f6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-644aa2f6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] space.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-644aa2f6!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./space.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-644aa2f6!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./space.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.paper_item {\n    width: 70%;\n}\n.portrait {\n    max-width: 90%;\n    max-height: 90%;\n    border: solid 1px grey;\n    border-radius: 5px;\n}\n.center {\n    width: 300px;\n    display: block;\n    position: relative;\n    margin: 12% auto;\n}\n.btn-front {\n    width: 230px;\n}\n", "", {"version":3,"sources":["/./src/views/users/space.vue?45453fc9"],"names":[],"mappings":";AA+GA;IACA,WAAA;CACA;AAEA;IACA,eAAA;IACA,gBAAA;IACA,uBAAA;IACA,mBAAA;CACA;AAEA;IACA,aAAA;IACA,eAAA;IACA,mBAAA;IACA,iBAAA;CACA;AAEA;IACA,aAAA;CACA","file":"space.vue","sourcesContent":["<!-- component template -->\n<template>\n<div>\n    <div class=\"row\" v-if=\"this.$root.user != null\">\n        <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n        <div class=\"col-sm-10 col-md-10 col-lg-10\">\n            <div class=\"row\">\n                <h3>个人信息</h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3 col-md-3 col-lg-3\">\n                    <img class=\"portrait\" :src=\"`${user.avatar}`\" align=\"center\"/>\n                    <p align=\"center\">{{user.username}}</p>\n                </div>\n                <div class=\"col-sm-3 col-md-3 col-lg-3\">\n                    <p><strong>邮箱：</strong>{{user.email}}</p>\n                    <p><strong>职业：</strong>{{user.job}}</p>\n                    <p><strong>贡献值：</strong>{{user.contribution}}</p>\n                </div>\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                     <h4>个人简介</h4>\n                     <p>{{ user.self_introduction }}</p>\n                </div>\n            </div>\n            <hr />\n            <div class=\"row\">\n                <h3>我收藏的论文</h3>\n            </div>\n            <div class=\"row\">\n                <!-- <div class=\"col-sm-1 col-md-1 col-lg-1\" v-for=\"paper in this.papers\">\n                    <div class=\"well paper_item\" align=\"center\">\n                        aaa\n                    </div>\n                </div> -->\n\n                <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n                <div class=\"col-sm-10 col-md-10 col-lg-10\">\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\" v-for=\"paper in this.papers\">\n                            <p><router-link :to=\"`academia/papers/detail?paper_id=${paper.id}`\"><strong>{{paper.title}}</strong></router-link></p>\n                            <p>作者：{{paper.authors}}</p>\n                            <p>会议：{{paper.conference}}</p>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n            </div>\n        </div>\n        <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n    </div>\n    <div class=\"row\" v-else>\n        <div class=\"well center\" align=\"center\">\n            <h4>你还没有登录</h4>\n            <button class=\"btn btn-primary btn-front\" @click=\"to_register()\">注册</button>\n            <br>\n            <p>or</p>\n            <button class=\"btn btn-primary btn-front\" @click=\"to_login()\">登录</button>\n        </div>\n    </div>\n</div>\n</template>\n<!-- script -->\n<script>\nexport default {\n    data()\n    {\n        return {\n            user: {\n                id: 123,\n                username: \"可达鸭\",\n                email: \"aa@bb.cc\",\n                job: \"学生\",\n                self_introduction: \"Lorem ipsum dolor sit amet, ligula suspendisse nulla pretium, rhoncus tempor fermentum, enim integer ad vestibulum volutpat. Nisl rhoncus turpis est, vel elit, congue wisi enim nunc ultricies sit, magna tincidunt. Maecenas aliquam maecenas ligula nostra, accumsan taciti. Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras\",\n                avatar: \"https://media.52poke.com/wiki/thumb/5/53/054Psyduck.png/240px-054Psyduck.png\",\n                contribution: \"233\"\n            },\n            papers: [\n                {\n                    id: 233,\n                    title: \"Benchmarking Data Curation Systems\",\n                    authors: \"Patricia C. Arocena, Boris Glavic, Giansalvatore Mecca\",\n                    conference: \"IEEE Special Issue 2016\",\n                    publish_date: null\n                }, {\n                    id: 234,\n                    title: \"Data Anamnesis: Admitting Raw Data into an Organization\",\n                    authors: \"Sebastian Kruse, Thorsten Papenbrock, Hazar Harmouch, and Felix Naumann\",\n                    conference: \"IEEE Special Issue 2016\",\n                    publish_date: null\n                }, {\n                    id: 235,\n                    title: \"Data Quality for Temporal Streams\",\n                    authors: \"Tamraparni Dasu, Rong Duan, Divesh Srivastava\",\n                    conference: \"IEEE Special Issue 2016\",\n                    publish_date: null\n                }\n            ]\n        }\n    },\n    methods: {\n        to_register() {\n            this.$router.push(\"register\");\n        },\n        to_login() {\n            this.$router.push(\"login\");\n        }\n    }\n};\n</script>\n\n<style>\n.paper_item {\n    width: 70%;\n}\n\n.portrait {\n    max-width: 90%;\n    max-height: 90%;\n    border: solid 1px grey;\n    border-radius: 5px;\n}\n\n.center {\n    width: 300px;\n    display: block;\n    position: relative;\n    margin: 12% auto;\n}\n\n.btn-front {\n    width: 230px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    data() {
	        return {
	            user: {
	                id: 123,
	                username: "可达鸭",
	                email: "aa@bb.cc",
	                job: "学生",
	                self_introduction: "Lorem ipsum dolor sit amet, ligula suspendisse nulla pretium, rhoncus tempor fermentum, enim integer ad vestibulum volutpat. Nisl rhoncus turpis est, vel elit, congue wisi enim nunc ultricies sit, magna tincidunt. Maecenas aliquam maecenas ligula nostra, accumsan taciti. Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras",
	                avatar: "https://media.52poke.com/wiki/thumb/5/53/054Psyduck.png/240px-054Psyduck.png",
	                contribution: "233"
	            },
	            papers: [{
	                id: 233,
	                title: "Benchmarking Data Curation Systems",
	                authors: "Patricia C. Arocena, Boris Glavic, Giansalvatore Mecca",
	                conference: "IEEE Special Issue 2016",
	                publish_date: null
	            }, {
	                id: 234,
	                title: "Data Anamnesis: Admitting Raw Data into an Organization",
	                authors: "Sebastian Kruse, Thorsten Papenbrock, Hazar Harmouch, and Felix Naumann",
	                conference: "IEEE Special Issue 2016",
	                publish_date: null
	            }, {
	                id: 235,
	                title: "Data Quality for Temporal Streams",
	                authors: "Tamraparni Dasu, Rong Duan, Divesh Srivastava",
	                conference: "IEEE Special Issue 2016",
	                publish_date: null
	            }]
	        };
	    },
	    methods: {
	        to_register() {
	            this.$router.push("register");
	        },
	        to_login() {
	            this.$router.push("login");
	        }
	    }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [(this.$root.user != null) ? _h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  }), " ", _h('div', {
	    staticClass: "col-sm-10 col-md-10 col-lg-10"
	  }, [_vm._m(0), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-sm-3 col-md-3 col-lg-3"
	  }, [_h('img', {
	    staticClass: "portrait",
	    attrs: {
	      "src": ("" + (_vm.user.avatar)),
	      "align": "center"
	    }
	  }), " ", _h('p', {
	    attrs: {
	      "align": "center"
	    }
	  }, [_vm._s(_vm.user.username)])]), " ", _h('div', {
	    staticClass: "col-sm-3 col-md-3 col-lg-3"
	  }, [_h('p', [_h('strong', ["邮箱："]), _vm._s(_vm.user.email)]), " ", _h('p', [_h('strong', ["职业："]), _vm._s(_vm.user.job)]), " ", _h('p', [_h('strong', ["贡献值："]), _vm._s(_vm.user.contribution)])]), " ", _h('div', {
	    staticClass: "col-sm-6 col-md-6 col-lg-6"
	  }, [_h('h4', ["个人简介"]), " ", _h('p', [_vm._s(_vm.user.self_introduction)])])]), " ", _h('hr'), " ", _vm._m(1), " ", _h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  }), " ", _h('div', {
	    staticClass: "col-sm-10 col-md-10 col-lg-10"
	  }, [_h('ul', {
	    staticClass: "list-group"
	  }, [_vm._l((this.papers), function(paper) {
	    return _h('li', {
	      staticClass: "list-group-item"
	    }, [_h('p', [_h('router-link', {
	      attrs: {
	        "to": ("academia/papers/detail?paper_id=" + (paper.id))
	      }
	    }, [_h('strong', [_vm._s(paper.title)])])]), " ", _h('p', ["作者：" + _vm._s(paper.authors)]), " ", _h('p', ["会议：" + _vm._s(paper.conference)])])
	  })])]), " ", _h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  })])]), " ", _h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  })]) : _h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "well center",
	    attrs: {
	      "align": "center"
	    }
	  }, [_h('h4', ["你还没有登录"]), " ", _h('button', {
	    staticClass: "btn btn-primary btn-front",
	    on: {
	      "click": function($event) {
	        _vm.to_register()
	      }
	    }
	  }, ["注册"]), " ", _h('br'), " ", _h('p', ["or"]), " ", _h('button', {
	    staticClass: "btn btn-primary btn-front",
	    on: {
	      "click": function($event) {
	        _vm.to_login()
	      }
	    }
	  }, ["登录"])])]), " "])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "row"
	  }, [_h('h3', ["个人信息"])])
	},function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "row"
	  }, [_h('h3', ["我收藏的论文"])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-644aa2f6", module.exports)
	  }
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(68)
	
	/* script */
	__vue_exports__ = __webpack_require__(70)
	
	/* template */
	var __vue_template__ = __webpack_require__(71)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/papers/detail.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-cb2b1282", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-cb2b1282", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] detail.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-cb2b1282!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-cb2b1282!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"detail.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _models = __webpack_require__(43);
	
	var _util = __webpack_require__(48);
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    //Data
	    data() {
	        return {
	            paper: {
	                id: 0,
	                title: null,
	                authors: null,
	                conference: null,
	                publish_date: null,
	                abstract: null
	            }
	        };
	    },
	    //Mounted
	    mounted() {
	        var _this = this;
	
	        return _asyncToGenerator(function* () {
	            let paper_id = _this.$route.query.paper_id;
	            _this.paper = (0, _util.to_plain)((yield _models.Paper.find(paper_id)));
	        })();
	    }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('h1', [_vm._s(_vm.paper.title)]), " ", _h('hr'), " ", _h('p', ["Author: " + _vm._s(_vm.paper.authors)]), " ", _h('p', ["Conference: " + _vm._s(_vm.paper.conference)]), " ", _h('p', ["Time: " + _vm._s(_vm.paper.publish_date)]), " ", _h('br'), " ", _h('p', [_vm._s(_vm.paper.abstract)]), " ", " ", _h('div', {
	    attrs: {
	      "align": "right"
	    }
	  }, [_h('button', {
	    staticClass: "btn btn-primary"
	  }, ["下载论文"]), " ", _h('router-link', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "to": ("/notes/upload?paper_id=" + (_vm.paper.id))
	    }
	  }, ["撰写笔记"]), " ", _h('router-link', {
	    staticClass: "btn btn-info",
	    attrs: {
	      "to": ("/papers/content?paper_id=" + (_vm.paper.id))
	    }
	  }, ["在线查看"])]), " ", " ", _h('h2', ["热门问答"]), " ", _h('hr'), " ", " ", _h('h2', ["推荐笔记"]), " ", _h('hr')])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-cb2b1282", module.exports)
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(73)
	
	/* script */
	__vue_exports__ = __webpack_require__(75)
	
	/* template */
	var __vue_template__ = __webpack_require__(76)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/papers/content.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-188450fb", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-188450fb", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] content.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-188450fb!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./content.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-188450fb!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./content.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\n#paper-pdf\n{   width: 100%;\n    height: 600px;\n    border-style: solid;\n    border-width: 1px;\n}\n", "", {"version":3,"sources":["/./src/views/papers/content.vue?2dc5fc98"],"names":[],"mappings":";AAsDA;IACA,YAAA;IACA,cAAA;IACA,oBAAA;IACA,kBAAA;CACA","file":"content.vue","sourcesContent":["<template>\n<div>\n    <div class=\"col-sm-9 col-md-9 col-lg-9\">\n        <iframe id=\"paper-pdf\" src=\"./vendor/pdf.js/web/viewer.html?file=file:///Users/lqf/Playground/1.pdf\"></iframe>\n    </div>\n    <div class=\"col-sm-3 col-md-3 col-lg-3\">\n        <h2>热门版本</h2>\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" v-for=\"note in paper.notes\">\n                名称：{{note.title}}<br />\n                作者：{{note.author.username}}\n            </li>\n        </ul>\n    </div>\n</div>\n</template>\n\n<script>\nimport {Paper} from \"academia/models\";\nimport {to_plain} from \"academia/util\";\n\nexport default {\n    //Mount\n    async mounted()\n    {   let paper_id = this.$route.query.paper_id;\n        let paper = await Paper.find(paper_id, {\n            params: {\n                with: [\"notes\", \"notes.author\"]\n            }\n        });\n\n        let notes = to_plain(paper.notes);\n        console.log(paper);\n        for (let i=0;i<notes.length;i++)\n            notes[i].author = to_plain(paper.notes[i].author);\n\n        this.paper = {\n            ...to_plain(paper),\n            notes\n        };\n    },\n    //Data\n    data()\n    {   return {\n            paper: {\n                notes: []\n            }\n        };\n    },\n    //\n}\n</script>\n\n<style>\n#paper-pdf\n{   width: 100%;\n    height: 600px;\n    border-style: solid;\n    border-width: 1px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _models = __webpack_require__(43);
	
	var _util = __webpack_require__(48);
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    //Mount
	    mounted() {
	        var _this = this;
	
	        return _asyncToGenerator(function* () {
	            let paper_id = _this.$route.query.paper_id;
	            let paper = yield _models.Paper.find(paper_id, {
	                params: {
	                    with: ["notes", "notes.author"]
	                }
	            });
	
	            let notes = (0, _util.to_plain)(paper.notes);
	            console.log(paper);
	            for (let i = 0; i < notes.length; i++) notes[i].author = (0, _util.to_plain)(paper.notes[i].author);
	
	            _this.paper = _extends({}, (0, _util.to_plain)(paper), {
	                notes
	            });
	        })();
	    },
	    //Data
	    data() {
	        return {
	            paper: {
	                notes: []
	            }
	        };
	    }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "col-sm-9 col-md-9 col-lg-9"
	  }, [_h('iframe', {
	    attrs: {
	      "id": "paper-pdf",
	      "src": "./vendor/pdf.js/web/viewer.html?file=file:///Users/lqf/Playground/1.pdf"
	    }
	  })]), " ", _h('div', {
	    staticClass: "col-sm-3 col-md-3 col-lg-3"
	  }, [_h('h2', ["热门版本"]), " ", _h('ul', {
	    staticClass: "list-group"
	  }, [_vm._l((_vm.paper.notes), function(note) {
	    return _h('li', {
	      staticClass: "list-group-item"
	    }, ["\n                名称：" + _vm._s(note.title), _h('br'), "\n                作者：" + _vm._s(note.author.username) + "\n            "])
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-188450fb", module.exports)
	  }
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(78)
	
	/* script */
	__vue_exports__ = __webpack_require__(80)
	
	/* template */
	var __vue_template__ = __webpack_require__(81)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/papers/list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-16d33e0c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-16d33e0c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] list.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-16d33e0c!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-16d33e0c!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Sidebar */\n.result-div {\n    border-style: solid;\n    border-width: 1px;\n    border-color: grey;\n    background-color: #FFFFFF;\n}\n.result-container\n{\n    padding: 7px;\n}\n\n", "", {"version":3,"sources":["/./src/views/papers/list.vue?39c4d482"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwGA,aAAA;AACA;IACA,oBAAA;IACA,kBAAA;IACA,mBAAA;IACA,0BAAA;CACA;AAEA;;IAEA,aAAA;CACA","file":"list.vue","sourcesContent":["<!-- Component template -->\n<template>\n<div>\n    <div class=\"row\">\n        <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n        <div class=\"col-sm-10 col-md-10 col-lg-10\">\n            <div>\n                <form class=\"form-horizontal\" @submit.prevent>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                      Academia\n                    </span>\n                    <input id=\"query_arg\" type=\"text\" class=\"form-control\" placeholder=\"在Academia上搜索论文\" v-model=\"query_arg\"  data-container=\"body\" data-toggle=\"popover\" data-placement=\"bottom\" data-content=\"你至少需要一个关键词\"/>\n                    <span class=\"input-group-btn\">\n                      <button class=\"btn btn-default\" @click=\"search()\">Search!</button>&nbsp;\n                    </span>\n                  </div>\n                </form>\n                <hr />\n            </div>\n        </div>\n        <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n    </div>\n    <div class=\"row result-container\" v-for=\"item in papers_list\" >\n        <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n        <div class=\"col-sm-10 col-md-10 col-lg-10 result-div\" @click=\"detail(item.id)\">\n            <div>\n                <h5>{{item.title}}</h5>\n                <h6>{{item.authors}}</h5>\n                <h6>{{item.date}}</h5>\n            </div>\n        </div>\n        <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n    </div>\n    <div class=\"row result-container\" @click=\"more_paper()\">\n        <div class=\"col-sm-5 col-md-5 col-lg-5\"></div>\n        <div class=\"col-sm-2 col-md-2 col-lg-2 result-div\">\n            <div align=\"center\">\n                <h5>more paper</h5>\n            </div>\n        </div>\n        <div class=\"col-sm-5 col-md-5 col-lg-5\"></div>\n    </div>\n    </template>\n\n<!-- Script -->\n<script>\nimport {Paper, adaptor} from \"academia/models\";\nimport {to_plain, contains} from \"academia/util\";\nimport {AUTH_TOKEN_HEADER} from \"academia/config\";\n\nexport default {\n    //View data\n    data() {\n      return {\n        papers_list: [],\n        query_arg: \"\"\n      };\n    },\n    mounted() {\n      this.query_arg = decodeURIComponent(this.$route.query.query)\n      this.current_num = 0\n      this.each_load = 10\n      Paper.findAll({\n        query: contains(\"title\", this.query_arg),\n        offset: 0,\n        limit: this.each_load\n      }).then((plist) => {\n        this.current_num += this.each_load\n        this.papers_list = plist\n        return plist;\n      })\n    },\n    //Methods\n    methods: {\n      search() {\n        if (this.query_arg.length == 0) {\n          $(\"#query_arg\").popover('show');\n        } else {\n          $(\"#query_arg\").popover('hide');\n          this.$router.push({path: \"/papers/list\", query: {query: encodeURIComponent(this.query_arg)}});\n        }\n      },\n      detail(p_id) {\n        console.log(p_id)\n        this.$router.push({path: \"/papers/detail\", query: {paper_id: p_id}});\n      },\n      more_paper() {\n        Paper.findAll({\n          query: contains(\"title\", this.query_arg),\n          offset: this.current_num,\n          limit: this.each_load\n        }).then((plist) => {\n          this.current_num += this.each_load\n          for (let item of plist) {\n            this.papers_list.push(item)\n          }\n          return plist;\n        })\n      },\n    }\n};\n</script>\n<style>\n/* Sidebar */\n.result-div {\n    border-style: solid;\n    border-width: 1px;\n    border-color: grey;\n    background-color: #FFFFFF;\n}\n\n.result-container\n{\n    padding: 7px;\n}\n\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _models = __webpack_require__(43);
	
	var _util = __webpack_require__(48);
	
	var _config = __webpack_require__(49);
	
	exports.default = {
	  //View data
	  data() {
	    return {
	      papers_list: [],
	      query_arg: ""
	    };
	  },
	  mounted() {
	    this.query_arg = decodeURIComponent(this.$route.query.query);
	    this.current_num = 0;
	    this.each_load = 10;
	    _models.Paper.findAll({
	      query: (0, _util.contains)("title", this.query_arg),
	      offset: 0,
	      limit: this.each_load
	    }).then(plist => {
	      this.current_num += this.each_load;
	      this.papers_list = plist;
	      return plist;
	    });
	  },
	  //Methods
	  methods: {
	    search() {
	      if (this.query_arg.length == 0) {
	        $("#query_arg").popover('show');
	      } else {
	        $("#query_arg").popover('hide');
	        this.$router.push({ path: "/papers/list", query: { query: encodeURIComponent(this.query_arg) } });
	      }
	    },
	    detail(p_id) {
	      console.log(p_id);
	      this.$router.push({ path: "/papers/detail", query: { paper_id: p_id } });
	    },
	    more_paper() {
	      _models.Paper.findAll({
	        query: (0, _util.contains)("title", this.query_arg),
	        offset: this.current_num,
	        limit: this.each_load
	      }).then(plist => {
	        this.current_num += this.each_load;
	        for (let item of plist) {
	          this.papers_list.push(item);
	        }
	        return plist;
	      });
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  }), " ", _h('div', {
	    staticClass: "col-sm-10 col-md-10 col-lg-10"
	  }, [_h('div', [_h('form', {
	    staticClass: "form-horizontal",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_h('div', {
	    staticClass: "input-group"
	  }, [_h('span', {
	    staticClass: "input-group-addon"
	  }, ["\n                      Academia\n                    "]), " ", _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.query_arg),
	      expression: "query_arg"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "id": "query_arg",
	      "type": "text",
	      "placeholder": "在Academia上搜索论文",
	      "data-container": "body",
	      "data-toggle": "popover",
	      "data-placement": "bottom",
	      "data-content": "你至少需要一个关键词"
	    },
	    domProps: {
	      "value": _vm._s(_vm.query_arg)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.query_arg = $event.target.value
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "input-group-btn"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    on: {
	      "click": function($event) {
	        _vm.search()
	      }
	    }
	  }, ["Search!"]), " \n                    "])])]), " ", _h('hr')])]), " ", _h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  })]), " ", _vm._l((_vm.papers_list), function(item) {
	    return _h('div', {
	      staticClass: "row result-container"
	    }, [_h('div', {
	      staticClass: "col-sm-1 col-md-1 col-lg-1"
	    }), " ", _h('div', {
	      staticClass: "col-sm-10 col-md-10 col-lg-10 result-div",
	      on: {
	        "click": function($event) {
	          _vm.detail(item.id)
	        }
	      }
	    }, [_h('div', [_h('h5', [_vm._s(item.title)]), " ", _h('h6', [_vm._s(item.authors), " ", _h('h6', [_vm._s(item.date)])])])]), " ", _h('div', {
	      staticClass: "col-sm-1 col-md-1 col-lg-1"
	    })])
	  }), " ", _h('div', {
	    staticClass: "row result-container",
	    on: {
	      "click": function($event) {
	        _vm.more_paper()
	      }
	    }
	  }, [_h('div', {
	    staticClass: "col-sm-5 col-md-5 col-lg-5"
	  }), " ", _vm._m(0), " ", _h('div', {
	    staticClass: "col-sm-5 col-md-5 col-lg-5"
	  })])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "col-sm-2 col-md-2 col-lg-2 result-div"
	  }, [_h('div', {
	    attrs: {
	      "align": "center"
	    }
	  }, [_h('h5', ["more paper"])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-16d33e0c", module.exports)
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(83)
	
	/* script */
	__vue_exports__ = __webpack_require__(85)
	
	/* template */
	var __vue_template__ = __webpack_require__(86)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/papers/upload.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6c9bd722", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6c9bd722", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] upload.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6c9bd722!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6c9bd722!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\ntextarea {\n    max-width: 100%;\n}\n[class^='col-'] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n", "", {"version":3,"sources":["/./src/views/papers/upload.vue?ff2077d6"],"names":[],"mappings":";AA2IA;IACA,gBAAA;CACA;AACA;EACA,kBAAA;EACA,qBAAA;CACA","file":"upload.vue","sourcesContent":["<template>\n<div>\n    <div class=\"row\">\n        <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n        <div class=\"col-sm-10 col-md-10 col-lg-10\">\n            <h1>上传论文</h1>\n            <hr />\n            <form class=\"form-horizontal\" role=\"form\" @submit.prevent>\n                <div class=\"control-group\">\n                    <div class=\"col-sm-10\">\n                        <label for=\"paper_title\">论文标题</label>\n                        <input type=\"text\" class=\"form-control\" id=\"paper_title\" placeholder=\"Title of the paper\" v-model=\"title\">\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"col-sm-10\">\n                        <label for=\"paper_author\">论文作者</label>\n                        <input type=\"text\" class=\"form-control\" id=\"paper_author\" placeholder=\"Authors of the paper\" v-model=\"authors\">\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"col-sm-10\">\n                        <label for=\"paper_conf\">发表会议</label>\n                        <input type=\"text\" class=\"form-control\" id=\"paper_conf\" placeholder=\"Conference this paper was originally published on\" v-model=\"conference\">\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"col-sm-10\">\n                        <label>发表时间</label>\n                        <div class=\"form-inline\">\n                        <select class=\"form-control\" id=\"year_select\" v-model=\"year\">\n                            <option>选择年份</option>\n                        </select>\n                        年\n                        <select class=\"form-control\" v-model=\"month\">\n                            <option>选择月份</option>\n                            <option>1</option>\n                            <option>2</option>\n                            <option>3</option>\n                            <option>4</option>\n                            <option>5</option>\n                            <option>6</option>\n                            <option>7</option>\n                            <option>8</option>\n                            <option>9</option>\n                            <option>10</option>\n                            <option>11</option>\n                            <option>12</option>\n                        </select>\n                        月\n                        </div>\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"col-sm-10\">\n                        <label>论文摘要</label>\n                        <div class=\"textarea\">\n                            <textarea type=\"\" class=\"col-sm-12 form-control\" v-model=\"abstract\"></textarea>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"col-sm-10\">\n                        <label>选择文件</label>\n                        <input class=\"input-file\" type=\"file\" id=\"file_selector\">\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"controls col-sm-10\">\n                        <button class=\"btn btn-default\" @click=\"upload()\">提交</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n    </div>\n</div>\n</template>\n\n<script>\nimport $ from \"jquery\";\nexport default {\n    data() {\n        return {\n            title: \"\",\n            authors: \"\",\n            abstract: \"\",\n            conference: \"\",\n            year: \"选择年份\",\n            month: \"选择月份\"\n        }\n    },\n    mounted() {\n        let sel = $(\"#year_select\");\n        const year_start = 2016;\n        for (let i = 0; i < 50; i++) {\n            sel.append(`<option>${year_start - i}</option>`);\n        }\n        console.log(\"added\");\n    },\n    methods: {\n        upload() {\n\n            console.log(`${this.title}, ${this.authors}`);\n\n            if (!this.check_input()) {\n                alert(\"有一些必填项没有填写\");\n                return;\n            }\n\n            let sel = $(\"#file_selector\")[0];\n            if (sel && sel.files.length > 0) {\n                this.upload_file = sel.files[0];\n            } else {\n                alert(\"你需要选择上传的文件\");\n                return;\n            }\n            Paper.create({\n                title: this.title,\n                authors: this.authors,\n                abstract: this.abstract,\n                conference: this.conference,\n                // publish_date: this.publish_date(),\n                paper_file: this.upload_file\n            }).then((paper) => {\n                this.$router.push({path: \"detail\", query: {paper_id: paper.id}});\n            });\n        },\n        publish_date() {\n            return `${this.year}-${this.month}`;\n        },\n        check_input() {\n            return this.title.length > 0 && this.authors.length > 0;\n        }\n    }\n};\n</script>\n\n<style>\ntextarea {\n    max-width: 100%;\n}\n[class^='col-'] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data() {
	        return {
	            title: "",
	            authors: "",
	            abstract: "",
	            conference: "",
	            year: "选择年份",
	            month: "选择月份"
	        };
	    },
	    mounted() {
	        let sel = (0, _jquery2.default)("#year_select");
	        const year_start = 2016;
	        for (let i = 0; i < 50; i++) {
	            sel.append(`<option>${ year_start - i }</option>`);
	        }
	        console.log("added");
	    },
	    methods: {
	        upload() {
	
	            console.log(`${ this.title }, ${ this.authors }`);
	
	            if (!this.check_input()) {
	                alert("有一些必填项没有填写");
	                return;
	            }
	
	            let sel = (0, _jquery2.default)("#file_selector")[0];
	            if (sel && sel.files.length > 0) {
	                this.upload_file = sel.files[0];
	            } else {
	                alert("你需要选择上传的文件");
	                return;
	            }
	            Paper.create({
	                title: this.title,
	                authors: this.authors,
	                abstract: this.abstract,
	                conference: this.conference,
	                // publish_date: this.publish_date(),
	                paper_file: this.upload_file
	            }).then(paper => {
	                this.$router.push({ path: "detail", query: { paper_id: paper.id } });
	            });
	        },
	        publish_date() {
	            return `${ this.year }-${ this.month }`;
	        },
	        check_input() {
	            return this.title.length > 0 && this.authors.length > 0;
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  }), " ", _h('div', {
	    staticClass: "col-sm-10 col-md-10 col-lg-10"
	  }, [_h('h1', ["上传论文"]), " ", _h('hr'), " ", _h('form', {
	    staticClass: "form-horizontal",
	    attrs: {
	      "role": "form"
	    },
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_h('div', {
	    staticClass: "control-group"
	  }, [_h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('label', {
	    attrs: {
	      "for": "paper_title"
	    }
	  }, ["论文标题"]), " ", _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.title),
	      expression: "title"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "id": "paper_title",
	      "placeholder": "Title of the paper"
	    },
	    domProps: {
	      "value": _vm._s(_vm.title)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.title = $event.target.value
	      }
	    }
	  })])]), " ", _h('div', {
	    staticClass: "control-group"
	  }, [_h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('label', {
	    attrs: {
	      "for": "paper_author"
	    }
	  }, ["论文作者"]), " ", _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.authors),
	      expression: "authors"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "id": "paper_author",
	      "placeholder": "Authors of the paper"
	    },
	    domProps: {
	      "value": _vm._s(_vm.authors)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.authors = $event.target.value
	      }
	    }
	  })])]), " ", _h('div', {
	    staticClass: "control-group"
	  }, [_h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('label', {
	    attrs: {
	      "for": "paper_conf"
	    }
	  }, ["发表会议"]), " ", _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.conference),
	      expression: "conference"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "id": "paper_conf",
	      "placeholder": "Conference this paper was originally published on"
	    },
	    domProps: {
	      "value": _vm._s(_vm.conference)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.conference = $event.target.value
	      }
	    }
	  })])]), " ", _h('div', {
	    staticClass: "control-group"
	  }, [_h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('label', ["发表时间"]), " ", _h('div', {
	    staticClass: "form-inline"
	  }, [_h('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.year),
	      expression: "year"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "id": "year_select"
	    },
	    on: {
	      "change": function($event) {
	        _vm.year = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }
	    }
	  }, [_h('option', ["选择年份"])]), "\n                        年\n                        ", _h('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.month),
	      expression: "month"
	    }],
	    staticClass: "form-control",
	    on: {
	      "change": function($event) {
	        _vm.month = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }
	    }
	  }, [_h('option', ["选择月份"]), " ", _h('option', ["1"]), " ", _h('option', ["2"]), " ", _h('option', ["3"]), " ", _h('option', ["4"]), " ", _h('option', ["5"]), " ", _h('option', ["6"]), " ", _h('option', ["7"]), " ", _h('option', ["8"]), " ", _h('option', ["9"]), " ", _h('option', ["10"]), " ", _h('option', ["11"]), " ", _h('option', ["12"])]), "\n                        月\n                        "])])]), " ", _h('div', {
	    staticClass: "control-group"
	  }, [_h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('label', ["论文摘要"]), " ", _h('div', {
	    staticClass: "textarea"
	  }, [_h('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.abstract),
	      expression: "abstract"
	    }],
	    staticClass: "col-sm-12 form-control",
	    attrs: {
	      "type": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.abstract)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.abstract = $event.target.value
	      }
	    }
	  })])])]), " ", _vm._m(0), " ", _h('div', {
	    staticClass: "control-group"
	  }, [_h('div', {
	    staticClass: "controls col-sm-10"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    on: {
	      "click": function($event) {
	        _vm.upload()
	      }
	    }
	  }, ["提交"])])])])]), " ", _h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  })])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "control-group"
	  }, [_h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('label', ["选择文件"]), " ", _h('input', {
	    staticClass: "input-file",
	    attrs: {
	      "type": "file",
	      "id": "file_selector"
	    }
	  })])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6c9bd722", module.exports)
	  }
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(88)
	
	/* template */
	var __vue_template__ = __webpack_require__(105)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/notes/upload.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-507758b9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-507758b9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] upload.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simplemde = __webpack_require__(89);
	
	var _simplemde2 = _interopRequireDefault(_simplemde);
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _models = __webpack_require__(43);
	
	var _util = __webpack_require__(48);
	
	var _config = __webpack_require__(49);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  //View data
	  data() {
	    return {
	      note_title: "",
	      related_paper: "",
	      note_content: "",
	      paper: null
	    };
	  },
	  mounted() {
	    let p_id = this.$route.query.paper_id;
	    let n_id = this.$route.query.note_id;
	    console.log(p_id);
	    this.paper = _models.Paper.get(p_id);
	    if (n_id) {
	      _models.Note.find(n_id).then(x => {
	        this.note_title = x.title;
	        this.note_content = x.content;
	        this.note = x;
	      });
	    }
	
	    if (this.paper == null) {
	      _models.Paper.find(p_id).then(x => {
	        this.paper = x;
	        this.related_paper = this.paper.title;
	        if (this.note && this.note.paper != p_id) {
	          this.error_visit = true;
	          alert("错误的访问");
	          return;
	        }
	      });
	    } else {
	      this.related_paper = this.paper.title;
	    }
	    //Editor
	    this.query_arg = decodeURIComponent(this.$route.query.note_id);
	    this.editor = new _simplemde2.default({
	      elements: (0, _jquery2.default)("#note_content")
	    });
	  },
	  //Methods
	  methods: {
	    create_or_modify_note(event) {
	      if (this.error_visit) {
	        alert("错误的访问");
	        return;
	      }
	      if (!this.check_input()) {
	        alert("有一些必填项没有填写");
	        return;
	      }
	      if ((0, _jquery2.default)("#file-selector")[0].files.length == 0) {
	        alert("至少上传一份注释文件！");
	        return;
	      }
	      if (this.$route.query.note_id === undefined) {
	        _models.Note.create({
	          title: this.note_title,
	          content: this.note_content,
	          annotation_file: (0, _jquery2.default)("#file-selector")[0].files[0],
	          paper: this.paper.id
	        }).then(resp => {
	          //Jump to index page
	          this.$router.go(-1);
	        }, e => {
	          alert(JSON.stringify(e));
	        });
	      } else {}
	    },
	    check_input() {
	      return this.note_title !== "" && this.related_paper !== "" && this.note_content !== "" && this.paper !== null;
	    }
	  },
	
	  //Computed properties
	  computed: {
	    note_content: {
	      get() {
	        if (this.editor) return this.editor.value();else return null;
	      },
	      set(markdown) {
	        if (this.editor) this.editor.value(markdown);
	      }
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "row"
	  }, [_h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  }), " ", _h('div', {
	    staticClass: "col-sm-10 col-md-10 col-lg-10"
	  }, [_h('div', [_h('h1', ["上传笔记"]), " ", _h('hr'), " ", _h('form', {
	    staticClass: "form-horizontal",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, [_h('div', {
	    staticClass: "form-group"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.note_title),
	      expression: "note_title"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": "笔记名称"
	    },
	    domProps: {
	      "value": _vm._s(_vm.note_title)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.note_title = $event.target.value
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.related_paper),
	      expression: "related_paper"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "disabled": "disable",
	      "type": "text",
	      "placeholder": "对应论文"
	    },
	    domProps: {
	      "value": _vm._s(_vm.related_paper)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.related_paper = $event.target.value
	      }
	    }
	  })]), " ", _vm._m(0), " ", _vm._m(1), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('button', {
	    staticClass: "btn btn-primary",
	    on: {
	      "click": function($event) {
	        _vm.create_or_modify_note()
	      }
	    }
	  }, ["发布"]), " \n                        ", _h('button', {
	    staticClass: "btn btn-primary",
	    on: {
	      "click": function($event) {
	        _vm.create_note()
	      }
	    }
	  }, ["暂存"]), " \n                    "])])])]), " ", _h('div', {
	    staticClass: "col-sm-1 col-md-1 col-lg-1"
	  })])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "form-group"
	  }, [_h('textarea', {
	    attrs: {
	      "id": "note_content"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "form-group"
	  }, [_h('input', {
	    attrs: {
	      "type": "file",
	      "id": "file-selector",
	      "placeholder": "笔记内容"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-507758b9", module.exports)
	  }
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(107)
	
	/* script */
	__vue_exports__ = __webpack_require__(109)
	
	/* template */
	var __vue_template__ = __webpack_require__(110)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lustralisk/Desktop/Lustralisk/作业/大三（上）/软工三/academia-client/src/views/misc/transfer.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f4822a18", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f4822a18", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] transfer.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(108);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f4822a18!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./transfer.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f4822a18!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./transfer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"transfer.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('h1', ["传输任务"]), " ", " ", _h('h2', ["正在上传"]), " ", _h('hr'), " ", " ", _h('h2', ["正在下载"]), " ", _h('hr')])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f4822a18", module.exports)
	  }
	}

/***/ }
]);
//# sourceMappingURL=bundle.js.map