webpackHotUpdate(0,{

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, process, ReactDOM) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("./src/index.style.css");

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _cannonMain = __webpack_require__("./src/pages/cannon/cannon.main.jsx");

var _cannonMain2 = _interopRequireDefault(_cannonMain);

var _rmotrMain = __webpack_require__("./src/pages/rmotr/rmotr.main.jsx");

var _rmotrMain2 = _interopRequireDefault(_rmotrMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                React.createElement(
                    "section",
                    { className: "cont-app" },
                    React.createElement(
                        _reactRouterDom.BrowserRouter,
                        { basename: process.env.PUBLIC_URL },
                        React.createElement(
                            _reactRouterDom.Switch,
                            null,
                            React.createElement(_reactRouterDom.Route, { path: "/cannon", component: _cannonMain2.default }),
                            React.createElement(_reactRouterDom.Route, { path: "/rmotr", component: _rmotrMain2.default }),
                            React.createElement(_reactRouterDom.Redirect, { to: "/cannon" })
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("react"));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/react/index.js"), __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/react-dom/index.js")))

/***/ })

})