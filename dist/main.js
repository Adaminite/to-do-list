/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n\n    box-sizing: border-box;\n}\n\n/* Structural styling */\nbody{\n\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n\n    font-family: 'Times New Roman', Times, serif;\n\n}\n/* Header and Footer */\n#header, #footer{\n    text-align: left;\n    background-color: black;\n    color: white;\n    \n    \n}\n\n#footer{\n    text-align: center;\n    padding: 15px;\n    font-size: 20px;\n}\n\n#header{\n    text-align: left;\n    padding: 20px;\n    font-size: 36px;\n}\n\n/* Tasks and Projects */\n#content{\n    flex: auto;\n    display: flex;\n}\n\n/* Sidebar Stuff */\n#sidebar{\n    width: 33.3%;\n    background-color: chocolate;\n\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#main-sidebars{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n\n    width: 100%;\n}\n\n.sidebar-tab{\n    cursor: pointer;\n    font-size: 26px;\n\n    display: inline-block;\n    border: 0;\n    background-color: chocolate;\n}\n\n.sidebar-tab:hover{\n    background-color: rgb(228, 105, 18);\n}\n\n#projects-header{\n    text-align: center;\n    font-size: 30px;\n    margin-top: 20px;\n}\n\n#project-list{\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#add-project-btn{\n    display: block;\n    width: 100px;\n    \n}\n\n.delete-project{\n    transform: rotate(45deg);\n    font-size: 15px;\n    border: 0;\n    background-color: chocolate;\n    cursor: pointer;\n\n    display: inline-block;\n}\n\n/* Main */\n#items{\n    width: 66.7%;\n    background-color: red;\n\n    display: flex;\n    flex-direction: column;\n\n    padding: 10px;\n}\n\n#task-subheader{\n    background-color: orange;\n    color: white;\n    font-size: 30px;\n    text-align: center;\n}\n\n#add-btn, .task{\n    \n    color: black;\n    font-size: 16px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n\n    margin-top: 10px;\n\n    border: 0;\n}\n\n#add-btn{\n    background-color: white;\n}\n\n.task{\n    background-color: lightblue;\n    display: flex;\n    justify-content: space-between;\n\n    padding: 5px;\n    \n}\n\n.left-items{\n\n}\n\n.right-items{\n    display: flex;\n    gap: 10px\n}\n\n/* Pop-up modals */\n.modal{\n\n    display: flex;\n\n    display: none;\n\n    z-index: 1;\n    \n    position: absolute;\n\n    top: 0;\n    width: 100%;\n    height: 100%;\n\n    background-color: rgba(0,0,0,0.7);\n\n    align-items: center;\n    justify-content: center;\n\n\n}\n\n.modal-content{\n\n    background-color: white;\n\n    width: 700px;\n    height: 500px;\n\n    position: relative;\n\n    padding: 20px;\n    text-align: center;\n}\n\n.close{\n    position: absolute;\n    top: 0;\n    right: 14px;\n    border: 0;\n\n    cursor: pointer;\n\n    font-size: 50px;\n\n    transform: rotate(45deg); \n\n    background-color: white;\n\n}\n\n.modal-header{\n    font-size: 40px;  \n}\n\n#add-task-form{\n    position: absolute;\n    width: 60%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n    left: 0;\n    right: 0;\n\n    display: flex;\n    flex-direction: column;\n}\n\n#add-project-form{\n    margin-top: 20px;\n}\n\n.form-input{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n\n    margin: 5px;\n}\n\n.modal-img{\n\n    height: 150px;\n    width: 150px;\n    margin-top: 10px;\n}\n\n.add-label{\n    font-size: 36px;\n    width: 100px;\n    text-align: left;\n    \n}\n.add-input{\n    padding: 10px;\n    flex: auto;\n    font-size: inherit;\n}\n\n.submitBtn{\n    font-size: 25px;\n    padding: 5px;\n\n    margin-top: 10px\n}\n", "",{"version":3,"sources":["webpack://./styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;;IAEV,sBAAsB;AAC1B;;AAEA,uBAAuB;AACvB;;IAEI,aAAa;;IAEb,aAAa;IACb,sBAAsB;;IAEtB,4CAA4C;;AAEhD;AACA,sBAAsB;AACtB;IACI,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;;;AAGhB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;AACnB;;AAEA,uBAAuB;AACvB;IACI,UAAU;IACV,aAAa;AACjB;;AAEA,kBAAkB;AAClB;IACI,YAAY;IACZ,2BAA2B;;IAE3B,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;;IAER,WAAW;AACf;;AAEA;IACI,eAAe;IACf,eAAe;;IAEf,qBAAqB;IACrB,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,cAAc;IACd,YAAY;;AAEhB;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,SAAS;IACT,2BAA2B;IAC3B,eAAe;;IAEf,qBAAqB;AACzB;;AAEA,SAAS;AACT;IACI,YAAY;IACZ,qBAAqB;;IAErB,aAAa;IACb,sBAAsB;;IAEtB,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,mBAAmB;;IAEnB,gBAAgB;;IAEhB,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,8BAA8B;;IAE9B,YAAY;;AAEhB;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA,kBAAkB;AAClB;;IAEI,aAAa;;IAEb,aAAa;;IAEb,UAAU;;IAEV,kBAAkB;;IAElB,MAAM;IACN,WAAW;IACX,YAAY;;IAEZ,iCAAiC;;IAEjC,mBAAmB;IACnB,uBAAuB;;;AAG3B;;AAEA;;IAEI,uBAAuB;;IAEvB,YAAY;IACZ,aAAa;;IAEb,kBAAkB;;IAElB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,WAAW;IACX,SAAS;;IAET,eAAe;;IAEf,eAAe;;IAEf,wBAAwB;;IAExB,uBAAuB;;AAE3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,OAAO;IACP,QAAQ;;IAER,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;;IAER,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;;AAEpB;AACA;IACI,aAAa;IACb,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;;IAEZ;AACJ","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n\n    box-sizing: border-box;\n}\n\n/* Structural styling */\nbody{\n\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n\n    font-family: 'Times New Roman', Times, serif;\n\n}\n/* Header and Footer */\n#header, #footer{\n    text-align: left;\n    background-color: black;\n    color: white;\n    \n    \n}\n\n#footer{\n    text-align: center;\n    padding: 15px;\n    font-size: 20px;\n}\n\n#header{\n    text-align: left;\n    padding: 20px;\n    font-size: 36px;\n}\n\n/* Tasks and Projects */\n#content{\n    flex: auto;\n    display: flex;\n}\n\n/* Sidebar Stuff */\n#sidebar{\n    width: 33.3%;\n    background-color: chocolate;\n\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#main-sidebars{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n\n    width: 100%;\n}\n\n.sidebar-tab{\n    cursor: pointer;\n    font-size: 26px;\n\n    display: inline-block;\n    border: 0;\n    background-color: chocolate;\n}\n\n.sidebar-tab:hover{\n    background-color: rgb(228, 105, 18);\n}\n\n#projects-header{\n    text-align: center;\n    font-size: 30px;\n    margin-top: 20px;\n}\n\n#project-list{\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#add-project-btn{\n    display: block;\n    width: 100px;\n    \n}\n\n.delete-project{\n    transform: rotate(45deg);\n    font-size: 15px;\n    border: 0;\n    background-color: chocolate;\n    cursor: pointer;\n\n    display: inline-block;\n}\n\n/* Main */\n#items{\n    width: 66.7%;\n    background-color: red;\n\n    display: flex;\n    flex-direction: column;\n\n    padding: 10px;\n}\n\n#task-subheader{\n    background-color: orange;\n    color: white;\n    font-size: 30px;\n    text-align: center;\n}\n\n#add-btn, .task{\n    \n    color: black;\n    font-size: 16px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n\n    margin-top: 10px;\n\n    border: 0;\n}\n\n#add-btn{\n    background-color: white;\n}\n\n.task{\n    background-color: lightblue;\n    display: flex;\n    justify-content: space-between;\n\n    padding: 5px;\n    \n}\n\n.left-items{\n\n}\n\n.right-items{\n    display: flex;\n    gap: 10px\n}\n\n/* Pop-up modals */\n.modal{\n\n    display: flex;\n\n    display: none;\n\n    z-index: 1;\n    \n    position: absolute;\n\n    top: 0;\n    width: 100%;\n    height: 100%;\n\n    background-color: rgba(0,0,0,0.7);\n\n    align-items: center;\n    justify-content: center;\n\n\n}\n\n.modal-content{\n\n    background-color: white;\n\n    width: 700px;\n    height: 500px;\n\n    position: relative;\n\n    padding: 20px;\n    text-align: center;\n}\n\n.close{\n    position: absolute;\n    top: 0;\n    right: 14px;\n    border: 0;\n\n    cursor: pointer;\n\n    font-size: 50px;\n\n    transform: rotate(45deg); \n\n    background-color: white;\n\n}\n\n.modal-header{\n    font-size: 40px;  \n}\n\n#add-task-form{\n    position: absolute;\n    width: 60%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n    left: 0;\n    right: 0;\n\n    display: flex;\n    flex-direction: column;\n}\n\n#add-project-form{\n    margin-top: 20px;\n}\n\n.form-input{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n\n    margin: 5px;\n}\n\n.modal-img{\n\n    height: 150px;\n    width: 150px;\n    margin-top: 10px;\n}\n\n.add-label{\n    font-size: 36px;\n    width: 100px;\n    text-align: left;\n    \n}\n.add-input{\n    padding: 10px;\n    flex: auto;\n    font-size: inherit;\n}\n\n.submitBtn{\n    font-size: 25px;\n    padding: 5px;\n\n    margin-top: 10px\n}\n"],"sourceRoot":""}]);
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

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderFooter(){
    const footer = document.createElement('div');
    footer.id = "footer";
    footer.textContent = "Copyright \u00A9 Omar Niazi";

    return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter());


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderHeader(){
    const header = document.createElement('div');
    header.id = "header";

    const text = document.createElement('h1');
    text.textContent = "To Do List";

    header.appendChild(text);
    
    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader());

