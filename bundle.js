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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --blue-main: rgb(114, 144, 184);\n    --blue-light: rgb(215, 225, 238);\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Poppins, sans-serif;\n}\n\nh2, h4, h5 {\n    margin: 0;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nh5 {\n    font-size: 1rem;\n}\n\n#header {\n    height: 100px;\n    width: 100vw;\n    background-color: var(--blue-main);\n    display: flex;\n    align-items: center;\n}\n\n.title-text {\n    color: white;\n    text-align: center;\n    font-family: \"Roboto Mono\", monospace;\n    font-size: 3.5rem;\n    flex-grow: 1;\n}\n\n#body-container {\n    display: flex;\n    width: 100%;\n    height: calc(100vh - 100px);\n    background-color:rgb(217, 240, 239);\n}\n\n#sidebar {\n    background-color: var(--blue-light);\n    width: 350px;\n    height: 100%;\n}\n\n.nav-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 32px;\n}\n\n.nav-button {\n    height: 42px;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 12px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    transform: scale(1.07);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n    background-color: var(--blue-main);\n    color: white;\n}\n\n.nav-button:active {\n    background-color: rgb(189, 192, 230);\n}\n\n.nav-button h3 {\n    flex-grow: 1;\n}\n\n.nav-project-delete {\n    display: none;\n    width: 24px;\n    height: 24px;\n    padding: 8px;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid white;\n    border-radius: 50%;\n    opacity: 0.5;\n    z-index: 5;\n}\n\n.nav-button:hover .nav-project-delete {\n    display: flex\n}\n\n.nav-project-delete:hover {\n    background-color: rgb(240, 185, 185);\n    color: rgb(109, 44, 44);\n    border: 3px solid rgb(109, 44, 44);\n    opacity: 1;\n}\n\n.nav-add-project-container {\n    padding: 0 32px;\n}\n\n#add-project {\n    opacity: 0.4\n}\n\n#add-project:hover {\n    opacity: 1;\n}\n\n.nav-adding-project {\n    border: 2px solid rgb(70, 70, 70);\n    border-radius: 12px;\n    display: flex;\n    height: 150px;\n    opacity: 1;\n    justify-content: center;\n    flex-direction: column;\n    padding: 12px;\n    gap: 12px;\n    overflow: hidden;\n    transition: display 0.2s ease, height 0.1s ease;\n}\n\n.nav-hidden {\n    height: 0;\n    padding: 0;\n    gap: 0;\n    border: 0;\n    opacity: 0;\n    transition: opacity 0.2s ease, height .1s ease;\n}\n\n.nav-adding-project div {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 12px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project label {\n    width: 60px;\n    font-weight: 600;\n}\n\n.nav-adding-project input {\n    flex-grow: 1;\n    width: 100px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project button {\n    width: 100%;\n    border: 2px solid black;\n    border-radius: 12px;\n    background-color: rgb(158, 206, 194);\n    height: 32px;\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n.nav-adding-project button:hover {\n    cursor: pointer;\n    background-color: rgb(140, 228, 206);\n}\n\n.nav-adding-project button:active {\n    background-color: white;\n}\n\n#sidebar hr {\n    width: 80%;\n    border: none;\n    border-top: 4px solid white;\n}\n\n#main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    padding: 32px;\n    gap: 16px;\n}\n\n.task-container-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    gap: 16px;\n}\n\n.task-container-header *:first-child {\n    flex-grow: 1;\n}\n\n.task-sorter, .task {\n    display: grid;\n    grid-template-columns: 40px 240px auto 80px 80px 24px 24px;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding-left: 18px;\n    padding-right: 12px;\n}\n\n.task-sorter {\n    font-weight: 600;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.task {\n    height: 40px;\n    background-color: rgb(248, 222, 226);\n    border-radius: 12px;\n    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.task:hover {\n    background-color: white;\n}\n\n.task-complete-box {\n    height: 20px;\n    width: 20px;\n    border: 2px solid rgb(129, 129, 129);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:active {\n    background-color: white;\n}\n\n.task-complete-box:hover {\n    cursor: pointer;\n    background-color: white;\n    border-color: black;\n    transform: scale(1.2);\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:hover::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: rgb(110, 110, 110);\n    padding: 0 0 8px 8px;\n}\n\n.task-complete-box:active::after {\n    color: black;\n}\n\n.task-box-completed {\n    opacity: 0.7;\n}\n\n.task-completed {\n    border-color: black;\n    background-color: white;\n}\n\n.task-completed::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: black;\n    padding: 0 0 8px 8px;\n}\n\n.task-completed ~ * {\n    color: grey;\n    text-decoration:line-through;\n}\n\n.task-edit, .task-delete {\n    color: grey;\n    transition: transform 0.1s ease;\n}\n\n.task-edit:hover, .task-delete:hover {\n    cursor: pointer;\n    color: black;\n    transform: scale(1.4);\n    transition: transform 0.1s ease;\n}\n\n/* Task edit and delete popup containers */\n.task-delete-screen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.task-delete-hidden {\n    display: none;\n}\n\n.task-delete-fade {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.task-delete-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 16px;\n    padding: 16px;\n    width: 400px;\n    height: 120px;\n    border: 4px solid black;\n    background-color: white;\n    border-radius: 24px;\n    z-index: 10;\n    transition: transform 0.2s ease;\n    box-shadow: 0 0 32px rgb(0, 0, 0);\n    animation: task-popup-box;\n    animation-duration: 0.2s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.task-delete-prompt {\n    text-align: center;\n    font-weight: 600;\n    margin: 0;\n    grid-column: 1 / 3;\n}\n\n.task-delete-button {\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 8px;\n    opacity: 0.7;\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.task-delete-button:hover {\n    opacity: 1;\n}\n\n.task-delete-button:active {\n    background-color: white;\n}\n\n.task-delete-button-yes {\n    background-color: rgb(233, 110, 110);\n}\n\n.task-delete-button-cancel {\n    background-color: rgb(199, 199, 199);\n}\n\n@keyframes task-popup-box {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap');\n\n:root {\n    --blue-main: rgb(114, 144, 184);\n    --blue-light: rgb(215, 225, 238);\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Poppins, sans-serif;\n}\n\nh2, h4, h5 {\n    margin: 0;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nh5 {\n    font-size: 1rem;\n}\n\n#header {\n    height: 100px;\n    width: 100vw;\n    background-color: var(--blue-main);\n    display: flex;\n    align-items: center;\n}\n\n.title-text {\n    color: white;\n    text-align: center;\n    font-family: \"Roboto Mono\", monospace;\n    font-size: 3.5rem;\n    flex-grow: 1;\n}\n\n#body-container {\n    display: flex;\n    width: 100%;\n    height: calc(100vh - 100px);\n    background-color:rgb(217, 240, 239);\n}\n\n#sidebar {\n    background-color: var(--blue-light);\n    width: 350px;\n    height: 100%;\n}\n\n.nav-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 32px;\n}\n\n.nav-button {\n    height: 42px;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 12px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    transform: scale(1.07);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n    background-color: var(--blue-main);\n    color: white;\n}\n\n.nav-button:active {\n    background-color: rgb(189, 192, 230);\n}\n\n.nav-button h3 {\n    flex-grow: 1;\n}\n\n.nav-project-delete {\n    display: none;\n    width: 24px;\n    height: 24px;\n    padding: 8px;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid white;\n    border-radius: 50%;\n    opacity: 0.5;\n    z-index: 5;\n}\n\n.nav-button:hover .nav-project-delete {\n    display: flex\n}\n\n.nav-project-delete:hover {\n    background-color: rgb(240, 185, 185);\n    color: rgb(109, 44, 44);\n    border: 3px solid rgb(109, 44, 44);\n    opacity: 1;\n}\n\n.nav-add-project-container {\n    padding: 0 32px;\n}\n\n#add-project {\n    opacity: 0.4\n}\n\n#add-project:hover {\n    opacity: 1;\n}\n\n.nav-adding-project {\n    border: 2px solid rgb(70, 70, 70);\n    border-radius: 12px;\n    display: flex;\n    height: 150px;\n    opacity: 1;\n    justify-content: center;\n    flex-direction: column;\n    padding: 12px;\n    gap: 12px;\n    overflow: hidden;\n    transition: display 0.2s ease, height 0.1s ease;\n}\n\n.nav-hidden {\n    height: 0;\n    padding: 0;\n    gap: 0;\n    border: 0;\n    opacity: 0;\n    transition: opacity 0.2s ease, height .1s ease;\n}\n\n.nav-adding-project div {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 12px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project label {\n    width: 60px;\n    font-weight: 600;\n}\n\n.nav-adding-project input {\n    flex-grow: 1;\n    width: 100px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project button {\n    width: 100%;\n    border: 2px solid black;\n    border-radius: 12px;\n    background-color: rgb(158, 206, 194);\n    height: 32px;\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n.nav-adding-project button:hover {\n    cursor: pointer;\n    background-color: rgb(140, 228, 206);\n}\n\n.nav-adding-project button:active {\n    background-color: white;\n}\n\n#sidebar hr {\n    width: 80%;\n    border: none;\n    border-top: 4px solid white;\n}\n\n#main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    padding: 32px;\n    gap: 16px;\n}\n\n.task-container-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    gap: 16px;\n}\n\n.task-container-header *:first-child {\n    flex-grow: 1;\n}\n\n.task-sorter, .task {\n    display: grid;\n    grid-template-columns: 40px 240px auto 80px 80px 24px 24px;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding-left: 18px;\n    padding-right: 12px;\n}\n\n.task-sorter {\n    font-weight: 600;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.task {\n    height: 40px;\n    background-color: rgb(248, 222, 226);\n    border-radius: 12px;\n    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.task:hover {\n    background-color: white;\n}\n\n.task-complete-box {\n    height: 20px;\n    width: 20px;\n    border: 2px solid rgb(129, 129, 129);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:active {\n    background-color: white;\n}\n\n.task-complete-box:hover {\n    cursor: pointer;\n    background-color: white;\n    border-color: black;\n    transform: scale(1.2);\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:hover::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: rgb(110, 110, 110);\n    padding: 0 0 8px 8px;\n}\n\n.task-complete-box:active::after {\n    color: black;\n}\n\n.task-box-completed {\n    opacity: 0.7;\n}\n\n.task-completed {\n    border-color: black;\n    background-color: white;\n}\n\n.task-completed::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: black;\n    padding: 0 0 8px 8px;\n}\n\n.task-completed ~ * {\n    color: grey;\n    text-decoration:line-through;\n}\n\n.task-edit, .task-delete {\n    color: grey;\n    transition: transform 0.1s ease;\n}\n\n.task-edit:hover, .task-delete:hover {\n    cursor: pointer;\n    color: black;\n    transform: scale(1.4);\n    transition: transform 0.1s ease;\n}\n\n/* Task edit and delete popup containers */\n.task-delete-screen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.task-delete-hidden {\n    display: none;\n}\n\n.task-delete-fade {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.task-delete-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 16px;\n    padding: 16px;\n    width: 400px;\n    height: 120px;\n    border: 4px solid black;\n    background-color: white;\n    border-radius: 24px;\n    z-index: 10;\n    transition: transform 0.2s ease;\n    box-shadow: 0 0 32px rgb(0, 0, 0);\n    animation: task-popup-box;\n    animation-duration: 0.2s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.task-delete-prompt {\n    text-align: center;\n    font-weight: 600;\n    margin: 0;\n    grid-column: 1 / 3;\n}\n\n.task-delete-button {\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 8px;\n    opacity: 0.7;\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.task-delete-button:hover {\n    opacity: 1;\n}\n\n.task-delete-button:active {\n    background-color: white;\n}\n\n.task-delete-button-yes {\n    background-color: rgb(233, 110, 110);\n}\n\n.task-delete-button-cancel {\n    background-color: rgb(199, 199, 199);\n}\n\n@keyframes task-popup-box {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}"],"sourceRoot":""}]);
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
_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("deleteProject", (projectButton) => {
    // if the current project is displayed, remove it and replace with uncategorised
    projectButton.remove();
    const thisProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByID)(projectButton.id);
    if ((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)() === thisProject.id) {
        // NOTE NOTE: this isn't working properly????
        console.log((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)());
        console.log(thisProject.id);
        (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(1)
        _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectInfo((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByID)(1));
        _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawTaskList((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByID)(1).taskList);
    }
    thisProject.deleteProject();
});

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("newProject", (projectName, projectLabel) => {
    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectName, projectLabel);
    _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectNav(newProject);
});

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("projectButton", (project) => {
    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(project.id);
    _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectInfo(project);
    _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawTaskList(project.taskList);
});

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("taskComplete", (task) => {
    task.completed = !task.completed;
});

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("taskDelete", (task) => {
    task.parentProject.removeTask(task);
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

_domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectInfo(defaultProject);
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
    thisProjectButton.addEventListener("mousedown", function() {
        eventEmitter.emit("projectButton", project);
    })
    const projectDeleteButton = document.createElement("div");
    projectDeleteButton.classList.add("nav-project-delete");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-xmark");
    projectDeleteButton.appendChild(deleteIcon);
    projectDeleteButton.addEventListener("mousedown", function () {
        eventEmitter.emit("deleteProject", thisProjectButton);
    })
    thisProjectButton.appendChild(projectDeleteButton);
    projectContainer.appendChild(thisProjectButton);
    return thisProjectButton;
}

const drawProjectInfo = function (project) {
    taskContainerTitle.textContent = project.title;
    taskContainerLabel.textContent = project.label;
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
    if(task.completed){
        taskCompleteBox.classList.add("task-completed");
        taskCompleteBox.parentElement.classList.add("task-box-completed");
    };
    taskCompleteBox.addEventListener("mousedown", function(){
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
    taskDeleteBox.addEventListener("mousedown", function(){
        taskDeleteScreen.classList.remove("task-delete-hidden");
        taskDeleteYes.addEventListener("mousedown", function(){
            eventEmitter.emit("taskDelete", task);
            taskDeleteScreen.classList.add("task-delete-hidden");
            taskDeleteBox.parentElement.remove();
        })
    })
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
const taskContainerHeader = document.createElement("div");
taskContainerHeader.classList.add("task-container-header");
const taskContainerTitle = document.createElement("h2");
taskContainerTitle.textContent = "Project Name";
const taskContainerLabel = document.createElement("h4");
taskContainerLabel.textContent = "Label";
taskContainerHeader.appendChild(taskContainerTitle);
taskContainerHeader.appendChild(taskContainerLabel);

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

// Creating Popups
const taskDeleteScreen = document.createElement("div");
taskDeleteScreen.classList.add("task-delete-screen", "task-delete-hidden");
const taskDeleteFade = document.createElement("div");
taskDeleteFade.classList.add("task-delete-fade")
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
taskDeleteYes.addEventListener("mousedown", function(){
//    eventEmitter.emit("taskDelete", "placeholder")
})
const taskDeleteCancel = document.createElement("button");
taskDeleteCancel.classList.add("task-delete-button", "task-delete-button-cancel");
taskDeleteCancel.textContent = "CANCEL";
taskDeleteCancel.addEventListener("mousedown", function(){
    taskDeleteScreen.classList.add("task-delete-hidden");
})

taskDeleteContainer.appendChild(taskDeletePrompt);
taskDeleteContainer.appendChild(taskDeleteYes);
taskDeleteContainer.appendChild(taskDeleteCancel);

main.appendChild(taskContainerHeader);
main.appendChild(taskSorter);
main.appendChild(taskContainer);

body.appendChild(sidebar);
body.appendChild(main);
body.appendChild(taskDeleteScreen);
content.appendChild(header);
content.appendChild(body);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ eventEmitter, drawProjectNav, drawProjectInfo, drawTaskList, drawTask, navContainer, projectContainer, addProjectButton });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFP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QXFFO0FBQzNFLE1BQU0sNkVBQTZFO0FBQ25GLE1BQU0sNEVBQTRFO0FBQ2xGLE1BQU0sMkZBQTJGO0FBQ2pHLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUEsaUVBQWUsRUFBRSx5SEFBeUg7Ozs7Ozs7Ozs7Ozs7O0FDM1IxSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMNEM7O0FBRTVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsMERBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFNEM7O0FBRTVDO0FBQ0E7QUFDQSxtQkFBbUIsMERBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7O0FBRXJCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsaUJBQWlCOztBQUVBOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYWN0aW9uSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZG9tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaWRDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwJmZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDIwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibHVlLW1haW46IHJnYigxMTQsIDE0NCwgMTg0KTtcXG4gICAgLS1ibHVlLWxpZ2h0OiByZ2IoMjE1LCAyMjUsIDIzOCk7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDIsIGg0LCBoNSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW1haW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jYm9keS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTcsIDI0MCwgMjM5KTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UsIGNvbG9yIDAuMXMgZWFzZTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlLCBjb2xvciAwLjFzIGVhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTkyLCAyMzApO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiBoMyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIgLm5hdi1wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXhcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NSwgMTg1KTtcXG4gICAgY29sb3I6IHJnYigxMDksIDQ0LCA0NCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxMDksIDQ0LCA0NCk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5uYXYtYWRkLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMCAzMnB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgICBvcGFjaXR5OiAwLjRcXG59XFxuXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3MCwgNzAsIDcwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGdhcDogMTJweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAwLjJzIGVhc2UsIGhlaWdodCAwLjFzIGVhc2U7XFxufVxcblxcbi5uYXYtaGlkZGVuIHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBnYXA6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UsIGhlaWdodCAuMXMgZWFzZTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBsYWJlbCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGlucHV0IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjA2LCAxOTQpO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDIyOCwgMjA2KTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNzaWRlYmFyIGhyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1oZWFkZXIgKjpmaXJzdC1jaGlsZCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRhc2stc29ydGVyLCAudGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAyNDBweCBhdXRvIDgwcHggODBweCAyNHB4IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMThweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcXG59XFxuXFxuLnRhc2stc29ydGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjIyLCAyMjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjksIDEyOSwgMTI5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGNvbG9yOiByZ2IoMTEwLCAxMTAsIDExMCk7XFxuICAgIHBhZGRpbmc6IDAgMCA4cHggOHB4O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3g6YWN0aXZlOjphZnRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRhc2stYm94LWNvbXBsZXRlZCB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLnRhc2stY29tcGxldGVkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMCAwIDhweCA4cHg7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlZCB+ICoge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZWRpdCwgLnRhc2stZGVsZXRlIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi50YXNrLWVkaXQ6aG92ZXIsIC50YXNrLWRlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi8qIFRhc2sgZWRpdCBhbmQgZGVsZXRlIHBvcHVwIGNvbnRhaW5lcnMgKi9cXG4udGFzay1kZWxldGUtc2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1kZWxldGUtZmFkZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDMycHggcmdiKDAsIDAsIDApO1xcbiAgICBhbmltYXRpb246IHRhc2stcG9wdXAtYm94O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnRhc2stZGVsZXRlLXByb21wdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uLXllcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDExMCwgMTEwKTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XFxufVxcblxcbkBrZXlmcmFtZXMgdGFzay1wb3B1cC1ib3gge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDRFQUE0RTtJQUM1RSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJB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YTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FydGVyK09uZSZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMjAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsdWUtbWFpbjogcmdiKDExNCwgMTQ0LCAxODQpO1xcbiAgICAtLWJsdWUtbGlnaHQ6IHJnYigyMTUsIDIyNSwgMjM4KTtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMiwgaDQsIGg1IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaDUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbWFpbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNib2R5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNywgMjQwLCAyMzkpO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZSwgY29sb3IgMC4xcyBlYXNlO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UsIGNvbG9yIDAuMXMgZWFzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1tYWluKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxOTIsIDIzMCk7XFxufVxcblxcbi5uYXYtYnV0dG9uIGgzIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciAubmF2LXByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogZmxleFxcbn1cXG5cXG4ubmF2LXByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTg1LCAxODUpO1xcbiAgICBjb2xvcjogcmdiKDEwOSwgNDQsIDQ0KTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDEwOSwgNDQsIDQ0KTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5hdi1hZGQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDMycHg7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIG9wYWNpdHk6IDAuNFxcbn1cXG5cXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDcwLCA3MCwgNzApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDAuMnMgZWFzZSwgaGVpZ2h0IDAuMXMgZWFzZTtcXG59XFxuXFxuLm5hdi1oaWRkZW4ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdhcDogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZSwgaGVpZ2h0IC4xcyBlYXNlO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGxhYmVsIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXYtYWRkaW5nLXByb2plY3QgaW5wdXQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYtYWRkaW5nLXByb2plY3QgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAyMDYsIDE5NCk7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMjI4LCAyMDYpO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3NpZGViYXIgaHIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWhlYWRlciAqOmZpcnN0LWNoaWxkIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udGFzay1zb3J0ZXIsIC50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDI0MHB4IGF1dG8gODBweCA4MHB4IDI0cHggMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4udGFzay1zb3J0ZXIge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyMjIsIDIyNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyOSwgMTI5LCAxMjkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3g6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94OmhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcXG4gICAgcGFkZGluZzogMCAwIDhweCA4cHg7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveDphY3RpdmU6OmFmdGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFzay1ib3gtY29tcGxldGVkIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZWQge1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGVkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwIDAgOHB4IDhweDtcXG59XFxuXFxuLnRhc2stY29tcGxldGVkIH4gKiB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1lZGl0LCAudGFzay1kZWxldGUge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnRhc2stZWRpdDpob3ZlciwgLnRhc2stZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLyogVGFzayBlZGl0IGFuZCBkZWxldGUgcG9wdXAgY29udGFpbmVycyAqL1xcbi50YXNrLWRlbGV0ZS1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnRhc2stZGVsZXRlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1mYWRlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGFzay1kZWxldGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMzJweCByZ2IoMCwgMCwgMCk7XFxuICAgIGFuaW1hdGlvbjogdGFzay1wb3B1cC1ib3g7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4udGFzay1kZWxldGUtcHJvbXB0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b24teWVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTEwLCAxMTApO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcXG59XFxuXFxuQGtleWZyYW1lcyB0YXNrLXBvcHVwLWJveCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFByb2plY3QsIGdldFByb2plY3RCeUlELCBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBkb21DcmVhdG9yIGZyb20gXCIuL2RvbUNyZWF0b3IuanNcIjtcblxuLy8gRXZlbnQgZW1pdHRlciBsaXN0ZW5lcnMgZm9yIHNlbGVjdGluZyBwcm9qZWN0cyAmIGRpc3BsYXlpbmcvcmVtb3ZpbmcgdGhlbSBmcm9tIERPTVxuZG9tQ3JlYXRvci5ldmVudEVtaXR0ZXIub24oXCJkZWxldGVQcm9qZWN0XCIsIChwcm9qZWN0QnV0dG9uKSA9PiB7XG4gICAgLy8gaWYgdGhlIGN1cnJlbnQgcHJvamVjdCBpcyBkaXNwbGF5ZWQsIHJlbW92ZSBpdCBhbmQgcmVwbGFjZSB3aXRoIHVuY2F0ZWdvcmlzZWRcbiAgICBwcm9qZWN0QnV0dG9uLnJlbW92ZSgpO1xuICAgIGNvbnN0IHRoaXNQcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SUQocHJvamVjdEJ1dHRvbi5pZCk7XG4gICAgaWYgKGdldEN1cnJlbnRQcm9qZWN0KCkgPT09IHRoaXNQcm9qZWN0LmlkKSB7XG4gICAgICAgIC8vIE5PVEUgTk9URTogdGhpcyBpc24ndCB3b3JraW5nIHByb3Blcmx5Pz8/P1xuICAgICAgICBjb25zb2xlLmxvZyhnZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpc1Byb2plY3QuaWQpO1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdCgxKVxuICAgICAgICBkb21DcmVhdG9yLmRyYXdQcm9qZWN0SW5mbyhnZXRQcm9qZWN0QnlJRCgxKSk7XG4gICAgICAgIGRvbUNyZWF0b3IuZHJhd1Rhc2tMaXN0KGdldFByb2plY3RCeUlEKDEpLnRhc2tMaXN0KTtcbiAgICB9XG4gICAgdGhpc1Byb2plY3QuZGVsZXRlUHJvamVjdCgpO1xufSk7XG5cbmRvbUNyZWF0b3IuZXZlbnRFbWl0dGVyLm9uKFwibmV3UHJvamVjdFwiLCAocHJvamVjdE5hbWUsIHByb2plY3RMYWJlbCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdExhYmVsKTtcbiAgICBkb21DcmVhdG9yLmRyYXdQcm9qZWN0TmF2KG5ld1Byb2plY3QpO1xufSk7XG5cbmRvbUNyZWF0b3IuZXZlbnRFbWl0dGVyLm9uKFwicHJvamVjdEJ1dHRvblwiLCAocHJvamVjdCkgPT4ge1xuICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgIGRvbUNyZWF0b3IuZHJhd1Byb2plY3RJbmZvKHByb2plY3QpO1xuICAgIGRvbUNyZWF0b3IuZHJhd1Rhc2tMaXN0KHByb2plY3QudGFza0xpc3QpO1xufSk7XG5cbmRvbUNyZWF0b3IuZXZlbnRFbWl0dGVyLm9uKFwidGFza0NvbXBsZXRlXCIsICh0YXNrKSA9PiB7XG4gICAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG59KTtcblxuZG9tQ3JlYXRvci5ldmVudEVtaXR0ZXIub24oXCJ0YXNrRGVsZXRlXCIsICh0YXNrKSA9PiB7XG4gICAgdGFzay5wYXJlbnRQcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG59KVxuXG5cbi8vIERlZmF1bHQgcHJvamVjdHMgZm9yIHRlc3RpbmcgcHVycG9zZXNcbi8vIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhdHVzLCBwcmlvcml0eVxubGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJVbmNhdGVnb3Jpc2VkXCIpO1xubGV0IGRlZmF1bHRQcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiVG9kbyBsaXN0XCIsIFwiU3R1ZHlcIik7XG5sZXQgZGVmYXVsdFByb2plY3QzID0gbmV3IFByb2plY3QoXCJEcml2aW5nIGdhbWVcIiwgXCJXb3JrXCIpO1xubGV0IG15VGFzayA9IG5ldyBUYXNrKFwiR3ltIHNlc3Npb25cIiwgXCJUbyB3b3JrIG9uIHRoZXNlIHF1YWRzIGZvciB0aGUgdXBjb21pbmcgc2tpIHdlZWtlbmRcIiwgMjIwODIzLCBcInVuY29tcGxldGVkXCIsIFwibWVkaXVtXCIpO1xubGV0IG15VGFzazIgPSBuZXcgVGFzayhcIkNhbGwgUUFOVEFTXCIsIFwiRmlndXJlIG91dCB3aGVyZSBteSBwb2ludHMgYXJlXCIsIDIyMDkwMiwgXCJ1bmNvbXBsZXRlZFwiLCBcIm1lZGl1bVwiKTtcbmxldCBteVRhc2szID0gbmV3IFRhc2soXCJNYWtlIHRyYXZlbCBpbnN1cmFuY2UgY2xhaW1cIiwgXCJnZXQgc29tZSBtb25leSBiYWNrIGZyb20gdGhlIENhbmFkYSB0cmlwIHNoZW5hbmlnYW5zXCIsIDIyMDkwMiwgXCJ1bmNvbXBsZXRlZFwiLCBcIm1lZGl1bVwiKTtcbmxldCBteVRhc2s0ID0gbmV3IFRhc2soXCJNYWtlIHRhc2tzIGJlYXV0aWZ1bFwiLCBcImFkZCByb3VuZGVkIGNvcm5lcnMgc2ltaWxhciB0byBzaWRlYmFyIGJ1dHRvbnMsIGRyb3Agc2hhZG93cywgbmljZSBzcGFjaW5nXCIsIGZhbHNlLCBcInVuY29tcGxldGVkXCIsIFwibWVkaXVtXCIpO1xubGV0IG15VGFzazUgPSBuZXcgVGFzayhcIkFkZCB0YXNrIGJ1dHRvblwiLCBcImhhdmUgdG8gbWFrZSBhIHdheSB0byBhZGQgdGFza3Mgc29tZWhvdyBheWVcIiwgZmFsc2UsIFwidW5jb21wbGV0ZWRcIiwgXCJoaWdoXCIpO1xubGV0IG15VGFzazYgPSBuZXcgVGFzayhcIk1vdmUgdGFza3MgYmV0d2VlbiBwcm9qZWN0c1wiLCBcInRoaXMgaXMgYSBiaXQgaGFyZGVyIC0gd2lsbCBuZWVkIHRvIHJlbW92ZSBjdXJyZW50IHRhc2sgZnJvbSBjdXJyZW50IHByb2plY3QgdGFza0xpc3QsIHRoZW4gYWRkIGl0IHRvIHRoZSBuZXcgcHJvamVjdCBhbmQgZm9ybWF0IGFwcHJvcHJpYXRlbHlcIiwgZmFsc2UsIFwidW5jb21wbGV0ZWRcIiwgXCJtZWRpdW1cIik7XG5sZXQgbXlUYXNrNyA9IG5ldyBUYXNrKFwiQWRkIGZvb3RlclwiLCBcImFkZCBmb290ZXIgd2l0aCBteSBuYW1lIGFuZCBnaXRodWIgbGluayB0byBzb3VyY2UgY29kZVwiLCBmYWxzZSwgXCJ1bmNvbXBsZXRlZFwiLCBcImxvd1wiKTtcbmxldCBteVRhc2s4ID0gbmV3IFRhc2soXCJBZGQgZHJpdmluZyBwaHlzaWNzXCIsIFwiZmlyc3QgdGhpbmdzIGZpcnN0LCBtYWtlIHRoZSBjYXIgZmVlbCBhbWF6aW5nIHRvIGRyaXZlXCIsIDIyMTEzMCwgXCJ1bmNvbXBsZXRlZFwiLCBcIm1lZGl1bVwiKTtcbmxldCBteVRhc2s5ID0gbmV3IFRhc2soXCJNYWtlIEZhbGxzIENyZWVrIHJvYWRcIiwgXCJUbyB3b3JrIG9uIHRoZXNlIHF1YWRzIGZvciB0aGUgdXBjb21pbmcgc2tpIHdlZWtlbmRcIiwgMjMwMjE1LCBcInVuY29tcGxldGVkXCIsIFwibWVkaXVtXCIpO1xubGV0IG15VGFzazEwID0gbmV3IFRhc2soXCJBZGQgc21va2UgcGFydGljbGUgZWZmZWN0c1wiLCBcIlRvIHdvcmsgb24gdGhlc2UgcXVhZHMgZm9yIHRoZSB1cGNvbWluZyBza2kgd2Vla2VuZFwiLCAyMjExMzAsIFwidW5jb21wbGV0ZWRcIiwgXCJsb3dcIik7XG5teVRhc2suY29tcGxldGVkID0gdHJ1ZTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sobXlUYXNrKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRhc2sobXlUYXNrMik7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKG15VGFzazMpO1xuZGVmYXVsdFByb2plY3QyLmFkZFRhc2sobXlUYXNrNCk7XG5kZWZhdWx0UHJvamVjdDIuYWRkVGFzayhteVRhc2s1KTtcbmRlZmF1bHRQcm9qZWN0Mi5hZGRUYXNrKG15VGFzazYpO1xuZGVmYXVsdFByb2plY3QyLmFkZFRhc2sobXlUYXNrNyk7XG5kZWZhdWx0UHJvamVjdDMuYWRkVGFzayhteVRhc2s4KTtcbmRlZmF1bHRQcm9qZWN0My5hZGRUYXNrKG15VGFzazkpO1xuZGVmYXVsdFByb2plY3QzLmFkZFRhc2sobXlUYXNrMTApO1xuXG5kb21DcmVhdG9yLmRyYXdQcm9qZWN0TmF2KGRlZmF1bHRQcm9qZWN0KTtcbmRvbUNyZWF0b3IuZHJhd1Byb2plY3ROYXYoZGVmYXVsdFByb2plY3QyKTtcbmRvbUNyZWF0b3IuZHJhd1Byb2plY3ROYXYoZGVmYXVsdFByb2plY3QzKTtcblxuZG9tQ3JlYXRvci5kcmF3UHJvamVjdEluZm8oZGVmYXVsdFByb2plY3QpO1xuZG9tQ3JlYXRvci5kcmF3VGFza0xpc3QoZGVmYXVsdFByb2plY3QudGFza0xpc3QpOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XG5jb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5cbi8vIEZ1bmN0aW9ucyBmb3IgZHJhd2luZyBlbGVtZW50cyB0byB3aW5kb3dcbmNvbnN0IGRyYXdTaWRlYmFyTGluayA9IGZ1bmN0aW9uIChsaW5rT2JqKSB7XG4gICAgY29uc3QgbmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZCdXR0b24uaWQgPSBsaW5rT2JqLmxpbmsgfHwgbGlua09iai5pZDtcbiAgICBuYXZCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gICAgY29uc3QgbmF2SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGxpbmtPYmouaWNvbkNsYXNzZXMuZm9yRWFjaChpY29uQ2xhc3MgPT4gbmF2SWNvbi5jbGFzc0xpc3QuYWRkKGljb25DbGFzcykpO1xuICAgIGNvbnN0IG5hdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbmF2VGV4dC50ZXh0Q29udGVudCA9IGxpbmtPYmoudGl0bGU7XG4gICAgbmF2QnV0dG9uLmFwcGVuZENoaWxkKG5hdkljb24pO1xuICAgIG5hdkJ1dHRvbi5hcHBlbmRDaGlsZChuYXZUZXh0KTtcbiAgICByZXR1cm4gbmF2QnV0dG9uO1xufVxuXG5jb25zdCBkcmF3UHJvamVjdE5hdiA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgY29uc3QgdGhpc1Byb2plY3RCdXR0b24gPSBkcmF3U2lkZWJhckxpbmsocHJvamVjdCk7XG4gICAgdGhpc1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJwcm9qZWN0QnV0dG9uXCIsIHByb2plY3QpO1xuICAgIH0pXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LXByb2plY3QtZGVsZXRlXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXhtYXJrXCIpO1xuICAgIHByb2plY3REZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJkZWxldGVQcm9qZWN0XCIsIHRoaXNQcm9qZWN0QnV0dG9uKTtcbiAgICB9KVxuICAgIHRoaXNQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdXR0b24pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpc1Byb2plY3RCdXR0b24pO1xuICAgIHJldHVybiB0aGlzUHJvamVjdEJ1dHRvbjtcbn1cblxuY29uc3QgZHJhd1Byb2plY3RJbmZvID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICB0YXNrQ29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHRhc2tDb250YWluZXJMYWJlbC50ZXh0Q29udGVudCA9IHByb2plY3QubGFiZWw7XG59XG5cbmNvbnN0IGRyYXdUYXNrTGlzdCA9IGZ1bmN0aW9uICh0YXNrTGlzdCkge1xuICAgIHdoaWxlICh0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH07XG4gICAgdGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGFzayh0YXNrKSk7XG4gICAgfSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbn1cblxuY29uc3QgZHJhd1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgY29uc3QgdGFza0NvbXBsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29tcGxldGVCb3guY2xhc3NMaXN0LmFkZChcInRhc2stY29tcGxldGUtYm94XCIpO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlQm94KTtcbiAgICBpZih0YXNrLmNvbXBsZXRlZCl7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jb21wbGV0ZWRcIik7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJveC1jb21wbGV0ZWRcIik7XG4gICAgfTtcbiAgICB0YXNrQ29tcGxldGVCb3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbigpe1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcInRhc2tDb21wbGV0ZVwiLCB0YXNrKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrLWNvbXBsZXRlZFwiKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInRhc2stYm94LWNvbXBsZXRlZFwiKTtcbiAgICB9KTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgY29uc3QgdGFza0VkaXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICB0YXNrRWRpdEJveC5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1wZW4tdG8tc3F1YXJlXCIsIFwidGFzay1lZGl0XCIpO1xuICAgIGNvbnN0IHRhc2tEZWxldGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICB0YXNrRGVsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXRyYXNoXCIsIFwidGFzay1kZWxldGVcIik7XG4gICAgdGFza0RlbGV0ZUJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRhc2tEZWxldGVTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2stZGVsZXRlLWhpZGRlblwiKTtcbiAgICAgICAgdGFza0RlbGV0ZVllcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcInRhc2tEZWxldGVcIiwgdGFzayk7XG4gICAgICAgICAgICB0YXNrRGVsZXRlU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1oaWRkZW5cIik7XG4gICAgICAgICAgICB0YXNrRGVsZXRlQm94LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tFZGl0Qm94KTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tEZWxldGVCb3gpO1xuICAgIHJldHVybiB0YXNrQm94O1xufVxuXG4vLyBDcmVhdGluZyBET00gaGVhZGVyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcbmNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtdGV4dFwiKTtcbnRpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwidGhpbmdzIHRvIGRvLlwiO1xuaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG5cbi8vIENyZWF0aW5nIERPTSBib2R5XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJvZHkuaWQgPSBcImJvZHktY29udGFpbmVyXCI7XG5cbi8vIENyZWF0aW5nIERPTSBzaWRlYmFyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcblxuLy8gRE9NIHNpZGViYXIgbmF2aWdhdGlvblxuY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbnRhaW5lclwiKTtcbmNvbnN0IG5hdkFycmF5ID0gW1xuICAgIHsgdGl0bGU6IFwiQWxsXCIsIGljb25DbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWNhbGVuZGFyXCJdLCBsaW5rOiBcImFsbFwiIH0sXG4gICAgeyB0aXRsZTogXCJUb2RheVwiLCBpY29uQ2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1jYWxlbmRhci1kYXlcIl0sIGxpbms6IFwidG9kYXlcIiB9LFxuICAgIHsgdGl0bGU6IFwiV2Vla1wiLCBpY29uQ2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1jYWxlbmRhci13ZWVrXCJdLCBsaW5rOiBcIndlZWtcIiB9LFxuICAgIHsgdGl0bGU6IFwiSW1wb3J0YW50XCIsIGljb25DbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWNpcmNsZS1leGNsYW1hdGlvblwiXSwgbGluazogXCJpbXBvcnRhbnRcIiB9LFxuICAgIHsgdGl0bGU6IFwiQ29tcGxldGVkXCIsIGljb25DbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWNhbGVuZGFyLWNoZWNrXCJdLCBsaW5rOiBcImNvbXBsZXRlZFwiIH1cbl07XG5uYXZBcnJheS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgY29uc3QgdGhpc05hdkJ1dHRvbiA9IGRyYXdTaWRlYmFyTGluayhidXR0b24pO1xuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzTmF2QnV0dG9uKTtcbn0pO1xuY29uc3QgaG9yaXpvbnRhbFJ1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbi8vIERPTSBzaWRlYmFyIHByb2plY3RzIGxpc3RcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbnRhaW5lclwiKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbnRhaW5lclwiLCBcIm5hdi1hZGQtcHJvamVjdC1jb250YWluZXJcIik7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZHJhd1NpZGViYXJMaW5rKFxuICAgIHsgdGl0bGU6IFwiQWRkIFByb2plY3RcIiwgaWNvbkNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtcGx1c1wiXSwgbGluazogXCJhZGQtcHJvamVjdFwiIH1cbik7XG5hZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG4vLyBBZGQgUHJvamVjdCBjb250YWluZXJcbmNvbnN0IGFkZFByb2plY3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuYWRkUHJvamVjdElucHV0Q29udGFpbmVyLmlkID0gXCJhZGQtcHJvamVjdC1mb3JtXCI7XG5hZGRQcm9qZWN0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1oaWRkZW5cIik7XG5cbmNvbnN0IHByb2plY3ROYW1lSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xucHJvamVjdE5hbWVJbnB1dExhYmVsLmZvciA9IFwidGl0bGVcIjtcbnByb2plY3ROYW1lSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCJcbmNvbnN0IHByb2plY3ROYW1lSW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xucHJvamVjdE5hbWVJbnB1dFRleHQuaWQgPSBcInByb2plY3QtdGl0bGVcIlxucHJvamVjdE5hbWVJbnB1dFRleHQubmFtZSA9IFwidGl0bGVcIlxucHJvamVjdE5hbWVJbnB1dFRleHQudHlwZSA9IFwidGV4dFwiO1xucHJvamVjdE5hbWVJbnB1dFRleHQubWF4TGVuZ3RoID0gMTU7XG5wcm9qZWN0TmFtZUlucHV0VGV4dC5yZXF1aXJlZCA9IHRydWU7XG5wcm9qZWN0TmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXRMYWJlbCk7XG5wcm9qZWN0TmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXRUZXh0KTtcbmNvbnN0IHByb2plY3RMYWJlbElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RMYWJlbElucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5wcm9qZWN0TGFiZWxJbnB1dExhYmVsLmZvciA9IFwibGFiZWxcIjtcbnByb2plY3RMYWJlbElucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkxhYmVsOlwiXG5jb25zdCBwcm9qZWN0TGFiZWxJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5wcm9qZWN0TGFiZWxJbnB1dFRleHQuaWQgPSBcInByb2plY3QtbGFiZWxcIlxucHJvamVjdExhYmVsSW5wdXRUZXh0Lm5hbWUgPSBcImxhYmVsXCJcbnByb2plY3RMYWJlbElucHV0VGV4dC50eXBlID0gXCJ0ZXh0XCI7XG5wcm9qZWN0TGFiZWxJbnB1dFRleHQubWF4TGVuZ3RoID0gODA7XG5wcm9qZWN0TGFiZWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWxJbnB1dExhYmVsKTtcbnByb2plY3RMYWJlbElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbElucHV0VGV4dCk7XG5jb25zdCBwcm9qZWN0U3VibWl0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJvamVjdFN1Ym1pdElucHV0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnByb2plY3RTdWJtaXRJbnB1dEJ1dHRvbi5pZCA9IFwicHJvamVjdC1zdWJtaXRcIjtcbnByb2plY3RTdWJtaXRJbnB1dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREIE5FVyBQUk9KRUNUXCI7XG5wcm9qZWN0U3VibWl0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdElucHV0QnV0dG9uKTtcblxuYWRkUHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXRDb250YWluZXIpO1xuYWRkUHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbElucHV0Q29udGFpbmVyKTtcbmFkZFByb2plY3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0U3VibWl0SW5wdXRDb250YWluZXIpO1xuYWRkUHJvamVjdElucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYWRkaW5nLXByb2plY3RcIik7XG5cbmFkZFByb2plY3RCdXR0b25Db250YWluZXIuaW5zZXJ0QmVmb3JlKGFkZFByb2plY3RJbnB1dENvbnRhaW5lciwgYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lci5maXJzdENoaWxkKTtcblxuY29uc3QgdG9nZ2xlQWRkUHJvamVjdENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBhZGRQcm9qZWN0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1oaWRkZW5cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1wbHVzXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uZmlyc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtbWludXNcIik7XG59XG5cbmFkZFByb2plY3RJbnB1dENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImFkZC1wcm9qZWN0LWZvcm1cIl07XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEocHJvamVjdEZvcm0pO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGZvcm1EYXRhLmdldChcImxhYmVsXCIpO1xuICAgIGxldCB2YWxpZFByb2plY3QgPSB0cnVlO1xuICAgIGlmICh2YWxpZFByb2plY3QpIHtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJuZXdQcm9qZWN0XCIsIHByb2plY3RUaXRsZSwgcHJvamVjdExhYmVsKTtcbiAgICAgICAgdG9nZ2xlQWRkUHJvamVjdENvbnRhaW5lcigpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIH1cbn0sIGZhbHNlKTtcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0b2dnbGVBZGRQcm9qZWN0Q29udGFpbmVyKTtcblxuc2lkZWJhci5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuc2lkZWJhci5hcHBlbmRDaGlsZChob3Jpem9udGFsUnVsZSk7XG5zaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyKTtcblxuLy8gQ3JlYXRpbmcgRE9NIG1haW5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbm1haW4uaWQgPSBcIm1haW5cIjtcblxuLy8gQ3JlYXRpbmcgRE9NIFRhc2sgTGlzdFxuY29uc3QgdGFza0NvbnRhaW5lckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrQ29udGFpbmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lci1oZWFkZXJcIik7XG5jb25zdCB0YXNrQ29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG50YXNrQ29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZVwiO1xuY29uc3QgdGFza0NvbnRhaW5lckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xudGFza0NvbnRhaW5lckxhYmVsLnRleHRDb250ZW50ID0gXCJMYWJlbFwiO1xudGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyVGl0bGUpO1xudGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyTGFiZWwpO1xuXG5jb25zdCB0YXNrU29ydGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tTb3J0ZXIuY2xhc3NMaXN0LmFkZChcInRhc2stc29ydGVyXCIpO1xuY29uc3Qgc29ydEFycmF5ID0gW1xuICAgIFwiXCIsXG4gICAgXCJUYXNrXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiLFxuICAgIFwiRHVlIERhdGVcIixcbiAgICBcIlByaW9yaXR5XCIsXG4gICAgXCJcIixcbiAgICBcIlwiXG5dXG5zb3J0QXJyYXkuZm9yRWFjaChzb3J0ZXIgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBzb3J0ZXI7XG4gICAgdGFza1NvcnRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSlcblxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcblxuLy8gQ3JlYXRpbmcgUG9wdXBzXG5jb25zdCB0YXNrRGVsZXRlU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZWxldGVTY3JlZW4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLXNjcmVlblwiLCBcInRhc2stZGVsZXRlLWhpZGRlblwiKTtcbmNvbnN0IHRhc2tEZWxldGVGYWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZWxldGVGYWRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1mYWRlXCIpXG5jb25zdCB0YXNrRGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWNvbnRhaW5lclwiKTtcbnRhc2tEZWxldGVTY3JlZW4uYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUZhZGUpO1xudGFza0RlbGV0ZVNjcmVlbi5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQ29udGFpbmVyKTtcbmNvbnN0IHRhc2tEZWxldGVQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRhc2tEZWxldGVQcm9tcHQuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLXByb21wdFwiKVxudGFza0RlbGV0ZVByb21wdC50ZXh0Q29udGVudCA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCI7XG5jb25zdCB0YXNrRGVsZXRlWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhc2tEZWxldGVZZXMuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWJ1dHRvblwiLCBcInRhc2stZGVsZXRlLWJ1dHRvbi15ZXNcIik7XG50YXNrRGVsZXRlWWVzLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbnRhc2tEZWxldGVZZXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbigpe1xuLy8gICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJ0YXNrRGVsZXRlXCIsIFwicGxhY2Vob2xkZXJcIilcbn0pXG5jb25zdCB0YXNrRGVsZXRlQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhc2tEZWxldGVDYW5jZWwuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWJ1dHRvblwiLCBcInRhc2stZGVsZXRlLWJ1dHRvbi1jYW5jZWxcIik7XG50YXNrRGVsZXRlQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDQU5DRUxcIjtcbnRhc2tEZWxldGVDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbigpe1xuICAgIHRhc2tEZWxldGVTY3JlZW4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWhpZGRlblwiKTtcbn0pXG5cbnRhc2tEZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZVByb21wdCk7XG50YXNrRGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGVZZXMpO1xudGFza0RlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQ2FuY2VsKTtcblxubWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVySGVhZGVyKTtcbm1haW4uYXBwZW5kQ2hpbGQodGFza1NvcnRlcik7XG5tYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbmJvZHkuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZVNjcmVlbik7XG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5jb250ZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHsgZXZlbnRFbWl0dGVyLCBkcmF3UHJvamVjdE5hdiwgZHJhd1Byb2plY3RJbmZvLCBkcmF3VGFza0xpc3QsIGRyYXdUYXNrLCBuYXZDb250YWluZXIsIHByb2plY3RDb250YWluZXIsIGFkZFByb2plY3RCdXR0b24gfTsiLCJsZXQgY3VycmVudElEID0gMDtcblxuY29uc3QgZ2V0TmV3SUQgPSAoKSA9PiB7XG4gICAgY3VycmVudElEKys7XG4gICAgcmV0dXJuIGN1cnJlbnRJRDtcbn1cblxuZXhwb3J0IHsgZ2V0TmV3SUQgfTsiLCJpbXBvcnQgeyBnZXROZXdJRCB9IGZyb20gXCIuL2lkQ29udHJvbGxlci5qc1wiXG5cbmxldCBjdXJyZW50UHJvamVjdElEID0gMTtcblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGxhYmVsKSB7XG4gICAgICAgIHRoaXMuX2lkID0gZ2V0TmV3SUQoKTtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5faWNvbkNsYXNzZXMgPSBbXCJmYS1zb2xpZFwiLCBcImZhLWZvbGRlclwiXTtcbiAgICAgICAgdGhpcy5fdGFza0xpc3QgPSBbXTtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICB9XG4gICAgc2V0IGxhYmVsKG5ld0xhYmVsKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gbmV3TGFiZWw7XG4gICAgfVxuICAgIGdldCBpY29uQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb25DbGFzc2VzO1xuICAgIH1cbiAgICBnZXQgdGFza0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrTGlzdDtcbiAgICB9XG4gICAgYWRkVGFzayA9ICh0YXNrT2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICB0YXNrT2JqZWN0LnBhcmVudFByb2plY3QgPSB0aGlzO1xuICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0LnNwbGljZShpbmRleCwgMCwgdGFza09iamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrTGlzdC5wdXNoKHRhc2tPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrTGlzdDtcbiAgICB9XG4gICAgcmVtb3ZlVGFzayA9ICh0YXNrT2JqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdGhpcy5fdGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzayAhPT0gdGFza09iamVjdCk7XG4gICAgfVxuICAgIGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0TGlzdC5maW5kSW5kZXgocHJvamVjdCA9PiB0aGlzID09PSBwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgfVxufVxuXG5jb25zdCBnZXRQcm9qZWN0QnlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0TGlzdC5maW5kSW5kZXgocHJvamVjdCA9PiBOdW1iZXIoaWQpID09PSBOdW1iZXIocHJvamVjdC5pZCkpO1xuICAgIHJldHVybiBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdO1xufVxuXG5jb25zdCBnZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0SUQ7XG59XG5cbmNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24oaWQpe1xuICAgIGN1cnJlbnRQcm9qZWN0SUQgPSBpZDtcbn1cblxuZXhwb3J0IHsgUHJvamVjdCwgZ2V0UHJvamVjdEJ5SUQsIGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCB9OyIsImltcG9ydCB7IGdldE5ld0lEIH0gZnJvbSBcIi4vaWRDb250cm9sbGVyLmpzXCJcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzdGF0dXMsIHByaW9yaXR5LCBwYXJlbnRQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuX2lkID0gZ2V0TmV3SUQoKTtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuICAgIGdldCBkdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cbiAgICBzZXQgZHVlRGF0ZShuZXdEdWVEYXRlKXtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfVxuICAgIGdldCBwcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuICAgIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSl7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuICAgIGdldCBjb21wbGV0ZWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcbiAgICB9XG4gICAgc2V0IGNvbXBsZXRlZChuZXdDb21wbGV0ZWQpe1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBuZXdDb21wbGV0ZWQ7XG4gICAgfVxuICAgIGdldCBwYXJlbnRQcm9qZWN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnRQcm9qZWN0O1xuICAgIH1cbiAgICBzZXQgcGFyZW50UHJvamVjdChuZXdQYXJlbnRQcm9qZWN0KXtcbiAgICAgICAgdGhpcy5fcGFyZW50UHJvamVjdCA9IG5ld1BhcmVudFByb2plY3Q7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUYXNrIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gbW9kdWxlIHRoYXQgY3JlYXRlcyBwcm9qZWN0cyAmIGdldHMvc2V0cyB0aGVpciBwcm9wZXJ0aWVzXG4vLyBhZGRzLCByZW1vdmVzIHRhc2tzXG4vL2ltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbi8vIG1vZHVsZSB0aGF0IGNyZWF0ZXMgdG9kb3MgJiBnZXRzL3NldHMgdGhlaXIgcHJvcGVydGllc1xuLy9pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuLy9pbXBvcnQgeyBkcmF3UHJvamVjdE5hdiB9IGZyb20gXCIuL2RvbUNyZWF0b3IuanNcIjtcblxuaW1wb3J0IFwiLi9hY3Rpb25IYW5kbGVyLmpzXCI7XG5cbiAgXG5cbi8vIHdoYXQgaGFwcGVucyB3aGVuIHdlIG1vdmUgYSB0YXNrIGZyb20gb25lIHByb2plY3QgdG8gYW5vdGhlcj9cbi8vIHdoYXQgaGFwcGVucyB3aGVuIHdlIGRlbGV0ZSBhIHByb2plY3Q/XG4vLyB3aGF0IGhhcHBlbnMgd2hlbiB3ZSBzZXQgYSB0YXNrIGFzIGNvbXBsZXRlZD8gaXMgdGhhdCBjb250cm9sbGVkIGJ5IHRoZSB0YXNrIG1vZHVsZSBvciBhbiBleHRlcm5hbCBtb2R1bGUgdGhhdCBtYW5pcHVsYXRlcyBpdD9cblxuLy8gZG9tIG1vZHVsZShzKVxuXG4vLyBpIHRoaW5rIGEgbW9kdWxlIHRoYXQgeW91IGNhbGwgdXBvbiB0byBhZGQgcHJvamVjdHMvdGFza3MgLSBhbHNvIGFkZHMgdG8gZG9tIGFzIHdlbGxcbi8vIHNvcnQgb2YgYSBmYWNpbGl0YXRvciBvZiBkb20gKyBjbGFzc2VzIC0gc28gd2UganVzdCBjYWxsIHRoYXQgbW9kdWxlIGluc3RlYWQgb2YgY2FsbGluZyBkb20gKyBjbGFzcyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==