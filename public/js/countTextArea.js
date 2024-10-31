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

/***/ "./src/js/countTextArea.js":
/*!*********************************!*\
  !*** ./src/js/countTextArea.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst textArea = document.querySelector(\"#address\");\r\nconst textAreaDescription = document.querySelector(\"#description\");\r\nconst count = document.querySelector(\"#count\");\r\n\r\nconst eventTextArea = (textArea) => {\r\n  if (!textArea.value.trim()) {\r\n    count.textContent = \"0 / 100\";\r\n    return;\r\n  }\r\n  const valueTextArea = textArea.value.length;\r\n\r\n  //Obtener el atributo maximo de caracteres\r\n  const maxLength = textArea.getAttribute(\"maxLength\");\r\n\r\n  count.textContent = `${valueTextArea} / ${maxLength}`;\r\n};\r\n\r\nif (textArea) textArea.addEventListener(\"input\", () => eventTextArea(textArea));\r\n\r\nif (textAreaDescription)\r\n  textAreaDescription.addEventListener(\"input\", () =>\r\n    eventTextArea(textAreaDescription)\r\n  );\r\n\n\n//# sourceURL=webpack://microtech/./src/js/countTextArea.js?");

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
/******/ 	__webpack_modules__["./src/js/countTextArea.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;