/***/ }),

/***/ "./src/mainwindow.js":
/*!***************************!*\
  !*** ./src/mainwindow.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _taskcontainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskcontainer.js */ "./src/taskcontainer.js");





function renderMainDiv() {
    let mainDiv = document.createElement('div');
    mainDiv.id = "content";
    
    mainDiv.appendChild( _sidebar_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderSidebar() );
    mainDiv.appendChild( (0,_taskcontainer_js__WEBPACK_IMPORTED_MODULE_1__["default"])() );
    
    
    return mainDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMainDiv);

/***/ }),

/***/ "./src/projectmodal.js":
/*!*****************************!*\
  !*** ./src/projectmodal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _images_project_img_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/project_img.png */ "./images/project_img.png");



function closeButton(){
    const close = document.createElement('button');
    close.textContent = "+";
    
    close.classList.add('close');

    close.addEventListener('click', (e) => {
        const modal = document.querySelector("#project-modal");
        modal.style.display = "none";
    });

    return close;
}

function header(){
    const header = document.createElement('h2');
    header.textContent = "Add Project";

    header.classList.add("modal-header");

    return header;
}

function modalImg(){
    const image = document.createElement('img');
    image.setAttribute('src', _images_project_img_png__WEBPACK_IMPORTED_MODULE_1__);
    image.setAttribute('alt', "A picture of a to-do list");
    image.classList.add('modal-img');

    return image;
}


function inputForm(){
    const newProject = document.createElement('form');
    newProject.id = 'add-project-form';

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('form-input');

    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('name', 'name');
    projectInput.required = true;
    projectInput.classList.add('add-input');

    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for', 'name');
    projectLabel.textContent = "Name:";
    projectLabel.classList.add("add-label");

    mainDiv.appendChild(projectLabel);
    mainDiv.appendChild(projectInput);

    const submitDiv = document.createElement('div');
    submitDiv.classList.add('form-input');

    const submitBtn = document.createElement('input');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Add Project');
    submitBtn.classList.add("submitBtn");

    submitDiv.appendChild(submitBtn);

    newProject.appendChild(mainDiv);
    newProject.appendChild(submitDiv);

    newProject.addEventListener('submit', (e) => {
        e.preventDefault();
        _sidebar_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProject.elements[0].value);
        newProject.reset();

        const modal = document.querySelector("#project-modal");
        modal.style.display = "none";
    });

    return newProject;

}

function modalContent(){
    const modal = document.createElement('div');
    modal.id = "project-modal-content";
    modal.classList.add("modal-content");

    modal.appendChild( closeButton() );
    modal.appendChild( header() );
    modal.appendChild( modalImg() );
    modal.appendChild( inputForm() );

    return modal;
}

function projectModal(){
    const container = document.createElement('div');
    container.id = "project-modal";
    container.classList.add("modal");

    container.appendChild( modalContent() );

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModal);

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");


