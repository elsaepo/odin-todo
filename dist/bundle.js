/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --blue-main: rgb(114, 144, 184);\n    --blue-light: rgb(215, 225, 238);\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Poppins, sans-serif;\n}\n\nh2, h4, h5 {\n    margin: 0;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nh5 {\n    font-size: 1rem;\n}\n\n#header {\n    height: 100px;\n    width: 100vw;\n    background-color: var(--blue-main);\n    display: flex;\n    align-items: center;\n}\n\n.title-text {\n    color: white;\n    text-align: center;\n    font-family: \"Roboto Mono\", monospace;\n    font-size: 3.5rem;\n    flex-grow: 1;\n}\n\n#body-container {\n    display: flex;\n    width: 100%;\n    height: calc(100vh - 100px);\n    background-color:rgb(217, 240, 239);\n}\n\n#sidebar {\n    background-color: var(--blue-light);\n    width: 350px;\n    height: 100%;\n}\n\n.nav-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 32px;\n}\n\n.nav-button {\n    height: 42px;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 12px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    transform: scale(1.07);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n    background-color: var(--blue-main);\n    color: white;\n}\n\n.nav-button:active {\n    background-color: rgb(189, 192, 230);\n}\n\n.nav-button h3 {\n    flex-grow: 1;\n}\n\n.nav-project-delete {\n    display: none;\n    width: 24px;\n    height: 24px;\n    padding: 8px;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid white;\n    border-radius: 50%;\n    opacity: 0.5;\n    z-index: 5;\n}\n\n.nav-button:hover .nav-project-delete {\n    display: flex\n}\n\n.nav-project-delete:hover {\n    background-color: rgb(240, 185, 185);\n    color: rgb(109, 44, 44);\n    border: 3px solid rgb(109, 44, 44);\n    opacity: 1;\n}\n\n.nav-add-project-container {\n    padding: 0 32px;\n}\n\n#add-project {\n    opacity: 0.4\n}\n\n#add-project:hover {\n    opacity: 1;\n}\n\n.nav-adding-project {\n    border: 2px solid rgb(70, 70, 70);\n    border-radius: 12px;\n    display: flex;\n    height: 150px;\n    opacity: 1;\n    justify-content: center;\n    flex-direction: column;\n    padding: 12px;\n    gap: 12px;\n    overflow: hidden;\n    transition: display 0.2s ease, height 0.1s ease;\n}\n\n.nav-hidden {\n    height: 0;\n    padding: 0;\n    gap: 0;\n    border: 0;\n    opacity: 0;\n    transition: opacity 0.2s ease, height .1s ease;\n}\n\n.nav-adding-project div {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 12px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project label {\n    width: 60px;\n    font-weight: 600;\n}\n\n.nav-adding-project input {\n    flex-grow: 1;\n    width: 100px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project button {\n    width: 100%;\n    border: 2px solid black;\n    border-radius: 12px;\n    background-color: rgb(158, 206, 194);\n    height: 32px;\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n.nav-adding-project button:hover {\n    cursor: pointer;\n    background-color: rgb(140, 228, 206);\n}\n\n.nav-adding-project button:active {\n    background-color: white;\n}\n\n#sidebar hr {\n    width: 80%;\n    border: none;\n    border-top: 4px solid white;\n}\n\n#main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    padding: 32px;\n    gap: 16px;\n}\n\n.task-container-header {\n    display: flex;\n    /* justify-content: space-between; */\n    align-items: center;\n    gap: 16px;\n}\n\n.task-container-header *:nth-child(2), .add-task {\n    border: 2px solid grey;\n    font-size: 1.1rem;\n    padding: 4px 8px;\n}\n\n.add-task {\n    font-weight: 600;\n    color: rgb(82, 82, 82);\n    background-color: rgb(223, 243, 223);\n}\n\n.add-task:hover {\n    cursor: pointer;\n    border: 2px solid black;\n    color: black;\n    background-color: rgb(201, 241, 201);\n}\n\n.add-task:active {\n    background-color: white;\n}\n\n.task-sorter, .task {\n    display: grid;\n    grid-template-columns: 40px 240px auto 80px 80px 24px 24px;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding-left: 18px;\n    padding-right: 12px;\n}\n\n.task-sorter {\n    font-weight: 600;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n/* Tasks */\n.task {\n    height: 40px;\n    background-color: rgb(248, 222, 226);\n    border-radius: 12px;\n    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.task:hover {\n    background-color: white;\n}\n\n.task-complete-box {\n    height: 20px;\n    width: 20px;\n    border: 2px solid rgb(129, 129, 129);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:active {\n    background-color: white;\n}\n\n.task-complete-box:hover {\n    cursor: pointer;\n    background-color: white;\n    border-color: black;\n    transform: scale(1.2);\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:hover::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: rgb(110, 110, 110);\n    padding: 0 0 8px 8px;\n}\n\n.task-complete-box:active::after {\n    color: black;\n}\n\n.task-box-completed {\n    opacity: 0.7;\n}\n\n.task-completed {\n    border-color: black;\n    background-color: white;\n}\n\n.task-completed::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: black;\n    padding: 0 0 8px 8px;\n}\n\n.task-completed ~ * {\n    color: grey;\n    text-decoration:line-through;\n}\n\n.task-edit, .task-delete {\n    color: grey;\n    transition: transform 0.1s ease;\n}\n\n.task-edit:hover, .task-delete:hover {\n    cursor: pointer;\n    color: black;\n    transform: scale(1.4);\n    transition: transform 0.1s ease;\n}\n\n/* Task edit and delete popup containers */\n.task-delete-screen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.task-delete-hidden {\n    display: none;\n}\n\n.task-delete-fade {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.task-delete-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 16px;\n    padding: 16px;\n    width: 400px;\n    height: 120px;\n    border: 4px solid black;\n    background-color: white;\n    border-radius: 24px;\n    z-index: 10;\n    transition: transform 0.2s ease;\n    box-shadow: 0 0 32px rgb(0, 0, 0);\n    animation: task-popup-box;\n    animation-duration: 0.2s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.project-delete-container {\n    height: 150px; \n}\n\n.task-delete-prompt {\n    text-align: center;\n    font-weight: 600;\n    margin: 0;\n    grid-column: 1 / 3;\n}\n\n.task-delete-button {\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 8px;\n    opacity: 0.7;\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.task-delete-button:hover {\n    opacity: 1;\n}\n\n.task-delete-button:active {\n    background-color: white;\n}\n\n.task-delete-button-yes {\n    background-color: rgb(233, 110, 110);\n}\n\n.task-delete-button-cancel {\n    background-color: rgb(199, 199, 199);\n}\n\n@keyframes task-popup-box {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap');\n\n:root {\n    --blue-main: rgb(114, 144, 184);\n    --blue-light: rgb(215, 225, 238);\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Poppins, sans-serif;\n}\n\nh2, h4, h5 {\n    margin: 0;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nh5 {\n    font-size: 1rem;\n}\n\n#header {\n    height: 100px;\n    width: 100vw;\n    background-color: var(--blue-main);\n    display: flex;\n    align-items: center;\n}\n\n.title-text {\n    color: white;\n    text-align: center;\n    font-family: \"Roboto Mono\", monospace;\n    font-size: 3.5rem;\n    flex-grow: 1;\n}\n\n#body-container {\n    display: flex;\n    width: 100%;\n    height: calc(100vh - 100px);\n    background-color:rgb(217, 240, 239);\n}\n\n#sidebar {\n    background-color: var(--blue-light);\n    width: 350px;\n    height: 100%;\n}\n\n.nav-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 32px;\n}\n\n.nav-button {\n    height: 42px;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 12px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    transform: scale(1.07);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n    background-color: var(--blue-main);\n    color: white;\n}\n\n.nav-button:active {\n    background-color: rgb(189, 192, 230);\n}\n\n.nav-button h3 {\n    flex-grow: 1;\n}\n\n.nav-project-delete {\n    display: none;\n    width: 24px;\n    height: 24px;\n    padding: 8px;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid white;\n    border-radius: 50%;\n    opacity: 0.5;\n    z-index: 5;\n}\n\n.nav-button:hover .nav-project-delete {\n    display: flex\n}\n\n.nav-project-delete:hover {\n    background-color: rgb(240, 185, 185);\n    color: rgb(109, 44, 44);\n    border: 3px solid rgb(109, 44, 44);\n    opacity: 1;\n}\n\n.nav-add-project-container {\n    padding: 0 32px;\n}\n\n#add-project {\n    opacity: 0.4\n}\n\n#add-project:hover {\n    opacity: 1;\n}\n\n.nav-adding-project {\n    border: 2px solid rgb(70, 70, 70);\n    border-radius: 12px;\n    display: flex;\n    height: 150px;\n    opacity: 1;\n    justify-content: center;\n    flex-direction: column;\n    padding: 12px;\n    gap: 12px;\n    overflow: hidden;\n    transition: display 0.2s ease, height 0.1s ease;\n}\n\n.nav-hidden {\n    height: 0;\n    padding: 0;\n    gap: 0;\n    border: 0;\n    opacity: 0;\n    transition: opacity 0.2s ease, height .1s ease;\n}\n\n.nav-adding-project div {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 12px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project label {\n    width: 60px;\n    font-weight: 600;\n}\n\n.nav-adding-project input {\n    flex-grow: 1;\n    width: 100px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project button {\n    width: 100%;\n    border: 2px solid black;\n    border-radius: 12px;\n    background-color: rgb(158, 206, 194);\n    height: 32px;\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n.nav-adding-project button:hover {\n    cursor: pointer;\n    background-color: rgb(140, 228, 206);\n}\n\n.nav-adding-project button:active {\n    background-color: white;\n}\n\n#sidebar hr {\n    width: 80%;\n    border: none;\n    border-top: 4px solid white;\n}\n\n#main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    padding: 32px;\n    gap: 16px;\n}\n\n.task-container-header {\n    display: flex;\n    /* justify-content: space-between; */\n    align-items: center;\n    gap: 16px;\n}\n\n.task-container-header *:nth-child(2), .add-task {\n    border: 2px solid grey;\n    font-size: 1.1rem;\n    padding: 4px 8px;\n}\n\n.add-task {\n    font-weight: 600;\n    color: rgb(82, 82, 82);\n    background-color: rgb(223, 243, 223);\n}\n\n.add-task:hover {\n    cursor: pointer;\n    border: 2px solid black;\n    color: black;\n    background-color: rgb(201, 241, 201);\n}\n\n.add-task:active {\n    background-color: white;\n}\n\n.task-sorter, .task {\n    display: grid;\n    grid-template-columns: 40px 240px auto 80px 80px 24px 24px;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding-left: 18px;\n    padding-right: 12px;\n}\n\n.task-sorter {\n    font-weight: 600;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n/* Tasks */\n.task {\n    height: 40px;\n    background-color: rgb(248, 222, 226);\n    border-radius: 12px;\n    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.task:hover {\n    background-color: white;\n}\n\n.task-complete-box {\n    height: 20px;\n    width: 20px;\n    border: 2px solid rgb(129, 129, 129);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:active {\n    background-color: white;\n}\n\n.task-complete-box:hover {\n    cursor: pointer;\n    background-color: white;\n    border-color: black;\n    transform: scale(1.2);\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:hover::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: rgb(110, 110, 110);\n    padding: 0 0 8px 8px;\n}\n\n.task-complete-box:active::after {\n    color: black;\n}\n\n.task-box-completed {\n    opacity: 0.7;\n}\n\n.task-completed {\n    border-color: black;\n    background-color: white;\n}\n\n.task-completed::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: black;\n    padding: 0 0 8px 8px;\n}\n\n.task-completed ~ * {\n    color: grey;\n    text-decoration:line-through;\n}\n\n.task-edit, .task-delete {\n    color: grey;\n    transition: transform 0.1s ease;\n}\n\n.task-edit:hover, .task-delete:hover {\n    cursor: pointer;\n    color: black;\n    transform: scale(1.4);\n    transition: transform 0.1s ease;\n}\n\n/* Task edit and delete popup containers */\n.task-delete-screen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.task-delete-hidden {\n    display: none;\n}\n\n.task-delete-fade {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.task-delete-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 16px;\n    padding: 16px;\n    width: 400px;\n    height: 120px;\n    border: 4px solid black;\n    background-color: white;\n    border-radius: 24px;\n    z-index: 10;\n    transition: transform 0.2s ease;\n    box-shadow: 0 0 32px rgb(0, 0, 0);\n    animation: task-popup-box;\n    animation-duration: 0.2s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.project-delete-container {\n    height: 150px; \n}\n\n.task-delete-prompt {\n    text-align: center;\n    font-weight: 600;\n    margin: 0;\n    grid-column: 1 / 3;\n}\n\n.task-delete-button {\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 8px;\n    opacity: 0.7;\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.task-delete-button:hover {\n    opacity: 1;\n}\n\n.task-delete-button:active {\n    background-color: white;\n}\n\n.task-delete-button-yes {\n    background-color: rgb(233, 110, 110);\n}\n\n.task-delete-button-cancel {\n    background-color: rgb(199, 199, 199);\n}\n\n@keyframes task-popup-box {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/actionHandler.js":
/*!******************************!*\
  !*** ./src/actionHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domCreator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domCreator.js */ "./src/domCreator.js");





