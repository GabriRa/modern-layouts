webpackHotUpdate(0,{

/***/ "./src/pages/cannon/navigationBar.component.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = NavigationBar;

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

function NavigationBar() {

    var navLinks = ["features", "pricing", "about"];

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
                    { href: "https://cloudcannon.com/", target: "_about" },
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
            navLinks.map(function (link, index) {
                return React.createElement(
                    "div",
                    { className: "nav-link-container nav-link-container-" + (index + 1) },
                    React.createElement(
                        _reactRouterDom.NavLink,
                        { activeStyle: "nav-link-active", to: "/cannon/" + link },
                        " ",
                        link,
                        " "
                    )
                );
            })
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/react/index.js")))

/***/ })

})