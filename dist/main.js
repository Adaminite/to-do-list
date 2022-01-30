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
                _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProjectTasks(elementToRemove.id);

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
                _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProjectTasks(elementToRemove.id);

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
            currProject = "All";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSx5REFBNkI7O0FBRWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDMUlXOztBQUVuQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0Isb0RBQVU7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWCxDQUFDOztBQUVELGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkdwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDWDtBQUNBO0FBQ007QUFDTTtBQUNoQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQSx5QkFBeUIsa0RBQU07QUFDL0IsMEJBQTBCLDBEQUFhO0FBQ3ZDLDBCQUEwQix5REFBUztBQUNuQywwQkFBMEIsNERBQVk7QUFDdEMseUJBQXlCLGtEQUFNO0FBQy9COztBQUVBLFlBQVk7QUFDWixDQUFDOzs7QUFHRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3R5bGVzL3N0eWxlLmNzcz9hMmY1Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tYWlud2luZG93LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdG1vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza21vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogU3RydWN0dXJhbCBzdHlsaW5nICovXFxuYm9keXtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuXFxufVxcbi8qIEhlYWRlciBhbmQgRm9vdGVyICovXFxuI2hlYWRlciwgI2Zvb3RlcntcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4jZm9vdGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4vKiBUYXNrcyBhbmQgUHJvamVjdHMgKi9cXG4jY29udGVudHtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogU2lkZWJhciBTdHVmZiAqL1xcbiNzaWRlYmFye1xcbiAgICB3aWR0aDogMzMuMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21haW4tc2lkZWJhcnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXItdGFie1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXG59XFxuXFxuLnNpZGViYXItdGFiOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAxMDUsIDE4KTtcXG59XFxuXFxuI3Byb2plY3RzLWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgXFxufVxcblxcbi5kZWxldGUtcHJvamVjdHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogTWFpbiAqL1xcbiNpdGVtc3tcXG4gICAgd2lkdGg6IDY2LjclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiN0YXNrLXN1YmhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLWJ0biwgLnRhc2t7XFxuICAgIFxcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4jYWRkLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBcXG59XFxuXFxuLmxlZnQtaXRlbXN7XFxuXFxufVxcblxcbi5yaWdodC1pdGVtc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4XFxufVxcblxcbi8qIFBvcC11cCBtb2RhbHMgKi9cXG4ubW9kYWx7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnR7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2V7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMTRweDtcXG4gICAgYm9yZGVyOiAwO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG5cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyBcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5tb2RhbC1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDsgIFxcbn1cXG5cXG4jYWRkLXRhc2stZm9ybXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm17XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb3JtLWlucHV0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ubW9kYWwtaW1ne1xcblxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5hZGQtbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBcXG59XFxuLmFkZC1pbnB1dHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4uc3VibWl0QnRue1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweFxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7O0lBRVYsc0JBQXNCO0FBQzFCOztBQUVBLHVCQUF1QjtBQUN2Qjs7SUFFSSxhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLDRDQUE0Qzs7QUFFaEQ7QUFDQSxzQkFBc0I7QUFDdEI7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7OztBQUdoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxZQUFZO0lBQ1osMkJBQTJCOztJQUUzQixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFROztJQUVSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlOztJQUVmLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGVBQWU7O0lBRWYscUJBQXFCO0FBQ3pCOztBQUVBLFNBQVM7QUFDVDtJQUNJLFlBQVk7SUFDWixxQkFBcUI7O0lBRXJCLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixnQkFBZ0I7O0lBRWhCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsOEJBQThCOztJQUU5QixZQUFZOztBQUVoQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBLGtCQUFrQjtBQUNsQjs7SUFFSSxhQUFhOztJQUViLGFBQWE7O0lBRWIsVUFBVTs7SUFFVixrQkFBa0I7O0lBRWxCLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTs7SUFFWixpQ0FBaUM7O0lBRWpDLG1CQUFtQjtJQUNuQix1QkFBdUI7OztBQUczQjs7QUFFQTs7SUFFSSx1QkFBdUI7O0lBRXZCLFlBQVk7SUFDWixhQUFhOztJQUViLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFNBQVM7O0lBRVQsZUFBZTs7SUFFZixlQUFlOztJQUVmLHdCQUF3Qjs7SUFFeEIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFROztJQUVSLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFROztJQUVSLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTs7SUFFWjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogU3RydWN0dXJhbCBzdHlsaW5nICovXFxuYm9keXtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuXFxufVxcbi8qIEhlYWRlciBhbmQgRm9vdGVyICovXFxuI2hlYWRlciwgI2Zvb3RlcntcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4jZm9vdGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4vKiBUYXNrcyBhbmQgUHJvamVjdHMgKi9cXG4jY29udGVudHtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogU2lkZWJhciBTdHVmZiAqL1xcbiNzaWRlYmFye1xcbiAgICB3aWR0aDogMzMuMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21haW4tc2lkZWJhcnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXItdGFie1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXG59XFxuXFxuLnNpZGViYXItdGFiOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAxMDUsIDE4KTtcXG59XFxuXFxuI3Byb2plY3RzLWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgXFxufVxcblxcbi5kZWxldGUtcHJvamVjdHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogTWFpbiAqL1xcbiNpdGVtc3tcXG4gICAgd2lkdGg6IDY2LjclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiN0YXNrLXN1YmhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLWJ0biwgLnRhc2t7XFxuICAgIFxcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4jYWRkLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBcXG59XFxuXFxuLmxlZnQtaXRlbXN7XFxuXFxufVxcblxcbi5yaWdodC1pdGVtc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4XFxufVxcblxcbi8qIFBvcC11cCBtb2RhbHMgKi9cXG4ubW9kYWx7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnR7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2V7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMTRweDtcXG4gICAgYm9yZGVyOiAwO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG5cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyBcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5tb2RhbC1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDsgIFxcbn1cXG5cXG4jYWRkLXRhc2stZm9ybXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm17XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb3JtLWlucHV0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ubW9kYWwtaW1ne1xcblxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5hZGQtbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBcXG59XFxuLmFkZC1pbnB1dHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4uc3VibWl0QnRue1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweFxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHJlbmRlckZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5pZCA9IFwiZm9vdGVyXCI7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgXFx1MDBBOSBPbWFyIE5pYXppXCI7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJGb290ZXIoKTtcbiIsImZ1bmN0aW9uIHJlbmRlckhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJUbyBEbyBMaXN0XCI7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySGVhZGVyKCk7IiwiaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuaW1wb3J0IHRhc2tDb250YWluZXIgZnJvbSBcIi4vdGFza2NvbnRhaW5lci5qc1wiO1xuXG5cblxuZnVuY3Rpb24gcmVuZGVyTWFpbkRpdigpIHtcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXYuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKCBzaWRlYmFyLnJlbmRlclNpZGViYXIoKSApO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoIHRhc2tDb250YWluZXIoKSApO1xuICAgIFxuICAgIFxuICAgIHJldHVybiBtYWluRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNYWluRGl2OyIsImltcG9ydCBwcm9qZWN0RGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuaW1wb3J0IGltZyBmcm9tIFwiLi4vaW1hZ2VzL3Byb2plY3RfaW1nLnBuZ1wiO1xuXG5mdW5jdGlvbiBjbG9zZUJ1dHRvbigpe1xuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2UudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1tb2RhbFwiKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNsb3NlO1xufVxuXG5mdW5jdGlvbiBoZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcblxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gbW9kYWxJbWcoKXtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiQSBwaWN0dXJlIG9mIGEgdG8tZG8gbGlzdFwiKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1pbWcnKTtcblxuICAgIHJldHVybiBpbWFnZTtcbn1cblxuXG5mdW5jdGlvbiBpbnB1dEZvcm0oKXtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld1Byb2plY3QuaWQgPSAnYWRkLXByb2plY3QtZm9ybSc7XG5cbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgIHByb2plY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZC1pbnB1dCcpO1xuXG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIjtcbiAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZChcImFkZC1sYWJlbFwiKTtcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXREaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCBQcm9qZWN0Jyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRCdG5cIik7XG5cbiAgICBzdWJtaXREaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChzdWJtaXREaXYpO1xuXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3REaXNwbGF5Q29udHJvbGxlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QuZWxlbWVudHNbMF0udmFsdWUpO1xuICAgICAgICBuZXdQcm9qZWN0LnJlc2V0KCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbW9kYWxcIik7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xuXG59XG5cbmZ1bmN0aW9uIG1vZGFsQ29udGVudCgpe1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuaWQgPSBcInByb2plY3QtbW9kYWwtY29udGVudFwiO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoIGNsb3NlQnV0dG9uKCkgKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCggaGVhZGVyKCkgKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCggbW9kYWxJbWcoKSApO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKCBpbnB1dEZvcm0oKSApO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TW9kYWwoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQgPSBcInByb2plY3QtbW9kYWxcIjtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKCBtb2RhbENvbnRlbnQoKSApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1vZGFsOyIsImltcG9ydCB0YXNrRGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vdGFza3MuanNcIjtcblxuY29uc3Qgc2lkZWJhciA9ICggKCkgPT4ge1xuICAgIFxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgcmVuZGVyU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuICAgICAgICBcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZCggbWFpblNpZGViYXJzKCkgKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZCggcHJvamVjdEhlYWRlcigpICk7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoIHByb2plY3RMaXN0KCkgKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZCggYWRkUHJvamVjdEJ0bigpICk7XG5cbiAgICAgICAgcmV0dXJuIHNpZGViYXI7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0TGlzdC5pZCA9IFwicHJvamVjdC1saXN0XCI7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IG1haW5TaWRlYmFycyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGltZURpdi5pZCA9IFwibWFpbi1zaWRlYmFyc1wiO1xuXG4gICAgICAgIGxldCBhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWxsLnRleHRDb250ZW50ID0gXCJBbGxcIjtcbiAgICAgICAgYWxsLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXRhYlwiKTtcbiAgICAgICAgYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0Rpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlUYXNrcyhhbGwudGV4dENvbnRlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXRhYlwiKTtcbiAgICAgICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrRGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVRhc2tzKHRvZGF5LnRleHRDb250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXNXZWVrLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcbiAgICAgICAgdGhpc1dlZWsuY2xhc3NMaXN0LmFkZChcInNpZGViYXItdGFiXCIpO1xuICAgICAgICB0aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5VGFza3ModGhpc1dlZWsudGV4dENvbnRlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aW1lRGl2LmFwcGVuZENoaWxkKGFsbCk7XG4gICAgICAgIHRpbWVEaXYuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICAgICAgICB0aW1lRGl2LmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcblxuICAgICAgICByZXR1cm4gdGltZURpdjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICAgICAgaGVhZGVyLmlkID0gXCJwcm9qZWN0cy1oZWFkZXJcIjtcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG4gICAgICAgIGFkZEJ0bi5pZCA9IFwiYWRkLXByb2plY3QtYnRuXCI7XG5cbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW1vZGFsXCIpO1xuICAgICAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFkZEJ0bjtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5hbWUpID0+IHtcblxuICAgICAgICBpZighcHJvamVjdHMuaW5jbHVkZXMobmFtZSkgfHwgaXNOYU4obmFtZSkpe1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcblxuICAgICAgICAgICAgbGV0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2pDb250YWluZXIuaWQgPSBuYW1lO1xuICAgIFxuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci10YWJcIik7XG4gICAgXG4gICAgICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrRGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVRhc2tzKG5ld1Byb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFRvUmVtb3ZlID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB0YXNrRGlzcGxheUNvbnRyb2xsZXIuZGVsZXRlUHJvamVjdFRhc2tzKGVsZW1lbnRUb1JlbW92ZS5pZCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gcHJvamVjdHMuaW5kZXhPZihuYW1lKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKCAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ICE9PSBpZHg7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgcHJvamVjdHMucHVzaChuYW1lKTtcbiAgICBcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG5cbiAgICAgICAgcHJvamVjdExpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIGZvcihsZXQgcHJvamVjdCBvZiBwcm9qZWN0cyl7XG5cbiAgICAgICAgICAgIGxldCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qQ29udGFpbmVyLmlkID0gcHJvamVjdDtcbiAgICBcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXItdGFiXCIpO1xuICAgIFxuICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlUYXNrcyhuZXdQcm9qZWN0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1JlbW92ZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlDb250cm9sbGVyLmRlbGV0ZVByb2plY3RUYXNrcyhlbGVtZW50VG9SZW1vdmUuaWQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGlkeCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlciggKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAhPT0gaWR4O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2pDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZW5kZXJTaWRlYmFyLCBhZGRQcm9qZWN0fTtcblxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyOyIsImZ1bmN0aW9uIHRhc2sobmFtZSwgZGF0ZSwgcHJvamVjdD1cIkFsbFwiKXtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBhc1N0cmluZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke25hbWV9LSR7ZGF0ZX1gO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge2dldE5hbWUsIGdldERhdGUsIGdldFByb2plY3QsIGFzU3RyaW5nfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFzazsiLCJmdW5jdGlvbiBzdWJIZWFkZXIoKXtcbiAgICBsZXQgc3ViSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdWJIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gICAgc3ViSGVhZGVyLmlkID0gXCJ0YXNrLXN1YmhlYWRlclwiO1xuICAgIFxuXG4gICAgcmV0dXJuIHN1YkhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYWRkVGFza0J1dHRvbigpe1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVGFza1wiO1xuICAgIGJ0bi5pZCA9IFwiYWRkLWJ0blwiO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9ICk7XG5cbiAgICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiB0YXNrTGlzdCgpe1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0xpc3QuaWQgPSBcInRhc2stbGlzdFwiO1xuXG4gICAgcmV0dXJuIHRhc2tMaXN0O1xuXG59XG5mdW5jdGlvbiB0YXNrQ29udGFpbmVyKCl7XG4gICAgbGV0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGl2LmlkID0gXCJpdGVtc1wiO1xuXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZCggc3ViSGVhZGVyKCkgKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKCB0YXNrTGlzdCgpICk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZCggYWRkVGFza0J1dHRvbigpICk7XG5cbiAgICByZXR1cm4gaXRlbURpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFza0NvbnRhaW5lcjsiLCJpbXBvcnQgaW1nIGZyb20gXCIuLi9pbWFnZXMvbW9kYWxfaW1nLnBuZ1wiO1xuaW1wb3J0IHRhc2tEaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL3Rhc2tzLmpzJztcblxuZnVuY3Rpb24gY2xvc2VCdXR0b24oKXtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWxcIik7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIHJldHVybiBjbG9zZTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIG1vZGFsSW1nKCl7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkEgcGljdHVyZSBvZiBhIHRvLWRvIGxpc3RcIik7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaW1nJyk7XG5cbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGlucHV0Rm9ybSgpe1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkVGFzay5pZCA9ICdhZGQtdGFzay1mb3JtJztcblxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcblxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgdGFza0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkLWlucHV0Jyk7XG5cbiAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAgIHRhc2tMYWJlbC5jbGFzc0xpc3QuYWRkKFwiYWRkLWxhYmVsXCIpO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcblxuXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtaW5wdXQnKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG4gICAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJhZGQtbGFiZWxcIik7XG5cbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG5cbiAgICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXREaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCBUYXNrJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRCdG5cIik7XG5cbiAgICBzdWJtaXREaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgICBhZGRUYXNrLmFwcGVuZENoaWxkKHN1Ym1pdERpdik7XG5cbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlVGFzayhhZGRUYXNrKTtcbiAgICAgICAgYWRkVGFzay5yZXNldCgpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsXCIpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkVGFzaztcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGZvcm0pe1xuICAgIGNvbnN0IHF1ZXJpZXMgPSBmb3JtLmVsZW1lbnRzO1xuXG4gICAgY29uc3QgbmFtZSA9IHF1ZXJpZXNbMF0udmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IHF1ZXJpZXNbMV0udmFsdWU7XG5cbiAgICB0YXNrRGlzcGxheUNvbnRyb2xsZXIuYWRkVGFzayhuYW1lLCBkYXRlKTtcblxufVxuXG5mdW5jdGlvbiBtb2RhbENvbnRlbnQoKXtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmlkID0gXCJ0YXNrLW1vZGFsLWNvbnRlbnRcIjtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKCBjbG9zZUJ1dHRvbigpICk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoIGhlYWRlcigpICk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoIG1vZGFsSW1nKCkgKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCggaW5wdXRGb3JtKCkgKTtcblxuICAgIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gdGFza01vZGFsKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBjb250YWluZXIuaWQgPSBcInRhc2stbW9kYWxcIjtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKCBtb2RhbENvbnRlbnQoKSApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrTW9kYWw7IiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi90YXNrLmpzJztcblxuY29uc3QgdGFza3MgPSAoICgpID0+IHtcblxuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xuXG4gICAgbGV0IGN1cnJQcm9qZWN0ID0gXCJBbGxcIjtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAobmFtZSwgZGF0ZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5hbWUsIGRhdGUsIGN1cnJQcm9qZWN0KTtcbiAgICAgICAgYWxsVGFza3MucHVzaChuZXdUYXNrKTtcblxuICAgICAgICBjcmVhdGVUYXNrRGl2KG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFzaykgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5nZXROYW1lKCk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREYXRlKCk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWR4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuXG4gICAgICAgICAgICBsZXQgdGFza1RvUmVtID0gYWxsVGFza3NbaWR4XTtcblxuICAgICAgICAgICAgYWxsVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoICh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAhPSBpZHg7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKGN1cnJQcm9qZWN0LCB0cnVlKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByaWdodEl0ZW1zLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgcmlnaHRJdGVtcy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICByaWdodEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWl0ZW1zJyk7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocmlnaHRJdGVtcyk7XG5cbiAgICAgICAgdGFza0Rpdi5pZCA9IGFsbFRhc2tzLm1hcCggKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmFzU3RyaW5nKCk7XG4gICAgICAgIH0pLmluZGV4T2YodGFzay5hc1N0cmluZygpKTtcblxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoIHRhc2tEaXYgKTtcblxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUYXNrcyA9IChwcm9qZWN0LCBieXBhc3M9ZmFsc2UpID0+IHtcblxuICAgICAgICBpZihwcm9qZWN0ICE9PSBjdXJyUHJvamVjdCB8fCBieXBhc3Mpe1xuXG4gICAgICAgICAgICBjdXJyUHJvamVjdCA9IHByb2plY3Q7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG4gICAgICAgICAgICB0YXNrcy50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGlmKHByb2plY3QgPT09IFwiQWxsXCIpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgdGFzayBvZiBhbGxUYXNrcyl7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoIChpbmRUYXNrKSA9PiAoaW5kVGFzay5nZXRQcm9qZWN0KCkgPT09IHByb2plY3QpKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHRhc2sgb2YgZmlsdGVyZWRUYXNrcyl7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tEaXYodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdFRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgYWxsVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoICh0YXNrKSA9PiB0YXNrLmdldFByb2plY3QoKSAhPT0gcHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBpZihjdXJyUHJvamVjdCA9PT0gcHJvamVjdCl7XG4gICAgICAgICAgICBjdXJyUHJvamVjdCA9IFwiQWxsXCI7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoXCJBbGxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKGN1cnJQcm9qZWN0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybnthZGRUYXNrLCBkaXNwbGF5VGFza3MsIGRlbGV0ZVByb2plY3RUYXNrc307XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHJlbmRlck1haW5EaXYgZnJvbSBcIi4vbWFpbndpbmRvdy5qc1wiO1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyLmpzXCI7XG5pbXBvcnQgdGFza01vZGFsIGZyb20gXCIuL3Rhc2ttb2RhbC5qc1wiO1xuaW1wb3J0IHByb2plY3RNb2RhbCBmcm9tIFwiLi9wcm9qZWN0bW9kYWwuanNcIjtcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCAoKSA9PiB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKCByZW5kZXJNYWluRGl2KCkgKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCggdGFza01vZGFsKCkgKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCggcHJvamVjdE1vZGFsKCkgKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyUGFnZX07XG59KSgpOyBcblxuXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=