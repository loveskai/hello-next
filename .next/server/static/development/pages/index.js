module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/sky.lin/workspace/sky/hello-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function fetcher(url) {
  return fetch(url).then(r => r.json());
}

function Index() {
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(`/api/randomQuote${query.author ? '?author=' + query.author : ''}`, fetcher); // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`

  const author = data === null || data === void 0 ? void 0 : data.author;
  let quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return __jsx("main", {
    className: "jsx-1236022937" + " " + "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1236022937" + " " + "quote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, quote), author && __jsx("span", {
    className: "jsx-1236022937" + " " + "author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 24
    }
  }, "- ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1236022937",
    __self: this
  }, "main.jsx-1236022937{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-1236022937{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-1236022937{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9za3kubGluL3dvcmtzcGFjZS9za3kvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQndCLEFBR3FCLEFBTVUsQUFNRyxVQVhQLFVBTUYsR0FNQSxHQVhJLFFBTUgsR0FNQSxPQVhHLEtBTUUsR0FNdEIsVUFYQSxPQU1BIiwiZmlsZSI6Ii9Vc2Vycy9za3kubGluL3dvcmtzcGFjZS9za3kvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgICAgIGAvYXBpL3JhbmRvbVF1b3RlJHtxdWVyeS5hdXRob3IgPyAnP2F1dGhvcj0nICsgcXVlcnkuYXV0aG9yIDogJyd9YCxcbiAgICAgICAgZmV0Y2hlclxuICAgICk7XG4gICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGhhcyBvcHRpb25hbCBjaGFpbmluZywgYWRkZWQgaW4gTmV4dC5qcyB2OS4xLjUsXG4gICAgLy8gaXMgdGhlIHNhbWUgYXMgYGRhdGEgJiYgZGF0YS5hdXRob3JgXG4gICAgY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xuICAgIGxldCBxdW90ZSA9IGRhdGE/LnF1b3RlO1xuXG4gICAgaWYgKCFkYXRhKSBxdW90ZSA9ICdMb2FkaW5nLi4uJztcbiAgICBpZiAoZXJyb3IpIHF1b3RlID0gJ0ZhaWxlZCB0byBmZXRjaCB0aGUgcXVvdGUuJztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cbiAgICAgICAgICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+LSB7YXV0aG9yfTwvc3Bhbj59XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMzAwcHggYXV0bztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnF1b3RlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICM1NTk4MzQ7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/sky.lin/workspace/sky/hello-next/pages/index.js */"));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sky.lin/workspace/sky/hello-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map