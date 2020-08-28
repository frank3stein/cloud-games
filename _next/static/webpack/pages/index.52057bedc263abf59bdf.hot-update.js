webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FilteredGames.tsx":
/*!**************************************!*\
  !*** ./components/FilteredGames.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ \"./components/Game.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/emil/development/cloud-games/components/FilteredGames.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar FilteredGames = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var children = _ref.children,\n      games = _ref.games;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(games),\n      filtered = _useState2[0],\n      setFiltered = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {}, [search]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setSearch: setSearch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), filtered === null || filtered === void 0 ? void 0 : filtered.map(function (game) {\n    return __jsx(_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: game.id\n    }, game, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 32\n      }\n    }));\n  }));\n}, \"uBhknqv2cDBDpmxs/GNSt0RwFIw=\"));\n_c2 = FilteredGames;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredGames);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FilteredGames$React.memo\");\n$RefreshReg$(_c2, \"FilteredGames\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJlZEdhbWVzLnRzeD9jOGI0Il0sIm5hbWVzIjpbIkZpbHRlcmVkR2FtZXMiLCJSZWFjdCIsIm1lbW8iLCJjaGlsZHJlbiIsImdhbWVzIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXJlZCIsInNldEZpbHRlcmVkIiwidXNlRWZmZWN0IiwibWFwIiwiZ2FtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLFNBQVcsZ0JBQTBFO0FBQUE7O0FBQUEsTUFBeEVDLFFBQXdFLFFBQXhFQSxRQUF3RTtBQUFBLE1BQTlEQyxLQUE4RCxRQUE5REEsS0FBOEQ7O0FBQUEsa0JBQzNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEbUU7QUFBQSxNQUNoR0MsTUFEZ0c7QUFBQSxNQUN4RkMsU0FEd0Y7O0FBQUEsbUJBRXZFRixzREFBUSxDQUFDRCxLQUFELENBRitEO0FBQUEsTUFFaEdJLFFBRmdHO0FBQUEsTUFFdEZDLFdBRnNGOztBQUd2R0MseURBQVMsQ0FBQyxZQUFJLENBRWIsQ0FGUSxFQUVOLENBQUNKLE1BQUQsQ0FGTSxDQUFUO0FBR0EsU0FDSSxtRUFFQSxNQUFDLGtEQUFEO0FBQVcsYUFBUyxFQUFFQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFJRUMsUUFKRixhQUlFQSxRQUpGLHVCQUlFQSxRQUFRLENBQUVHLEdBQVYsQ0FDVSxVQUFDQyxJQUFEO0FBQUEsV0FBVyxNQUFDLDZDQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNDO0FBQWhCLE9BQXVCRCxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVg7QUFBQSxHQURWLENBSkYsQ0FESjtBQVNILENBZnFCLGtDQUF0QjtNQUFNWixhO0FBaUJTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmlsdGVyZWRHYW1lcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIFJlYWN0Q2hpbGRyZW4sIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJ1xuY29uc3QgRmlsdGVyZWRHYW1lcyA9IFJlYWN0Lm1lbW8oKHtjaGlsZHJlbiwgZ2FtZXN9IDoge2NoaWxkcmVuOiBSZWFjdENoaWxkcmVuOyBnYW1lczogR2FtZVJlc3BvbnNlW119KSA9PiB7XG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoZ2FtZXMpXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIFxuICAgIH0sIFtzZWFyY2hdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgPFNlYXJjaEJhciBzZXRTZWFyY2g9e3NldFNlYXJjaH0vPlxuXG4gICAgICAgIHsgZmlsdGVyZWQ/Lm1hcChcbiAgICAgICAgICAgICAgICAgICAgKGdhbWUpID0+ICA8R2FtZSBrZXk9e2dhbWUuaWR9ey4uLmdhbWV9IC8+KX1cbiAgICAgICAgPC8+XG4gICAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRHYW1lczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FilteredGames.tsx\n");

/***/ }),

