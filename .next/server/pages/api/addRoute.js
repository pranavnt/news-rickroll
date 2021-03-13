module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/addRoute.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/addRoute.js":
/*!*******************************!*\
  !*** ./pages/api/addRoute.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Database = __webpack_require__(/*! @replit/database */ \"@replit/database\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const db = new Database();\n  let route = req.body.route;\n  let title = req.body.title;\n  db.get(route).then(value => {\n    console.log(value);\n  });\n  db.set(route, title).then(value => {\n    res.statusCode = 200;\n    res.json({\n      success: true\n    });\n  }).catch(err => {\n    res.json({\n      success: false\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWRkUm91dGUuanM/N2Y2MiJdLCJuYW1lcyI6WyJEYXRhYmFzZSIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJkYiIsInJvdXRlIiwiYm9keSIsInRpdGxlIiwiZ2V0IiwidGhlbiIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNldCIsInN0YXR1c0NvZGUiLCJqc29uIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQ0FBRCxDQUF4Qjs7QUFFZSxnRUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDM0IsUUFBTUMsRUFBRSxHQUFHLElBQUlKLFFBQUosRUFBWDtBQUNBLE1BQUlLLEtBQUssR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNELEtBQXJCO0FBQ0EsTUFBSUUsS0FBSyxHQUFHTCxHQUFHLENBQUNJLElBQUosQ0FBU0MsS0FBckI7QUFFQUgsSUFBRSxDQUFDSSxHQUFILENBQU9ILEtBQVAsRUFBY0ksSUFBZCxDQUFtQkMsS0FBSyxJQUFFO0FBQUNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQW1CLEdBQTlDO0FBRUFOLElBQUUsQ0FBQ1MsR0FBSCxDQUFPUixLQUFQLEVBQWNFLEtBQWQsRUFBcUJFLElBQXJCLENBQTBCQyxLQUFLLElBQUk7QUFDakNQLE9BQUcsQ0FBQ1csVUFBSixHQUFpQixHQUFqQjtBQUNBWCxPQUFHLENBQUNZLElBQUosQ0FBUztBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFUO0FBQ0QsR0FIRCxFQUdHQyxLQUhILENBR1NDLEdBQUcsSUFBRTtBQUNaZixPQUFHLENBQUNZLElBQUosQ0FBUztBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUFUO0FBQ0QsR0FMRDtBQVFELENBZkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYWRkUm91dGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEYXRhYmFzZSA9IHJlcXVpcmUoXCJAcmVwbGl0L2RhdGFiYXNlXCIpXG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBkYiA9IG5ldyBEYXRhYmFzZSgpXG4gIGxldCByb3V0ZSA9IHJlcS5ib2R5LnJvdXRlXG4gIGxldCB0aXRsZSA9IHJlcS5ib2R5LnRpdGxlXG5cbiAgZGIuZ2V0KHJvdXRlKS50aGVuKHZhbHVlPT57Y29uc29sZS5sb2codmFsdWUpfSlcblxuICBkYi5zZXQocm91dGUsIHRpdGxlKS50aGVuKHZhbHVlID0+IHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxuICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxuICB9KS5jYXRjaChlcnI9PntcbiAgICByZXMuanNvbih7c3VjY2VzczogZmFsc2V9KVxuICB9KVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/addRoute.js\n");

/***/ }),

/***/ "@replit/database":
/*!***********************************!*\
  !*** external "@replit/database" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@replit/database\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVwbGl0L2RhdGFiYXNlXCI/YjdiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVwbGl0L2RhdGFiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlcGxpdC9kYXRhYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@replit/database\n");

/***/ })

/******/ });