// Event emitter listeners for selecting projects & displaying/removing them from DOM
_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("deleteProject", (project) => {
    // if the current project is displayed, remove it and replace with uncategorised
    if ((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)() === project.id) {
        (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(1);
        _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectHeader((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByID)(1));
        _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawTaskList((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByID)(1).taskList);
    }
    project.deleteProject();
});

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("newProject", (projectName, projectLabel) => {
    let newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName, projectLabel);
    _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectNav(newProject);
});

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("projectButton", (project) => {
    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project.id);
    _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectHeader(project);
    _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawTaskList(project.taskList);
});

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("taskComplete", (task) => {
    task.completed = !task.completed;
});

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("taskDelete", (task) => {
    task.parentProject.removeTask(task);
})

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("newTask", (projectID, taskTitle, taskDesc) => {
    let newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task(taskTitle, taskDesc);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByID)(projectID).addTask(newTask);
    _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].taskContainer.appendChild(_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawTask(newTask));
})


// Default projects for testing purposes
// title, description, dueDate, status, priority
let defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project("Uncategorised");
let defaultProject2 = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project("Todo list", "Study");
let defaultProject3 = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project("Driving game", "Work");
let myTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Gym session", "To work on these quads for the upcoming ski weekend", 220823, "uncompleted", "medium");
let myTask2 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Call QANTAS", "Figure out where my points are", 220902, "uncompleted", "medium");
let myTask3 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Make travel insurance claim", "get some money back from the Canada trip shenanigans", 220902, "uncompleted", "medium");
let myTask4 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Make tasks beautiful", "add rounded corners similar to sidebar buttons, drop shadows, nice spacing", false, "uncompleted", "medium");
let myTask5 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Add task button", "have to make a way to add tasks somehow aye", false, "uncompleted", "high");
let myTask6 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Move tasks between projects", "this is a bit harder - will need to remove current task from current project taskList, then add it to the new project and format appropriately", false, "uncompleted", "medium");
let myTask7 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Add footer", "add footer with my name and github link to source code", false, "uncompleted", "low");
let myTask8 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Add driving physics", "first things first, make the car feel amazing to drive", 221130, "uncompleted", "medium");
let myTask9 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Make Falls Creek road", "To work on these quads for the upcoming ski weekend", 230215, "uncompleted", "medium");
let myTask10 = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task("Add smoke particle effects", "To work on these quads for the upcoming ski weekend", 221130, "uncompleted", "low");
myTask.completed = true;
defaultProject.addTask(myTask);
defaultProject.addTask(myTask2);
defaultProject.addTask(myTask3);
defaultProject2.addTask(myTask4);
defaultProject2.addTask(myTask5);
defaultProject2.addTask(myTask6);
defaultProject2.addTask(myTask7);
defaultProject3.addTask(myTask8);
defaultProject3.addTask(myTask9);
defaultProject3.addTask(myTask10);

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectNav(defaultProject);
_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectNav(defaultProject2);
_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectNav(defaultProject3);

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectHeader(defaultProject);
_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawTaskList(defaultProject.taskList);

/***/ }),