/***/ "./components/Game.tsx":
/*!*****************************!*\
  !*** ./components/Game.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StoreSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreSvg */ \"./components/StoreSvg.tsx\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.module.css */ \"./components/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/emil/development/cloud-games/components/Game.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Game = function Game(_ref) {\n  _s();\n\n  var title = _ref.title,\n      id = _ref.id,\n      sortName = _ref.sortName,\n      isFullyOptimized = _ref.isFullyOptimized,\n      steamUrl = _ref.steamUrl,\n      store = _ref.store,\n      publisher = _ref.publisher,\n      genres = _ref.genres,\n      status = _ref.status;\n  console.log(store);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      gameInfo = _useState[0],\n      setGameInfo = _useState[1];\n\n  var steamId = steamUrl.split('/')[4];\n  var imageSrc = \"https://steamcdn-a.akamaihd.net/steam/apps/\".concat(steamId, \"/capsule_616x353.jpg\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {// Steam blocks access\n    // const fetchData = async () => {\n    //     if (store === 'Steam') {\n    //         try {\n    //             const gameInfo = await fetch(`/api/games/${steamId}`).then(result => result.json())\n    //             setGameInfo(gameInfo)\n    //             console.log(gameInfo)\n    //         }catch(err) {\n    //             console.error(err)\n    //         }\n    //     }\n    // }\n    // fetchData()\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, title), __jsx(\"article\", {\n    className: _game_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imagearticle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: steamUrl,\n    className: _game_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.svglink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }, __jsx(_StoreSvg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    store: store,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 21\n    }\n  })), store === 'Steam' && __jsx(\"img\", {\n    src: imageSrc,\n    alt: title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 39\n    }\n  })), __jsx(\"section\", {\n    className: _game_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _game_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, \"By \", publisher), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  }, \"Genres: \", genres && genres.map(function (genre, index) {\n    return __jsx(\"span\", {\n      key: title + index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 72\n      }\n    }, genre, index === genres.length - 1 ? \"\" : \", \");\n  })))));\n}; // export const getStaticProps: GetStaticProps = async () => {\n//     const games = await fetch(\"https://static.nvidiagrid.net/supported-public-game-list/locales/gfnpc-en-US.json\")\n//         .then(response => response.json())\n//         .then(response => response.slice(0, 10))\n//     return {\n//         props: {\n//             games,\n//         },\n//     }\n// }\n\n\n_s(Game, \"XxZdKupZjIC8vswJ9Ta+N2Q/jaA=\");\n\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c;\n\n$RefreshReg$(_c, \"Game\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lLnRzeD9iMTNiIl0sIm5hbWVzIjpbIkdhbWUiLCJ0aXRsZSIsImlkIiwic29ydE5hbWUiLCJpc0Z1bGx5T3B0aW1pemVkIiwic3RlYW1VcmwiLCJzdG9yZSIsInB1Ymxpc2hlciIsImdlbnJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImdhbWVJbmZvIiwic2V0R2FtZUluZm8iLCJzdGVhbUlkIiwic3BsaXQiLCJpbWFnZVNyYyIsInVzZUVmZmVjdCIsInN0eWxlcyIsImltYWdlYXJ0aWNsZSIsInN2Z2xpbmsiLCJmbGV4IiwibGVmdCIsIm1hcCIsImdlbnJlIiwiaW5kZXgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQWlCQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF1SDtBQUFBOztBQUFBLE1BQXBIQyxLQUFvSCxRQUFwSEEsS0FBb0g7QUFBQSxNQUE3R0MsRUFBNkcsUUFBN0dBLEVBQTZHO0FBQUEsTUFBekdDLFFBQXlHLFFBQXpHQSxRQUF5RztBQUFBLE1BQS9GQyxnQkFBK0YsUUFBL0ZBLGdCQUErRjtBQUFBLE1BQTdFQyxRQUE2RSxRQUE3RUEsUUFBNkU7QUFBQSxNQUFuRUMsS0FBbUUsUUFBbkVBLEtBQW1FO0FBQUEsTUFBNURDLFNBQTRELFFBQTVEQSxTQUE0RDtBQUFBLE1BQWpEQyxNQUFpRCxRQUFqREEsTUFBaUQ7QUFBQSxNQUF6Q0MsTUFBeUMsUUFBekNBLE1BQXlDO0FBQ2hJQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjs7QUFEZ0ksa0JBRWhHTSxzREFBUSxDQUFDLElBQUQsQ0FGd0Y7QUFBQSxNQUV6SEMsUUFGeUg7QUFBQSxNQUUvR0MsV0FGK0c7O0FBR2hJLE1BQU1DLE9BQU8sR0FBR1YsUUFBUSxDQUFDVyxLQUFULENBQWUsR0FBZixFQUFvQixDQUFwQixDQUFoQjtBQUNBLE1BQU1DLFFBQVEsd0RBQWlERixPQUFqRCx5QkFBZDtBQUVBRyx5REFBUyxDQUFFLFlBQUssQ0FDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBZFEsRUFjTixFQWRNLENBQVQ7QUFlQSxTQUVJLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS2pCLEtBQUwsQ0FESixFQUVJO0FBQVMsYUFBUyxFQUFFa0IsdURBQU0sQ0FBQ0MsWUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFFZixRQUFUO0FBQW1CLGFBQVMsRUFBRWMsdURBQU0sQ0FBQ0UsT0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVmLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUtBLEtBQUssS0FBSyxPQUFWLElBQXFCO0FBQUssT0FBRyxFQUFFVyxRQUFWO0FBQW9CLE9BQUcsRUFBRWhCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKMUIsQ0FGSixFQVFJO0FBQVMsYUFBUyxFQUFFa0IsdURBQU0sQ0FBQ0csSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFSCx1REFBTSxDQUFDSSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFPaEIsU0FBUCxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBWUMsTUFBTSxJQUFJQSxNQUFNLENBQUNnQixHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsV0FBa0I7QUFBTSxTQUFHLEVBQUV6QixLQUFLLEdBQUd5QixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCRCxLQUEzQixFQUFrQ0MsS0FBSyxLQUFLbEIsTUFBTSxDQUFDbUIsTUFBUCxHQUFnQixDQUExQixHQUE4QixFQUE5QixHQUFtQyxJQUFyRSxDQUFsQjtBQUFBLEdBQVgsQ0FBdEIsQ0FGSixDQURKLENBUkosQ0FGSjtBQW9CSCxDQXpDRCxDLENBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F0RE0zQixJOztLQUFBQSxJO0FBeURTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2FtZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0b3JlU3ZnIGZyb20gJy4vU3RvcmVTdmcnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2FtZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IFByaWNlIGZyb20gJy4vUHJpY2UnXG5cbmludGVyZmFjZSBHYW1lUmVzcG9uc2Uge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzb3J0TmFtZTogc3RyaW5nO1xuICAgIGlzRnVsbHlPcHRpbWl6ZWQ6IGJvb2xlYW47XG4gICAgc3RlYW1Vcmw6IHN0cmluZztcbiAgICBzdG9yZTogc3RyaW5nO1xuICAgIHB1Ymxpc2hlcjogc3RyaW5nO1xuICAgIGdlbnJlczogc3RyaW5nW107XG4gICAgc3RhdHVzOiBzdHJpbmc7XG59XG5cblxuY29uc3QgR2FtZSA9ICh7IHRpdGxlLCBpZCwgc29ydE5hbWUsIGlzRnVsbHlPcHRpbWl6ZWQsIHN0ZWFtVXJsLCBzdG9yZSwgcHVibGlzaGVyLCBnZW5yZXMsIHN0YXR1cywgfTogR2FtZVJlc3BvbnNlKTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0b3JlKVxuICAgIGNvbnN0IFtnYW1lSW5mbywgc2V0R2FtZUluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgc3RlYW1JZCA9IHN0ZWFtVXJsLnNwbGl0KCcvJylbNF07XG4gICAgY29uc3QgaW1hZ2VTcmMgPSBgaHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9zdGVhbS9hcHBzLyR7c3RlYW1JZH0vY2Fwc3VsZV82MTZ4MzUzLmpwZ2BcblxuICAgIHVzZUVmZmVjdCggKCk9PiB7XG4gICAgICAgIC8vIFN0ZWFtIGJsb2NrcyBhY2Nlc3NcbiAgICAgICAgLy8gY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKHN0b3JlID09PSAnU3RlYW0nKSB7XG4gICAgICAgIC8vICAgICAgICAgdHJ5IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgZ2FtZUluZm8gPSBhd2FpdCBmZXRjaChgL2FwaS9nYW1lcy8ke3N0ZWFtSWR9YCkudGhlbihyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0R2FtZUluZm8oZ2FtZUluZm8pXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdhbWVJbmZvKVxuICAgICAgICAvLyAgICAgICAgIH1jYXRjaChlcnIpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZWFydGljbGV9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3N0ZWFtVXJsfSBjbGFzc05hbWU9e3N0eWxlcy5zdmdsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPFN0b3JlU3ZnIHN0b3JlPXtzdG9yZX0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAge3N0b3JlID09PSAnU3RlYW0nICYmIDxpbWcgc3JjPXtpbWFnZVNyY30gYWx0PXt0aXRsZX0gLz59XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxuICAgICAgICAgICAgICAgICAgICA8cD5CeSB7cHVibGlzaGVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+R2VucmVzOiB7Z2VucmVzICYmIGdlbnJlcy5tYXAoKGdlbnJlLCBpbmRleCkgPT4gPHNwYW4ga2V5PXt0aXRsZSArIGluZGV4fT57Z2VucmV9e2luZGV4ID09PSBnZW5yZXMubGVuZ3RoIC0gMSA/IFwiXCIgOiBcIiwgXCJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lyoge2dhbWVJbmZvID09PSBudWxsID8gbnVsbCA6IDxQcmljZSBwcmljZU92ZXJ2aWV3PXtnYW1lSW5mby5wcmljZV9vdmVydmlld30gLz4gIH0gKi99XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuXG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgY29uc3QgZ2FtZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vc3RhdGljLm52aWRpYWdyaWQubmV0L3N1cHBvcnRlZC1wdWJsaWMtZ2FtZS1saXN0L2xvY2FsZXMvZ2ZucGMtZW4tVVMuanNvblwiKVxuLy8gICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnNsaWNlKDAsIDEwKSlcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9wczoge1xuLy8gICAgICAgICAgICAgZ2FtZXMsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgfVxuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game.tsx\n");

