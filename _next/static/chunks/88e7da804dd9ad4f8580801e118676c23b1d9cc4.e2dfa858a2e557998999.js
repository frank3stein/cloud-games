(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),c=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,i=p.length;c<i;c++){var s=p[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},"9s11":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),u=n.n(o),c=n("apO0"),i=n("q53U"),s=n.n(i),l=a.a.createElement,f=function(e){var t=e.setSearch;return l(a.a.Fragment,null,l("input",{type:"search",placeholder:"Search Games",className:"",onChange:function(e){return t(e.target.value)}}))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=a.a.createElement,m=function(e){return d("svg",e,d("g",{fill:"#4CAF50"},d("path",{d:"M6.025 5.909c1.334 0 2.55 1.032 2.601 1.076a.5.5 0 0 1-.651.759c-.01-.008-.99-.834-1.95-.834-.008-.001-.017.002-.025.002v2.072c.206.062.426.106.675.106 1.428 0 3.116-1.151 4.129-2.037C9.674 6.123 7.754 5 6.35 5c-.114 0-.232.014-.35.028v.883l.025-.002z"}),d("path",{d:"M15.5 2h-9a.5.5 0 0 0-.5.5v1.525c.117-.011.234-.025.35-.025 1.988 0 4.456 1.646 5.544 2.684.099.093.154.223.155.358s-.054.266-.15.361c-.281.275-2.814 2.688-5.225 2.688-.241 0-.463-.029-.675-.071v.925c.123.028.245.055.351.055 1.394 0 5.506-1.137 6.8-2.403a.5.5 0 0 1 .699.715C12.291 10.838 7.936 12 6.35 12c-.111 0-.233-.034-.35-.052V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5z"}),d("path",{d:"M4.367 7.527c.36-.243 1.002-.605 1.633-.615V5.911c-1.325.013-2.525 1.03-2.576 1.073a.499.499 0 0 0-.147.54c.032.096.747 2.107 2.723 2.496V8.985c-.896-.268-1.407-1.017-1.633-1.458z"}),d("path",{d:"M1.275 7.209c.36-.193.728-.402 1.097-.613C3.615 5.887 4.895 5.163 6 5.028V4.025c-1.341.124-2.753.921-4.123 1.703-.543.309-1.079.615-1.597.868a.502.502 0 0 0-.175.757C1.804 9.524 4.219 11.687 6 11.948v-1.003c-1.182-.263-3.072-1.75-4.725-3.736z"})))};m.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"};var h=function(e){return d("svg",e,d("title",null,"Steam"),d("g",{fill:"#303c42"},d("circle",{cx:"15.5",cy:"9.5",r:"2.5"}),d("path",{d:"M8.67 18.34A1.49 1.49 0 0 1 7 18.13a.5.5 0 0 0-.66.75 2.5 2.5 0 1 0 2-4.35.49.49 0 0 0-.56.43.5.5 0 0 0 .43.56 1.5 1.5 0 0 1 .47 2.83z"}),d("path",{d:"M12 0A12 12 0 0 0 0 11.5a.5.5 0 0 0 .14.37.5.5 0 0 0 .26.13c.34.11 3 1.26 4.55 2a.51.51 0 0 0 .52-.07A3.84 3.84 0 0 1 8.33 13a.5.5 0 0 0 .45-.19l2.11-2.76a.5.5 0 0 0 .1-.35v-.22A4.5 4.5 0 1 1 15.8 14a.5.5 0 0 0-.28.11l-3.35 2.75a.5.5 0 0 0-.18.36A4 4 0 0 1 8 21a3.94 3.94 0 0 1-3.84-2.93.5.5 0 0 0-.26-.32L2 16.82a.5.5 0 0 0-.67.68A12 12 0 1 0 12 0z"})))};h.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};var v=function(e){var t=e.store;return d(a.a.Fragment,null,d("Steam"===t?h:m,{className:s.a.svg}))},g=a.a.createElement,y=function(e){var t=e.title,n=(e.id,e.sortName,e.isFullyOptimized,e.steamUrl),o=e.store,u=e.publisher,c=e.genres,i=(e.status,Object(r.useState)(null)),l=(i[0],i[1],n.split("/")[4]),f="https://steamcdn-a.akamaihd.net/steam/apps/".concat(l,"/capsule_616x353.jpg");return Object(r.useEffect)((function(){}),[]),g(a.a.Fragment,null,g("h1",null,t),g("article",{className:s.a.imagearticle},g("a",{href:n,className:s.a.svglink},g(v,{store:o})),"Steam"===o&&g("img",{src:f,alt:t})),g("section",{className:s.a.flex},g("div",{className:s.a.left},g("p",null,"By ",u),g("p",null,"Genres: ",c&&c.map((function(e,n){return g("span",{key:t+n},e,n===c.length-1?"":", ")}))))))},_=a.a.createElement,b=function(e){var t=e.games;return _(a.a.Fragment,null,t.map((function(e){return _(y,p({key:e.id},e))})))},w=a.a.createElement,x=function(e){var t=e.games,n=Object(r.useState)(""),o=n[0],u=n[1],c=Object(r.useState)(t),i=c[0],s=c[1];return Object(r.useEffect)((function(){var e=t.filter((function(e){return e.title.includes(o)}));s(e)}),[o]),w(a.a.Fragment,null,w(f,{setSearch:u}),w(b,{games:i}))},M=a.a.createElement;t.default=function(e){var t=e.games,n=void 0===t?[]:t;return M(c.a,null,M(u.a,null,M("title",{className:s.a.geforce},"Geforce Now Games")),M("h1",null,M("span",{className:s.a.geforce},"Geforce Now")),M(x,{games:n}))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},Tred:function(e,t,n){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerImage:"layout_headerImage__2h5On",headerHomeImage:"layout_headerHomeImage__3qo1_",backToHome:"layout_backToHome__1vZsp"}},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),u=n("PJYZ"),c=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1,d=function(e){c(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,p&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(u(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},apO0:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Tred"),u=n.n(o),c=a.a.createElement;t.a=function(e){var t=e.children;return c("div",{className:u.a.container},t)}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},q53U:function(e,t,n){e.exports={geforce:"game_geforce__s6u11",imagearticle:"game_imagearticle__2azrO",svglink:"game_svglink__JQ_2u",svg:"game_svg__QRB1R","discount-linethrough":"game_discount-linethrough__2pWaT",discount:"game_discount__10_dP",flex:"game_flex__3SOS1",left:"game_left__3PjUf"}}}]);