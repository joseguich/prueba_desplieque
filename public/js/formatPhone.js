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

/***/ "./src/js/formatPhone.js":
/*!*******************************!*\
  !*** ./src/js/formatPhone.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst phone = document.querySelector(\"#phone\");\r\n\r\nphone.addEventListener(\"input\", (e) => {\r\n  const input = e.target;\r\n  let number = input.value.replace(/\\D/g, \"\"); // Elimina caracteres no númericos\r\n\r\n  if (number.length > 3 && number.length <= 6) {\r\n    number = `(${number.slice(0, 3)}) ${number.slice(3)}`;\r\n  } else if (number.length > 6) {\r\n    number = `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(\r\n      6,\r\n      10\r\n    )}`;\r\n  }\r\n\r\n  input.value = number;\r\n});\r\n\n\n//# sourceURL=webpack://microtech/./src/js/formatPhone.js?");

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
/******/ 	__webpack_modules__["./src/js/formatPhone.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;