const sidebar = ( () => {
    
    let projects = [];

    const renderSidebar = () => {
        let sidebar = document.createElement('div');
        sidebar.id = "sidebar";
        
        sidebar.appendChild( mainSidebars() );
        sidebar.appendChild( projectHeader() );
        sidebar.appendChild( projectList() );
        sidebar.appendChild( addProjectBtn() );

        return sidebar;
    }

    const projectList = () => {
        let projectList = document.createElement('div');
        projectList.id = "project-list";

        return projectList;
    }

    const mainSidebars = () => {
        let timeDiv = document.createElement('div');
        timeDiv.id = "main-sidebars";

        let all = document.createElement('button');
        all.textContent = "All";
        all.classList.add("sidebar-tab");
        all.addEventListener('click', () => {
            _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(all.textContent);
        });

        let today = document.createElement('button');
        today.textContent = "Today";
        today.classList.add("sidebar-tab");
        today.addEventListener('click', () => {
            _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(today.textContent);
        });

        let thisWeek = document.createElement('button');
        thisWeek.textContent = "This Week";
        thisWeek.classList.add("sidebar-tab");
        thisWeek.addEventListener('click', () => {
            _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(thisWeek.textContent);
        });

        timeDiv.appendChild(all);
        timeDiv.appendChild(today);
        timeDiv.appendChild(thisWeek);

        return timeDiv;
        
    }

    const projectHeader = () => {
        let header = document.createElement('h2');
        header.textContent = "Projects";
        header.id = "projects-header";

        return header;
    }

    const addProjectBtn = () => {
        let addBtn = document.createElement('button');
        addBtn.textContent = "+ Add Project";
        addBtn.id = "add-project-btn";

        addBtn.addEventListener('click', () => {
            const projectModal = document.querySelector("#project-modal");
            projectModal.style.display = "flex";
        });

        return addBtn;
    }

    const addProject = (name) => {

        if(!projects.includes(name) || isNaN(name)){

            let projectList = document.querySelector("#project-list");

            let projContainer = document.createElement('div');
            projContainer.id = name;
    
            let newProject = document.createElement('button');
            newProject.textContent = name;
            newProject.classList.add("sidebar-tab");
    
            newProject.addEventListener('click', (e) => {
                _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(newProject.textContent);
            });
    
            let deleteProject = document.createElement('button');
            deleteProject.textContent = "+";
            deleteProject.classList.add("delete-project");
            deleteProject.addEventListener('click', (e) => {
                let elementToRemove = e.target.parentElement;
                _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProjectTasks(name);

                let idx = projects.indexOf(name);

                projects = projects.filter( (project, index) => {
                    return index !== idx;
                });

                displayProjects();

            });

            projContainer.appendChild(newProject);
            projContainer.appendChild(deleteProject);

            projectList.appendChild(projContainer);

            projects.push(name);
    
        }
       
    }

    const displayProjects = () => {
        let projectList = document.querySelector("#project-list");

        projectList.textContent = "";

        for(let project of projects){

            let projContainer = document.createElement('div');
            projContainer.id = project;
    
            let newProject = document.createElement('button');
            newProject.textContent = project;
            newProject.classList.add("sidebar-tab");
    
            newProject.addEventListener('click', (e) => {
                _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(newProject.textContent);
            });
    
            let deleteProject = document.createElement('button');
            deleteProject.textContent = "+";
            deleteProject.classList.add("delete-project");
            deleteProject.addEventListener('click', (e) => {
                let elementToRemove = e.target.parentElement;
                _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProjectTasks(project);

                let idx = projects.indexOf(project);

                projects = projects.filter( (project, index) => {
                    return index !== idx;
                });

            });

            projContainer.appendChild(newProject);
            projContainer.appendChild(deleteProject);

            projectList.appendChild(projContainer);
        }
    }

    return {renderSidebar, addProject};

})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function task(name, date, project="All"){
    const getName = () => {
        return name;
    }

    const getDate = () => {
        return date;
    }

    const getProject = () => {
        return project;
    }

    const asString = () => {
        return `${name}-${date}`;
    }
    
    return {getName, getDate, getProject, asString};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);

/***/ }),

/***/ "./src/taskcontainer.js":
/*!******************************!*\
  !*** ./src/taskcontainer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function subHeader(){
    let subHeader = document.createElement('h2');
    subHeader.textContent = "Tasks";
    subHeader.id = "task-subheader";
    

    return subHeader;
}

function addTaskButton(){
    const btn = document.createElement('button');
    btn.textContent = "+ Add Task";
    btn.id = "add-btn";

    btn.addEventListener('click', (e) =>{
        const modal = document.querySelector('#task-modal');
        modal.style.display = "flex";
    } );

    return btn;
}

function taskList(){
    const taskList = document.createElement('div');
    taskList.id = "task-list";

    return taskList;

}
function taskContainer(){
    let itemDiv = document.createElement('div');
    itemDiv.id = "items";

    itemDiv.appendChild( subHeader() );
    itemDiv.appendChild( taskList() );
    itemDiv.appendChild( addTaskButton() );

    return itemDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskContainer);

/***/ }),

/***/ "./src/taskmodal.js":
/*!**************************!*\
  !*** ./src/taskmodal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_modal_img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/modal_img.png */ "./images/modal_img.png");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");



function closeButton(){
    const close = document.createElement('button');
    close.textContent = "+";
    
    close.classList.add('close');

    close.addEventListener('click', (e) => {
        const modal = document.querySelector("#task-modal");
        modal.style.display = "none";
    });

    return close;
}

function header(){
    const header = document.createElement('h2');
    header.textContent = "Add Task";

    header.classList.add("modal-header");

    return header;
}

function modalImg(){
    const image = document.createElement('img');
    image.setAttribute('src', _images_modal_img_png__WEBPACK_IMPORTED_MODULE_0__);
    image.setAttribute('alt', "A picture of a to-do list");
    image.classList.add('modal-img');

    return image;
}

function inputForm(){
    const addTask = document.createElement('form');
    addTask.id = 'add-task-form';

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('form-input');

    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('name', 'name');
    taskInput.required = true;
    taskInput.classList.add('add-input');

    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', 'name');
    taskLabel.textContent = "Name:";
    taskLabel.classList.add("add-label");

    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(taskInput);


    const dateDiv = document.createElement('div');
    dateDiv.classList.add('form-input');

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.required = true;
    dateInput.classList.add('add-input');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = "Date:";
    dateLabel.classList.add("add-label");

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);


    const submitDiv = document.createElement('div');
    submitDiv.classList.add('form-input');

    const submitBtn = document.createElement('input');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Add Task');
    submitBtn.classList.add("submitBtn");

    submitDiv.appendChild(submitBtn);

    addTask.appendChild(taskDiv);
    addTask.appendChild(dateDiv);
    addTask.appendChild(submitDiv);

    addTask.addEventListener('submit', (e) => {
        e.preventDefault();
        createTask(addTask);
        addTask.reset();

        const modal = document.querySelector("#task-modal");
        modal.style.display = "none";
    });

    return addTask;

}