/***/ "./src/domCreator.js":
/*!***************************!*\
  !*** ./src/domCreator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);


const eventEmitter = new events__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
const content = document.querySelector("#content");


// Functions for drawing elements to window
const drawSidebarLink = function (linkObj) {
    const navButton = document.createElement("div");
    navButton.id = linkObj.link || linkObj.id;
    navButton.classList.add("nav-button");
    const navIcon = document.createElement("i");
    linkObj.iconClasses.forEach(iconClass => navIcon.classList.add(iconClass));
    const navText = document.createElement("h3");
    navText.textContent = linkObj.title;
    navButton.appendChild(navIcon);
    navButton.appendChild(navText);
    return navButton;
}

const drawProjectNav = function (project) {
    const thisProjectButton = drawSidebarLink(project);
    thisProjectButton.addEventListener("mousedown", function () {
        eventEmitter.emit("projectButton", project);
    })
    if (project.id !== 1) {
        const projectDeleteButton = document.createElement("div");
        projectDeleteButton.classList.add("nav-project-delete");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-xmark");
        projectDeleteButton.appendChild(deleteIcon);
        thisProjectButton.appendChild(projectDeleteButton);
        projectDeleteButton.addEventListener("mousedown", function (event) {
            event.stopPropagation();
            projectDeleteScreen.classList.remove("task-delete-hidden");
            projectDeleteYes.addEventListener("mousedown", deleteProjectSubmit)
        })
        projectDeleteCancel.addEventListener("mousedown", function () {
            projectDeleteYes.removeEventListener("mousedown", deleteProjectSubmit);
            projectDeleteScreen.classList.add("task-delete-hidden");
        })
    }
    const deleteProjectSubmit = function () {
        projectDeleteScreen.classList.add("task-delete-hidden");
        eventEmitter.emit("deleteProject", project);
        thisProjectButton.remove();
    }
    projectContainer.appendChild(thisProjectButton);
    return thisProjectButton;
}

const taskAddSubmit = function (event) {
    event.preventDefault();
    const taskForm = document.forms["add-task-form"];
    const formData = new FormData(taskForm);
    const taskTitle = formData.get("title");
    const taskDesc = formData.get("desc");
    // const taskDueDate = formData.get("date");
    // const taskStatus = formData.get("status");
    // const taskPriority = formData.get("priority");
    // const taskProject = formData.get("project");
    const projectID = 1;
    let validTask = true;
    if (validTask) {
        eventEmitter.emit("newTask", projectID, taskTitle, taskDesc);
        taskForm.reset();
    }
    taskAddScreen.classList.add("task-delete-hidden");
}

const drawProjectHeader = function (project) {

    // this method of removing header could be cleaned up quite a bit

    const currentHeader = document.querySelector(".task-container-header");
    if (currentHeader) {currentHeader.remove()};

    const taskContainerHeader = document.createElement("div");
    taskContainerHeader.classList.add("task-container-header");
    const taskContainerTitle = document.createElement("h2");
    taskContainerTitle.textContent = project.title;
    const taskContainerLabel = document.createElement("p");
    taskContainerLabel.textContent = project.label;
    let taskContainerAddButton = document.createElement("button");
    taskContainerAddButton.classList.add("add-task")
    taskContainerAddButton.textContent = "+ Task";
    taskContainerHeader.appendChild(taskContainerTitle);
    taskContainerHeader.appendChild(taskContainerLabel);
    taskContainerHeader.appendChild(taskContainerAddButton);
    main.insertBefore(taskContainerHeader, main.firstChild);


    // taskContainerTitle.textContent = project.title;
    // taskContainerLabel.textContent = project.label;
    // taskContainerAddButton = taskContainerAddButton.cloneNode();

    // when i click the add button here, only then should it create the DOM elements
    taskContainerAddButton.addEventListener("mousedown", function (event) {
        console.log("listne")
        drawAddTaskContainer(project);
    })



    // this._id = getNewID();
    // this._title = title;
    // this._description = description;
    // this._dueDate = dueDate;
    // this._status = status;
    // this._priority = priority;
    // this._completed = false;
    // this._parentProject;

    return taskContainerHeader;
}

const drawTaskList = function (taskList) {
    while (taskContainer.firstChild) {
        taskContainer.firstChild.remove();
    };
    taskList.forEach(task => {
        taskContainer.appendChild(drawTask(task));
    });
    main.appendChild(taskContainer);
}

const drawTask = function (task) {
    const taskBox = document.createElement("div");
    taskBox.classList.add("task");
    const taskCompleteBox = document.createElement("div");
    taskCompleteBox.classList.add("task-complete-box");
    taskBox.appendChild(taskCompleteBox);
    if (task.completed) {
        taskCompleteBox.classList.add("task-completed");
        taskCompleteBox.parentElement.classList.add("task-box-completed");
    };
    taskCompleteBox.addEventListener("mousedown", function () {
        eventEmitter.emit("taskComplete", task);
        taskCompleteBox.classList.toggle("task-completed");
        taskCompleteBox.parentElement.classList.toggle("task-box-completed");
    });
    const taskTitle = document.createElement("div");
    taskTitle.textContent = task.title;
    const taskDescription = document.createElement("div");
    taskDescription.textContent = task.description;
    const taskDate = document.createElement("div");
    taskDate.textContent = task.dueDate;
    const taskPriority = document.createElement("div");
    taskPriority.textContent = task.priority;
    const taskEditBox = document.createElement("i");
    taskEditBox.classList.add("fa-solid", "fa-pen-to-square", "task-edit");
    const taskDeleteBox = document.createElement("i");
    taskDeleteBox.classList.add("fa-solid", "fa-trash", "task-delete");
    taskDeleteBox.addEventListener("mousedown", function () {
        taskDeleteScreen.classList.remove("task-delete-hidden");
        taskDeleteYes.addEventListener("mousedown", deleteTaskSubmit)
    })
    taskDeleteCancel.addEventListener("mousedown", function () {
        taskDeleteYes.removeEventListener("mousedown", deleteTaskSubmit);
        taskDeleteScreen.classList.add("task-delete-hidden");
    })
    const deleteTaskSubmit = function () {
        eventEmitter.emit("taskDelete", task);
        taskDeleteScreen.classList.add("task-delete-hidden");
        taskDeleteBox.parentElement.remove();
    }
    taskBox.appendChild(taskTitle);
    taskBox.appendChild(taskDescription);
    taskBox.appendChild(taskDate);
    taskBox.appendChild(taskPriority);
    taskBox.appendChild(taskEditBox);
    taskBox.appendChild(taskDeleteBox);
    return taskBox;
}

// Creating DOM header
const header = document.createElement("div");
header.id = "header";
const titleText = document.createElement("h1");
titleText.classList.add("title-text");
titleText.textContent = "things to do.";
header.appendChild(titleText);

// Creating DOM body
const body = document.createElement("div");
body.id = "body-container";

// Creating DOM sidebar
const sidebar = document.createElement("div");
sidebar.id = "sidebar";

// DOM sidebar navigation
const navContainer = document.createElement("div");
navContainer.classList.add("nav-container");
const navArray = [
    { title: "All", iconClasses: ["fa-solid", "fa-calendar"], link: "all" },
    { title: "Today", iconClasses: ["fa-solid", "fa-calendar-day"], link: "today" },
    { title: "Week", iconClasses: ["fa-solid", "fa-calendar-week"], link: "week" },
    { title: "Important", iconClasses: ["fa-solid", "fa-circle-exclamation"], link: "important" },
    { title: "Completed", iconClasses: ["fa-solid", "fa-calendar-check"], link: "completed" }
];
navArray.forEach(button => {
    const thisNavButton = drawSidebarLink(button);
    navContainer.appendChild(thisNavButton);
});
const horizontalRule = document.createElement("hr");

// DOM sidebar projects list
const projectContainer = document.createElement("div");
projectContainer.classList.add("nav-container");
const addProjectButtonContainer = document.createElement("div");
addProjectButtonContainer.classList.add("nav-container", "nav-add-project-container");
const addProjectButton = drawSidebarLink(
    { title: "Add Project", iconClasses: ["fa-solid", "fa-plus"], link: "add-project" }
);
addProjectButtonContainer.appendChild(addProjectButton);

// Add Project container
const addProjectInputContainer = document.createElement("form");
addProjectInputContainer.id = "add-project-form";
addProjectInputContainer.classList.add("nav-hidden");

const projectNameInputContainer = document.createElement("div");
const projectNameInputLabel = document.createElement("label");
projectNameInputLabel.for = "title";
projectNameInputLabel.textContent = "Title:"
const projectNameInputText = document.createElement("input");
projectNameInputText.id = "project-title"
projectNameInputText.name = "title"
projectNameInputText.type = "text";
projectNameInputText.maxLength = 15;
projectNameInputText.required = true;
projectNameInputContainer.appendChild(projectNameInputLabel);
projectNameInputContainer.appendChild(projectNameInputText);
const projectLabelInputContainer = document.createElement("div");
const projectLabelInputLabel = document.createElement("label");
projectLabelInputLabel.for = "label";
projectLabelInputLabel.textContent = "Label:"
const projectLabelInputText = document.createElement("input");
projectLabelInputText.id = "project-label"
projectLabelInputText.name = "label"
projectLabelInputText.type = "text";
projectLabelInputText.maxLength = 80;
projectLabelInputContainer.appendChild(projectLabelInputLabel);
projectLabelInputContainer.appendChild(projectLabelInputText);
const projectSubmitInputContainer = document.createElement("div");
const projectSubmitInputButton = document.createElement("button");
projectSubmitInputButton.id = "project-submit";
projectSubmitInputButton.textContent = "ADD NEW PROJECT";
projectSubmitInputContainer.appendChild(projectSubmitInputButton);

addProjectInputContainer.appendChild(projectNameInputContainer);
addProjectInputContainer.appendChild(projectLabelInputContainer);
addProjectInputContainer.appendChild(projectSubmitInputContainer);
addProjectInputContainer.classList.add("nav-adding-project");

addProjectButtonContainer.insertBefore(addProjectInputContainer, addProjectButtonContainer.firstChild);

const toggleAddProjectContainer = function () {
    addProjectInputContainer.classList.toggle("nav-hidden");
    addProjectButton.firstChild.classList.toggle("fa-plus");
    addProjectButton.firstChild.classList.toggle("fa-minus");
}

addProjectInputContainer.addEventListener("submit", function (event) {
    event.preventDefault();
    const projectForm = document.forms["add-project-form"];
    const formData = new FormData(projectForm);
    const projectTitle = formData.get("title");
    const projectLabel = formData.get("label");
    let validProject = true;
    if (validProject) {
        eventEmitter.emit("newProject", projectTitle, projectLabel);
        toggleAddProjectContainer();
        projectForm.reset();
    }
}, false);
addProjectButton.addEventListener("mousedown", toggleAddProjectContainer);

sidebar.appendChild(navContainer);
sidebar.appendChild(horizontalRule);
sidebar.appendChild(projectContainer);
sidebar.appendChild(addProjectButtonContainer);

// Creating DOM main
const main = document.createElement("main");
main.id = "main";

// Creating DOM Task List


const taskSorter = document.createElement("div");
taskSorter.classList.add("task-sorter");
const sortArray = [
    "",
    "Task",
    "Description",
    "Due Date",
    "Priority",
    "",
    ""
]
sortArray.forEach(sorter => {
    const header = document.createElement("h5");
    header.textContent = sorter;
    taskSorter.appendChild(header);
})

const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container");

// Task delete popup
const taskDeleteScreen = document.createElement("div");
taskDeleteScreen.classList.add("task-delete-screen", "task-delete-hidden");
const taskDeleteFade = document.createElement("div");
taskDeleteFade.classList.add("task-delete-fade");
const taskDeleteContainer = document.createElement("div");
taskDeleteContainer.classList.add("task-delete-container");
taskDeleteScreen.appendChild(taskDeleteFade);
taskDeleteScreen.appendChild(taskDeleteContainer);
const taskDeletePrompt = document.createElement("p");
taskDeletePrompt.classList.add("task-delete-prompt")
taskDeletePrompt.textContent = "Are you sure you want to delete this task?";
const taskDeleteYes = document.createElement("button");
taskDeleteYes.classList.add("task-delete-button", "task-delete-button-yes");
taskDeleteYes.textContent = "DELETE";
const taskDeleteCancel = document.createElement("button");
taskDeleteCancel.classList.add("task-delete-button", "task-delete-button-cancel");
taskDeleteCancel.textContent = "CANCEL";
taskDeleteContainer.appendChild(taskDeletePrompt);
taskDeleteContainer.appendChild(taskDeleteYes);
taskDeleteContainer.appendChild(taskDeleteCancel);

// Project delete popup
const projectDeleteScreen = taskDeleteScreen.cloneNode();
const projectDeleteFade = taskDeleteFade.cloneNode();
const projectDeleteContainer = document.createElement("div");
projectDeleteContainer.classList.add("task-delete-container", "project-delete-container");
projectDeleteScreen.appendChild(projectDeleteFade);
projectDeleteScreen.appendChild(projectDeleteContainer);
const projectDeletePrompt = taskDeletePrompt.cloneNode();
projectDeletePrompt.textContent = "Are you sure you want to delete this project? This will also delete any associated tasks!";
const projectDeleteYes = taskDeleteYes.cloneNode();
projectDeleteYes.textContent = "DELETE";
const projectDeleteCancel = taskDeleteCancel.cloneNode();
projectDeleteCancel.textContent = "CANCEL";
projectDeleteContainer.appendChild(projectDeletePrompt);
projectDeleteContainer.appendChild(projectDeleteYes);
projectDeleteContainer.appendChild(projectDeleteCancel);



// Add Task container
const drawAddTaskContainer = function (project, task) {
    // Task add popup
    const taskAddScreen = taskDeleteScreen.cloneNode();
    const taskAddFade = taskDeleteFade.cloneNode();
    const taskAddContainer = document.createElement("div");
    taskAddContainer.classList.add("task-delete-container", "task-add-container");
    taskAddScreen.appendChild(taskAddFade);
    taskAddScreen.appendChild(taskAddContainer);
    const taskAddPrompt = taskDeletePrompt.cloneNode();
    taskAddPrompt.textContent = "Add a new task";
    // const taskAddYes = taskDeleteYes.cloneNode();
    // taskAddYes.textContent = "ADD";
    const taskAddCancel = taskDeleteCancel.cloneNode();
    taskAddCancel.textContent = "CANCEL";



    let addTaskInputContainer = document.createElement("form");
    addTaskInputContainer.id = "add-task-form";

    const taskNameInputContainer = document.createElement("div");
    const taskNameInputLabel = document.createElement("label");
    taskNameInputLabel.for = "task-title";
    taskNameInputLabel.textContent = "Title:"
    const taskNameInputText = document.createElement("input");
    taskNameInputText.id = "task-title"
    taskNameInputText.name = "title"
    taskNameInputText.type = "text";
    taskNameInputText.maxLength = 15;
    taskNameInputText.required = true;
    taskNameInputContainer.appendChild(taskNameInputLabel);
    taskNameInputContainer.appendChild(taskNameInputText);
    const taskDescInputContainer = document.createElement("div");
    const taskDescInputLabel = document.createElement("label");
    taskDescInputLabel.for = "task-desc";
    taskDescInputLabel.textContent = "Description:"
    const taskDescInputText = document.createElement("input");
    taskDescInputText.id = "task-desc"
    taskDescInputText.name = "desc"
    taskDescInputText.type = "text";
    taskDescInputText.maxLength = 80;
    taskDescInputContainer.appendChild(taskDescInputLabel);
    taskDescInputContainer.appendChild(taskDescInputText);

    const taskDateInputContainer = document.createElement("div");
    const taskDateInputLabel = document.createElement("label");
    taskDateInputLabel.for = "date";
    taskDateInputLabel.textContent = "Due Date:";
    const taskDateInputDate = document.createElement("input");
    taskDateInputDate.type = "date";
    taskDateInputDate.id = "task-date";
    taskDateInputDate.name = "date";
    taskDateInputContainer.appendChild(taskDateInputLabel);
    taskDateInputContainer.appendChild(taskDateInputDate);

    const taskStatusInputContainer = document.createElement("div");

    const taskPriorityInputContainer = document.createElement("div");
    const taskPriorityInputLowContainer = document.createElement("div");
    const taskPriorityInputLow = document.createElement("input");
    taskPriorityInputLow.type = "radio";
    taskPriorityInputLow.id = "task-priority-low";
    taskPriorityInputLow.name = "task-priority";
    taskPriorityInputLow.value = "low";
    taskPriorityInputLow.checked = "true";
    const taskPriorityInputLowLabel = document.createElement("label");
    taskPriorityInputLowLabel.for = "task-priority-low";
    taskPriorityInputLowLabel.textContent = "LOW";
    taskPriorityInputLowContainer.appendChild(taskPriorityInputLow);
    taskPriorityInputLowContainer.appendChild(taskPriorityInputLowLabel);
    const taskPriorityInputMedContainer = document.createElement("div");
    const taskPriorityInputMed = document.createElement("input");
    taskPriorityInputMed.type = "radio";
    taskPriorityInputMed.id = "task-priority-med";
    taskPriorityInputMed.name = "task-priority";
    taskPriorityInputMed.value = "med";
    taskPriorityInputMed.checked = "true";
    const taskPriorityInputMedLabel = document.createElement("label");
    taskPriorityInputMedLabel.for = "task-priority-med";
    taskPriorityInputMedLabel.textContent = "MEDIUM";
    taskPriorityInputMedContainer.appendChild(taskPriorityInputMed);
    taskPriorityInputMedContainer.appendChild(taskPriorityInputMedLabel);
    const taskPriorityInputHighContainer = document.createElement("div");
    const taskPriorityInputHigh = document.createElement("input");
    taskPriorityInputHigh.type = "radio";
    taskPriorityInputHigh.id = "task-priority-high";
    taskPriorityInputHigh.name = "task-priority";
    taskPriorityInputHigh.value = "high";
    taskPriorityInputHigh.checked = "true";
    const taskPriorityInputHighLabel = document.createElement("label");
    taskPriorityInputHighLabel.for = "task-priority-high";
    taskPriorityInputHighLabel.textContent = "HIGH";
    taskPriorityInputHighContainer.appendChild(taskPriorityInputHigh);
    taskPriorityInputHighContainer.appendChild(taskPriorityInputHighLabel);
    taskPriorityInputContainer.appendChild(taskPriorityInputLowContainer);
    taskPriorityInputContainer.appendChild(taskPriorityInputMedContainer);
    taskPriorityInputContainer.appendChild(taskPriorityInputHighContainer);

    const taskProjectInputContainer = document.createElement("div");
    const taskProjectInputLabel = document.createElement("label");
    taskProjectInputLabel.for = "task-project";
    taskProjectInputLabel.textContent = "Project:";
    const taskProjectInputSelect = document.createElement("select");
    taskProjectInputSelect.name = "project";
    taskProjectInputSelect.id = "task-project";
    //
    // need to create <option value="project1">Project 1</option>
    // for each project in file, & select current project as default!
    // hmmm

    const taskSubmitInputContainer = document.createElement("div");
    const taskSubmitInputButton = document.createElement("button");
    taskSubmitInputButton.id = "task-submit";
    taskSubmitInputButton.textContent = "ADD NEW TASK";
    taskSubmitInputContainer.appendChild(taskSubmitInputButton);

    addTaskInputContainer.appendChild(taskNameInputContainer);
    addTaskInputContainer.appendChild(taskDescInputContainer);
    addTaskInputContainer.appendChild(taskDateInputContainer);
    addTaskInputContainer.appendChild(taskPriorityInputContainer);
    addTaskInputContainer.appendChild(taskSubmitInputContainer);
    addTaskInputContainer.classList.add("nav-adding-task");

    taskAddContainer.appendChild(taskAddPrompt);
    taskAddContainer.appendChild(addTaskInputContainer);
    // taskAddContainer.appendChild(taskAddYes);
    taskAddContainer.appendChild(taskAddCancel);
    addTaskInputContainer.addEventListener("submit", taskAddSubmit);
    taskAddCancel.addEventListener("mousedown", function () {
        taskAddScreen.classList.add("task-delete-hidden");
        taskAddScreen.remove();
    });
    taskAddScreen.classList.remove("task-delete-hidden");
    body.appendChild(taskAddScreen);
}


// Appending to main and body
// main.appendChild(taskContainerHeader);
main.appendChild(taskSorter);
main.appendChild(taskContainer);

body.appendChild(sidebar);
body.appendChild(main);
body.appendChild(taskDeleteScreen);
body.appendChild(projectDeleteScreen);

content.appendChild(header);
content.appendChild(body);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ eventEmitter, drawProjectNav, drawProjectHeader, drawTaskList, drawTask, navContainer, projectContainer, taskContainer, addProjectButton });

/***/ }),

