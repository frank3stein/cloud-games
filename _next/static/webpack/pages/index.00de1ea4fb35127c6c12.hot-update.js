webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FilteredGames.tsx":
/*!**************************************!*\
  !*** ./components/FilteredGames.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var _Games__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Games */ \"./components/Games.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/home/emil/development/cloud-games/components/FilteredGames.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar FilteredGames = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var games = _ref.games;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(games),\n      filtered = _useState2[0],\n      setFiltered = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setFiltered(games.filter(function (game) {\n      return game.title.includes(search);\n    }));\n  }, [search]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    setSearch: setSearch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(_Games__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    games: filtered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }));\n}, \"uBhknqv2cDBDpmxs/GNSt0RwFIw=\"));\n_c2 = FilteredGames;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredGames);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FilteredGames$React.memo\");\n$RefreshReg$(_c2, \"FilteredGames\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJlZEdhbWVzLnRzeD9jOGI0Il0sIm5hbWVzIjpbIkZpbHRlcmVkR2FtZXMiLCJSZWFjdCIsIm1lbW8iLCJnYW1lcyIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiZmlsdGVyZWQiLCJzZXRGaWx0ZXJlZCIsInVzZUVmZmVjdCIsImZpbHRlciIsImdhbWUiLCJ0aXRsZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLFNBQVcsZ0JBQWlFO0FBQUE7O0FBQUEsTUFBOURDLEtBQThELFFBQTlEQSxLQUE4RDs7QUFBQSxrQkFDbEVDLHNEQUFRLENBQUMsRUFBRCxDQUQwRDtBQUFBLE1BQ3ZGQyxNQUR1RjtBQUFBLE1BQy9FQyxTQUQrRTs7QUFBQSxtQkFFOURGLHNEQUFRLENBQUNELEtBQUQsQ0FGc0Q7QUFBQSxNQUV2RkksUUFGdUY7QUFBQSxNQUU3RUMsV0FGNkU7O0FBRzlGQyx5REFBUyxDQUFDLFlBQUk7QUFDVkQsZUFBVyxDQUFDTCxLQUFLLENBQUNPLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBR0EsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JSLE1BQXBCLENBQUg7QUFBQSxLQUFqQixDQUFELENBQVg7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsTUFBRCxDQUZNLENBQVQ7QUFHQSxTQUNJLG1FQUVBLE1BQUMsa0RBQUQ7QUFBVyxhQUFTLEVBQUVDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQUdBLE1BQUMsOENBQUQ7QUFBTyxTQUFLLEVBQUVDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhBLENBREo7QUFPSCxDQWJxQixrQ0FBdEI7TUFBTVAsYTtBQWVTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmlsdGVyZWRHYW1lcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIFJlYWN0Q2hpbGRyZW4sIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJ1xuaW1wb3J0IEdhbWVzIGZyb20gJy4vR2FtZXMnXG5cbmNvbnN0IEZpbHRlcmVkR2FtZXMgPSBSZWFjdC5tZW1vKCh7IGdhbWVzfSA6IHtjaGlsZHJlbjogUmVhY3RDaGlsZHJlbjsgZ2FtZXM6IEdhbWVSZXNwb25zZVtdfSkgPT4ge1xuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZmlsdGVyZWQsIHNldEZpbHRlcmVkXSA9IHVzZVN0YXRlKGdhbWVzKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBzZXRGaWx0ZXJlZChnYW1lcy5maWx0ZXIoZ2FtZT0+IGdhbWUudGl0bGUuaW5jbHVkZXMoc2VhcmNoKSkpXG4gICAgfSwgW3NlYXJjaF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cblxuICAgICAgICA8U2VhcmNoQmFyIHNldFNlYXJjaD17c2V0U2VhcmNofS8+XG4gICAgICAgIDxHYW1lcyBnYW1lcz17ZmlsdGVyZWR9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRHYW1lczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FilteredGames.tsx\n");

/***/ })

})