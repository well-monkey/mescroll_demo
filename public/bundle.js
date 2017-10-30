/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Greeter = __webpack_require__(1);\n\nvar _Greeter2 = _interopRequireDefault(_Greeter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const greeter = require('./Greeter.js');\n\ndocument.querySelector(\"#root\").appendChild(greeter()); /**\r\n                                                         Created by liuximing on 2017/10/30.\r\n                                                         ╭︿︿︿╮\r\n                                                         {/ o o /}\r\n                                                         ( (oo) )\r\n                                                         ︶︶︶\r\n                                                         **///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiZ3JlZXRlciJdLCJtYXBwaW5ncyI6Ijs7QUFRQTs7Ozs7O0FBQ0E7O0FBRUFBLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NDLFdBQWhDLENBQTRDQyxTQUE1QyxFLENBWEEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gQ3JlYXRlZCBieSBsaXV4aW1pbmcgb24gMjAxNy8xMC8zMC5cclxuIOKVre+4v++4v++4v+KVrlxyXG4gey8gbyBvIC99XHJcbiAoIChvbykgKVxyXG4g77i277i277i2XHJcbiAqKi9cclxuXHJcbmltcG9ydCBHcmVldGVyIGZyb20gJy4vR3JlZXRlcic7XHJcbi8vIGNvbnN0IGdyZWV0ZXIgPSByZXF1aXJlKCcuL0dyZWV0ZXIuanMnKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKS5hcHBlbmRDaGlsZChncmVldGVyKCkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Greeter.js\nvar config = __webpack_require__(2);\n\nmodule.exports = function () {\n\tvar greet = document.createElement('div');\n\tgreet.textContent = config.greetText;\n\treturn greet;\n};\n\n// 之前的语法\n// module.exports = function() {\n// \tvar greet = document.createElement('div');\n// \tgreet.textContent = \"Hi there and greetings!\";\n// \treturn greet;\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvR3JlZXRlci5qcz9lYjg0Il0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JlZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdyZWV0VGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLFNBQVMsbUJBQUFDLENBQVEsQ0FBUixDQUFiOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCLFlBQVc7QUFDM0IsS0FBSUMsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FGLE9BQU1HLFdBQU4sR0FBb0JQLE9BQU9RLFNBQTNCO0FBQ0EsUUFBT0osS0FBUDtBQUNBLENBSkQ7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHcmVldGVyLmpzXHJcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy5qc29uJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBncmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGdyZWV0LnRleHRDb250ZW50ID0gY29uZmlnLmdyZWV0VGV4dDtcclxuXHRyZXR1cm4gZ3JlZXQ7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIOS5i+WJjeeahOivreazlVxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG4vLyBcdHZhciBncmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyBcdGdyZWV0LnRleHRDb250ZW50ID0gXCJIaSB0aGVyZSBhbmQgZ3JlZXRpbmdzIVwiO1xyXG4vLyBcdHJldHVybiBncmVldDtcclxuLy8gfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL0dyZWV0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = {\"greetText\":\"Hi there and greetings from JSON!\"}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlnLmpzb24/MTE1MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1wiZ3JlZXRUZXh0XCI6XCJIaSB0aGVyZSBhbmQgZ3JlZXRpbmdzIGZyb20gSlNPTiFcIn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb25maWcuanNvblxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);