/***/ "./src/idController.js":
/*!*****************************!*\
  !*** ./src/idController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewID": () => (/* binding */ getNewID)
/* harmony export */ });
let currentID = 0;

const getNewID = () => {
    currentID++;
    return currentID;
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "getCurrentProject": () => (/* binding */ getCurrentProject),
/* harmony export */   "getProjectByID": () => (/* binding */ getProjectByID),
/* harmony export */   "setCurrentProject": () => (/* binding */ setCurrentProject)
/* harmony export */ });
/* harmony import */ var _idController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idController.js */ "./src/idController.js");


let currentProjectID = 1;

const projectList = [];

class Project {
    constructor(title, label) {
        this._id = (0,_idController_js__WEBPACK_IMPORTED_MODULE_0__.getNewID)();
        this._title = title;
        this._label = label;
        this._iconClasses = ["fa-solid", "fa-folder"];
        this._taskList = [];
        projectList.push(this);
    }

    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    get label() {
        return this._label;
    }
    set label(newLabel) {
        this._label = newLabel;
    }
    get iconClasses() {
        return this._iconClasses;
    }
    get taskList() {
        return this._taskList;
    }
    addTask = (taskObject, index) => {
        taskObject.parentProject = this;
        if (index) {
            this._taskList.splice(index, 0, taskObject);
        } else {
            this._taskList.push(taskObject);
        }
        return this._taskList;
    }
    removeTask = (taskObject) => {
        this._taskList = this._taskList.filter(task => task !== taskObject);
    }
    deleteProject = function () {
        let projectIndex = projectList.findIndex(project => this === project);
        projectList.splice(projectIndex, 1);
    }
}

const getProjectByID = function (id) {
    let projectIndex = projectList.findIndex(project => Number(id) === Number(project.id));
    return projectList[projectIndex];
}

const getCurrentProject = function(){
    return currentProjectID;
}

const setCurrentProject = function(id){
    currentProjectID = id;
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _idController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idController.js */ "./src/idController.js");


class Task {
    constructor(title, description, dueDate, status, priority, parentProject) {
        this._id = (0,_idController_js__WEBPACK_IMPORTED_MODULE_0__.getNewID)();
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._status = status;
        this._priority = priority;
        this._completed = false;
        this._parentProject;
    }

