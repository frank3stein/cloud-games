webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FilteredGames.tsx":
/*!**************************************!*\
  !*** ./components/FilteredGames.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ \"./components/SearchBar.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/home/emil/development/cloud-games/components/FilteredGames.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar FilteredGames = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var children = _ref.children,\n      games = _ref.games;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(games),\n      filtered = _useState2[0],\n      setFiltered = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    games.filter(function (game) {\n      return game.title.includes(search);\n    });\n  }, [search]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    setSearch: setSearch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(Games, {\n    games: filtered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }));\n}, \"uBhknqv2cDBDpmxs/GNSt0RwFIw=\"));\n_c2 = FilteredGames;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredGames);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FilteredGames$React.memo\");\n$RefreshReg$(_c2, \"FilteredGames\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJlZEdhbWVzLnRzeD9jOGI0Il0sIm5hbWVzIjpbIkZpbHRlcmVkR2FtZXMiLCJSZWFjdCIsIm1lbW8iLCJjaGlsZHJlbiIsImdhbWVzIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXJlZCIsInNldEZpbHRlcmVkIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZ2FtZSIsInRpdGxlIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFNQSxhQUFhLEdBQUdDLDRDQUFLLENBQUNDLElBQU4sU0FBVyxnQkFBMEU7QUFBQTs7QUFBQSxNQUF4RUMsUUFBd0UsUUFBeEVBLFFBQXdFO0FBQUEsTUFBOURDLEtBQThELFFBQTlEQSxLQUE4RDs7QUFBQSxrQkFDM0VDLHNEQUFRLENBQUMsRUFBRCxDQURtRTtBQUFBLE1BQ2hHQyxNQURnRztBQUFBLE1BQ3hGQyxTQUR3Rjs7QUFBQSxtQkFFdkVGLHNEQUFRLENBQUNELEtBQUQsQ0FGK0Q7QUFBQSxNQUVoR0ksUUFGZ0c7QUFBQSxNQUV0RkMsV0FGc0Y7O0FBR3ZHQyx5REFBUyxDQUFDLFlBQUk7QUFDVk4sU0FBSyxDQUFDTyxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUdBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CUixNQUFwQixDQUFIO0FBQUEsS0FBakI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsTUFBRCxDQUZNLENBQVQ7QUFHQSxTQUNJLG1FQUVBLE1BQUMsa0RBQUQ7QUFBVyxhQUFTLEVBQUVDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQUdBLE1BQUMsS0FBRDtBQUFPLFNBQUssRUFBRUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEEsQ0FESjtBQU9ILENBYnFCLGtDQUF0QjtNQUFNUixhO0FBZVNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaWx0ZXJlZEdhbWVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgUmVhY3RDaGlsZHJlbiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnXG5cbmNvbnN0IEZpbHRlcmVkR2FtZXMgPSBSZWFjdC5tZW1vKCh7Y2hpbGRyZW4sIGdhbWVzfSA6IHtjaGlsZHJlbjogUmVhY3RDaGlsZHJlbjsgZ2FtZXM6IEdhbWVSZXNwb25zZVtdfSkgPT4ge1xuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZmlsdGVyZWQsIHNldEZpbHRlcmVkXSA9IHVzZVN0YXRlKGdhbWVzKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBnYW1lcy5maWx0ZXIoZ2FtZT0+IGdhbWUudGl0bGUuaW5jbHVkZXMoc2VhcmNoKSlcbiAgICB9LCBbc2VhcmNoXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuXG4gICAgICAgIDxTZWFyY2hCYXIgc2V0U2VhcmNoPXtzZXRTZWFyY2h9Lz5cbiAgICAgICAgPEdhbWVzIGdhbWVzPXtmaWx0ZXJlZH0vPlxuICAgICAgICA8Lz5cbiAgICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEdhbWVzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FilteredGames.tsx\n");

/***/ }),

/***/ "./components/Game.tsx":
false,

/***/ "./components/StoreSvg.tsx":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false

})