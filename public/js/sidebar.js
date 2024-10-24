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

eval("__webpack_require__.r(__webpack_exports__);\nconst menuBtn = document.querySelector(\"#menu-btn\");\nconst sidebar = document.querySelector(\"#sidebar\");\nconst overlay = document.querySelector(\"#overlay\");\nconst hamburgerIcon = document.querySelector(\"#hamburger-icon\");\nconst closeIcon = document.querySelector(\"#close-icon\");\nconst subMenuBtns = document.querySelectorAll(\".submenu-btn\");\n\nmenuBtn.addEventListener(\"click\", () => {\n  const isOpen = !sidebar.classList.contains(\"-translate-x-full\");\n  sidebar.classList.toggle(\"-translate-x-full\", isOpen);\n  sidebar.classList.toggle(\"-translate-x-0\", !isOpen);\n  overlay.classList.toggle(\"hidden\", isOpen);\n\n  hamburgerIcon.classList.toggle(\"hidden\", !isOpen);\n  closeIcon.classList.toggle(\"hidden\", isOpen);\n});\n\noverlay.addEventListener(\"click\", () => {\n  sidebar.classList.add(\"-translate-x-full\");\n  sidebar.classList.remove(\"-translate-x-0\");\n  overlay.classList.add(\"hidden\");\n\n  hamburgerIcon.classList.remove(\"hidden\");\n  closeIcon.classList.add(\"hidden\");\n});\n\nsubMenuBtns.forEach((btn) => {\n  btn.addEventListener(\"click\", function (e) {\n    const submenu = this.nextElementSibling;\n    const icon = this.querySelector(\".submenu-icon\");\n\n    // Verficar si el Submenú ya esta abierto\n    const isOpen = !submenu.classList.contains(\"hidden\");\n\n    //Cerrar todos los submeús e iconos rotados\n    subMenuBtns.forEach((otherBtn) => {\n      const otherSubmenu = otherBtn.nextElementSibling;\n      const otherIcon = otherBtn.querySelector(\".submenu-icon\");\n\n      otherSubmenu.classList.add(\"hidden\");\n      otherIcon.classList.remove(\"rotate-180\");\n    });\n\n    if (!isOpen) {\n      submenu.classList.remove(\"hidden\");\n      icon.classList.add(\"rotate-180\");\n    }\n  });\n});\n\n\n//# sourceURL=webpack://microtech/./src/js/sidebar.js?");

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