/***/ }),

/***/ "./components/StoreSvg.tsx":
/*!*********************************!*\
  !*** ./components/StoreSvg.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.module.css */ \"./components/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/emil/development/cloud-games/components/StoreSvg.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Nvidia = function Nvidia(props) {\n  return __jsx(\"svg\", props, __jsx(\"g\", {\n    fill: \"#4CAF50\"\n  }, __jsx(\"path\", {\n    d: \"M6.025 5.909c1.334 0 2.55 1.032 2.601 1.076a.5.5 0 0 1-.651.759c-.01-.008-.99-.834-1.95-.834-.008-.001-.017.002-.025.002v2.072c.206.062.426.106.675.106 1.428 0 3.116-1.151 4.129-2.037C9.674 6.123 7.754 5 6.35 5c-.114 0-.232.014-.35.028v.883l.025-.002z\"\n  }), __jsx(\"path\", {\n    d: \"M15.5 2h-9a.5.5 0 0 0-.5.5v1.525c.117-.011.234-.025.35-.025 1.988 0 4.456 1.646 5.544 2.684.099.093.154.223.155.358s-.054.266-.15.361c-.281.275-2.814 2.688-5.225 2.688-.241 0-.463-.029-.675-.071v.925c.123.028.245.055.351.055 1.394 0 5.506-1.137 6.8-2.403a.5.5 0 0 1 .699.715C12.291 10.838 7.936 12 6.35 12c-.111 0-.233-.034-.35-.052V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5z\"\n  }), __jsx(\"path\", {\n    d: \"M4.367 7.527c.36-.243 1.002-.605 1.633-.615V5.911c-1.325.013-2.525 1.03-2.576 1.073a.499.499 0 0 0-.147.54c.032.096.747 2.107 2.723 2.496V8.985c-.896-.268-1.407-1.017-1.633-1.458z\"\n  }), __jsx(\"path\", {\n    d: \"M1.275 7.209c.36-.193.728-.402 1.097-.613C3.615 5.887 4.895 5.163 6 5.028V4.025c-1.341.124-2.753.921-4.123 1.703-.543.309-1.079.615-1.597.868a.502.502 0 0 0-.175.757C1.804 9.524 4.219 11.687 6 11.948v-1.003c-1.182-.263-3.072-1.75-4.725-3.736z\"\n  })));\n};\n\n_c2 = Nvidia;\nNvidia.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 16 16\"\n};\n\nvar Steam = function Steam(props) {\n  return __jsx(\"svg\", props, __jsx(\"title\", null, \"Steam\"), __jsx(\"g\", {\n    fill: \"#303c42\"\n  }, __jsx(\"circle\", {\n    cx: \"15.5\",\n    cy: \"9.5\",\n    r: \"2.5\"\n  }), __jsx(\"path\", {\n    d: \"M8.67 18.34A1.49 1.49 0 0 1 7 18.13a.5.5 0 0 0-.66.75 2.5 2.5 0 1 0 2-4.35.49.49 0 0 0-.56.43.5.5 0 0 0 .43.56 1.5 1.5 0 0 1 .47 2.83z\"\n  }), __jsx(\"path\", {\n    d: \"M12 0A12 12 0 0 0 0 11.5a.5.5 0 0 0 .14.37.5.5 0 0 0 .26.13c.34.11 3 1.26 4.55 2a.51.51 0 0 0 .52-.07A3.84 3.84 0 0 1 8.33 13a.5.5 0 0 0 .45-.19l2.11-2.76a.5.5 0 0 0 .1-.35v-.22A4.5 4.5 0 1 1 15.8 14a.5.5 0 0 0-.28.11l-3.35 2.75a.5.5 0 0 0-.18.36A4 4 0 0 1 8 21a3.94 3.94 0 0 1-3.84-2.93.5.5 0 0 0-.26-.32L2 16.82a.5.5 0 0 0-.67.68A12 12 0 1 0 12 0z\"\n  })));\n};\n\n_c3 = Steam;\nSteam.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 24 24\"\n};\n\n\nvar StoreSvg = function StoreSvg(_ref) {\n  var store = _ref.store;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, store === \"Steam\" ? __jsx(Steam, {\n    className: _game_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.svg,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 34\n    }\n  }) : __jsx(Nvidia, {\n    className: _game_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.svg,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 69\n    }\n  }));\n};\n\n_c = StoreSvg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoreSvg);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"StoreSvg\");\n$RefreshReg$(_c2, \"Nvidia\");\n$RefreshReg$(_c3, \"Steam\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9yZVN2Zy50c3g/Y2VmMCJdLCJuYW1lcyI6WyJOdmlkaWEiLCJTdGVhbSIsIlN0b3JlU3ZnIiwic3RvcmUiLCJzdHlsZXMiLCJzdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztJQUNPQSxNLFlBQUFBLE07Ozs7Ozs7Ozs7Ozs7O01BQUFBLE07QUFBQUEsTTs7Ozs7SUFDQUMsSyxZQUFBQSxLOzs7Ozs7Ozs7Ozs7OztNQUFBQSxLO0FBQUFBLEs7Ozs7QUFDUDs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFnRDtBQUFBLE1BQTdDQyxLQUE2QyxRQUE3Q0EsS0FBNkM7QUFDN0QsU0FDSSxtRUFDS0EsS0FBSyxLQUFLLE9BQVYsR0FBb0IsTUFBQyxLQUFEO0FBQU8sYUFBUyxFQUFFQyx1REFBTSxDQUFDQyxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXBCLEdBQXVELE1BQUMsTUFBRDtBQUFRLGFBQVMsRUFBRUQsdURBQU0sQ0FBQ0MsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQ1RCxDQURKO0FBS0gsQ0FORDs7S0FBTUgsUTtBQVFTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3RvcmVTdmcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE52aWRpYSBmcm9tICcuLi9pY29ucy9udmlkaWEuc3ZnJ1xuaW1wb3J0IFN0ZWFtIGZyb20gJy4uL2ljb25zL3N0ZWFtLnN2ZydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nYW1lLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFN0b3JlU3ZnID0gKHsgc3RvcmUgfTogeyBzdG9yZTogc3RyaW5nOyB9KTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7c3RvcmUgPT09IFwiU3RlYW1cIiA/IDxTdGVhbSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9IC8+IDogPE52aWRpYSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9IC8+fVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlU3ZnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StoreSvg.tsx\n");

/***/ })

})