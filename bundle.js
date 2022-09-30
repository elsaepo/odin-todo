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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --blue-main: rgb(114, 144, 184);\n    --blue-light: rgb(215, 225, 238);\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Poppins, sans-serif;\n}\n\nh2, h4, h5 {\n    margin: 0;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nh5 {\n    font-size: 1rem;\n}\n\n#header {\n    height: 100px;\n    width: 100vw;\n    background-color: var(--blue-main);\n    display: flex;\n    align-items: center;\n}\n\n.title-text {\n    color: white;\n    text-align: center;\n    font-family: \"Roboto Mono\", monospace;\n    font-size: 3.5rem;\n    flex-grow: 1;\n}\n\n#body-container {\n    display: flex;\n    width: 100%;\n    height: calc(100vh - 100px);\n    background-color:rgb(217, 240, 239);\n}\n\n#sidebar {\n    background-color: var(--blue-light);\n    width: 350px;\n    height: 100%;\n}\n\n.nav-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 32px;\n}\n\n.nav-button {\n    height: 42px;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 12px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    transform: scale(1.07);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n    background-color: var(--blue-main);\n    color: white;\n}\n\n.nav-button:active {\n    background-color: rgb(189, 192, 230);\n}\n\n.nav-button h3 {\n    flex-grow: 1;\n}\n\n.nav-project-delete {\n    display: none;\n    width: 24px;\n    height: 24px;\n    padding: 8px;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid white;\n    border-radius: 50%;\n    opacity: 0.5;\n    z-index: 5;\n}\n\n.nav-button:hover .nav-project-delete {\n    display: flex\n}\n\n.nav-project-delete:hover {\n    background-color: rgb(240, 185, 185);\n    color: rgb(109, 44, 44);\n    border: 3px solid rgb(109, 44, 44);\n    opacity: 1;\n}\n\n.nav-add-project-container {\n    padding: 0 32px;\n}\n\n#add-project {\n    opacity: 0.4\n}\n\n#add-project:hover {\n    opacity: 1;\n}\n\n.nav-adding-project {\n    border: 2px solid rgb(70, 70, 70);\n    border-radius: 12px;\n    display: flex;\n    height: 150px;\n    opacity: 1;\n    justify-content: center;\n    flex-direction: column;\n    padding: 12px;\n    gap: 12px;\n    overflow: hidden;\n    transition: display 0.2s ease, height 0.1s ease;\n}\n\n.nav-hidden {\n    height: 0;\n    padding: 0;\n    gap: 0;\n    border: 0;\n    opacity: 0;\n    transition: opacity 0.2s ease, height .1s ease;\n}\n\n.nav-adding-project div {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 12px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project label {\n    width: 60px;\n    font-weight: 600;\n}\n\n.nav-adding-project input {\n    flex-grow: 1;\n    width: 100px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project button {\n    width: 100%;\n    border: 2px solid black;\n    border-radius: 12px;\n    background-color: rgb(158, 206, 194);\n    height: 32px;\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n.nav-adding-project button:hover {\n    cursor: pointer;\n    background-color: rgb(140, 228, 206);\n}\n\n.nav-adding-project button:active {\n    background-color: white;\n}\n\n#sidebar hr {\n    width: 80%;\n    border: none;\n    border-top: 4px solid white;\n}\n\n#main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    padding: 32px;\n    gap: 16px;\n}\n\n.task-container-header {\n    display: flex;\n    /* justify-content: space-between; */\n    align-items: center;\n    gap: 16px;\n}\n\n.task-container-header *:nth-child(2), .add-task {\n    border: 2px solid grey;\n    font-size: 1.1rem;\n    padding: 4px 8px;\n}\n\n.add-task {\n    font-weight: 600;\n    color: rgb(82, 82, 82);\n    background-color: rgb(223, 243, 223);\n}\n\n.add-task:hover {\n    cursor: pointer;\n    border: 2px solid black;\n    color: black;\n    background-color: rgb(201, 241, 201);\n}\n\n.add-task:active {\n    background-color: white;\n}\n\n.task-sorter, .task {\n    display: grid;\n    grid-template-columns: 40px 240px auto 80px 80px 24px 24px;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding-left: 18px;\n    padding-right: 12px;\n}\n\n.task-sorter {\n    font-weight: 600;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n/* Tasks */\n.task {\n    height: 40px;\n    background-color: rgb(248, 222, 226);\n    border-radius: 12px;\n    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.task:hover {\n    background-color: white;\n}\n\n.task-complete-box {\n    height: 20px;\n    width: 20px;\n    border: 2px solid rgb(129, 129, 129);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:active {\n    background-color: white;\n}\n\n.task-complete-box:hover {\n    cursor: pointer;\n    background-color: white;\n    border-color: black;\n    transform: scale(1.2);\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:hover::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: rgb(110, 110, 110);\n    padding: 0 0 8px 8px;\n}\n\n.task-complete-box:active::after {\n    color: black;\n}\n\n.task-box-completed {\n    opacity: 0.7;\n}\n\n.task-completed {\n    border-color: black;\n    background-color: white;\n}\n\n.task-completed::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: black;\n    padding: 0 0 8px 8px;\n}\n\n.task-completed ~ * {\n    color: grey;\n    text-decoration:line-through;\n}\n\n.task-edit, .task-delete {\n    color: grey;\n    transition: transform 0.1s ease;\n}\n\n.task-edit:hover, .task-delete:hover {\n    cursor: pointer;\n    color: black;\n    transform: scale(1.4);\n    transition: transform 0.1s ease;\n}\n\n/* Task edit and delete popup containers */\n.task-delete-screen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.task-delete-hidden {\n    display: none;\n}\n\n.task-delete-fade {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.task-delete-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 16px;\n    padding: 16px;\n    width: 400px;\n    height: 120px;\n    border: 4px solid black;\n    background-color: white;\n    border-radius: 24px;\n    z-index: 10;\n    transition: transform 0.2s ease;\n    box-shadow: 0 0 32px rgb(0, 0, 0);\n    animation: task-popup-box;\n    animation-duration: 0.2s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.project-delete-container {\n    height: 150px; \n}\n\n.task-delete-prompt {\n    text-align: center;\n    font-weight: 600;\n    margin: 0;\n    grid-column: 1 / 3;\n}\n\n.task-delete-button {\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 8px;\n    opacity: 0.7;\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.task-delete-button:hover {\n    opacity: 1;\n}\n\n.task-delete-button:active {\n    background-color: white;\n}\n\n.task-delete-button-yes {\n    background-color: rgb(233, 110, 110);\n}\n\n.task-delete-button-cancel {\n    background-color: rgb(199, 199, 199);\n}\n\n@keyframes task-popup-box {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;AACpC;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kCAAkC;IAClC,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,qCAAqC;IACrC,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,2BAA2B;IAC3B,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,0CAA0C;IAC1C,4EAA4E;AAChF;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,4EAA4E;IAC5E,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI;AACJ;;AAEA;IACI,oCAAoC;IACpC,uBAAuB;IACvB,kCAAkC;IAClC,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,+CAA+C;AACnD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,MAAM;IACN,SAAS;IACT,UAAU;IACV,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,oCAAoC;IACpC,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,mBAAmB;IACnB,SAAS;IACT,WAAW;IACX,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,UAAU;AACV;IACI,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA,0CAA0C;AAC1C;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,SAAS;IACT,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,+BAA+B;IAC/B,iCAAiC;IACjC,yBAAyB;IACzB,wBAAwB;IACxB,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap');\n\n:root {\n    --blue-main: rgb(114, 144, 184);\n    --blue-light: rgb(215, 225, 238);\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Poppins, sans-serif;\n}\n\nh2, h4, h5 {\n    margin: 0;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nh5 {\n    font-size: 1rem;\n}\n\n#header {\n    height: 100px;\n    width: 100vw;\n    background-color: var(--blue-main);\n    display: flex;\n    align-items: center;\n}\n\n.title-text {\n    color: white;\n    text-align: center;\n    font-family: \"Roboto Mono\", monospace;\n    font-size: 3.5rem;\n    flex-grow: 1;\n}\n\n#body-container {\n    display: flex;\n    width: 100%;\n    height: calc(100vh - 100px);\n    background-color:rgb(217, 240, 239);\n}\n\n#sidebar {\n    background-color: var(--blue-light);\n    width: 350px;\n    height: 100%;\n}\n\n.nav-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    padding: 32px;\n}\n\n.nav-button {\n    height: 42px;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 16px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 12px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    transform: scale(1.07);\n    transition: transform 0.1s ease, background-color 0.1s ease, color 0.1s ease;\n    background-color: var(--blue-main);\n    color: white;\n}\n\n.nav-button:active {\n    background-color: rgb(189, 192, 230);\n}\n\n.nav-button h3 {\n    flex-grow: 1;\n}\n\n.nav-project-delete {\n    display: none;\n    width: 24px;\n    height: 24px;\n    padding: 8px;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid white;\n    border-radius: 50%;\n    opacity: 0.5;\n    z-index: 5;\n}\n\n.nav-button:hover .nav-project-delete {\n    display: flex\n}\n\n.nav-project-delete:hover {\n    background-color: rgb(240, 185, 185);\n    color: rgb(109, 44, 44);\n    border: 3px solid rgb(109, 44, 44);\n    opacity: 1;\n}\n\n.nav-add-project-container {\n    padding: 0 32px;\n}\n\n#add-project {\n    opacity: 0.4\n}\n\n#add-project:hover {\n    opacity: 1;\n}\n\n.nav-adding-project {\n    border: 2px solid rgb(70, 70, 70);\n    border-radius: 12px;\n    display: flex;\n    height: 150px;\n    opacity: 1;\n    justify-content: center;\n    flex-direction: column;\n    padding: 12px;\n    gap: 12px;\n    overflow: hidden;\n    transition: display 0.2s ease, height 0.1s ease;\n}\n\n.nav-hidden {\n    height: 0;\n    padding: 0;\n    gap: 0;\n    border: 0;\n    opacity: 0;\n    transition: opacity 0.2s ease, height .1s ease;\n}\n\n.nav-adding-project div {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 12px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project label {\n    width: 60px;\n    font-weight: 600;\n}\n\n.nav-adding-project input {\n    flex-grow: 1;\n    width: 100px;\n    font-size: 1.2rem;\n}\n\n.nav-adding-project button {\n    width: 100%;\n    border: 2px solid black;\n    border-radius: 12px;\n    background-color: rgb(158, 206, 194);\n    height: 32px;\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n.nav-adding-project button:hover {\n    cursor: pointer;\n    background-color: rgb(140, 228, 206);\n}\n\n.nav-adding-project button:active {\n    background-color: white;\n}\n\n#sidebar hr {\n    width: 80%;\n    border: none;\n    border-top: 4px solid white;\n}\n\n#main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    padding: 32px;\n    gap: 16px;\n}\n\n.task-container-header {\n    display: flex;\n    /* justify-content: space-between; */\n    align-items: center;\n    gap: 16px;\n}\n\n.task-container-header *:nth-child(2), .add-task {\n    border: 2px solid grey;\n    font-size: 1.1rem;\n    padding: 4px 8px;\n}\n\n.add-task {\n    font-weight: 600;\n    color: rgb(82, 82, 82);\n    background-color: rgb(223, 243, 223);\n}\n\n.add-task:hover {\n    cursor: pointer;\n    border: 2px solid black;\n    color: black;\n    background-color: rgb(201, 241, 201);\n}\n\n.add-task:active {\n    background-color: white;\n}\n\n.task-sorter, .task {\n    display: grid;\n    grid-template-columns: 40px 240px auto 80px 80px 24px 24px;\n    align-items: center;\n    gap: 16px;\n    width: 100%;\n    padding-left: 18px;\n    padding-right: 12px;\n}\n\n.task-sorter {\n    font-weight: 600;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n/* Tasks */\n.task {\n    height: 40px;\n    background-color: rgb(248, 222, 226);\n    border-radius: 12px;\n    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.task:hover {\n    background-color: white;\n}\n\n.task-complete-box {\n    height: 20px;\n    width: 20px;\n    border: 2px solid rgb(129, 129, 129);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:active {\n    background-color: white;\n}\n\n.task-complete-box:hover {\n    cursor: pointer;\n    background-color: white;\n    border-color: black;\n    transform: scale(1.2);\n    transition: transform 0.1s ease;\n}\n\n.task-complete-box:hover::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: rgb(110, 110, 110);\n    padding: 0 0 8px 8px;\n}\n\n.task-complete-box:active::after {\n    color: black;\n}\n\n.task-box-completed {\n    opacity: 0.7;\n}\n\n.task-completed {\n    border-color: black;\n    background-color: white;\n}\n\n.task-completed::after {\n    content: \"✓\";\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: black;\n    padding: 0 0 8px 8px;\n}\n\n.task-completed ~ * {\n    color: grey;\n    text-decoration:line-through;\n}\n\n.task-edit, .task-delete {\n    color: grey;\n    transition: transform 0.1s ease;\n}\n\n.task-edit:hover, .task-delete:hover {\n    cursor: pointer;\n    color: black;\n    transform: scale(1.4);\n    transition: transform 0.1s ease;\n}\n\n/* Task edit and delete popup containers */\n.task-delete-screen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.task-delete-hidden {\n    display: none;\n}\n\n.task-delete-fade {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.task-delete-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 16px;\n    padding: 16px;\n    width: 400px;\n    height: 120px;\n    border: 4px solid black;\n    background-color: white;\n    border-radius: 24px;\n    z-index: 10;\n    transition: transform 0.2s ease;\n    box-shadow: 0 0 32px rgb(0, 0, 0);\n    animation: task-popup-box;\n    animation-duration: 0.2s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.project-delete-container {\n    height: 150px; \n}\n\n.task-delete-prompt {\n    text-align: center;\n    font-weight: 600;\n    margin: 0;\n    grid-column: 1 / 3;\n}\n\n.task-delete-button {\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 8px;\n    opacity: 0.7;\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.task-delete-button:hover {\n    opacity: 1;\n}\n\n.task-delete-button:active {\n    background-color: white;\n}\n\n.task-delete-button-yes {\n    background-color: rgb(233, 110, 110);\n}\n\n.task-delete-button-cancel {\n    background-color: rgb(199, 199, 199);\n}\n\n@keyframes task-popup-box {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n    }\n}"],"sourceRoot":""}]);
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
        _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectInfo((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByID)(1));
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
    _domCreator_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawProjectInfo(project);
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
    if (project.id !== 1){
        const projectDeleteButton = document.createElement("div");
        projectDeleteButton.classList.add("nav-project-delete");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-xmark");
        projectDeleteButton.appendChild(deleteIcon);
        thisProjectButton.appendChild(projectDeleteButton);
        projectDeleteButton.addEventListener("mousedown", function(event){
            event.stopPropagation();
            projectDeleteScreen.classList.remove("task-delete-hidden");
            projectDeleteYes.addEventListener("mousedown", deleteProjectSubmit)
        })
        projectDeleteCancel.addEventListener("mousedown", function(){
            projectDeleteYes.removeEventListener("mousedown", deleteProjectSubmit);
            projectDeleteScreen.classList.add("task-delete-hidden");
        })
    }
    const deleteProjectSubmit = function(){
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

const drawProjectInfo = function (project) {
    addTaskInputContainer.removeEventListener("submit", taskAddSubmit);
    taskContainerTitle.textContent = project.title;
    taskContainerLabel.textContent = project.label;
    taskContainerAddButton.addEventListener("mousedown", function(event){
        taskAddScreen.classList.remove("task-delete-hidden");
    })
    taskAddCancel.addEventListener("mousedown", function(){
        taskAddScreen.classList.add("task-delete-hidden");
    })
    
    addTaskInputContainer.addEventListener("submit", taskAddSubmit);
    // this._id = getNewID();
    // this._title = title;
    // this._description = description;
    // this._dueDate = dueDate;
    // this._status = status;
    // this._priority = priority;
    // this._completed = false;
    // this._parentProject;
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
        taskDeleteYes.addEventListener("mousedown", deleteTaskSubmit)
    })
    taskDeleteCancel.addEventListener("mousedown", function(){
        taskDeleteYes.removeEventListener("mousedown", deleteTaskSubmit);
        taskDeleteScreen.classList.add("task-delete-hidden");
    })
    const deleteTaskSubmit = function(){
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
const taskContainerHeader = document.createElement("div");
taskContainerHeader.classList.add("task-container-header");
const taskContainerTitle = document.createElement("h2");
taskContainerTitle.textContent = "Project Name";
const taskContainerLabel = document.createElement("p");
taskContainerLabel.textContent = "Label";
const taskContainerAddButton = document.createElement("button");
taskContainerAddButton.classList.add("add-task")
taskContainerAddButton.textContent = "+ Task";
taskContainerHeader.appendChild(taskContainerTitle);
taskContainerHeader.appendChild(taskContainerLabel);
taskContainerHeader.appendChild(taskContainerAddButton);

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

// Task add popup
const taskAddScreen = taskDeleteScreen.cloneNode();
const taskAddFade = taskDeleteFade.cloneNode();
const taskAddContainer = document.createElement("div");
taskAddContainer.classList.add("task-delete-container", "task-add-container");
taskAddScreen.appendChild(taskAddFade);
taskAddScreen.appendChild(taskAddContainer);
const taskAddPrompt = taskDeletePrompt.cloneNode();
taskAddPrompt.textContent = "Add a new task";
const taskAddYes = taskDeleteYes.cloneNode();
taskAddYes.textContent = "ADD";
const taskAddCancel = taskDeleteCancel.cloneNode();
taskAddCancel.textContent = "CANCEL";

// Add Task container
let addTaskInputContainer = document.createElement("form");
addTaskInputContainer.id = "add-task-form";

const taskNameInputContainer = document.createElement("div");
const taskNameInputLabel = document.createElement("label");
taskNameInputLabel.for = "title";
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
taskDescInputLabel.for = "desc";
taskDescInputLabel.textContent = "Description:"
const taskDescInputText = document.createElement("input");
taskDescInputText.id = "task-desc"
taskDescInputText.name = "desc"
taskDescInputText.type = "text";
taskDescInputText.maxLength = 80;
taskDescInputContainer.appendChild(taskDescInputLabel);
taskDescInputContainer.appendChild(taskDescInputText);
const taskSubmitInputContainer = document.createElement("div");
const taskSubmitInputButton = document.createElement("button");
taskSubmitInputButton.id = "task-submit";
taskSubmitInputButton.textContent = "ADD NEW TASK";
taskSubmitInputContainer.appendChild(taskSubmitInputButton);

addTaskInputContainer.appendChild(taskNameInputContainer);
addTaskInputContainer.appendChild(taskDescInputContainer);
addTaskInputContainer.appendChild(taskSubmitInputContainer);
addTaskInputContainer.classList.add("nav-adding-task");

taskAddContainer.appendChild(taskAddPrompt);
taskAddContainer.appendChild(addTaskInputContainer);
taskAddContainer.appendChild(taskAddYes);
taskAddContainer.appendChild(taskAddCancel);

// Appending to main and body
main.appendChild(taskContainerHeader);
main.appendChild(taskSorter);
main.appendChild(taskContainer);

body.appendChild(sidebar);
body.appendChild(main);
body.appendChild(taskDeleteScreen);
body.appendChild(projectDeleteScreen);
body.appendChild(taskAddScreen);
content.appendChild(header);
content.appendChild(body);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ eventEmitter, drawProjectNav, drawProjectInfo, drawTaskList, drawTask, navContainer, projectContainer, taskContainer, addProjectButton });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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LFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFFQUFxRTtBQUMzRSxNQUFNLDZFQUE2RTtBQUNuRixNQUFNLDRFQUE0RTtBQUNsRixNQUFNLDJGQUEyRjtBQUNqRyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQSxpRUFBZSxFQUFFLHdJQUF3STs7Ozs7Ozs7Ozs7Ozs7QUMzWnpKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0w0Qzs7QUFFNUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiwwREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEU0Qzs7QUFFNUM7QUFDQTtBQUNBLG1CQUFtQiwwREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBLFdBQVcsVUFBVTs7QUFFckI7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxpQkFBaUI7O0FBRUE7O0FBRTVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9hY3Rpb25IYW5kbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9kb21DcmVhdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FydGVyK09uZSZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMjAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJsdWUtbWFpbjogcmdiKDExNCwgMTQ0LCAxODQpO1xcbiAgICAtLWJsdWUtbGlnaHQ6IHJnYigyMTUsIDIyNSwgMjM4KTtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMiwgaDQsIGg1IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaDUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbWFpbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNib2R5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNywgMjQwLCAyMzkpO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZSwgY29sb3IgMC4xcyBlYXNlO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UsIGNvbG9yIDAuMXMgZWFzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1tYWluKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxOTIsIDIzMCk7XFxufVxcblxcbi5uYXYtYnV0dG9uIGgzIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciAubmF2LXByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogZmxleFxcbn1cXG5cXG4ubmF2LXByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTg1LCAxODUpO1xcbiAgICBjb2xvcjogcmdiKDEwOSwgNDQsIDQ0KTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDEwOSwgNDQsIDQ0KTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5hdi1hZGQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDMycHg7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIG9wYWNpdHk6IDAuNFxcbn1cXG5cXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDcwLCA3MCwgNzApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDAuMnMgZWFzZSwgaGVpZ2h0IDAuMXMgZWFzZTtcXG59XFxuXFxuLm5hdi1oaWRkZW4ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdhcDogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZSwgaGVpZ2h0IC4xcyBlYXNlO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGxhYmVsIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXYtYWRkaW5nLXByb2plY3QgaW5wdXQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYtYWRkaW5nLXByb2plY3QgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAyMDYsIDE5NCk7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMjI4LCAyMDYpO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3NpZGViYXIgaHIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1oZWFkZXIgKjpudGgtY2hpbGQoMiksIC5hZGQtdGFzayB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogcmdiKDgyLCA4MiwgODIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyNDMsIDIyMyk7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjQxLCAyMDEpO1xcbn1cXG5cXG4uYWRkLXRhc2s6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLXNvcnRlciwgLnRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMjQwcHggYXV0byA4MHB4IDgwcHggMjRweCAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxufVxcblxcbi50YXNrLXNvcnRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLyogVGFza3MgKi9cXG4udGFzayB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjIyLCAyMjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjksIDEyOSwgMTI5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGNvbG9yOiByZ2IoMTEwLCAxMTAsIDExMCk7XFxuICAgIHBhZGRpbmc6IDAgMCA4cHggOHB4O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3g6YWN0aXZlOjphZnRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRhc2stYm94LWNvbXBsZXRlZCB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLnRhc2stY29tcGxldGVkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMCAwIDhweCA4cHg7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlZCB+ICoge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stZWRpdCwgLnRhc2stZGVsZXRlIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi50YXNrLWVkaXQ6aG92ZXIsIC50YXNrLWRlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi8qIFRhc2sgZWRpdCBhbmQgZGVsZXRlIHBvcHVwIGNvbnRhaW5lcnMgKi9cXG4udGFzay1kZWxldGUtc2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1kZWxldGUtZmFkZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDMycHggcmdiKDAsIDAsIDApO1xcbiAgICBhbmltYXRpb246IHRhc2stcG9wdXAtYm94O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTUwcHg7IFxcbn1cXG5cXG4udGFzay1kZWxldGUtcHJvbXB0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b24teWVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTEwLCAxMTApO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcXG59XFxuXFxuQGtleWZyYW1lcyB0YXNrLXBvcHVwLWJveCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFF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QUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwJmZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDIwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1ibHVlLW1haW46IHJnYigxMTQsIDE0NCwgMTg0KTtcXG4gICAgLS1ibHVlLWxpZ2h0OiByZ2IoMjE1LCAyMjUsIDIzOCk7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDIsIGg0LCBoNSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW1haW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jYm9keS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTcsIDI0MCwgMjM5KTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UsIGNvbG9yIDAuMXMgZWFzZTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlLCBjb2xvciAwLjFzIGVhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTkyLCAyMzApO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiBoMyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIgLm5hdi1wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXhcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE4NSwgMTg1KTtcXG4gICAgY29sb3I6IHJnYigxMDksIDQ0LCA0NCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxMDksIDQ0LCA0NCk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5uYXYtYWRkLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMCAzMnB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgICBvcGFjaXR5OiAwLjRcXG59XFxuXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3MCwgNzAsIDcwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGdhcDogMTJweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAwLjJzIGVhc2UsIGhlaWdodCAwLjFzIGVhc2U7XFxufVxcblxcbi5uYXYtaGlkZGVuIHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBnYXA6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UsIGhlaWdodCAuMXMgZWFzZTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBsYWJlbCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGlucHV0IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmF2LWFkZGluZy1wcm9qZWN0IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjA2LCAxOTQpO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDIyOCwgMjA2KTtcXG59XFxuXFxuLm5hdi1hZGRpbmctcHJvamVjdCBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNzaWRlYmFyIGhyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXItaGVhZGVyICo6bnRoLWNoaWxkKDIpLCAuYWRkLXRhc2sge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHJnYig4MiwgODIsIDgyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjQzLCAyMjMpO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDI0MSwgMjAxKTtcXG59XFxuXFxuLmFkZC10YXNrOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1zb3J0ZXIsIC50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDI0MHB4IGF1dG8gODBweCA4MHB4IDI0cHggMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4udGFzay1zb3J0ZXIge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi8qIFRhc2tzICovXFxuLnRhc2sge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDIyMiwgMjI2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3gge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI5LCAxMjksIDEyOSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlLWJveDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZS1ib3g6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBjb2xvcjogcmdiKDExMCwgMTEwLCAxMTApO1xcbiAgICBwYWRkaW5nOiAwIDAgOHB4IDhweDtcXG59XFxuXFxuLnRhc2stY29tcGxldGUtYm94OmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXNrLWJveC1jb21wbGV0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi50YXNrLWNvbXBsZXRlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAgMCA4cHggOHB4O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZWQgfiAqIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWVkaXQsIC50YXNrLWRlbGV0ZSB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4udGFzay1lZGl0OmhvdmVyLCAudGFzay1kZWxldGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4vKiBUYXNrIGVkaXQgYW5kIGRlbGV0ZSBwb3B1cCBjb250YWluZXJzICovXFxuLnRhc2stZGVsZXRlLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4udGFzay1kZWxldGUtaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWZhZGUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzMnB4IHJnYigwLCAwLCAwKTtcXG4gICAgYW5pbWF0aW9uOiB0YXNrLXBvcHVwLWJveDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4OyBcXG59XFxuXFxuLnRhc2stZGVsZXRlLXByb21wdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1kZWxldGUtYnV0dG9uLXllcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDExMCwgMTEwKTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XFxufVxcblxcbkBrZXlmcmFtZXMgdGFzay1wb3B1cC1ib3gge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQcm9qZWN0LCBnZXRQcm9qZWN0QnlJRCwgZ2V0Q3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZG9tQ3JlYXRvciBmcm9tIFwiLi9kb21DcmVhdG9yLmpzXCI7XG5cbi8vIEV2ZW50IGVtaXR0ZXIgbGlzdGVuZXJzIGZvciBzZWxlY3RpbmcgcHJvamVjdHMgJiBkaXNwbGF5aW5nL3JlbW92aW5nIHRoZW0gZnJvbSBET01cbmRvbUNyZWF0b3IuZXZlbnRFbWl0dGVyLm9uKFwiZGVsZXRlUHJvamVjdFwiLCAocHJvamVjdCkgPT4ge1xuICAgIC8vIGlmIHRoZSBjdXJyZW50IHByb2plY3QgaXMgZGlzcGxheWVkLCByZW1vdmUgaXQgYW5kIHJlcGxhY2Ugd2l0aCB1bmNhdGVnb3Jpc2VkXG4gICAgaWYgKGdldEN1cnJlbnRQcm9qZWN0KCkgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QoMSk7XG4gICAgICAgIGRvbUNyZWF0b3IuZHJhd1Byb2plY3RJbmZvKGdldFByb2plY3RCeUlEKDEpKTtcbiAgICAgICAgZG9tQ3JlYXRvci5kcmF3VGFza0xpc3QoZ2V0UHJvamVjdEJ5SUQoMSkudGFza0xpc3QpO1xuICAgIH1cbiAgICBwcm9qZWN0LmRlbGV0ZVByb2plY3QoKTtcbn0pO1xuXG5kb21DcmVhdG9yLmV2ZW50RW1pdHRlci5vbihcIm5ld1Byb2plY3RcIiwgKHByb2plY3ROYW1lLCBwcm9qZWN0TGFiZWwpID0+IHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0TGFiZWwpO1xuICAgIGRvbUNyZWF0b3IuZHJhd1Byb2plY3ROYXYobmV3UHJvamVjdCk7XG59KTtcblxuZG9tQ3JlYXRvci5ldmVudEVtaXR0ZXIub24oXCJwcm9qZWN0QnV0dG9uXCIsIChwcm9qZWN0KSA9PiB7XG4gICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdC5pZCk7XG4gICAgZG9tQ3JlYXRvci5kcmF3UHJvamVjdEluZm8ocHJvamVjdCk7XG4gICAgZG9tQ3JlYXRvci5kcmF3VGFza0xpc3QocHJvamVjdC50YXNrTGlzdCk7XG59KTtcblxuZG9tQ3JlYXRvci5ldmVudEVtaXR0ZXIub24oXCJ0YXNrQ29tcGxldGVcIiwgKHRhc2spID0+IHtcbiAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbn0pO1xuXG5kb21DcmVhdG9yLmV2ZW50RW1pdHRlci5vbihcInRhc2tEZWxldGVcIiwgKHRhc2spID0+IHtcbiAgICB0YXNrLnBhcmVudFByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcbn0pXG5cbmRvbUNyZWF0b3IuZXZlbnRFbWl0dGVyLm9uKFwibmV3VGFza1wiLCAocHJvamVjdElELCB0YXNrVGl0bGUsIHRhc2tEZXNjKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbiAgICBnZXRQcm9qZWN0QnlJRChwcm9qZWN0SUQpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgZG9tQ3JlYXRvci50YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNyZWF0b3IuZHJhd1Rhc2sobmV3VGFzaykpO1xufSlcblxuXG4vLyBEZWZhdWx0IHByb2plY3RzIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4vLyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHN0YXR1cywgcHJpb3JpdHlcbmxldCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiVW5jYXRlZ29yaXNlZFwiKTtcbmxldCBkZWZhdWx0UHJvamVjdDIgPSBuZXcgUHJvamVjdChcIlRvZG8gbGlzdFwiLCBcIlN0dWR5XCIpO1xubGV0IGRlZmF1bHRQcm9qZWN0MyA9IG5ldyBQcm9qZWN0KFwiRHJpdmluZyBnYW1lXCIsIFwiV29ya1wiKTtcbmxldCBteVRhc2sgPSBuZXcgVGFzayhcIkd5bSBzZXNzaW9uXCIsIFwiVG8gd29yayBvbiB0aGVzZSBxdWFkcyBmb3IgdGhlIHVwY29taW5nIHNraSB3ZWVrZW5kXCIsIDIyMDgyMywgXCJ1bmNvbXBsZXRlZFwiLCBcIm1lZGl1bVwiKTtcbmxldCBteVRhc2syID0gbmV3IFRhc2soXCJDYWxsIFFBTlRBU1wiLCBcIkZpZ3VyZSBvdXQgd2hlcmUgbXkgcG9pbnRzIGFyZVwiLCAyMjA5MDIsIFwidW5jb21wbGV0ZWRcIiwgXCJtZWRpdW1cIik7XG5sZXQgbXlUYXNrMyA9IG5ldyBUYXNrKFwiTWFrZSB0cmF2ZWwgaW5zdXJhbmNlIGNsYWltXCIsIFwiZ2V0IHNvbWUgbW9uZXkgYmFjayBmcm9tIHRoZSBDYW5hZGEgdHJpcCBzaGVuYW5pZ2Fuc1wiLCAyMjA5MDIsIFwidW5jb21wbGV0ZWRcIiwgXCJtZWRpdW1cIik7XG5sZXQgbXlUYXNrNCA9IG5ldyBUYXNrKFwiTWFrZSB0YXNrcyBiZWF1dGlmdWxcIiwgXCJhZGQgcm91bmRlZCBjb3JuZXJzIHNpbWlsYXIgdG8gc2lkZWJhciBidXR0b25zLCBkcm9wIHNoYWRvd3MsIG5pY2Ugc3BhY2luZ1wiLCBmYWxzZSwgXCJ1bmNvbXBsZXRlZFwiLCBcIm1lZGl1bVwiKTtcbmxldCBteVRhc2s1ID0gbmV3IFRhc2soXCJBZGQgdGFzayBidXR0b25cIiwgXCJoYXZlIHRvIG1ha2UgYSB3YXkgdG8gYWRkIHRhc2tzIHNvbWVob3cgYXllXCIsIGZhbHNlLCBcInVuY29tcGxldGVkXCIsIFwiaGlnaFwiKTtcbmxldCBteVRhc2s2ID0gbmV3IFRhc2soXCJNb3ZlIHRhc2tzIGJldHdlZW4gcHJvamVjdHNcIiwgXCJ0aGlzIGlzIGEgYml0IGhhcmRlciAtIHdpbGwgbmVlZCB0byByZW1vdmUgY3VycmVudCB0YXNrIGZyb20gY3VycmVudCBwcm9qZWN0IHRhc2tMaXN0LCB0aGVuIGFkZCBpdCB0byB0aGUgbmV3IHByb2plY3QgYW5kIGZvcm1hdCBhcHByb3ByaWF0ZWx5XCIsIGZhbHNlLCBcInVuY29tcGxldGVkXCIsIFwibWVkaXVtXCIpO1xubGV0IG15VGFzazcgPSBuZXcgVGFzayhcIkFkZCBmb290ZXJcIiwgXCJhZGQgZm9vdGVyIHdpdGggbXkgbmFtZSBhbmQgZ2l0aHViIGxpbmsgdG8gc291cmNlIGNvZGVcIiwgZmFsc2UsIFwidW5jb21wbGV0ZWRcIiwgXCJsb3dcIik7XG5sZXQgbXlUYXNrOCA9IG5ldyBUYXNrKFwiQWRkIGRyaXZpbmcgcGh5c2ljc1wiLCBcImZpcnN0IHRoaW5ncyBmaXJzdCwgbWFrZSB0aGUgY2FyIGZlZWwgYW1hemluZyB0byBkcml2ZVwiLCAyMjExMzAsIFwidW5jb21wbGV0ZWRcIiwgXCJtZWRpdW1cIik7XG5sZXQgbXlUYXNrOSA9IG5ldyBUYXNrKFwiTWFrZSBGYWxscyBDcmVlayByb2FkXCIsIFwiVG8gd29yayBvbiB0aGVzZSBxdWFkcyBmb3IgdGhlIHVwY29taW5nIHNraSB3ZWVrZW5kXCIsIDIzMDIxNSwgXCJ1bmNvbXBsZXRlZFwiLCBcIm1lZGl1bVwiKTtcbmxldCBteVRhc2sxMCA9IG5ldyBUYXNrKFwiQWRkIHNtb2tlIHBhcnRpY2xlIGVmZmVjdHNcIiwgXCJUbyB3b3JrIG9uIHRoZXNlIHF1YWRzIGZvciB0aGUgdXBjb21pbmcgc2tpIHdlZWtlbmRcIiwgMjIxMTMwLCBcInVuY29tcGxldGVkXCIsIFwibG93XCIpO1xubXlUYXNrLmNvbXBsZXRlZCA9IHRydWU7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKG15VGFzayk7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKG15VGFzazIpO1xuZGVmYXVsdFByb2plY3QuYWRkVGFzayhteVRhc2szKTtcbmRlZmF1bHRQcm9qZWN0Mi5hZGRUYXNrKG15VGFzazQpO1xuZGVmYXVsdFByb2plY3QyLmFkZFRhc2sobXlUYXNrNSk7XG5kZWZhdWx0UHJvamVjdDIuYWRkVGFzayhteVRhc2s2KTtcbmRlZmF1bHRQcm9qZWN0Mi5hZGRUYXNrKG15VGFzazcpO1xuZGVmYXVsdFByb2plY3QzLmFkZFRhc2sobXlUYXNrOCk7XG5kZWZhdWx0UHJvamVjdDMuYWRkVGFzayhteVRhc2s5KTtcbmRlZmF1bHRQcm9qZWN0My5hZGRUYXNrKG15VGFzazEwKTtcblxuZG9tQ3JlYXRvci5kcmF3UHJvamVjdE5hdihkZWZhdWx0UHJvamVjdCk7XG5kb21DcmVhdG9yLmRyYXdQcm9qZWN0TmF2KGRlZmF1bHRQcm9qZWN0Mik7XG5kb21DcmVhdG9yLmRyYXdQcm9qZWN0TmF2KGRlZmF1bHRQcm9qZWN0Myk7XG5cbmRvbUNyZWF0b3IuZHJhd1Byb2plY3RJbmZvKGRlZmF1bHRQcm9qZWN0KTtcbmRvbUNyZWF0b3IuZHJhd1Rhc2tMaXN0KGRlZmF1bHRQcm9qZWN0LnRhc2tMaXN0KTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiO1xuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuXG4vLyBGdW5jdGlvbnMgZm9yIGRyYXdpbmcgZWxlbWVudHMgdG8gd2luZG93XG5jb25zdCBkcmF3U2lkZWJhckxpbmsgPSBmdW5jdGlvbiAobGlua09iaikge1xuICAgIGNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2QnV0dG9uLmlkID0gbGlua09iai5saW5rIHx8IGxpbmtPYmouaWQ7XG4gICAgbmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgIGNvbnN0IG5hdkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBsaW5rT2JqLmljb25DbGFzc2VzLmZvckVhY2goaWNvbkNsYXNzID0+IG5hdkljb24uY2xhc3NMaXN0LmFkZChpY29uQ2xhc3MpKTtcbiAgICBjb25zdCBuYXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG5hdlRleHQudGV4dENvbnRlbnQgPSBsaW5rT2JqLnRpdGxlO1xuICAgIG5hdkJ1dHRvbi5hcHBlbmRDaGlsZChuYXZJY29uKTtcbiAgICBuYXZCdXR0b24uYXBwZW5kQ2hpbGQobmF2VGV4dCk7XG4gICAgcmV0dXJuIG5hdkJ1dHRvbjtcbn1cblxuY29uc3QgZHJhd1Byb2plY3ROYXYgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGNvbnN0IHRoaXNQcm9qZWN0QnV0dG9uID0gZHJhd1NpZGViYXJMaW5rKHByb2plY3QpO1xuICAgIHRoaXNQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KFwicHJvamVjdEJ1dHRvblwiLCBwcm9qZWN0KTtcbiAgICB9KVxuICAgIGlmIChwcm9qZWN0LmlkICE9PSAxKXtcbiAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1wcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXhtYXJrXCIpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICB0aGlzUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnV0dG9uKTtcbiAgICAgICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZVNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZVllcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGRlbGV0ZVByb2plY3RTdWJtaXQpXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3REZWxldGVDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZVllcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGRlbGV0ZVByb2plY3RTdWJtaXQpO1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0U3VibWl0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcHJvamVjdERlbGV0ZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcImRlbGV0ZVByb2plY3RcIiwgcHJvamVjdCk7XG4gICAgICAgIHRoaXNQcm9qZWN0QnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXNQcm9qZWN0QnV0dG9uKTtcbiAgICByZXR1cm4gdGhpc1Byb2plY3RCdXR0b247XG59XG5cbmNvbnN0IHRhc2tBZGRTdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJhZGQtdGFzay1mb3JtXCJdO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhc2tGb3JtKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGZvcm1EYXRhLmdldChcImRlc2NcIik7XG4gICAgLy8gY29uc3QgdGFza0R1ZURhdGUgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpO1xuICAgIC8vIGNvbnN0IHRhc2tTdGF0dXMgPSBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIik7XG4gICAgLy8gY29uc3QgdGFza1ByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG4gICAgLy8gY29uc3QgdGFza1Byb2plY3QgPSBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0XCIpO1xuICAgIGNvbnN0IHByb2plY3RJRCA9IDE7XG4gICAgbGV0IHZhbGlkVGFzayA9IHRydWU7XG4gICAgaWYgKHZhbGlkVGFzaykge1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcIm5ld1Rhc2tcIiwgcHJvamVjdElELCB0YXNrVGl0bGUsIHRhc2tEZXNjKTtcbiAgICAgICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICB9XG4gICAgdGFza0FkZFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xufVxuXG5jb25zdCBkcmF3UHJvamVjdEluZm8gPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGFkZFRhc2tJbnB1dENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRhc2tBZGRTdWJtaXQpO1xuICAgIHRhc2tDb250YWluZXJUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgdGFza0NvbnRhaW5lckxhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdC5sYWJlbDtcbiAgICB0YXNrQ29udGFpbmVyQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICB0YXNrQWRkU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWRlbGV0ZS1oaWRkZW5cIik7XG4gICAgfSlcbiAgICB0YXNrQWRkQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgdGFza0FkZFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xuICAgIH0pXG4gICAgXG4gICAgYWRkVGFza0lucHV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGFza0FkZFN1Ym1pdCk7XG4gICAgLy8gdGhpcy5faWQgPSBnZXROZXdJRCgpO1xuICAgIC8vIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgLy8gdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAvLyB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAvLyB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgLy8gdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAvLyB0aGlzLl9jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAvLyB0aGlzLl9wYXJlbnRQcm9qZWN0O1xufVxuXG5jb25zdCBkcmF3VGFza0xpc3QgPSBmdW5jdGlvbiAodGFza0xpc3QpIHtcbiAgICB3aGlsZSAodGFza0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9O1xuICAgIHRhc2tMaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1Rhc2sodGFzaykpO1xuICAgIH0pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG59XG5cbmNvbnN0IGRyYXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICBjb25zdCB0YXNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIGNvbnN0IHRhc2tDb21wbGV0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbXBsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlLWJveFwiKTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZUJveCk7XG4gICAgaWYodGFzay5jb21wbGV0ZWQpe1xuICAgICAgICB0YXNrQ29tcGxldGVCb3guY2xhc3NMaXN0LmFkZChcInRhc2stY29tcGxldGVkXCIpO1xuICAgICAgICB0YXNrQ29tcGxldGVCb3gucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1ib3gtY29tcGxldGVkXCIpO1xuICAgIH07XG4gICAgdGFza0NvbXBsZXRlQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJ0YXNrQ29tcGxldGVcIiwgdGFzayk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5jbGFzc0xpc3QudG9nZ2xlKFwidGFzay1jb21wbGV0ZWRcIik7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0YXNrLWJveC1jb21wbGV0ZWRcIik7XG4gICAgfSk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgIGNvbnN0IHRhc2tFZGl0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgdGFza0VkaXRCb3guY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiLCBcInRhc2stZWRpdFwiKTtcbiAgICBjb25zdCB0YXNrRGVsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgdGFza0RlbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS10cmFzaFwiLCBcInRhc2stZGVsZXRlXCIpO1xuICAgIHRhc2tEZWxldGVCb3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbigpe1xuICAgICAgICB0YXNrRGVsZXRlU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLWRlbGV0ZS1oaWRkZW5cIik7XG4gICAgICAgIHRhc2tEZWxldGVZZXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBkZWxldGVUYXNrU3VibWl0KVxuICAgIH0pXG4gICAgdGFza0RlbGV0ZUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHRhc2tEZWxldGVZZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBkZWxldGVUYXNrU3VibWl0KTtcbiAgICAgICAgdGFza0RlbGV0ZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xuICAgIH0pXG4gICAgY29uc3QgZGVsZXRlVGFza1N1Ym1pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KFwidGFza0RlbGV0ZVwiLCB0YXNrKTtcbiAgICAgICAgdGFza0RlbGV0ZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtaGlkZGVuXCIpO1xuICAgICAgICB0YXNrRGVsZXRlQm94LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0VkaXRCb3gpO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJveCk7XG4gICAgcmV0dXJuIHRhc2tCb3g7XG59XG5cbi8vIENyZWF0aW5nIERPTSBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS10ZXh0XCIpO1xudGl0bGVUZXh0LnRleHRDb250ZW50ID0gXCJ0aGluZ3MgdG8gZG8uXCI7XG5oZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuLy8gQ3JlYXRpbmcgRE9NIGJvZHlcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYm9keS5pZCA9IFwiYm9keS1jb250YWluZXJcIjtcblxuLy8gQ3JlYXRpbmcgRE9NIHNpZGViYXJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4vLyBET00gc2lkZWJhciBuYXZpZ2F0aW9uXG5jb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIpO1xuY29uc3QgbmF2QXJyYXkgPSBbXG4gICAgeyB0aXRsZTogXCJBbGxcIiwgaWNvbkNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtY2FsZW5kYXJcIl0sIGxpbms6IFwiYWxsXCIgfSxcbiAgICB7IHRpdGxlOiBcIlRvZGF5XCIsIGljb25DbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWNhbGVuZGFyLWRheVwiXSwgbGluazogXCJ0b2RheVwiIH0sXG4gICAgeyB0aXRsZTogXCJXZWVrXCIsIGljb25DbGFzc2VzOiBbXCJmYS1zb2xpZFwiLCBcImZhLWNhbGVuZGFyLXdlZWtcIl0sIGxpbms6IFwid2Vla1wiIH0sXG4gICAgeyB0aXRsZTogXCJJbXBvcnRhbnRcIiwgaWNvbkNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtY2lyY2xlLWV4Y2xhbWF0aW9uXCJdLCBsaW5rOiBcImltcG9ydGFudFwiIH0sXG4gICAgeyB0aXRsZTogXCJDb21wbGV0ZWRcIiwgaWNvbkNsYXNzZXM6IFtcImZhLXNvbGlkXCIsIFwiZmEtY2FsZW5kYXItY2hlY2tcIl0sIGxpbms6IFwiY29tcGxldGVkXCIgfVxuXTtcbm5hdkFycmF5LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBjb25zdCB0aGlzTmF2QnV0dG9uID0gZHJhd1NpZGViYXJMaW5rKGJ1dHRvbik7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXNOYXZCdXR0b24pO1xufSk7XG5jb25zdCBob3Jpem9udGFsUnVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuLy8gRE9NIHNpZGViYXIgcHJvamVjdHMgbGlzdFxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtY29udGFpbmVyXCIsIFwibmF2LWFkZC1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkcmF3U2lkZWJhckxpbmsoXG4gICAgeyB0aXRsZTogXCJBZGQgUHJvamVjdFwiLCBpY29uQ2xhc3NlczogW1wiZmEtc29saWRcIiwgXCJmYS1wbHVzXCJdLCBsaW5rOiBcImFkZC1wcm9qZWN0XCIgfVxuKTtcbmFkZFByb2plY3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5cbi8vIEFkZCBQcm9qZWN0IGNvbnRhaW5lclxuY29uc3QgYWRkUHJvamVjdElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5hZGRQcm9qZWN0SW5wdXRDb250YWluZXIuaWQgPSBcImFkZC1wcm9qZWN0LWZvcm1cIjtcbmFkZFByb2plY3RJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWhpZGRlblwiKTtcblxuY29uc3QgcHJvamVjdE5hbWVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5wcm9qZWN0TmFtZUlucHV0TGFiZWwuZm9yID0gXCJ0aXRsZVwiO1xucHJvamVjdE5hbWVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIlxuY29uc3QgcHJvamVjdE5hbWVJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5wcm9qZWN0TmFtZUlucHV0VGV4dC5pZCA9IFwicHJvamVjdC10aXRsZVwiXG5wcm9qZWN0TmFtZUlucHV0VGV4dC5uYW1lID0gXCJ0aXRsZVwiXG5wcm9qZWN0TmFtZUlucHV0VGV4dC50eXBlID0gXCJ0ZXh0XCI7XG5wcm9qZWN0TmFtZUlucHV0VGV4dC5tYXhMZW5ndGggPSAxNTtcbnByb2plY3ROYW1lSW5wdXRUZXh0LnJlcXVpcmVkID0gdHJ1ZTtcbnByb2plY3ROYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dExhYmVsKTtcbnByb2plY3ROYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dFRleHQpO1xuY29uc3QgcHJvamVjdExhYmVsSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJvamVjdExhYmVsSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbnByb2plY3RMYWJlbElucHV0TGFiZWwuZm9yID0gXCJsYWJlbFwiO1xucHJvamVjdExhYmVsSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiTGFiZWw6XCJcbmNvbnN0IHByb2plY3RMYWJlbElucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnByb2plY3RMYWJlbElucHV0VGV4dC5pZCA9IFwicHJvamVjdC1sYWJlbFwiXG5wcm9qZWN0TGFiZWxJbnB1dFRleHQubmFtZSA9IFwibGFiZWxcIlxucHJvamVjdExhYmVsSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbnByb2plY3RMYWJlbElucHV0VGV4dC5tYXhMZW5ndGggPSA4MDtcbnByb2plY3RMYWJlbElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbElucHV0TGFiZWwpO1xucHJvamVjdExhYmVsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsSW5wdXRUZXh0KTtcbmNvbnN0IHByb2plY3RTdWJtaXRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0U3VibWl0SW5wdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucHJvamVjdFN1Ym1pdElucHV0QnV0dG9uLmlkID0gXCJwcm9qZWN0LXN1Ym1pdFwiO1xucHJvamVjdFN1Ym1pdElucHV0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgTkVXIFBST0pFQ1RcIjtcbnByb2plY3RTdWJtaXRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0U3VibWl0SW5wdXRCdXR0b24pO1xuXG5hZGRQcm9qZWN0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dENvbnRhaW5lcik7XG5hZGRQcm9qZWN0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsSW5wdXRDb250YWluZXIpO1xuYWRkUHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RTdWJtaXRJbnB1dENvbnRhaW5lcik7XG5hZGRQcm9qZWN0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1hZGRpbmctcHJvamVjdFwiKTtcblxuYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lci5pbnNlcnRCZWZvcmUoYWRkUHJvamVjdElucHV0Q29udGFpbmVyLCBhZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuXG5jb25zdCB0b2dnbGVBZGRQcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGFkZFByb2plY3RJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWhpZGRlblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXBsdXNcIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1taW51c1wiKTtcbn1cblxuYWRkUHJvamVjdElucHV0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmZvcm1zW1wiYWRkLXByb2plY3QtZm9ybVwiXTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShwcm9qZWN0Rm9ybSk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZm9ybURhdGEuZ2V0KFwibGFiZWxcIik7XG4gICAgbGV0IHZhbGlkUHJvamVjdCA9IHRydWU7XG4gICAgaWYgKHZhbGlkUHJvamVjdCkge1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcIm5ld1Byb2plY3RcIiwgcHJvamVjdFRpdGxlLCBwcm9qZWN0TGFiZWwpO1xuICAgICAgICB0b2dnbGVBZGRQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgfVxufSwgZmFsc2UpO1xuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRvZ2dsZUFkZFByb2plY3RDb250YWluZXIpO1xuXG5zaWRlYmFyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG5zaWRlYmFyLmFwcGVuZENoaWxkKGhvcml6b250YWxSdWxlKTtcbnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5zaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b25Db250YWluZXIpO1xuXG4vLyBDcmVhdGluZyBET00gbWFpblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xubWFpbi5pZCA9IFwibWFpblwiO1xuXG4vLyBDcmVhdGluZyBET00gVGFzayBMaXN0XG5jb25zdCB0YXNrQ29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tDb250YWluZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyLWhlYWRlclwiKTtcbmNvbnN0IHRhc2tDb250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbnRhc2tDb250YWluZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lXCI7XG5jb25zdCB0YXNrQ29udGFpbmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRhc2tDb250YWluZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiTGFiZWxcIjtcbmNvbnN0IHRhc2tDb250YWluZXJBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudGFza0NvbnRhaW5lckFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIilcbnRhc2tDb250YWluZXJBZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIisgVGFza1wiO1xudGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyVGl0bGUpO1xudGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyTGFiZWwpO1xudGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyQWRkQnV0dG9uKTtcblxuY29uc3QgdGFza1NvcnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrU29ydGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNvcnRlclwiKTtcbmNvbnN0IHNvcnRBcnJheSA9IFtcbiAgICBcIlwiLFxuICAgIFwiVGFza1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIixcbiAgICBcIkR1ZSBEYXRlXCIsXG4gICAgXCJQcmlvcml0eVwiLFxuICAgIFwiXCIsXG4gICAgXCJcIlxuXVxuc29ydEFycmF5LmZvckVhY2goc29ydGVyID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gc29ydGVyO1xuICAgIHRhc2tTb3J0ZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn0pXG5cbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG5cbi8vIFRhc2sgZGVsZXRlIHBvcHVwXG5jb25zdCB0YXNrRGVsZXRlU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZWxldGVTY3JlZW4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLXNjcmVlblwiLCBcInRhc2stZGVsZXRlLWhpZGRlblwiKTtcbmNvbnN0IHRhc2tEZWxldGVGYWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tEZWxldGVGYWRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1mYWRlXCIpO1xuY29uc3QgdGFza0RlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1jb250YWluZXJcIik7XG50YXNrRGVsZXRlU2NyZWVuLmFwcGVuZENoaWxkKHRhc2tEZWxldGVGYWRlKTtcbnRhc2tEZWxldGVTY3JlZW4uYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUNvbnRhaW5lcik7XG5jb25zdCB0YXNrRGVsZXRlUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG50YXNrRGVsZXRlUHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1wcm9tcHRcIilcbnRhc2tEZWxldGVQcm9tcHQudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiO1xuY29uc3QgdGFza0RlbGV0ZVllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YXNrRGVsZXRlWWVzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1idXR0b25cIiwgXCJ0YXNrLWRlbGV0ZS1idXR0b24teWVzXCIpO1xudGFza0RlbGV0ZVllcy50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG5jb25zdCB0YXNrRGVsZXRlQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhc2tEZWxldGVDYW5jZWwuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWJ1dHRvblwiLCBcInRhc2stZGVsZXRlLWJ1dHRvbi1jYW5jZWxcIik7XG50YXNrRGVsZXRlQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDQU5DRUxcIjtcbnRhc2tEZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZVByb21wdCk7XG50YXNrRGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGVZZXMpO1xudGFza0RlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQ2FuY2VsKTtcblxuLy8gUHJvamVjdCBkZWxldGUgcG9wdXBcbmNvbnN0IHByb2plY3REZWxldGVTY3JlZW4gPSB0YXNrRGVsZXRlU2NyZWVuLmNsb25lTm9kZSgpO1xuY29uc3QgcHJvamVjdERlbGV0ZUZhZGUgPSB0YXNrRGVsZXRlRmFkZS5jbG9uZU5vZGUoKTtcbmNvbnN0IHByb2plY3REZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdERlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtY29udGFpbmVyXCIsIFwicHJvamVjdC1kZWxldGUtY29udGFpbmVyXCIpO1xucHJvamVjdERlbGV0ZVNjcmVlbi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlRmFkZSk7XG5wcm9qZWN0RGVsZXRlU2NyZWVuLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVDb250YWluZXIpO1xuY29uc3QgcHJvamVjdERlbGV0ZVByb21wdCA9IHRhc2tEZWxldGVQcm9tcHQuY2xvbmVOb2RlKCk7XG5wcm9qZWN0RGVsZXRlUHJvbXB0LnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdD8gVGhpcyB3aWxsIGFsc28gZGVsZXRlIGFueSBhc3NvY2lhdGVkIHRhc2tzIVwiO1xuY29uc3QgcHJvamVjdERlbGV0ZVllcyA9IHRhc2tEZWxldGVZZXMuY2xvbmVOb2RlKCk7XG5wcm9qZWN0RGVsZXRlWWVzLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbmNvbnN0IHByb2plY3REZWxldGVDYW5jZWwgPSB0YXNrRGVsZXRlQ2FuY2VsLmNsb25lTm9kZSgpO1xucHJvamVjdERlbGV0ZUNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ0FOQ0VMXCI7XG5wcm9qZWN0RGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVQcm9tcHQpO1xucHJvamVjdERlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlWWVzKTtcbnByb2plY3REZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUNhbmNlbCk7XG5cbi8vIFRhc2sgYWRkIHBvcHVwXG5jb25zdCB0YXNrQWRkU2NyZWVuID0gdGFza0RlbGV0ZVNjcmVlbi5jbG9uZU5vZGUoKTtcbmNvbnN0IHRhc2tBZGRGYWRlID0gdGFza0RlbGV0ZUZhZGUuY2xvbmVOb2RlKCk7XG5jb25zdCB0YXNrQWRkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tBZGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWNvbnRhaW5lclwiLCBcInRhc2stYWRkLWNvbnRhaW5lclwiKTtcbnRhc2tBZGRTY3JlZW4uYXBwZW5kQ2hpbGQodGFza0FkZEZhZGUpO1xudGFza0FkZFNjcmVlbi5hcHBlbmRDaGlsZCh0YXNrQWRkQ29udGFpbmVyKTtcbmNvbnN0IHRhc2tBZGRQcm9tcHQgPSB0YXNrRGVsZXRlUHJvbXB0LmNsb25lTm9kZSgpO1xudGFza0FkZFByb21wdC50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IHRhc2tcIjtcbmNvbnN0IHRhc2tBZGRZZXMgPSB0YXNrRGVsZXRlWWVzLmNsb25lTm9kZSgpO1xudGFza0FkZFllcy50ZXh0Q29udGVudCA9IFwiQUREXCI7XG5jb25zdCB0YXNrQWRkQ2FuY2VsID0gdGFza0RlbGV0ZUNhbmNlbC5jbG9uZU5vZGUoKTtcbnRhc2tBZGRDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNBTkNFTFwiO1xuXG4vLyBBZGQgVGFzayBjb250YWluZXJcbmxldCBhZGRUYXNrSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmFkZFRhc2tJbnB1dENvbnRhaW5lci5pZCA9IFwiYWRkLXRhc2stZm9ybVwiO1xuXG5jb25zdCB0YXNrTmFtZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRhc2tOYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbnRhc2tOYW1lSW5wdXRMYWJlbC5mb3IgPSBcInRpdGxlXCI7XG50YXNrTmFtZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiXG5jb25zdCB0YXNrTmFtZUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRhc2tOYW1lSW5wdXRUZXh0LmlkID0gXCJ0YXNrLXRpdGxlXCJcbnRhc2tOYW1lSW5wdXRUZXh0Lm5hbWUgPSBcInRpdGxlXCJcbnRhc2tOYW1lSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbnRhc2tOYW1lSW5wdXRUZXh0Lm1heExlbmd0aCA9IDE1O1xudGFza05hbWVJbnB1dFRleHQucmVxdWlyZWQgPSB0cnVlO1xudGFza05hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0TGFiZWwpO1xudGFza05hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0VGV4dCk7XG5jb25zdCB0YXNrRGVzY0lucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRhc2tEZXNjSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbnRhc2tEZXNjSW5wdXRMYWJlbC5mb3IgPSBcImRlc2NcIjtcbnRhc2tEZXNjSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCJcbmNvbnN0IHRhc2tEZXNjSW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGFza0Rlc2NJbnB1dFRleHQuaWQgPSBcInRhc2stZGVzY1wiXG50YXNrRGVzY0lucHV0VGV4dC5uYW1lID0gXCJkZXNjXCJcbnRhc2tEZXNjSW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcbnRhc2tEZXNjSW5wdXRUZXh0Lm1heExlbmd0aCA9IDgwO1xudGFza0Rlc2NJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY0lucHV0TGFiZWwpO1xudGFza0Rlc2NJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY0lucHV0VGV4dCk7XG5jb25zdCB0YXNrU3VibWl0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdGFza1N1Ym1pdElucHV0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhc2tTdWJtaXRJbnB1dEJ1dHRvbi5pZCA9IFwidGFzay1zdWJtaXRcIjtcbnRhc2tTdWJtaXRJbnB1dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREIE5FVyBUQVNLXCI7XG50YXNrU3VibWl0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1N1Ym1pdElucHV0QnV0dG9uKTtcblxuYWRkVGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXRDb250YWluZXIpO1xuYWRkVGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjSW5wdXRDb250YWluZXIpO1xuYWRkVGFza0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTdWJtaXRJbnB1dENvbnRhaW5lcik7XG5hZGRUYXNrSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1hZGRpbmctdGFza1wiKTtcblxudGFza0FkZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQWRkUHJvbXB0KTtcbnRhc2tBZGRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0lucHV0Q29udGFpbmVyKTtcbnRhc2tBZGRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0FkZFllcyk7XG50YXNrQWRkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tBZGRDYW5jZWwpO1xuXG4vLyBBcHBlbmRpbmcgdG8gbWFpbiBhbmQgYm9keVxubWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVySGVhZGVyKTtcbm1haW4uYXBwZW5kQ2hpbGQodGFza1NvcnRlcik7XG5tYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbmJvZHkuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZVNjcmVlbik7XG5ib2R5LmFwcGVuZENoaWxkKHByb2plY3REZWxldGVTY3JlZW4pO1xuYm9keS5hcHBlbmRDaGlsZCh0YXNrQWRkU2NyZWVuKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgeyBldmVudEVtaXR0ZXIsIGRyYXdQcm9qZWN0TmF2LCBkcmF3UHJvamVjdEluZm8sIGRyYXdUYXNrTGlzdCwgZHJhd1Rhc2ssIG5hdkNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lciwgdGFza0NvbnRhaW5lciwgYWRkUHJvamVjdEJ1dHRvbiB9OyIsImxldCBjdXJyZW50SUQgPSAwO1xuXG5jb25zdCBnZXROZXdJRCA9ICgpID0+IHtcbiAgICBjdXJyZW50SUQrKztcbiAgICByZXR1cm4gY3VycmVudElEO1xufVxuXG5leHBvcnQgeyBnZXROZXdJRCB9OyIsImltcG9ydCB7IGdldE5ld0lEIH0gZnJvbSBcIi4vaWRDb250cm9sbGVyLmpzXCJcblxubGV0IGN1cnJlbnRQcm9qZWN0SUQgPSAxO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgbGFiZWwpIHtcbiAgICAgICAgdGhpcy5faWQgPSBnZXROZXdJRCgpO1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLl9pY29uQ2xhc3NlcyA9IFtcImZhLXNvbGlkXCIsIFwiZmEtZm9sZGVyXCJdO1xuICAgICAgICB0aGlzLl90YXNrTGlzdCA9IFtdO1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG4gICAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgIH1cbiAgICBzZXQgbGFiZWwobmV3TGFiZWwpIHtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBuZXdMYWJlbDtcbiAgICB9XG4gICAgZ2V0IGljb25DbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvbkNsYXNzZXM7XG4gICAgfVxuICAgIGdldCB0YXNrTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0O1xuICAgIH1cbiAgICBhZGRUYXNrID0gKHRhc2tPYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIHRhc2tPYmplY3QucGFyZW50UHJvamVjdCA9IHRoaXM7XG4gICAgICAgIGlmIChpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fdGFza0xpc3Quc3BsaWNlKGluZGV4LCAwLCB0YXNrT2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tMaXN0LnB1c2godGFza09iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tMaXN0O1xuICAgIH1cbiAgICByZW1vdmVUYXNrID0gKHRhc2tPYmplY3QpID0+IHtcbiAgICAgICAgdGhpcy5fdGFza0xpc3QgPSB0aGlzLl90YXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrICE9PSB0YXNrT2JqZWN0KTtcbiAgICB9XG4gICAgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IHRoaXMgPT09IHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldFByb2plY3RCeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IE51bWJlcihpZCkgPT09IE51bWJlcihwcm9qZWN0LmlkKSk7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0W3Byb2plY3RJbmRleF07XG59XG5cbmNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gY3VycmVudFByb2plY3RJRDtcbn1cblxuY29uc3Qgc2V0Q3VycmVudFByb2plY3QgPSBmdW5jdGlvbihpZCl7XG4gICAgY3VycmVudFByb2plY3RJRCA9IGlkO1xufVxuXG5leHBvcnQgeyBQcm9qZWN0LCBnZXRQcm9qZWN0QnlJRCwgZ2V0Q3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0IH07IiwiaW1wb3J0IHsgZ2V0TmV3SUQgfSBmcm9tIFwiLi9pZENvbnRyb2xsZXIuanNcIlxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHN0YXR1cywgcHJpb3JpdHksIHBhcmVudFByb2plY3QpIHtcbiAgICAgICAgdGhpcy5faWQgPSBnZXROZXdJRCgpO1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50UHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgaWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG4gICAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBzZXQgZGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgZ2V0IGR1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuICAgIHNldCBkdWVEYXRlKG5ld0R1ZURhdGUpe1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICB9XG4gICAgZ2V0IHByaW9yaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG4gICAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KXtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG4gICAgZ2V0IGNvbXBsZXRlZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICAgIH1cbiAgICBzZXQgY29tcGxldGVkKG5ld0NvbXBsZXRlZCl7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZCA9IG5ld0NvbXBsZXRlZDtcbiAgICB9XG4gICAgZ2V0IHBhcmVudFByb2plY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudFByb2plY3Q7XG4gICAgfVxuICAgIHNldCBwYXJlbnRQcm9qZWN0KG5ld1BhcmVudFByb2plY3Qpe1xuICAgICAgICB0aGlzLl9wYXJlbnRQcm9qZWN0ID0gbmV3UGFyZW50UHJvamVjdDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRhc2sgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBtb2R1bGUgdGhhdCBjcmVhdGVzIHByb2plY3RzICYgZ2V0cy9zZXRzIHRoZWlyIHByb3BlcnRpZXNcbi8vIGFkZHMsIHJlbW92ZXMgdGFza3Ncbi8vaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuLy8gbW9kdWxlIHRoYXQgY3JlYXRlcyB0b2RvcyAmIGdldHMvc2V0cyB0aGVpciBwcm9wZXJ0aWVzXG4vL2ltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG4vL2ltcG9ydCB7IGRyYXdQcm9qZWN0TmF2IH0gZnJvbSBcIi4vZG9tQ3JlYXRvci5qc1wiO1xuXG5pbXBvcnQgXCIuL2FjdGlvbkhhbmRsZXIuanNcIjtcblxuICBcblxuLy8gd2hhdCBoYXBwZW5zIHdoZW4gd2UgbW92ZSBhIHRhc2sgZnJvbSBvbmUgcHJvamVjdCB0byBhbm90aGVyP1xuLy8gd2hhdCBoYXBwZW5zIHdoZW4gd2UgZGVsZXRlIGEgcHJvamVjdD9cbi8vIHdoYXQgaGFwcGVucyB3aGVuIHdlIHNldCBhIHRhc2sgYXMgY29tcGxldGVkPyBpcyB0aGF0IGNvbnRyb2xsZWQgYnkgdGhlIHRhc2sgbW9kdWxlIG9yIGFuIGV4dGVybmFsIG1vZHVsZSB0aGF0IG1hbmlwdWxhdGVzIGl0P1xuXG4vLyBkb20gbW9kdWxlKHMpXG5cbi8vIGkgdGhpbmsgYSBtb2R1bGUgdGhhdCB5b3UgY2FsbCB1cG9uIHRvIGFkZCBwcm9qZWN0cy90YXNrcyAtIGFsc28gYWRkcyB0byBkb20gYXMgd2VsbFxuLy8gc29ydCBvZiBhIGZhY2lsaXRhdG9yIG9mIGRvbSArIGNsYXNzZXMgLSBzbyB3ZSBqdXN0IGNhbGwgdGhhdCBtb2R1bGUgaW5zdGVhZCBvZiBjYWxsaW5nIGRvbSArIGNsYXNzIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9