function createTask(form){
    const queries = form.elements;

    const name = queries[0].value;
    const date = queries[1].value;

    _tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(name, date);

}

function modalContent(){
    const modal = document.createElement('div');
    modal.id = "task-modal-content";
    modal.classList.add("modal-content");

    modal.appendChild( closeButton() );
    modal.appendChild( header() );
    modal.appendChild( modalImg() );
    modal.appendChild( inputForm() );

    return modal;
}

function taskModal(){
    const container = document.createElement('div');

    container.classList.add('modal');
    container.id = "task-modal";
    container.classList.add("modal");

    container.appendChild( modalContent() );

    return container;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskModal);

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


const tasks = ( () => {

    let allTasks = [];

    let currProject = "All";

    const addTask = (name, date) => {

        const newTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name, date, currProject);
        allTasks.push(newTask);

        createTaskDiv(newTask);
    }

    const createTaskDiv = (task) => {

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskName = document.createElement('p');
        taskName.textContent = task.getName();

        const rightItems = document.createElement('div');
        
        const taskDate = document.createElement('p');
        taskDate.textContent = task.getDate();

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Remove";
        deleteButton.addEventListener('click', (e) => {
            let idx = e.target.parentElement.parentElement.id;

            let taskToRem = allTasks[idx];

            allTasks = allTasks.filter( (task, index) => {
                return index != idx;
            });

            displayTasks(currProject, true);
        });


        rightItems.appendChild(taskDate);
        rightItems.appendChild(deleteButton);
        rightItems.classList.add('right-items');

        taskDiv.appendChild(taskName);
        taskDiv.appendChild(rightItems);

        taskDiv.id = allTasks.map( (item) => {
            return item.asString();
        }).indexOf(task.asString());

        const taskList = document.querySelector('#task-list');
        taskList.appendChild( taskDiv );

    }

    const displayTasks = (project, bypass=false) => {

        if(project !== currProject || bypass){

            currProject = project;

            const tasks = document.querySelector('#task-list');

            tasks.textContent = "";

            if(project === "All"){
                for(let task of allTasks){
                    createTaskDiv(task);
                }
            }

            else{

                let filteredTasks = allTasks.filter( (indTask) => (indTask.getProject() === project));
                for(let task of filteredTasks){
                    createTaskDiv(task);
                }
            }
        }
    }

    const deleteProjectTasks = (project) => {
        allTasks = allTasks.filter( (task) => task.getProject() !== project);
        
        if(currProject === project){
            displayTasks("All");
        }

        else{
            displayTasks(currProject, true);
        }
    }

    return{addTask, displayTasks, deleteProjectTasks};

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);

/***/ }),

/***/ "./images/modal_img.png":
/*!******************************!*\
  !*** ./images/modal_img.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc01b5511728d32e05d3.png";

/***/ }),

/***/ "./images/project_img.png":
/*!********************************!*\
  !*** ./images/project_img.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ad05dc8b5f47eea3915.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _mainwindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainwindow.js */ "./src/mainwindow.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _taskmodal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskmodal.js */ "./src/taskmodal.js");
/* harmony import */ var _projectmodal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectmodal.js */ "./src/projectmodal.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");







const displayController = ( () => {

    const body = document.querySelector('body');

    const renderPage = () => {
        body.appendChild(_header_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
        body.appendChild( (0,_mainwindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])() );
        body.appendChild( (0,_taskmodal_js__WEBPACK_IMPORTED_MODULE_3__["default"])() );
        body.appendChild( (0,_projectmodal_js__WEBPACK_IMPORTED_MODULE_4__["default"])() );
        body.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }

    return {renderPage};
})(); 