    get id(){
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    get description() {
        return this._description;
    }
    set description(newDescription) {
        this._description = newDescription;
    }
    get dueDate(){
        return this._dueDate;
    }
    set dueDate(newDueDate){
        this._dueDate = newDueDate;
    }
    get priority(){
        return this._priority;
    }
    set priority(newPriority){
        this._priority = newPriority;
    }
    get completed(){
        return this._completed;
    }
    set completed(newCompleted){
        this._completed = newCompleted;
    }
    get parentProject(){
        return this._parentProject;
    }
    set parentProject(newParentProject){
        this._parentProject = newParentProject;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionHandler.js */ "./src/actionHandler.js");
// module that creates projects & gets/sets their properties
// adds, removes tasks
//import { Project } from "./project.js";

// module that creates todos & gets/sets their properties
//import { Task } from "./task.js";
//import { drawProjectNav } from "./domCreator.js";



  

// what happens when we move a task from one project to another?
// what happens when we delete a project?
// what happens when we set a task as completed? is that controlled by the task module or an external module that manipulates it?

// dom module(s)

// i think a module that you call upon to add projects/tasks - also adds to dom as well
// sort of a facilitator of dom + classes - so we just call that module instead of calling dom + class
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyx5QkFBeUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOERBQThELFlBQVk7QUFDMUU7QUFDQSw4REFBOEQsWUFBWTtBQUMxRTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9lQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZjZGO0FBQzVEO0FBQ1o7QUFDb0I7O0FBRXpDO0FBQ0Esc0VBQTBCO0FBQzFCO0FBQ0EsUUFBUSw4REFBaUI7QUFDekIsUUFBUSw4REFBaUI7QUFDekIsUUFBUSx3RUFBNEIsQ0FBQywyREFBYztBQUNuRCxRQUFRLG1FQUF1QixDQUFDLDJEQUFjO0FBQzlDO0FBQ0E7QUFDQSxDQUFDOztBQUVELHNFQUEwQjtBQUMxQix5QkFBeUIsZ0RBQU87QUFDaEMsSUFBSSxxRUFBeUI7QUFDN0IsQ0FBQzs7QUFFRCxzRUFBMEI7QUFDMUIsSUFBSSw4REFBaUI7QUFDckIsSUFBSSx3RUFBNEI7QUFDaEMsSUFBSSxtRUFBdUI7QUFDM0IsQ0FBQzs7QUFFRCxzRUFBMEI7QUFDMUI7QUFDQSxDQUFDOztBQUVELHNFQUEwQjtBQUMxQjtBQUNBLENBQUM7O0FBRUQsc0VBQTBCO0FBQzFCLHNCQUFzQiwwQ0FBSTtBQUMxQixJQUFJLDJEQUFjO0FBQ2xCLElBQUksZ0ZBQW9DLENBQUMsK0RBQW1CO0FBQzVELENBQUM7OztBQUdEO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQU87QUFDaEMsMEJBQTBCLGdEQUFPO0FBQ2pDLDBCQUEwQixnREFBTztBQUNqQyxpQkFBaUIsMENBQUk7QUFDckIsa0JBQWtCLDBDQUFJO0FBQ3RCLGtCQUFrQiwwQ0FBSTtBQUN0QixrQkFBa0IsMENBQUk7QUFDdEIsa0JBQWtCLDBDQUFJO0FBQ3RCLGtCQUFrQiwwQ0FBSTtBQUN0QixrQkFBa0IsMENBQUk7QUFDdEIsa0JBQWtCLDBDQUFJO0FBQ3RCLGtCQUFrQiwwQ0FBSTtBQUN0QixtQkFBbUIsMENBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBeUI7QUFDekIscUVBQXlCO0FBQ3pCLHFFQUF5Qjs7QUFFekIsd0VBQTRCO0FBQzVCLG1FQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUY7QUFDaUI7QUFDdEMseUJBQXlCLGdEQUFZO0FBQ3JDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUVBQXFFO0FBQzNFLE1BQU0sNkVBQTZFO0FBQ25GLE1BQU0sNEVBQTRFO0FBQ2xGLE1BQU0sMkZBQTJGO0FBQ2pHLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O0FBTUEsaUVBQWUsRUFBRSwwSUFBMEk7Ozs7Ozs7Ozs7Ozs7O0FDM2YzSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMNEM7O0FBRTVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsMERBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFNEM7O0FBRTVDO0FBQ0E7QUFDQSxtQkFBbUIsMERBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7O0FBRXJCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsaUJBQWlCOztBQUVBOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYWN0aW9uSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZG9tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaWRDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwJmZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDIwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibHVlLW1haW46IHJnYigxMTQsIDE0NCwgMTg0KTtcXG4gICAgLS1ibHVlLWxpZ2h0OiByZ2IoMjE1LCAyMjUsIDIzOCk7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDIsIGg0LCBoNSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW1haW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jYm9keS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTcsIDI0MCwgMjM5KTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UsIGNvbG9yIDAuMXMgZWFzZTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlLCBjb2xvciAwLjFzIGVhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTkyLCAyMzApO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiBoMyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIgLm5hdi1wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXhcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NSwgMTg1KTtcXG4gICAgY29sb3I6IHJnYigxMDksIDQ0LCA0NCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxMDksIDQ0LCA0NCk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5uYXYtYWRkLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMCAzMnB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgICBvcGFjaXR5OiAwLjRcXG59XFxuXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3MCwgNzAsIDcwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGdhcDogMTJweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAwLjJzIGVhc2UsIGhlaWdodCAwLjFzIGVhc2U7XFxufVxcblxcbi5uYXYtaGlkZGVuIHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBnYXA6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UsIGhlaWdodCAuMXMgZWFzZTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBsYWJlbCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGlucHV0IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjA2LCAxOTQpO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDIyOCwgMjA2KTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNzaWRlYmFyIGhyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItaGVhZGVyICo6bnRoLWNoaWxkKDIpLCAuYWRkLXRhc2sge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHJnYig4MiwgODIsIDgyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjQzLCAyMjMpO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDI0MSwgMjAxKTtcXG59XFxuXFxuLmFkZC10YXNrOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1zb3J0ZXIsIC50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDI0MHB4IGF1dG8gODBweCA4MHB4IDI0cHggMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4udGFzay1zb3J0ZXIge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi8qIFRhc2tzICovXFxuLnRhc2sge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDIyMiwgMjI2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3gge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI5LCAxMjksIDEyOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3g6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBjb2xvcjogcmdiKDExMCwgMTEwLCAxMTApO1xcbiAgICBwYWRkaW5nOiAwIDAgOHB4IDhweDtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94OmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXNrLWJveC1jb21wbGV0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAgMCA4cHggOHB4O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZWQgfiAqIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWVkaXQsIC50YXNrLWRlbGV0ZSB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4udGFzay1lZGl0OmhvdmVyLCAudGFzay1kZWxldGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4vKiBUYXNrIGVkaXQgYW5kIGRlbGV0ZSBwb3B1cCBjb250YWluZXJzICovXFxuLnRhc2stZGVsZXRlLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4udGFzay1kZWxldGUtaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWZhZGUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzMnB4IHJnYigwLCAwLCAwKTtcXG4gICAgYW5pbWF0aW9uOiB0YXNrLXBvcHVwLWJveDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4OyBcXG59XFxuXFxuLnRhc2stZGVsZXRlLXByb21wdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uLXllcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDExMCwgMTEwKTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XFxufVxcblxcbkBrZXlmcmFtZXMgdGFzay1wb3B1cC1ib3gge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDRFQUE0RTtJQUM1RSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4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IjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJ0ZXIrT25lJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAyMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tYmx1ZS1tYWluOiByZ2IoMTE0LCAxNDQsIDE4NCk7XFxuICAgIC0tYmx1ZS1saWdodDogcmdiKDIxNSwgMjI1LCAyMzgpO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgyLCBoNCwgaDUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5oNSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1tYWluKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI2JvZHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE3LCAyNDAsIDIzOSk7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMzJweDtcXG59XFxuXFxuLm5hdi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlLCBjb2xvciAwLjFzIGVhc2U7XFxufVxcblxcbi5uYXYtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZSwgY29sb3IgMC4xcyBlYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW1haW4pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDE5MiwgMjMwKTtcXG59XFxuXFxuLm5hdi1idXR0b24gaDMge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5uYXYtcHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbi5uYXYtYnV0dG9uOmhvdmVyIC5uYXYtcHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBmbGV4XFxufVxcblxcbi5uYXYtcHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxODUsIDE4NSk7XFxuICAgIGNvbG9yOiByZ2IoMTA5LCA0NCwgNDQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTA5LCA0NCwgNDQpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubmF2LWFkZC1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgMzJweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgb3BhY2l0eTogMC40XFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5uYXYtYWRkaW5nLXByb2plY3Qge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNzAsIDcwLCA3MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBnYXA6IDEycHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMC4ycyBlYXNlLCBoZWlnaHQgMC4xcyBlYXNlO1xcbn1cXG5cXG4ubmF2LWhpZGRlbiB7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZ2FwOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLCBoZWlnaHQgLjFzIGVhc2U7XFxufVxcblxcbi5uYXYtYWRkaW5nLXByb2plY3QgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTJweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYtYWRkaW5nLXByb2plY3QgbGFiZWwge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBpbnB1dCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDIwNiwgMTk0KTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXYtYWRkaW5nLXByb2plY3QgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAyMjgsIDIwNik7XFxufVxcblxcbi5uYXYtYWRkaW5nLXByb2plY3QgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc2lkZWJhciBociB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWhlYWRlciAqOm50aC1jaGlsZCgyKSwgLmFkZC10YXNrIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDI0MywgMjIzKTtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyNDEsIDIwMSk7XFxufVxcblxcbi5hZGQtdGFzazphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stc29ydGVyLCAudGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAyNDBweCBhdXRvIDgwcHggODBweCAyNHB4IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMThweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcXG59XFxuXFxuLnRhc2stc29ydGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4vKiBUYXNrcyAqL1xcbi50YXNrIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyMjIsIDIyNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyOSwgMTI5LCAxMjkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3g6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94OmhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcXG4gICAgcGFkZGluZzogMCAwIDhweCA4cHg7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveDphY3RpdmU6OmFmdGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFzay1ib3gtY29tcGxldGVkIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZWQge1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGVkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwIDAgOHB4IDhweDtcXG59XFxuXFxuLnRhc2stY29tcGxldGVkIH4gKiB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1lZGl0LCAudGFzay1kZWxldGUge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnRhc2stZWRpdDpob3ZlciwgLnRhc2stZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLyogVGFzayBlZGl0IGFuZCBkZWxldGUgcG9wdXAgY29udGFpbmVycyAqL1xcbi50YXNrLWRlbGV0ZS1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnRhc2stZGVsZXRlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1mYWRlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGFzay1kZWxldGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMzJweCByZ2IoMCwgMCwgMCk7XFxuICAgIGFuaW1hdGlvbjogdGFzay1wb3B1cC1ib3g7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxNTBweDsgXFxufVxcblxcbi50YXNrLWRlbGV0ZS1wcm9tcHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbi15ZXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAxMTAsIDExMCk7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b24tY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRhc2stcG9wdXAtYm94IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHJvamVjdCwgZ2V0UHJvamVjdEJ5SUQsIGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGRvbUNyZWF0b3IgZnJvbSBcIi4vZG9tQ3JlYXRvci5qc1wiO1xuXG4vLyBFdmVudCBlbWl0dGVyIGxpc3RlbmVycyBmb3Igc2VsZWN0aW5nIHByb2plY3RzICYgZGlzcGxheWluZy9yZW1vdmluZyB0aGVtIGZyb20gRE9NXG5kb21DcmVhdG9yLmV2ZW50RW1pdHRlci5vbihcImRlbGV0ZVByb2plY3RcIiwgKHByb2plY3QpID0+IHtcbiAgICAvLyBpZiB0aGUgY3VycmVudCBwcm9qZWN0IGlzIGRpc3BsYXllZCwgcmVtb3ZlIGl0IGFuZCByZXBsYWNlIHdpdGggdW5jYXRlZ29yaXNlZFxuICAgIGlmIChnZXRDdXJyZW50UHJvamVjdCgpID09PSBwcm9qZWN0LmlkKSB7XG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KDEpO1xuICAgICAgICBkb21DcmVhdG9yLmRyYXdQcm9qZWN0SGVhZGVyKGdldFByb2plY3RCeUlEKDEpKTtcbiAgICAgICAgZG9tQ3JlYXRvci5kcmF3VGFza0xpc3QoZ2V0UHJvamVjdEJ5SUQoMSkudGFza0xpc3QpO1xuICAgIH1cbiAgICBwcm9qZWN0LmRlbGV0ZVByb2plY3QoKTtcbn0pO1xuXG5kb21DcmVhdG9yLmV2ZW50RW1pdHRlci5vbihcIm5ld1Byb2plY3RcIiwgKHByb2plY3ROYW1lLCBwcm9qZWN0TGFiZWwpID0+IHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0TGFiZWwpO1xuICAgIGRvbUNyZWF0b3IuZHJhd1Byb2plY3ROYXYobmV3UHJvamVjdCk7XG59KTtcblxuZG9tQ3JlYXRvci5ldmVudEVtaXR0ZXIub24oXCJwcm9qZWN0QnV0dG9uXCIsIChwcm9qZWN0KSA9PiB7XG4gICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdC5pZCk7XG4gICAgZG9tQ3JlYXRvci5kcmF3UHJvamVjdEhlYWRlcihwcm9qZWN0KTtcbiAgICBkb21DcmVhdG9yLmRyYXdUYXNrTGlzdChwcm9qZWN0LnRhc2tMaXN0KTtcbn0pO1xuXG5kb21DcmVhdG9yLmV2ZW50RW1pdHRlci5vbihcInRhc2tDb21wbGV0ZVwiLCAodGFzaykgPT4ge1xuICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xufSk7XG5cbmRvbUNyZWF0b3IuZXZlbnRFbWl0dGVyLm9uKFwidGFza0RlbGV0ZVwiLCAodGFzaykgPT4ge1xuICAgIHRhc2sucGFyZW50UHJvamVjdC5yZW1vdmVUYXNrKHRhc2spO1xufSlcblxuZG9tQ3JlYXRvci5ldmVudEVtaXR0ZXIub24oXCJuZXdUYXNrXCIsIChwcm9qZWN0SUQsIHRhc2tUaXRsZSwgdGFza0Rlc2MpID0+IHtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2MpO1xuICAgIGdldFByb2plY3RCeUlEKHByb2plY3RJRCkuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBkb21DcmVhdG9yLnRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ3JlYXRvci5kcmF3VGFzayhuZXdUYXNrKSk7XG59KVxuXG5cbi8vIERlZmF1bHQgcHJvamVjdHMgZm9yIHRlc3RpbmcgcHVycG9zZXNcbi8vIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhdHVzLCBwcmlvcml0eVxubGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJVbmNhdGVnb3Jpc2VkXCIpO1xubGV0IGRlZmF1bHRQcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiVG9kbyBsaXN0XCIsIFwiU3R1ZHlcIik7XG5sZXQgZGVmYXVsdFByb2plY3QzID0gbmV3IFByb2plY3QoXCJEcml2aW5nIGdhbWVcIiwgXCJXb3JrXCIpO1xubGV0IG15VGFzayA9IG5ldyBUYXNrKFwiR3ltIHNlc3Npb25cIiwgXCJUbyB3b3JrIG9uIHRoZXNlIHF1YWRzIGZvciB0aGUgdXBjb21pbmcgc2tpIHdlZWtlbmRcIiwgMjIwODIzLCBcInVuY29tcGxldGVkXCIsIFwibWVkaXVtXCIpO1xubGV0IG15VGFzazIgPSBuZXcgVGFzayhcIkNhbGwgUUFOVEFTXCIsIFwiRmlndXJlIG91dCB3aGVyZSBteSBwb2ludHMgYXJlXCIsIDIyMDkwMiwgXCJ1bmNvbXBsZXRlZFwiLCBcIm1lZGl1bVwiKTtcbmxldCBteVRhc2szID0gbmV3IFRhc2soXCJNYWtlIHRyYXZlbCBpbnN1cmFuY2UgY2xhaW1cIiwgXCJnZXQgc29tZSBtb25leSBiYWNrIGZyb20gdGhlIENhbmFkYSB0cmlwIHNoZW5hbmlnYW5zXCIsIDIyMDkwMiwgXCJ1bmNvbXBsZXRlZFwiLCBcIm1lZGl1bVwiKTtcbmxldCBteVRhc2s0ID0gbmV3IFRhc2soXCJNYWtlIHRhc2tzIGJlYXV0aWZ1bFwiLCBcImFkZCByb3VuZGVkIGNvcm5lcnMgc2ltaWxhciB0byBzaWRlYmFyIGJ1dHRvbnMsIGRyb3Agc2hhZG93cywgbmljZSBzcGFjaW5nXCIsIGZhbHNlLCBcInVuY29tcGxldGVkXCIsIFwibWVkaXVtXCIpO1xubGV0IG15VGFzazUgPSBuZXcgVGFzayhcIkFkZCB0YXNrIGJ1dHRvblwiLCBcImhhdmUgdG8gbWFrZSBhIHdheSB0byBhZGQgdGFza3Mgc29tZWhvdyBheWVcIiwgZmFsc2UsIFwidW5jb21wbGV0ZWRcIiwgXCJoaWdoXCIpO1xubGV0IG15VGFzazYgPSBuZXcgVGFzayhcIk1vdmUgdGFza3MgYmV0d2VlbiBwcm9qZWN0c1wiLCBcInRoaXMgaXMgYSBiaXQgaGFyZGVyIC0gd2lsbCBuZWVkIHRvIHJlbW92ZSBjdXJyZW50IHRhc2sgZnJvbSBjdXJyZW50IHByb2plY3QgdGFza0xpc3QsIHRoZW4gYWRkIGl0IHRvIHRoZSBuZXcgcHJvamVjdCBhbmQgZm9ybWF0IGFwcHJvcHJpYXRlbHlcIiwgZmFsc2UsIFwidW5jb21wbGV0ZWRcIiwgXCJtZWRpdW1cIik7XG5sZXQgbXlUYXNrNyA9IG5ldyBUYXNrKFwiQWRkIGZvb3RlclwiLCBcImFkZCBmb290ZXIgd2l0aCBteSBuYW1lIGFuZCBnaXRodWIgbGluayB0byBzb3VyY2UgY29kZVwiLCBmYWxzZSwgXCJ1bmNvbXBsZXRlZFwiLCBcImxvd1wiKTtcbmxldCBteVRhc2s4ID0gbmV3IFRhc2soXCJBZGQgZHJpdmluZyBwaHlzaWNzXCIsIFwiZmlyc3QgdGhpbmdzIGZpcnN0LCBtYWtlIHRoZSBjYXIgZmVlbCBhbWF6aW5nIHRvIGRyaXZlXCIsIDIyMTEzMCwgXCJ1bmNvbXBsZXRlZFwiLCBcIm1lZGl1bVwiKTtcbmxldCBteVRhc2s5ID0gbmV3IFRhc2soXCJNYWtlIEZhbGxzIENyZWVrIHJvYWRcIiwgXCJUbyB3b3JrIG9uIHRoZXNlIHF1YWRzIGZvciB0aGUgdXBjb21pbmcgc2tpIHdlZWtlbmRcIiwgMjMwMjE1LCBcInVuY29tcGxldGVkXCIsIFwibWVkaXVtXCIpO1xubGV0IG15VGFzazEwID0gbmV3IFRhc2soXCJBZGQgc21va2UgcGFydGljbGUgZWZmZWN0c1wiLCBcIlRvIHdvcmsgb24gdGhlc2UgcXVhZHMgZm9yIHRoZSB1cGNvbWluZyBza2kgd2Vla2VuZFwiLCAyMjExMzAsIFwidW5jb21wbGV0ZWRcIiwgXCJsb3dcIik7XG5teVRhc2suY29tcGxldGVkID0gdHJ1ZTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sobXlUYXNrKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sobXlUYXNrMik7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKG15VGFzazMpO1xuZGVmYXVsdFByb2plY3QyLmFkZFRhc2sobXlUYXNrNCk7XG5kZWZhdWx0UHJvamVjdDIuYWRkVGFzayhteVRhc2s1KTtcbmRlZmF1bHRQcm9qZWN0Mi5hZGRUYXNrKG15VGFzazYpO1xuZGVmYXVsdFByb2plY3QyLmFkZFRhc2sobXlUYXNrNyk7XG5kZWZhdWx0UHJvamVjdDMuYWRkVGFzayhteVRhc2s4KTtcbmRlZmF1bHRQcm9qZWN0My5hZGRUYXNrKG15VGFzazkpO1xuZGVmYXVsdFByb2plY3QzLmFkZFRhc2sobXlUYXNrMTApO1xuXG5kb21DcmVhdG9yLmRyYXdQcm9qZWN0TmF2KGRlZmF1bHRQcm9qZWN0KTtcbmRvbUNyZWF0b3IuZHJhd1Byb2plY3ROYXYoZGVmYXVsdFByb2plY3QyKTtcbmRvbUNyZWF0b3IuZHJhd1Byb2plY3ROYXYoZGVmYXVsdFByb2plY3QzKTtcblxuZG9tQ3JlYXRvci5kcmF3UHJvamVjdEhlYWRlcihkZWZhdWx0UHJvamVjdCk7XG5kb21DcmVhdG9yLmRyYXdUYXNrTGlzdChkZWZhdWx0UHJvamVjdC50YXNrTGlzdCk7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIjtcbmNvbnN0IGV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cblxuLy8gRnVuY3Rpb25zIGZvciBkcmF3aW5nIGVsZW1lbnRzIHRvIHdpbmRvd1xuY29uc3QgZHJhd1NpZGViYXJMaW5rID0gZnVuY3Rpb24gKGxpbmtPYmopIHtcbiAgICBjb25zdCBuYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdkJ1dHRvbi5pZCA9IGxpbmtPYmoubGluayB8fCBsaW5rT2JqLmlkO1xuICAgIG5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvblwiKTtcbiAgICBjb25zdCBuYXZJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgbGlua09iai5pY29uQ2xhc3Nlcy5mb3JFYWNoKGljb25DbGFzcyA9PiBuYXZJY29uLmNsYXNzTGlzdC5hZGQoaWNvbkNsYXNzKSk7XG4gICAgY29uc3QgbmF2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBuYXZUZXh0LnRleHRDb250ZW50ID0gbGlua09iai50aXRsZTtcbiAgICBuYXZCdXR0b24uYXBwZW5kQ2hpbGQobmF2SWNvbik7XG4gICAgbmF2QnV0dG9uLmFwcGVuZENoaWxkKG5hdlRleHQpO1xuICAgIHJldHVybiBuYXZCdXR0b247XG59XG5cbmNvbnN0IGRyYXdQcm9qZWN0TmF2ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBjb25zdCB0aGlzUHJvamVjdEJ1dHRvbiA9IGRyYXdTaWRlYmFyTGluayhwcm9qZWN0KTtcbiAgICB0aGlzUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJwcm9qZWN0QnV0dG9uXCIsIHByb2plY3QpO1xuICAgIH0pXG4gICAgaWYgKHByb2plY3QuaWQgIT09IDEpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1wcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXhtYXJrXCIpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICB0aGlzUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnV0dG9uKTtcbiAgICAgICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWRlbGV0ZS1oaWRkZW5cIik7XG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlWWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZGVsZXRlUHJvamVjdFN1Ym1pdClcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdERlbGV0ZUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2plY3REZWxldGVZZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBkZWxldGVQcm9qZWN0U3VibWl0KTtcbiAgICAgICAgICAgIHByb2plY3REZWxldGVTY3JlZW4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWhpZGRlblwiKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdFN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvamVjdERlbGV0ZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcImRlbGV0ZVByb2plY3RcIiwgcHJvamVjdCk7XG4gICAgICAgIHRoaXNQcm9qZWN0QnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXNQcm9qZWN0QnV0dG9uKTtcbiAgICByZXR1cm4gdGhpc1Byb2plY3RCdXR0b247XG59XG5cbmNvbnN0IHRhc2tBZGRTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJhZGQtdGFzay1mb3JtXCJdO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhc2tGb3JtKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGZvcm1EYXRhLmdldChcImRlc2NcIik7XG4gICAgLy8gY29uc3QgdGFza0R1ZURhdGUgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpO1xuICAgIC8vIGNvbnN0IHRhc2tTdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIik7XG4gICAgLy8gY29uc3QgdGFza1ByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG4gICAgLy8gY29uc3QgdGFza1Byb2plY3QgPSBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0XCIpO1xuICAgIGNvbnN0IHByb2plY3RJRCA9IDE7XG4gICAgbGV0IHZhbGlkVGFzayA9IHRydWU7XG4gICAgaWYgKHZhbGlkVGFzaykge1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcIm5ld1Rhc2tcIiwgcHJvamVjdElELCB0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbiAgICAgICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICB9XG4gICAgdGFza0FkZFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xufVxuXG5jb25zdCBkcmF3UHJvamVjdEhlYWRlciA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cbiAgICAvLyB0aGlzIG1ldGhvZCBvZiByZW1vdmluZyBoZWFkZXIgY291bGQgYmUgY2xlYW5lZCB1cCBxdWl0ZSBhIGJpdFxuXG4gICAgY29uc3QgY3VycmVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXItaGVhZGVyXCIpO1xuICAgIGlmIChjdXJyZW50SGVhZGVyKSB7Y3VycmVudEhlYWRlci5yZW1vdmUoKX07XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lci1oZWFkZXJcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRhc2tDb250YWluZXJUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0NvbnRhaW5lckxhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdC5sYWJlbDtcbiAgICBsZXQgdGFza0NvbnRhaW5lckFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdGFza0NvbnRhaW5lckFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIilcbiAgICB0YXNrQ29udGFpbmVyQWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIFRhc2tcIjtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXJUaXRsZSk7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyTGFiZWwpO1xuICAgIHRhc2tDb250YWluZXJIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lckFkZEJ1dHRvbik7XG4gICAgbWFpbi5pbnNlcnRCZWZvcmUodGFza0NvbnRhaW5lckhlYWRlciwgbWFpbi5maXJzdENoaWxkKTtcblxuXG4gICAgLy8gdGFza0NvbnRhaW5lclRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAvLyB0YXNrQ29udGFpbmVyTGFiZWwudGV4dENvbnRlbnQgPSBwcm9qZWN0LmxhYmVsO1xuICAgIC8vIHRhc2tDb250YWluZXJBZGRCdXR0b24gPSB0YXNrQ29udGFpbmVyQWRkQnV0dG9uLmNsb25lTm9kZSgpO1xuXG4gICAgLy8gd2hlbiBpIGNsaWNrIHRoZSBhZGQgYnV0dG9uIGhlcmUsIG9ubHkgdGhlbiBzaG91bGQgaXQgY3JlYXRlIHRoZSBET00gZWxlbWVudHNcbiAgICB0YXNrQ29udGFpbmVyQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGlzdG5lXCIpXG4gICAgICAgIGRyYXdBZGRUYXNrQ29udGFpbmVyKHByb2plY3QpO1xuICAgIH0pXG5cblxuXG4gICAgLy8gdGhpcy5faWQgPSBnZXROZXdJRCgpO1xuICAgIC8vIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgLy8gdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAvLyB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAvLyB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgLy8gdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAvLyB0aGlzLl9jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAvLyB0aGlzLl9wYXJlbnRQcm9qZWN0O1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXJIZWFkZXI7XG59XG5cbmNvbnN0IGRyYXdUYXNrTGlzdCA9IGZ1bmN0aW9uICh0YXNrTGlzdCkge1xuICAgIHdoaWxlICh0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH07XG4gICAgdGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGFzayh0YXNrKSk7XG4gICAgfSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbn1cblxuY29uc3QgZHJhd1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgY29uc3QgdGFza0NvbXBsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29tcGxldGVCb3guY2xhc3NMaXN0LmFkZChcInRhc2stY29tcGxldGUtYm94XCIpO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlQm94KTtcbiAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlZFwiKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stYm94LWNvbXBsZXRlZFwiKTtcbiAgICB9O1xuICAgIHRhc2tDb21wbGV0ZUJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJ0YXNrQ29tcGxldGVcIiwgdGFzayk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1jb21wbGV0ZWRcIik7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrLWJveC1jb21wbGV0ZWRcIik7XG4gICAgfSk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgIGNvbnN0IHRhc2tFZGl0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgdGFza0VkaXRCb3guY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiLCBcInRhc2stZWRpdFwiKTtcbiAgICBjb25zdCB0YXNrRGVsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgdGFza0RlbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS10cmFzaFwiLCBcInRhc2stZGVsZXRlXCIpO1xuICAgIHRhc2tEZWxldGVCb3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRhc2tEZWxldGVTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2stZGVsZXRlLWhpZGRlblwiKTtcbiAgICAgICAgdGFza0RlbGV0ZVllcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGRlbGV0ZVRhc2tTdWJtaXQpXG4gICAgfSlcbiAgICB0YXNrRGVsZXRlQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0YXNrRGVsZXRlWWVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZGVsZXRlVGFza1N1Ym1pdCk7XG4gICAgICAgIHRhc2tEZWxldGVTY3JlZW4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWhpZGRlblwiKTtcbiAgICB9KVxuICAgIGNvbnN0IGRlbGV0ZVRhc2tTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KFwidGFza0RlbGV0ZVwiLCB0YXNrKTtcbiAgICAgICAgdGFza0RlbGV0ZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xuICAgICAgICB0YXNrRGVsZXRlQm94LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0VkaXRCb3gpO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJveCk7XG4gICAgcmV0dXJuIHRhc2tCb3g7XG59XG5cbi8vIENyZWF0aW5nIERPTSBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS10ZXh0XCIpO1xudGl0bGVUZXh0LnRleHRDb250ZW50ID0gXCJ0aGluZ3MgdG8gZG8uXCI7XG5oZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuLy8gQ3JlYXRpbmcgRE9NIGJvZHlcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYm9keS5pZCA9IFwiYm9keS1jb250YWluZXJcIjtcblxuLy8gQ3JlYXRpbmcgRE9NIHNpZGViYXJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4vLyBET00gc2lkZWJhciBuYXZpZ2F0aW9uXG5jb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIpO1xuY29uc3QgbmF2QXJyYXkgPSBbXG4gICAgeyB0aXRsZTogXCJBbGxcIiwgaWNvbkNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtY2FsZW5kYXJcIl0sIGxpbms6IFwiYWxsXCIgfSxcbiAgICB7IHRpdGxlOiBcIlRvZGF5XCIsIGljb25DbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWNhbGVuZGFyLWRheVwiXSwgbGluazogXCJ0b2RheVwiIH0sXG4gICAgeyB0aXRsZTogXCJXZWVrXCIsIGljb25DbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWNhbGVuZGFyLXdlZWtcIl0sIGxpbms6IFwid2Vla1wiIH0sXG4gICAgeyB0aXRsZTogXCJJbXBvcnRhbnRcIiwgaWNvbkNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtY2lyY2xlLWV4Y2xhbWF0aW9uXCJdLCBsaW5rOiBcImltcG9ydGFudFwiIH0sXG4gICAgeyB0aXRsZTogXCJDb21wbGV0ZWRcIiwgaWNvbkNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtY2FsZW5kYXItY2hlY2tcIl0sIGxpbms6IFwiY29tcGxldGVkXCIgfVxuXTtcbm5hdkFycmF5LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBjb25zdCB0aGlzTmF2QnV0dG9uID0gZHJhd1NpZGViYXJMaW5rKGJ1dHRvbik7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXNOYXZCdXR0b24pO1xufSk7XG5jb25zdCBob3Jpem9udGFsUnVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuLy8gRE9NIHNpZGViYXIgcHJvamVjdHMgbGlzdFxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIsIFwibmF2LWFkZC1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkcmF3U2lkZWJhckxpbmsoXG4gICAgeyB0aXRsZTogXCJBZGQgUHJvamVjdFwiLCBpY29uQ2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1wbHVzXCJdLCBsaW5rOiBcImFkZC1wcm9qZWN0XCIgfVxuKTtcbmFkZFByb2plY3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5cbi8vIEFkZCBQcm9qZWN0IGNvbnRhaW5lclxuY29uc3QgYWRkUHJvamVjdElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5hZGRQcm9qZWN0SW5wdXRDb250YWluZXIuaWQgPSBcImFkZC1wcm9qZWN0LWZvcm1cIjtcbmFkZFByb2plY3RJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWhpZGRlblwiKTtcblxuY29uc3QgcHJvamVjdE5hbWVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5wcm9qZWN0TmFtZUlucHV0TGFiZWwuZm9yID0gXCJ0aXRsZVwiO1xucHJvamVjdE5hbWVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIlxuY29uc3QgcHJvamVjdE5hbWVJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5wcm9qZWN0TmFtZUlucHV0VGV4dC5pZCA9IFwicHJvamVjdC10aXRsZVwiXG5wcm9qZWN0TmFtZUlucHV0VGV4dC5uYW1lID0gXCJ0aXRsZVwiXG5wcm9qZWN0TmFtZUlucHV0VGV4dC50eXBlID0gXCJ0ZXh0XCI7XG5wcm9qZWN0TmFtZUlucHV0VGV4dC5tYXhMZW5ndGggPSAxNTtcbnByb2plY3ROYW1lSW5wdXRUZXh0LnJlcXVpcmVkID0gdHJ1ZTtcbnByb2plY3ROYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dExhYmVsKTtcbnByb2plY3ROYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dFRleHQpO1xuY29uc3QgcHJvamVjdExhYmVsSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJvamVjdExhYmVsSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbnByb2plY3RMYWJlbElucHV0TGFiZWwuZm9yID0gXCJsYWJlbFwiO1xucHJvamVjdExhYmVsSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiTGFiZWw6XCJcbmNvbnN0IHByb2plY3RMYWJlbElucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnByb2plY3RMYWJlbElucHV0VGV4dC5pZCA9IFwicHJvamVjdC1sYWJlbFwiXG5wcm9qZWN0TGFiZWxJbnB1dFRleHQubmFtZSA9IFwibGFiZWxcIlxucHJvamVjdExhYmVsSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbnByb2plY3RMYWJlbElucHV0VGV4dC5tYXhMZW5ndGggPSA4MDtcbnByb2plY3RMYWJlbElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbElucHV0TGFiZWwpO1xucHJvamVjdExhYmVsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsSW5wdXRUZXh0KTtcbmNvbnN0IHByb2plY3RTdWJtaXRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0U3VibWl0SW5wdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucHJvamVjdFN1Ym1pdElucHV0QnV0dG9uLmlkID0gXCJwcm9qZWN0LXN1Ym1pdFwiO1xucHJvamVjdFN1Ym1pdElucHV0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgTkVXIFBST0pFQ1RcIjtcbnByb2plY3RTdWJtaXRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0U3VibWl0SW5wdXRCdXR0b24pO1xuXG5hZGRQcm9qZWN0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dENvbnRhaW5lcik7XG5hZGRQcm9qZWN0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsSW5wdXRDb250YWluZXIpO1xuYWRkUHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RTdWJtaXRJbnB1dENvbnRhaW5lcik7XG5hZGRQcm9qZWN0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1hZGRpbmctcHJvamVjdFwiKTtcblxuYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lci5pbnNlcnRCZWZvcmUoYWRkUHJvamVjdElucHV0Q29udGFpbmVyLCBhZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuXG5jb25zdCB0b2dnbGVBZGRQcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGFkZFByb2plY3RJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWhpZGRlblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXBsdXNcIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1taW51c1wiKTtcbn1cblxuYWRkUHJvamVjdElucHV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmZvcm1zW1wiYWRkLXByb2plY3QtZm9ybVwiXTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShwcm9qZWN0Rm9ybSk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZm9ybURhdGEuZ2V0KFwibGFiZWxcIik7XG4gICAgbGV0IHZhbGlkUHJvamVjdCA9IHRydWU7XG4gICAgaWYgKHZhbGlkUHJvamVjdCkge1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcIm5ld1Byb2plY3RcIiwgcHJvamVjdFRpdGxlLCBwcm9qZWN0TGFiZWwpO1xuICAgICAgICB0b2dnbGVBZGRQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgfVxufSwgZmFsc2UpO1xuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRvZ2dsZUFkZFByb2plY3RDb250YWluZXIpO1xuXG5zaWRlYmFyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG5zaWRlYmFyLmFwcGVuZENoaWxkKGhvcml6b250YWxSdWxlKTtcbnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5zaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b25Db250YWluZXIpO1xuXG4vLyBDcmVhdGluZyBET00gbWFpblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xubWFpbi5pZCA9IFwibWFpblwiO1xuXG4vLyBDcmVhdGluZyBET00gVGFzayBMaXN0XG5cblxuY29uc3QgdGFza1NvcnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrU29ydGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNvcnRlclwiKTtcbmNvbnN0IHNvcnRBcnJheSA9IFtcbiAgICBcIlwiLFxuICAgIFwiVGFza1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIixcbiAgICBcIkR1ZSBEYXRlXCIsXG4gICAgXCJQcmlvcml0eVwiLFxuICAgIFwiXCIsXG4gICAgXCJcIlxuXVxuc29ydEFycmF5LmZvckVhY2goc29ydGVyID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gc29ydGVyO1xuICAgIHRhc2tTb3J0ZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn0pXG5cbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG5cbi8vIFRhc2sgZGVsZXRlIHBvcHVwXG5jb25zdCB0YXNrRGVsZXRlU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZWxldGVTY3JlZW4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLXNjcmVlblwiLCBcInRhc2stZGVsZXRlLWhpZGRlblwiKTtcbmNvbnN0IHRhc2tEZWxldGVGYWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZWxldGVGYWRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1mYWRlXCIpO1xuY29uc3QgdGFza0RlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1jb250YWluZXJcIik7XG50YXNrRGVsZXRlU2NyZWVuLmFwcGVuZENoaWxkKHRhc2tEZWxldGVGYWRlKTtcbnRhc2tEZWxldGVTY3JlZW4uYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUNvbnRhaW5lcik7XG5jb25zdCB0YXNrRGVsZXRlUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG50YXNrRGVsZXRlUHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1wcm9tcHRcIilcbnRhc2tEZWxldGVQcm9tcHQudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiO1xuY29uc3QgdGFza0RlbGV0ZVllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YXNrRGVsZXRlWWVzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1idXR0b25cIiwgXCJ0YXNrLWRlbGV0ZS1idXR0b24teWVzXCIpO1xudGFza0RlbGV0ZVllcy50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG5jb25zdCB0YXNrRGVsZXRlQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhc2tEZWxldGVDYW5jZWwuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWJ1dHRvblwiLCBcInRhc2stZGVsZXRlLWJ1dHRvbi1jYW5jZWxcIik7XG50YXNrRGVsZXRlQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDQU5DRUxcIjtcbnRhc2tEZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZVByb21wdCk7XG50YXNrRGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGVZZXMpO1xudGFza0RlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQ2FuY2VsKTtcblxuLy8gUHJvamVjdCBkZWxldGUgcG9wdXBcbmNvbnN0IHByb2plY3REZWxldGVTY3JlZW4gPSB0YXNrRGVsZXRlU2NyZWVuLmNsb25lTm9kZSgpO1xuY29uc3QgcHJvamVjdERlbGV0ZUZhZGUgPSB0YXNrRGVsZXRlRmFkZS5jbG9uZU5vZGUoKTtcbmNvbnN0IHByb2plY3REZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdERlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtY29udGFpbmVyXCIsIFwicHJvamVjdC1kZWxldGUtY29udGFpbmVyXCIpO1xucHJvamVjdERlbGV0ZVNjcmVlbi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlRmFkZSk7XG5wcm9qZWN0RGVsZXRlU2NyZWVuLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVDb250YWluZXIpO1xuY29uc3QgcHJvamVjdERlbGV0ZVByb21wdCA9IHRhc2tEZWxldGVQcm9tcHQuY2xvbmVOb2RlKCk7XG5wcm9qZWN0RGVsZXRlUHJvbXB0LnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdD8gVGhpcyB3aWxsIGFsc28gZGVsZXRlIGFueSBhc3NvY2lhdGVkIHRhc2tzIVwiO1xuY29uc3QgcHJvamVjdERlbGV0ZVllcyA9IHRhc2tEZWxldGVZZXMuY2xvbmVOb2RlKCk7XG5wcm9qZWN0RGVsZXRlWWVzLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbmNvbnN0IHByb2plY3REZWxldGVDYW5jZWwgPSB0YXNrRGVsZXRlQ2FuY2VsLmNsb25lTm9kZSgpO1xucHJvamVjdERlbGV0ZUNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ0FOQ0VMXCI7XG5wcm9qZWN0RGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVQcm9tcHQpO1xucHJvamVjdERlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlWWVzKTtcbnByb2plY3REZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUNhbmNlbCk7XG5cblxuXG4vLyBBZGQgVGFzayBjb250YWluZXJcbmNvbnN0IGRyYXdBZGRUYXNrQ29udGFpbmVyID0gZnVuY3Rpb24gKHByb2plY3QsIHRhc2spIHtcbiAgICAvLyBUYXNrIGFkZCBwb3B1cFxuICAgIGNvbnN0IHRhc2tBZGRTY3JlZW4gPSB0YXNrRGVsZXRlU2NyZWVuLmNsb25lTm9kZSgpO1xuICAgIGNvbnN0IHRhc2tBZGRGYWRlID0gdGFza0RlbGV0ZUZhZGUuY2xvbmVOb2RlKCk7XG4gICAgY29uc3QgdGFza0FkZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtY29udGFpbmVyXCIsIFwidGFzay1hZGQtY29udGFpbmVyXCIpO1xuICAgIHRhc2tBZGRTY3JlZW4uYXBwZW5kQ2hpbGQodGFza0FkZEZhZGUpO1xuICAgIHRhc2tBZGRTY3JlZW4uYXBwZW5kQ2hpbGQodGFza0FkZENvbnRhaW5lcik7XG4gICAgY29uc3QgdGFza0FkZFByb21wdCA9IHRhc2tEZWxldGVQcm9tcHQuY2xvbmVOb2RlKCk7XG4gICAgdGFza0FkZFByb21wdC50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IHRhc2tcIjtcbiAgICAvLyBjb25zdCB0YXNrQWRkWWVzID0gdGFza0RlbGV0ZVllcy5jbG9uZU5vZGUoKTtcbiAgICAvLyB0YXNrQWRkWWVzLnRleHRDb250ZW50ID0gXCJBRERcIjtcbiAgICBjb25zdCB0YXNrQWRkQ2FuY2VsID0gdGFza0RlbGV0ZUNhbmNlbC5jbG9uZU5vZGUoKTtcbiAgICB0YXNrQWRkQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDQU5DRUxcIjtcblxuXG5cbiAgICBsZXQgYWRkVGFza0lucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgYWRkVGFza0lucHV0Q29udGFpbmVyLmlkID0gXCJhZGQtdGFzay1mb3JtXCI7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza05hbWVJbnB1dExhYmVsLmZvciA9IFwidGFzay10aXRsZVwiO1xuICAgIHRhc2tOYW1lSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCJcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrTmFtZUlucHV0VGV4dC5pZCA9IFwidGFzay10aXRsZVwiXG4gICAgdGFza05hbWVJbnB1dFRleHQubmFtZSA9IFwidGl0bGVcIlxuICAgIHRhc2tOYW1lSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0YXNrTmFtZUlucHV0VGV4dC5tYXhMZW5ndGggPSAxNTtcbiAgICB0YXNrTmFtZUlucHV0VGV4dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGFza05hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0TGFiZWwpO1xuICAgIHRhc2tOYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dFRleHQpO1xuICAgIGNvbnN0IHRhc2tEZXNjSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tEZXNjSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrRGVzY0lucHV0TGFiZWwuZm9yID0gXCJ0YXNrLWRlc2NcIjtcbiAgICB0YXNrRGVzY0lucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiXG4gICAgY29uc3QgdGFza0Rlc2NJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0Rlc2NJbnB1dFRleHQuaWQgPSBcInRhc2stZGVzY1wiXG4gICAgdGFza0Rlc2NJbnB1dFRleHQubmFtZSA9IFwiZGVzY1wiXG4gICAgdGFza0Rlc2NJbnB1dFRleHQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRhc2tEZXNjSW5wdXRUZXh0Lm1heExlbmd0aCA9IDgwO1xuICAgIHRhc2tEZXNjSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NJbnB1dExhYmVsKTtcbiAgICB0YXNrRGVzY0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjSW5wdXRUZXh0KTtcblxuICAgIGNvbnN0IHRhc2tEYXRlSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tEYXRlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrRGF0ZUlucHV0TGFiZWwuZm9yID0gXCJkYXRlXCI7XG4gICAgdGFza0RhdGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRGF0ZUlucHV0RGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgdGFza0RhdGVJbnB1dERhdGUuaWQgPSBcInRhc2stZGF0ZVwiO1xuICAgIHRhc2tEYXRlSW5wdXREYXRlLm5hbWUgPSBcImRhdGVcIjtcbiAgICB0YXNrRGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXRMYWJlbCk7XG4gICAgdGFza0RhdGVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0RGF0ZSk7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0TG93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dExvdy50eXBlID0gXCJyYWRpb1wiO1xuICAgIHRhc2tQcmlvcml0eUlucHV0TG93LmlkID0gXCJ0YXNrLXByaW9yaXR5LWxvd1wiO1xuICAgIHRhc2tQcmlvcml0eUlucHV0TG93Lm5hbWUgPSBcInRhc2stcHJpb3JpdHlcIjtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dExvdy52YWx1ZSA9IFwibG93XCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRMb3cuY2hlY2tlZCA9IFwidHJ1ZVwiO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0TG93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRMb3dMYWJlbC5mb3IgPSBcInRhc2stcHJpb3JpdHktbG93XCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRMb3dMYWJlbC50ZXh0Q29udGVudCA9IFwiTE9XXCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRMb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRMb3cpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0TG93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUlucHV0TG93TGFiZWwpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0TWVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dE1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dE1lZC50eXBlID0gXCJyYWRpb1wiO1xuICAgIHRhc2tQcmlvcml0eUlucHV0TWVkLmlkID0gXCJ0YXNrLXByaW9yaXR5LW1lZFwiO1xuICAgIHRhc2tQcmlvcml0eUlucHV0TWVkLm5hbWUgPSBcInRhc2stcHJpb3JpdHlcIjtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dE1lZC52YWx1ZSA9IFwibWVkXCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRNZWQuY2hlY2tlZCA9IFwidHJ1ZVwiO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0TWVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRNZWRMYWJlbC5mb3IgPSBcInRhc2stcHJpb3JpdHktbWVkXCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRNZWRMYWJlbC50ZXh0Q29udGVudCA9IFwiTUVESVVNXCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRNZWRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRNZWQpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0TWVkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUlucHV0TWVkTGFiZWwpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0SGlnaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXRIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0SGlnaC50eXBlID0gXCJyYWRpb1wiO1xuICAgIHRhc2tQcmlvcml0eUlucHV0SGlnaC5pZCA9IFwidGFzay1wcmlvcml0eS1oaWdoXCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRIaWdoLm5hbWUgPSBcInRhc2stcHJpb3JpdHlcIjtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dEhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dEhpZ2guY2hlY2tlZCA9IFwidHJ1ZVwiO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0SGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0SGlnaExhYmVsLmZvciA9IFwidGFzay1wcmlvcml0eS1oaWdoXCI7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRIaWdoTGFiZWwudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dEhpZ2hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRIaWdoKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dEhpZ2hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRIaWdoTGFiZWwpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUlucHV0TG93Q29udGFpbmVyKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dE1lZENvbnRhaW5lcik7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRIaWdoQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0SW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrUHJvamVjdElucHV0TGFiZWwuZm9yID0gXCJ0YXNrLXByb2plY3RcIjtcbiAgICB0YXNrUHJvamVjdElucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG4gICAgY29uc3QgdGFza1Byb2plY3RJbnB1dFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgdGFza1Byb2plY3RJbnB1dFNlbGVjdC5uYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgdGFza1Byb2plY3RJbnB1dFNlbGVjdC5pZCA9IFwidGFzay1wcm9qZWN0XCI7XG4gICAgLy9cbiAgICAvLyBuZWVkIHRvIGNyZWF0ZSA8b3B0aW9uIHZhbHVlPVwicHJvamVjdDFcIj5Qcm9qZWN0IDE8L29wdGlvbj5cbiAgICAvLyBmb3IgZWFjaCBwcm9qZWN0IGluIGZpbGUsICYgc2VsZWN0IGN1cnJlbnQgcHJvamVjdCBhcyBkZWZhdWx0IVxuICAgIC8vIGhtbW1cblxuICAgIGNvbnN0IHRhc2tTdWJtaXRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza1N1Ym1pdElucHV0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0YXNrU3VibWl0SW5wdXRCdXR0b24uaWQgPSBcInRhc2stc3VibWl0XCI7XG4gICAgdGFza1N1Ym1pdElucHV0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgTkVXIFRBU0tcIjtcbiAgICB0YXNrU3VibWl0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1N1Ym1pdElucHV0QnV0dG9uKTtcblxuICAgIGFkZFRhc2tJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0Q29udGFpbmVyKTtcbiAgICBhZGRUYXNrSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NJbnB1dENvbnRhaW5lcik7XG4gICAgYWRkVGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXRDb250YWluZXIpO1xuICAgIGFkZFRhc2tJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dENvbnRhaW5lcik7XG4gICAgYWRkVGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTdWJtaXRJbnB1dENvbnRhaW5lcik7XG4gICAgYWRkVGFza0lucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYWRkaW5nLXRhc2tcIik7XG5cbiAgICB0YXNrQWRkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tBZGRQcm9tcHQpO1xuICAgIHRhc2tBZGRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0lucHV0Q29udGFpbmVyKTtcbiAgICAvLyB0YXNrQWRkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tBZGRZZXMpO1xuICAgIHRhc2tBZGRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0FkZENhbmNlbCk7XG4gICAgYWRkVGFza0lucHV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGFza0FkZFN1Ym1pdCk7XG4gICAgdGFza0FkZENhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGFza0FkZFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xuICAgICAgICB0YXNrQWRkU2NyZWVuLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHRhc2tBZGRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2stZGVsZXRlLWhpZGRlblwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRhc2tBZGRTY3JlZW4pO1xufVxuXG5cbi8vIEFwcGVuZGluZyB0byBtYWluIGFuZCBib2R5XG4vLyBtYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXJIZWFkZXIpO1xubWFpbi5hcHBlbmRDaGlsZCh0YXNrU29ydGVyKTtcbm1haW4uYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuYm9keS5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlU2NyZWVuKTtcbmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZVNjcmVlbik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgeyBldmVudEVtaXR0ZXIsIGRyYXdQcm9qZWN0TmF2LCBkcmF3UHJvamVjdEhlYWRlciwgZHJhd1Rhc2tMaXN0LCBkcmF3VGFzaywgbmF2Q29udGFpbmVyLCBwcm9qZWN0Q29udGFpbmVyLCB0YXNrQ29udGFpbmVyLCBhZGRQcm9qZWN0QnV0dG9uIH07IiwibGV0IGN1cnJlbnRJRCA9IDA7XG5cbmNvbnN0IGdldE5ld0lEID0gKCkgPT4ge1xuICAgIGN1cnJlbnRJRCsrO1xuICAgIHJldHVybiBjdXJyZW50SUQ7XG59XG5cbmV4cG9ydCB7IGdldE5ld0lEIH07IiwiaW1wb3J0IHsgZ2V0TmV3SUQgfSBmcm9tIFwiLi9pZENvbnRyb2xsZXIuanNcIlxuXG5sZXQgY3VycmVudFByb2plY3RJRCA9IDE7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBsYWJlbCkge1xuICAgICAgICB0aGlzLl9pZCA9IGdldE5ld0lEKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuX2ljb25DbGFzc2VzID0gW1wiZmEtc29saWRcIiwgXCJmYS1mb2xkZXJcIl07XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gW107XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2godGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgfVxuICAgIHNldCBsYWJlbChuZXdMYWJlbCkge1xuICAgICAgICB0aGlzLl9sYWJlbCA9IG5ld0xhYmVsO1xuICAgIH1cbiAgICBnZXQgaWNvbkNsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uQ2xhc3NlcztcbiAgICB9XG4gICAgZ2V0IHRhc2tMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0xpc3Q7XG4gICAgfVxuICAgIGFkZFRhc2sgPSAodGFza09iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgdGFza09iamVjdC5wYXJlbnRQcm9qZWN0ID0gdGhpcztcbiAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDAsIHRhc2tPYmplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdGFza0xpc3QucHVzaCh0YXNrT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0xpc3Q7XG4gICAgfVxuICAgIHJlbW92ZVRhc2sgPSAodGFza09iamVjdCkgPT4ge1xuICAgICAgICB0aGlzLl90YXNrTGlzdCA9IHRoaXMuX3Rhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2sgIT09IHRhc2tPYmplY3QpO1xuICAgIH1cbiAgICBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QuZmluZEluZGV4KHByb2plY3QgPT4gdGhpcyA9PT0gcHJvamVjdCk7XG4gICAgICAgIHByb2plY3RMaXN0LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIH1cbn1cblxuY29uc3QgZ2V0UHJvamVjdEJ5SUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QuZmluZEluZGV4KHByb2plY3QgPT4gTnVtYmVyKGlkKSA9PT0gTnVtYmVyKHByb2plY3QuaWQpKTtcbiAgICByZXR1cm4gcHJvamVjdExpc3RbcHJvamVjdEluZGV4XTtcbn1cblxuY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBjdXJyZW50UHJvamVjdElEO1xufVxuXG5jb25zdCBzZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uKGlkKXtcbiAgICBjdXJyZW50UHJvamVjdElEID0gaWQ7XG59XG5cbmV4cG9ydCB7IFByb2plY3QsIGdldFByb2plY3RCeUlELCBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QgfTsiLCJpbXBvcnQgeyBnZXROZXdJRCB9IGZyb20gXCIuL2lkQ29udHJvbGxlci5qc1wiXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhdHVzLCBwcmlvcml0eSwgcGFyZW50UHJvamVjdCkge1xuICAgICAgICB0aGlzLl9pZCA9IGdldE5ld0lEKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXJlbnRQcm9qZWN0O1xuICAgIH1cblxuICAgIGdldCBpZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgICB9XG4gICAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgcHJpb3JpdHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cbiAgICBzZXQgcHJpb3JpdHkobmV3UHJpb3JpdHkpe1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cbiAgICBnZXQgY29tcGxldGVkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XG4gICAgfVxuICAgIHNldCBjb21wbGV0ZWQobmV3Q29tcGxldGVkKXtcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gbmV3Q29tcGxldGVkO1xuICAgIH1cbiAgICBnZXQgcGFyZW50UHJvamVjdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50UHJvamVjdDtcbiAgICB9XG4gICAgc2V0IHBhcmVudFByb2plY3QobmV3UGFyZW50UHJvamVjdCl7XG4gICAgICAgIHRoaXMuX3BhcmVudFByb2plY3QgPSBuZXdQYXJlbnRQcm9qZWN0O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVGFzayB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIG1vZHVsZSB0aGF0IGNyZWF0ZXMgcHJvamVjdHMgJiBnZXRzL3NldHMgdGhlaXIgcHJvcGVydGllc1xuLy8gYWRkcywgcmVtb3ZlcyB0YXNrc1xuLy9pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG4vLyBtb2R1bGUgdGhhdCBjcmVhdGVzIHRvZG9zICYgZ2V0cy9zZXRzIHRoZWlyIHByb3BlcnRpZXNcbi8vaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcbi8vaW1wb3J0IHsgZHJhd1Byb2plY3ROYXYgfSBmcm9tIFwiLi9kb21DcmVhdG9yLmpzXCI7XG5cbmltcG9ydCBcIi4vYWN0aW9uSGFuZGxlci5qc1wiO1xuXG4gIFxuXG4vLyB3aGF0IGhhcHBlbnMgd2hlbiB3ZSBtb3ZlIGEgdGFzayBmcm9tIG9uZSBwcm9qZWN0IHRvIGFub3RoZXI/XG4vLyB3aGF0IGhhcHBlbnMgd2hlbiB3ZSBkZWxldGUgYSBwcm9qZWN0P1xuLy8gd2hhdCBoYXBwZW5zIHdoZW4gd2Ugc2V0IGEgdGFzayBhcyBjb21wbGV0ZWQ/IGlzIHRoYXQgY29udHJvbGxlZCBieSB0aGUgdGFzayBtb2R1bGUgb3IgYW4gZXh0ZXJuYWwgbW9kdWxlIHRoYXQgbWFuaXB1bGF0ZXMgaXQ/XG5cbi8vIGRvbSBtb2R1bGUocylcblxuLy8gaSB0aGluayBhIG1vZHVsZSB0aGF0IHlvdSBjYWxsIHVwb24gdG8gYWRkIHByb2plY3RzL3Rhc2tzIC0gYWxzbyBhZGRzIHRvIGRvbSBhcyB3ZWxsXG4vLyBzb3J0IG9mIGEgZmFjaWxpdGF0b3Igb2YgZG9tICsgY2xhc3NlcyAtIHNvIHdlIGp1c3QgY2FsbCB0aGF0IG1vZHVsZSBpbnN0ZWFkIG9mIGNhbGxpbmcgZG9tICsgY2xhc3MiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=