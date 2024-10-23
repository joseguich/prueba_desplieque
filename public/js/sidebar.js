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

/***/ "./src/js/sidebar.js":
/*!***************************!*\
  !*** ./src/js/sidebar.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst menuBtn = document.querySelector(\"#menu-btn\");\r\nconst sidebar = document.querySelector(\"#sidebar\");\r\nconst overlay = document.querySelector(\"#overlay\");\r\nconst hamburgerIcon = document.querySelector(\"#hamburger-icon\");\r\nconst closeIcon = document.querySelector(\"#close-icon\");\r\nconst subMenuBtns = document.querySelectorAll(\".submenu-btn\");\r\n\r\nmenuBtn.addEventListener(\"click\", () => {\r\n  const isOpen = !sidebar.classList.contains(\"-translate-x-full\");\r\n  sidebar.classList.toggle(\"-translate-x-full\", isOpen);\r\n  sidebar.classList.toggle(\"-translate-x-0\", !isOpen);\r\n  overlay.classList.toggle(\"hidden\", isOpen);\r\n\r\n  hamburgerIcon.classList.toggle(\"hidden\", !isOpen);\r\n  closeIcon.classList.toggle(\"hidden\", isOpen);\r\n});\r\n\r\noverlay.addEventListener(\"click\", () => {\r\n  sidebar.classList.add(\"-translate-x-full\");\r\n  sidebar.classList.remove(\"-translate-x-0\");\r\n  overlay.classList.add(\"hidden\");\r\n\r\n  hamburgerIcon.classList.remove(\"hidden\");\r\n  closeIcon.classList.add(\"hidden\");\r\n});\r\n\r\nsubMenuBtns.forEach((btn) => {\r\n  btn.addEventListener(\"click\", function (e) {\r\n    const submenu = this.nextElementSibling;\r\n    const icon = this.querySelector(\".submenu-icon\");\r\n\r\n    // Verficar si el Submenú ya esta abierto\r\n    const isOpen = !submenu.classList.contains(\"hidden\");\r\n\r\n    //Cerrar todos los submeús e iconos rotados\r\n    subMenuBtns.forEach((otherBtn) => {\r\n      const otherSubmenu = otherBtn.nextElementSibling;\r\n      const otherIcon = otherBtn.querySelector(\".submenu-icon\");\r\n\r\n      otherSubmenu.classList.add(\"hidden\");\r\n      otherIcon.classList.remove(\"rotate-180\");\r\n    });\r\n\r\n    if (!isOpen) {\r\n      submenu.classList.remove(\"hidden\");\r\n      icon.classList.add(\"rotate-180\");\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://microtech/./src/js/sidebar.js?");

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
/******/ 	__webpack_modules__["./src/js/sidebar.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;