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

/***/ "./src/js/desplegable.js":
/*!*******************************!*\
  !*** ./src/js/desplegable.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  //- Menú hamburguesa para móviles\n  const mobileMenuToggle = document.getElementById(\"mobile-menu-toggle\");\n  const mobileMenu = document.getElementById(\"mobile-menu\");\n  const hamburgerIcon = document.getElementById(\"hamburger-icon\"); // Selecciona el ícono del menú\n\n  if (mobileMenuToggle && mobileMenu) {\n    mobileMenuToggle.addEventListener(\"click\", () => {\n      mobileMenu.classList.toggle(\"hidden\");\n\n      // Cambiar entre el ícono de hamburguesa y la \"X\"\n      if (mobileMenu.classList.contains(\"hidden\")) {\n        hamburgerIcon.classList.remove(\"fa-times\"); // Quitar \"X\"\n        hamburgerIcon.classList.add(\"fa-bars\"); // Volver al menú hamburguesa\n      } else {\n        hamburgerIcon.classList.remove(\"fa-bars\"); // Quitar menú hamburguesa\n        hamburgerIcon.classList.add(\"fa-times\"); // Mostrar \"X\"\n      }\n    });\n  }\n\n  //- Desplegable del menú Reparación en versión escritorio\n  const repairMenuToggle = document.getElementById(\"repair-menu-toggle\");\n  const repairMenu = document.getElementById(\"repair-menu\");\n  const repairArrow = document.getElementById(\"repair-arrow\"); // Seleccionar la flecha\n\n  if (repairMenuToggle && repairMenu) {\n    repairMenuToggle.addEventListener(\"click\", () => {\n      repairMenu.classList.toggle(\"hidden\");\n      repairArrow.classList.toggle(\"rotate-180\"); // Rotar flecha\n    });\n  }\n\n  //- Desplegable del menú Reparación en versión móvil\n  const mobileRepairMenuToggle = document.getElementById(\n    \"mobile-repair-menu-toggle\"\n  );\n  const mobileRepairMenu = document.getElementById(\"mobile-repair-menu\");\n  const mobileRepairArrow = document.getElementById(\"mobile-repair-arrow\"); // Seleccionar la flecha\n\n  if (mobileRepairMenuToggle && mobileRepairMenu) {\n    mobileRepairMenuToggle.addEventListener(\"click\", () => {\n      mobileRepairMenu.classList.toggle(\"hidden\");\n      mobileRepairArrow.classList.toggle(\"rotate-180\"); // Rotar flecha\n    });\n  }\n});\n\n\n//# sourceURL=webpack://microtech/./src/js/desplegable.js?");

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
/******/ 	__webpack_modules__["./src/js/desplegable.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;