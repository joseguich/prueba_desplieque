/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/spinner.js":
/*!***************************!*\
  !*** ./src/js/spinner.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst spinner = document.querySelector(\"#loader\");\r\nconst pages = document.querySelectorAll(\"a[href*='page']\");\r\nconst loaders = document.querySelectorAll(\".loader\");\r\nconst form = document.querySelector(\"form\");\r\n\r\nfunction showloader() {\r\n  spinner.classList.remove(\"hidden\");\r\n}\r\n\r\nfunction hidenLoader() {\r\n  spinner.classList.add(\"hidden\");\r\n}\r\n\r\npages.forEach((link) => {\r\n  link.addEventListener(\"click\", () => {\r\n    showloader();\r\n  });\r\n});\r\nloaders.forEach((link) => {\r\n  link.addEventListener(\"click\", () => {\r\n    showloader();\r\n  });\r\n});\r\n\r\nform.addEventListener(\"submit\", () => {\r\n  showloader();\r\n});\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n  hidenLoader();\r\n});\r\n\n\n//# sourceURL=webpack://microtech/./src/js/spinner.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/spinner.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;