displayController.renderPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNENBQTRDLGdCQUFnQixpQkFBaUIsK0JBQStCLEdBQUcsbUNBQW1DLHNCQUFzQixzQkFBc0IsNkJBQTZCLHFEQUFxRCxLQUFLLDRDQUE0Qyx1QkFBdUIsOEJBQThCLG1CQUFtQixlQUFlLFlBQVkseUJBQXlCLG9CQUFvQixzQkFBc0IsR0FBRyxZQUFZLHVCQUF1QixvQkFBb0Isc0JBQXNCLEdBQUcsdUNBQXVDLGlCQUFpQixvQkFBb0IsR0FBRyxrQ0FBa0MsbUJBQW1CLGtDQUFrQyxzQkFBc0Isc0JBQXNCLDZCQUE2QiwwQkFBMEIsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2QixlQUFlLG9CQUFvQixHQUFHLGlCQUFpQixzQkFBc0Isc0JBQXNCLDhCQUE4QixnQkFBZ0Isa0NBQWtDLEdBQUcsdUJBQXVCLDBDQUEwQyxHQUFHLHFCQUFxQix5QkFBeUIsc0JBQXNCLHVCQUF1QixHQUFHLGtCQUFrQixrQkFBa0Isc0JBQXNCLDZCQUE2QixlQUFlLEdBQUcscUJBQXFCLHFCQUFxQixtQkFBbUIsU0FBUyxvQkFBb0IsK0JBQStCLHNCQUFzQixnQkFBZ0Isa0NBQWtDLHNCQUFzQiw4QkFBOEIsR0FBRyx1QkFBdUIsbUJBQW1CLDRCQUE0QixzQkFBc0IsNkJBQTZCLHNCQUFzQixHQUFHLG9CQUFvQiwrQkFBK0IsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyxvQkFBb0IseUJBQXlCLHNCQUFzQix1QkFBdUIsMEJBQTBCLHlCQUF5QixrQkFBa0IsR0FBRyxhQUFhLDhCQUE4QixHQUFHLFVBQVUsa0NBQWtDLG9CQUFvQixxQ0FBcUMscUJBQXFCLFNBQVMsZ0JBQWdCLEtBQUssaUJBQWlCLG9CQUFvQixrQkFBa0IsZ0NBQWdDLHNCQUFzQixzQkFBc0IsbUJBQW1CLCtCQUErQixlQUFlLGtCQUFrQixtQkFBbUIsMENBQTBDLDRCQUE0Qiw4QkFBOEIsT0FBTyxtQkFBbUIsZ0NBQWdDLHFCQUFxQixvQkFBb0IsMkJBQTJCLHNCQUFzQix5QkFBeUIsR0FBRyxXQUFXLHlCQUF5QixhQUFhLGtCQUFrQixnQkFBZ0Isd0JBQXdCLHdCQUF3QixrQ0FBa0MsZ0NBQWdDLEtBQUssa0JBQWtCLHdCQUF3QixHQUFHLG1CQUFtQix5QkFBeUIsaUJBQWlCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLGNBQWMsZUFBZSxzQkFBc0IsNkJBQTZCLEdBQUcsc0JBQXNCLHVCQUF1QixHQUFHLGdCQUFnQixvQkFBb0IsMEJBQTBCLDhCQUE4QixlQUFlLG9CQUFvQixHQUFHLGVBQWUsc0JBQXNCLG1CQUFtQix1QkFBdUIsR0FBRyxlQUFlLHNCQUFzQixtQkFBbUIsdUJBQXVCLFNBQVMsYUFBYSxvQkFBb0IsaUJBQWlCLHlCQUF5QixHQUFHLGVBQWUsc0JBQXNCLG1CQUFtQiwyQkFBMkIsU0FBUyxtRkFBbUYsVUFBVSxXQUFXLFlBQVksT0FBTyxZQUFZLE9BQU8sV0FBVyxVQUFVLGFBQWEsY0FBYyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLGFBQWEsV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxPQUFPLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsV0FBVyxXQUFXLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxLQUFLLDJCQUEyQixnQkFBZ0IsaUJBQWlCLCtCQUErQixHQUFHLG1DQUFtQyxzQkFBc0Isc0JBQXNCLDZCQUE2QixxREFBcUQsS0FBSyw0Q0FBNEMsdUJBQXVCLDhCQUE4QixtQkFBbUIsZUFBZSxZQUFZLHlCQUF5QixvQkFBb0Isc0JBQXNCLEdBQUcsWUFBWSx1QkFBdUIsb0JBQW9CLHNCQUFzQixHQUFHLHVDQUF1QyxpQkFBaUIsb0JBQW9CLEdBQUcsa0NBQWtDLG1CQUFtQixrQ0FBa0Msc0JBQXNCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsZUFBZSxvQkFBb0IsR0FBRyxpQkFBaUIsc0JBQXNCLHNCQUFzQiw4QkFBOEIsZ0JBQWdCLGtDQUFrQyxHQUFHLHVCQUF1QiwwQ0FBMEMsR0FBRyxxQkFBcUIseUJBQXlCLHNCQUFzQix1QkFBdUIsR0FBRyxrQkFBa0Isa0JBQWtCLHNCQUFzQiw2QkFBNkIsZUFBZSxHQUFHLHFCQUFxQixxQkFBcUIsbUJBQW1CLFNBQVMsb0JBQW9CLCtCQUErQixzQkFBc0IsZ0JBQWdCLGtDQUFrQyxzQkFBc0IsOEJBQThCLEdBQUcsdUJBQXVCLG1CQUFtQiw0QkFBNEIsc0JBQXNCLDZCQUE2QixzQkFBc0IsR0FBRyxvQkFBb0IsK0JBQStCLG1CQUFtQixzQkFBc0IseUJBQXlCLEdBQUcsb0JBQW9CLHlCQUF5QixzQkFBc0IsdUJBQXVCLDBCQUEwQix5QkFBeUIsa0JBQWtCLEdBQUcsYUFBYSw4QkFBOEIsR0FBRyxVQUFVLGtDQUFrQyxvQkFBb0IscUNBQXFDLHFCQUFxQixTQUFTLGdCQUFnQixLQUFLLGlCQUFpQixvQkFBb0Isa0JBQWtCLGdDQUFnQyxzQkFBc0Isc0JBQXNCLG1CQUFtQiwrQkFBK0IsZUFBZSxrQkFBa0IsbUJBQW1CLDBDQUEwQyw0QkFBNEIsOEJBQThCLE9BQU8sbUJBQW1CLGdDQUFnQyxxQkFBcUIsb0JBQW9CLDJCQUEyQixzQkFBc0IseUJBQXlCLEdBQUcsV0FBVyx5QkFBeUIsYUFBYSxrQkFBa0IsZ0JBQWdCLHdCQUF3Qix3QkFBd0Isa0NBQWtDLGdDQUFnQyxLQUFLLGtCQUFrQix3QkFBd0IsR0FBRyxtQkFBbUIseUJBQXlCLGlCQUFpQix3QkFBd0IseUJBQXlCLHVCQUF1QixjQUFjLGVBQWUsc0JBQXNCLDZCQUE2QixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRyxnQkFBZ0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsZUFBZSxvQkFBb0IsR0FBRyxlQUFlLHNCQUFzQixtQkFBbUIsdUJBQXVCLEdBQUcsZUFBZSxzQkFBc0IsbUJBQW1CLHVCQUF1QixTQUFTLGFBQWEsb0JBQW9CLGlCQUFpQix5QkFBeUIsR0FBRyxlQUFlLHNCQUFzQixtQkFBbUIsMkJBQTJCLHFCQUFxQjtBQUM1b1M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUjlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTTtBQUNZOzs7O0FBSS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUFxQjtBQUM5Qyx5QkFBeUIsNkRBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCd0I7QUFDUjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixvREFBRztBQUNqQztBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsOERBQW1DO0FBQzNDOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUMxR29COztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQWtDO0FBQzlDLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFrQztBQUM5QyxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBa0M7QUFDOUMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQWtDO0FBQ2xELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQXdDOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQWtDO0FBQ2xELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQXdDOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQixhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7O0FBRVosQ0FBQzs7O0FBR0QsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUN6S3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsS0FBSyxHQUFHLEtBQUs7QUFDL0I7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ3BCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDYztBQUNLOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLGtEQUFHO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSx5REFBNkI7O0FBRWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDMUlXOztBQUVuQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0Isb0RBQVU7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7O0FBRVgsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RHcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjRDO0FBQ1g7QUFDQTtBQUNNO0FBQ007QUFDaEI7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCLGtEQUFNO0FBQy9CLDBCQUEwQiwwREFBYTtBQUN2QywwQkFBMEIseURBQVM7QUFDbkMsMEJBQTBCLDREQUFZO0FBQ3RDLHlCQUF5QixrREFBTTtBQUMvQjs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7O0FBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3N0eWxlcy9zdHlsZS5jc3M/YTJmNSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFpbndpbmRvdy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3Rtb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2ttb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFN0cnVjdHVyYWwgc3R5bGluZyAqL1xcbmJvZHl7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcblxcbn1cXG4vKiBIZWFkZXIgYW5kIEZvb3RlciAqL1xcbiNoZWFkZXIsICNmb290ZXJ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuI2Zvb3RlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuLyogVGFza3MgYW5kIFByb2plY3RzICovXFxuI2NvbnRlbnR7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIFNpZGViYXIgU3R1ZmYgKi9cXG4jc2lkZWJhcntcXG4gICAgd2lkdGg6IDMzLjMlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluLXNpZGViYXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyLXRhYntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XFxufVxcblxcbi5zaWRlYmFyLXRhYjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMTA1LCAxOCk7XFxufVxcblxcbiNwcm9qZWN0cy1oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4jcHJvamVjdC1saXN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIFxcbn1cXG5cXG4uZGVsZXRlLXByb2plY3R7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIE1haW4gKi9cXG4jaXRlbXN7XFxuICAgIHdpZHRoOiA2Ni43JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jdGFzay1zdWJoZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZC1idG4sIC50YXNre1xcbiAgICBcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuI2FkZC1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgXFxufVxcblxcbi5sZWZ0LWl0ZW1ze1xcblxcbn1cXG5cXG4ucmlnaHQtaXRlbXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweFxcbn1cXG5cXG4vKiBQb3AtdXAgbW9kYWxzICovXFxuLm1vZGFse1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICB6LWluZGV4OiAxO1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5tb2RhbC1jb250ZW50e1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsb3Nle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDE0cHg7XFxuICAgIGJvcmRlcjogMDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBmb250LXNpemU6IDUwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgXFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4ubW9kYWwtaGVhZGVye1xcbiAgICBmb250LXNpemU6IDQwcHg7ICBcXG59XFxuXFxuI2FkZC10YXNrLWZvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3Jte1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1pbnB1dHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm1vZGFsLWltZ3tcXG5cXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWxhYmVse1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgXFxufVxcbi5hZGQtaW5wdXR7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLnN1Ym1pdEJ0bntcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHhcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVOztJQUVWLHNCQUFzQjtBQUMxQjs7QUFFQSx1QkFBdUI7QUFDdkI7O0lBRUksYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCOztJQUV0Qiw0Q0FBNEM7O0FBRWhEO0FBQ0Esc0JBQXNCO0FBQ3RCO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZOzs7QUFHaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjs7SUFFM0IsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTs7SUFFUixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTs7SUFFZixxQkFBcUI7SUFDckIsU0FBUztJQUNULDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsU0FBUztJQUNULDJCQUEyQjtJQUMzQixlQUFlOztJQUVmLHFCQUFxQjtBQUN6Qjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxZQUFZO0lBQ1oscUJBQXFCOztJQUVyQixhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7SUFFbkIsZ0JBQWdCOztJQUVoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4Qjs7SUFFOUIsWUFBWTs7QUFFaEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQSxrQkFBa0I7QUFDbEI7O0lBRUksYUFBYTs7SUFFYixhQUFhOztJQUViLFVBQVU7O0lBRVYsa0JBQWtCOztJQUVsQixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7O0lBRVosaUNBQWlDOztJQUVqQyxtQkFBbUI7SUFDbkIsdUJBQXVCOzs7QUFHM0I7O0FBRUE7O0lBRUksdUJBQXVCOztJQUV2QixZQUFZO0lBQ1osYUFBYTs7SUFFYixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxTQUFTOztJQUVULGVBQWU7O0lBRWYsZUFBZTs7SUFFZix3QkFBd0I7O0lBRXhCLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTs7SUFFUixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTs7SUFFUixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7O0lBRVo7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFN0cnVjdHVyYWwgc3R5bGluZyAqL1xcbmJvZHl7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcblxcbn1cXG4vKiBIZWFkZXIgYW5kIEZvb3RlciAqL1xcbiNoZWFkZXIsICNmb290ZXJ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuI2Zvb3RlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuLyogVGFza3MgYW5kIFByb2plY3RzICovXFxuI2NvbnRlbnR7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIFNpZGViYXIgU3R1ZmYgKi9cXG4jc2lkZWJhcntcXG4gICAgd2lkdGg6IDMzLjMlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluLXNpZGViYXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyLXRhYntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XFxufVxcblxcbi5zaWRlYmFyLXRhYjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMTA1LCAxOCk7XFxufVxcblxcbiNwcm9qZWN0cy1oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4jcHJvamVjdC1saXN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIFxcbn1cXG5cXG4uZGVsZXRlLXByb2plY3R7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIE1haW4gKi9cXG4jaXRlbXN7XFxuICAgIHdpZHRoOiA2Ni43JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jdGFzay1zdWJoZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZC1idG4sIC50YXNre1xcbiAgICBcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuI2FkZC1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgXFxufVxcblxcbi5sZWZ0LWl0ZW1ze1xcblxcbn1cXG5cXG4ucmlnaHQtaXRlbXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweFxcbn1cXG5cXG4vKiBQb3AtdXAgbW9kYWxzICovXFxuLm1vZGFse1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICB6LWluZGV4OiAxO1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5tb2RhbC1jb250ZW50e1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNsb3Nle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDE0cHg7XFxuICAgIGJvcmRlcjogMDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBmb250LXNpemU6IDUwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgXFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4ubW9kYWwtaGVhZGVye1xcbiAgICBmb250LXNpemU6IDQwcHg7ICBcXG59XFxuXFxuI2FkZC10YXNrLWZvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3Jte1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1pbnB1dHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm1vZGFsLWltZ3tcXG5cXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWxhYmVse1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgXFxufVxcbi5hZGQtaW5wdXR7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLnN1Ym1pdEJ0bntcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHhcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiByZW5kZXJGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuaWQgPSBcImZvb3RlclwiO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IFxcdTAwQTkgT21hciBOaWF6aVwiO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRm9vdGVyKCk7XG4iLCJmdW5jdGlvbiByZW5kZXJIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiVG8gRG8gTGlzdFwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIFxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlcigpOyIsImltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcbmltcG9ydCB0YXNrQ29udGFpbmVyIGZyb20gXCIuL3Rhc2tjb250YWluZXIuanNcIjtcblxuXG5cbmZ1bmN0aW9uIHJlbmRlck1haW5EaXYoKSB7XG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmlkID0gXCJjb250ZW50XCI7XG4gICAgXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCggc2lkZWJhci5yZW5kZXJTaWRlYmFyKCkgKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKCB0YXNrQ29udGFpbmVyKCkgKTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWFpbkRpdjsiLCJpbXBvcnQgcHJvamVjdERpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcbmltcG9ydCBpbWcgZnJvbSBcIi4uL2ltYWdlcy9wcm9qZWN0X2ltZy5wbmdcIjtcblxuZnVuY3Rpb24gY2xvc2VCdXR0b24oKXtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbW9kYWxcIik7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIHJldHVybiBjbG9zZTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIG1vZGFsSW1nKCl7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkEgcGljdHVyZSBvZiBhIHRvLWRvIGxpc3RcIik7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaW1nJyk7XG5cbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cblxuZnVuY3Rpb24gaW5wdXRGb3JtKCl7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdQcm9qZWN0LmlkID0gJ2FkZC1wcm9qZWN0LWZvcm0nO1xuXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBwcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtaW5wdXQnKTtcblxuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XG4gICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoXCJhZGQtbGFiZWxcIik7XG5cbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VibWl0RGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgUHJvamVjdCcpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0QnRuXCIpO1xuXG4gICAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoc3VibWl0RGl2KTtcblxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0RGlzcGxheUNvbnRyb2xsZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0LmVsZW1lbnRzWzBdLnZhbHVlKTtcbiAgICAgICAgbmV3UHJvamVjdC5yZXNldCgpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW1vZGFsXCIpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3UHJvamVjdDtcblxufVxuXG5mdW5jdGlvbiBtb2RhbENvbnRlbnQoKXtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmlkID0gXCJwcm9qZWN0LW1vZGFsLWNvbnRlbnRcIjtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKCBjbG9zZUJ1dHRvbigpICk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoIGhlYWRlcigpICk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoIG1vZGFsSW1nKCkgKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCggaW5wdXRGb3JtKCkgKTtcblxuICAgIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE1vZGFsKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmlkID0gXCJwcm9qZWN0LW1vZGFsXCI7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCggbW9kYWxDb250ZW50KCkgKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNb2RhbDsiLCJpbXBvcnQgdGFza0Rpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbmNvbnN0IHNpZGViYXIgPSAoICgpID0+IHtcbiAgICBcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IHJlbmRlclNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcbiAgICAgICAgXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoIG1haW5TaWRlYmFycygpICk7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoIHByb2plY3RIZWFkZXIoKSApO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKCBwcm9qZWN0TGlzdCgpICk7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoIGFkZFByb2plY3RCdG4oKSApO1xuXG4gICAgICAgIHJldHVybiBzaWRlYmFyO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdExpc3QuaWQgPSBcInByb2plY3QtbGlzdFwiO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBtYWluU2lkZWJhcnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0aW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpbWVEaXYuaWQgPSBcIm1haW4tc2lkZWJhcnNcIjtcblxuICAgICAgICBsZXQgYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFsbC50ZXh0Q29udGVudCA9IFwiQWxsXCI7XG4gICAgICAgIGFsbC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci10YWJcIik7XG4gICAgICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5VGFza3MoYWxsLnRleHRDb250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRvZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgICAgICB0b2RheS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci10YWJcIik7XG4gICAgICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0Rpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlUYXNrcyh0b2RheS50ZXh0Q29udGVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0aGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzV2Vlay50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCI7XG4gICAgICAgIHRoaXNXZWVrLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXRhYlwiKTtcbiAgICAgICAgdGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrRGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVRhc2tzKHRoaXNXZWVrLnRleHRDb250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGltZURpdi5hcHBlbmRDaGlsZChhbGwpO1xuICAgICAgICB0aW1lRGl2LmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgICAgICAgdGltZURpdi5hcHBlbmRDaGlsZCh0aGlzV2Vlayk7XG5cbiAgICAgICAgcmV0dXJuIHRpbWVEaXY7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgICAgIGhlYWRlci5pZCA9IFwicHJvamVjdHMtaGVhZGVyXCI7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuICAgICAgICBhZGRCdG4uaWQgPSBcImFkZC1wcm9qZWN0LWJ0blwiO1xuXG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1tb2RhbFwiKTtcbiAgICAgICAgICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhZGRCdG47XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lKSA9PiB7XG5cbiAgICAgICAgaWYoIXByb2plY3RzLmluY2x1ZGVzKG5hbWUpIHx8IGlzTmFOKG5hbWUpKXtcblxuICAgICAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG5cbiAgICAgICAgICAgIGxldCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qQ29udGFpbmVyLmlkID0gbmFtZTtcbiAgICBcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXItdGFiXCIpO1xuICAgIFxuICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlUYXNrcyhuZXdQcm9qZWN0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1JlbW92ZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlDb250cm9sbGVyLmRlbGV0ZVByb2plY3RUYXNrcyhuYW1lKTtcblxuICAgICAgICAgICAgICAgIGxldCBpZHggPSBwcm9qZWN0cy5pbmRleE9mKG5hbWUpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoIChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggIT09IGlkeDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2pDb250YWluZXIpO1xuXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKG5hbWUpO1xuICAgIFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcblxuICAgICAgICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKXtcblxuICAgICAgICAgICAgbGV0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2pDb250YWluZXIuaWQgPSBwcm9qZWN0O1xuICAgIFxuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci10YWJcIik7XG4gICAgXG4gICAgICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrRGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVRhc2tzKG5ld1Byb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFRvUmVtb3ZlID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB0YXNrRGlzcGxheUNvbnRyb2xsZXIuZGVsZXRlUHJvamVjdFRhc2tzKHByb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGlkeCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlciggKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAhPT0gaWR4O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2pDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZW5kZXJTaWRlYmFyLCBhZGRQcm9qZWN0fTtcblxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyOyIsImZ1bmN0aW9uIHRhc2sobmFtZSwgZGF0ZSwgcHJvamVjdD1cIkFsbFwiKXtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBhc1N0cmluZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke25hbWV9LSR7ZGF0ZX1gO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge2dldE5hbWUsIGdldERhdGUsIGdldFByb2plY3QsIGFzU3RyaW5nfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFzazsiLCJmdW5jdGlvbiBzdWJIZWFkZXIoKXtcbiAgICBsZXQgc3ViSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdWJIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gICAgc3ViSGVhZGVyLmlkID0gXCJ0YXNrLXN1YmhlYWRlclwiO1xuICAgIFxuXG4gICAgcmV0dXJuIHN1YkhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYWRkVGFza0J1dHRvbigpe1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVGFza1wiO1xuICAgIGJ0bi5pZCA9IFwiYWRkLWJ0blwiO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9ICk7XG5cbiAgICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiB0YXNrTGlzdCgpe1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0xpc3QuaWQgPSBcInRhc2stbGlzdFwiO1xuXG4gICAgcmV0dXJuIHRhc2tMaXN0O1xuXG59XG5mdW5jdGlvbiB0YXNrQ29udGFpbmVyKCl7XG4gICAgbGV0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGl2LmlkID0gXCJpdGVtc1wiO1xuXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZCggc3ViSGVhZGVyKCkgKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKCB0YXNrTGlzdCgpICk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZCggYWRkVGFza0J1dHRvbigpICk7XG5cbiAgICByZXR1cm4gaXRlbURpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFza0NvbnRhaW5lcjsiLCJpbXBvcnQgaW1nIGZyb20gXCIuLi9pbWFnZXMvbW9kYWxfaW1nLnBuZ1wiO1xuaW1wb3J0IHRhc2tEaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL3Rhc2tzLmpzJztcblxuZnVuY3Rpb24gY2xvc2VCdXR0b24oKXtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWxcIik7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIHJldHVybiBjbG9zZTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIG1vZGFsSW1nKCl7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkEgcGljdHVyZSBvZiBhIHRvLWRvIGxpc3RcIik7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaW1nJyk7XG5cbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGlucHV0Rm9ybSgpe1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkVGFzay5pZCA9ICdhZGQtdGFzay1mb3JtJztcblxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgdGFza0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkLWlucHV0Jyk7XG5cbiAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAgIHRhc2tMYWJlbC5jbGFzc0xpc3QuYWRkKFwiYWRkLWxhYmVsXCIpO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtaW5wdXQnKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG4gICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJhZGQtbGFiZWxcIik7XG5cbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG5cbiAgICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXREaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCBUYXNrJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRCdG5cIik7XG5cbiAgICBzdWJtaXREaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgICBhZGRUYXNrLmFwcGVuZENoaWxkKHN1Ym1pdERpdik7XG5cbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlVGFzayhhZGRUYXNrKTtcbiAgICAgICAgYWRkVGFzay5yZXNldCgpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsXCIpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkVGFzaztcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGZvcm0pe1xuICAgIGNvbnN0IHF1ZXJpZXMgPSBmb3JtLmVsZW1lbnRzO1xuXG4gICAgY29uc3QgbmFtZSA9IHF1ZXJpZXNbMF0udmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IHF1ZXJpZXNbMV0udmFsdWU7XG5cbiAgICB0YXNrRGlzcGxheUNvbnRyb2xsZXIuYWRkVGFzayhuYW1lLCBkYXRlKTtcblxufVxuXG5mdW5jdGlvbiBtb2RhbENvbnRlbnQoKXtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmlkID0gXCJ0YXNrLW1vZGFsLWNvbnRlbnRcIjtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKCBjbG9zZUJ1dHRvbigpICk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoIGhlYWRlcigpICk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoIG1vZGFsSW1nKCkgKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCggaW5wdXRGb3JtKCkgKTtcblxuICAgIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gdGFza01vZGFsKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBjb250YWluZXIuaWQgPSBcInRhc2stbW9kYWxcIjtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKCBtb2RhbENvbnRlbnQoKSApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrTW9kYWw7IiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi90YXNrLmpzJztcblxuY29uc3QgdGFza3MgPSAoICgpID0+IHtcblxuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xuXG4gICAgbGV0IGN1cnJQcm9qZWN0ID0gXCJBbGxcIjtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAobmFtZSwgZGF0ZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5hbWUsIGRhdGUsIGN1cnJQcm9qZWN0KTtcbiAgICAgICAgYWxsVGFza3MucHVzaChuZXdUYXNrKTtcblxuICAgICAgICBjcmVhdGVUYXNrRGl2KG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFzaykgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5nZXROYW1lKCk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREYXRlKCk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWR4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuXG4gICAgICAgICAgICBsZXQgdGFza1RvUmVtID0gYWxsVGFza3NbaWR4XTtcblxuICAgICAgICAgICAgYWxsVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoICh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAhPSBpZHg7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKGN1cnJQcm9qZWN0LCB0cnVlKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByaWdodEl0ZW1zLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgcmlnaHRJdGVtcy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICByaWdodEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWl0ZW1zJyk7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocmlnaHRJdGVtcyk7XG5cbiAgICAgICAgdGFza0Rpdi5pZCA9IGFsbFRhc2tzLm1hcCggKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmFzU3RyaW5nKCk7XG4gICAgICAgIH0pLmluZGV4T2YodGFzay5hc1N0cmluZygpKTtcblxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoIHRhc2tEaXYgKTtcblxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUYXNrcyA9IChwcm9qZWN0LCBieXBhc3M9ZmFsc2UpID0+IHtcblxuICAgICAgICBpZihwcm9qZWN0ICE9PSBjdXJyUHJvamVjdCB8fCBieXBhc3Mpe1xuXG4gICAgICAgICAgICBjdXJyUHJvamVjdCA9IHByb2plY3Q7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG4gICAgICAgICAgICB0YXNrcy50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGlmKHByb2plY3QgPT09IFwiQWxsXCIpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgdGFzayBvZiBhbGxUYXNrcyl7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoIChpbmRUYXNrKSA9PiAoaW5kVGFzay5nZXRQcm9qZWN0KCkgPT09IHByb2plY3QpKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHRhc2sgb2YgZmlsdGVyZWRUYXNrcyl7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdFRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgYWxsVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoICh0YXNrKSA9PiB0YXNrLmdldFByb2plY3QoKSAhPT0gcHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBpZihjdXJyUHJvamVjdCA9PT0gcHJvamVjdCl7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoXCJBbGxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKGN1cnJQcm9qZWN0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybnthZGRUYXNrLCBkaXNwbGF5VGFza3MsIGRlbGV0ZVByb2plY3RUYXNrc307XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHJlbmRlck1haW5EaXYgZnJvbSBcIi4vbWFpbndpbmRvdy5qc1wiO1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyLmpzXCI7XG5pbXBvcnQgdGFza01vZGFsIGZyb20gXCIuL3Rhc2ttb2RhbC5qc1wiO1xuaW1wb3J0IHByb2plY3RNb2RhbCBmcm9tIFwiLi9wcm9qZWN0bW9kYWwuanNcIjtcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCAoKSA9PiB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKCByZW5kZXJNYWluRGl2KCkgKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCggdGFza01vZGFsKCkgKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCggcHJvamVjdE1vZGFsKCkgKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyUGFnZX07XG59KSgpOyBcblxuXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=