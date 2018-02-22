webpackHotUpdate(0,{

/***/ "./src/pages/cannon/navigationBar.component.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationBar = function (_React$Component) {
    _inherits(NavigationBar, _React$Component);

    function NavigationBar() {
        _classCallCheck(this, NavigationBar);

        return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
    }

    _createClass(NavigationBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "nav-cannon nav-bar" },
                React.createElement(
                    "div",
                    { className: "nav-content-container nav-content-container-1" },
                    React.createElement("div", { className: "icon-logo" }),
                    React.createElement(
                        "div",
                        { className: "logo-name" },
                        React.createElement(
                            "a",
                            { href: "https://cloudcannon.com/" },
                            "cloud",
                            React.createElement(
                                "span",
                                { className: "logo-span" },
                                "cannon"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "nav-content-container nav-content-container-2" },
                    React.createElement(
                        "div",
                        { className: "nav-link-container nav-link-container-1" },
                        React.createElement(
                            _reactRouterDom.NavLink,
                            { activeStyle: "nav-link-active", to: "/cannon/features" },
                            "Features"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "nav-link-container nav-link-container-2" },
                        React.createElement(
                            _reactRouterDom.NavLink,
                            { activeStyle: "nav-link-active", to: "/cannon/pricing" },
                            "Pricing"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "nav-link-container nav-link-container-3" },
                        React.createElement(
                            _reactRouterDom.NavLink,
                            { activeStyle: "nav-link-active", to: "/cannon/about" },
                            "About"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "nav-content-container nav-content-container-3" },
                    React.createElement(
                        "div",
                        { className: "user-container user-container-1" },
                        "LOG IN"
                    ),
                    React.createElement(
                        "div",
                        { className: "user-container user-container-2" },
                        "SING UP"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "nav-content-container nav-content-container-4 nav-responsive-container" },
                    React.createElement(
                        "div",
                        { className: "responsive-container repsonsive-container-1" },
                        "Features"
                    ),
                    React.createElement(
                        "div",
                        { className: "responsive-container repsonsive-container-2" },
                        "Pricing"
                    ),
                    React.createElement(
                        "div",
                        { className: "responsive-container repsonsive-container-3" },
                        "About"
                    ),
                    React.createElement(
                        "div",
                        { className: "responsive-container repsonsive-container-4" },
                        "LOG IN"
                    ),
                    React.createElement(
                        "div",
                        { className: "responsive-container repsonsive-container-5" },
                        "SING UP"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "nav-responsive-button", onClick: function onClick(e) {
                            document.querySelector(".hamburger").classList.toggle("is-active");
                            document.querySelector(".nav-responsive-container").classList.toggle("hide-menu");
                        } },
                    React.createElement(
                        "button",
                        { "class": "hamburger hamburger--spin", type: "button" },
                        React.createElement(
                            "span",
                            { "class": "hamburger-box" },
                            React.createElement("span", { "class": "hamburger-inner" })
                        )
                    )
                )
            );
        }
    }]);

    return NavigationBar;
}(React.Component);

exports.default = NavigationBar;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/react/index.js")))

/***/ })

})