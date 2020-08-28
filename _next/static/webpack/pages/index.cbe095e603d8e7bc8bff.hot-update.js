webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FilteredGames.tsx":
/*!**************************************!*\
  !*** ./components/FilteredGames.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ \"./components/Game.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/emil/development/cloud-games/components/FilteredGames.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar FilteredGames = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var children = _ref.children,\n      games = _ref.games;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(games),\n      filtered = _useState2[0],\n      setFiltered = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {}, [search]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setSearch: setSearch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), filtered === null || filtered === void 0 ? void 0 : filtered.map(function (game) {\n    return __jsx(_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: game.id\n    }, game, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 32\n      }\n    }));\n  }));\n}, \"uBhknqv2cDBDpmxs/GNSt0RwFIw=\"));\n_c2 = FilteredGames;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredGames);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FilteredGames$React.memo\");\n$RefreshReg$(_c2, \"FilteredGames\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJlZEdhbWVzLnRzeD9jOGI0Il0sIm5hbWVzIjpbIkZpbHRlcmVkR2FtZXMiLCJSZWFjdCIsIm1lbW8iLCJjaGlsZHJlbiIsImdhbWVzIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXJlZCIsInNldEZpbHRlcmVkIiwidXNlRWZmZWN0IiwibWFwIiwiZ2FtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLFNBQVcsZ0JBQTBFO0FBQUE7O0FBQUEsTUFBeEVDLFFBQXdFLFFBQXhFQSxRQUF3RTtBQUFBLE1BQTlEQyxLQUE4RCxRQUE5REEsS0FBOEQ7O0FBQUEsa0JBQzNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEbUU7QUFBQSxNQUNoR0MsTUFEZ0c7QUFBQSxNQUN4RkMsU0FEd0Y7O0FBQUEsbUJBRXZFRixzREFBUSxDQUFDRCxLQUFELENBRitEO0FBQUEsTUFFaEdJLFFBRmdHO0FBQUEsTUFFdEZDLFdBRnNGOztBQUd2R0MseURBQVMsQ0FBQyxZQUFJLENBRWIsQ0FGUSxFQUVOLENBQUNKLE1BQUQsQ0FGTSxDQUFUO0FBR0EsU0FDSSxtRUFFQSxNQUFDLGtEQUFEO0FBQVcsYUFBUyxFQUFFQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFJRUMsUUFKRixhQUlFQSxRQUpGLHVCQUlFQSxRQUFRLENBQUVHLEdBQVYsQ0FDVSxVQUFDQyxJQUFEO0FBQUEsV0FBVyxNQUFDLDZDQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNDO0FBQWhCLE9BQXVCRCxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVg7QUFBQSxHQURWLENBSkYsQ0FESjtBQVNILENBZnFCLGtDQUF0QjtNQUFNWixhO0FBaUJTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmlsdGVyZWRHYW1lcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIFJlYWN0Q2hpbGRyZW4sIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJ1xuXG5jb25zdCBGaWx0ZXJlZEdhbWVzID0gUmVhY3QubWVtbygoe2NoaWxkcmVuLCBnYW1lc30gOiB7Y2hpbGRyZW46IFJlYWN0Q2hpbGRyZW47IGdhbWVzOiBHYW1lUmVzcG9uc2VbXX0pID0+IHtcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gPSB1c2VTdGF0ZShnYW1lcylcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgXG4gICAgfSwgW3NlYXJjaF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cblxuICAgICAgICA8U2VhcmNoQmFyIHNldFNlYXJjaD17c2V0U2VhcmNofS8+XG5cbiAgICAgICAgeyBmaWx0ZXJlZD8ubWFwKFxuICAgICAgICAgICAgICAgICAgICAoZ2FtZSkgPT4gIDxHYW1lIGtleT17Z2FtZS5pZH17Li4uZ2FtZX0gLz4pfVxuICAgICAgICA8Lz5cbiAgICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEdhbWVzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FilteredGames.tsx\n");

/***/ })

})