webpackHotUpdate(0,{

/***/ "./src/pages/cannon/cannon.main.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__("./src/pages/cannon/cannon.style.css");

var _navigationBarComponent = __webpack_require__("./src/pages/cannon/navigationBar.component.jsx");

var _navigationBarComponent2 = _interopRequireDefault(_navigationBarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cannon = function (_Component) {
    _inherits(Cannon, _Component);

    function Cannon() {
        _classCallCheck(this, Cannon);

        return _possibleConstructorReturn(this, (Cannon.__proto__ || Object.getPrototypeOf(Cannon)).apply(this, arguments));
    }

    _createClass(Cannon, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "cannon-main-page" },
                (0, _navigationBarComponent2.default)(),
                React.createElement(
                    "section",
                    { className: "first-section section-introduction" },
                    React.createElement(
                        "div",
                        { className: "intro-container intro-container-1" },
                        React.createElement(
                            "h1",
                            null,
                            "The tittle of your product"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "A subtitle with information, description or",
                            React.createElement("br", null),
                            "anything about your project"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "intro-container intro-container-2" },
                        React.createElement(
                            "div",
                            { className: "intro-button" },
                            React.createElement(
                                "h5",
                                null,
                                "GET STARTED FREE"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "intro-container intro-container-3" },
                        React.createElement("iframe", { src: "https://www.youtube.com/embed/y2Ky3Wo37AY?feature=oembed", frameborder: "0", width: "100%", height: "100%" })
                    )
                ),
                React.createElement(
                    "section",
                    { className: "second-section section-characteristics" },
                    React.createElement(
                        "div",
                        { className: "characteristic-product characteristic-product-1" },
                        React.createElement(
                            "div",
                            { className: "product-info product-information" },
                            React.createElement(
                                "h4",
                                null,
                                "Title of the characteristic"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos officia maiores corporis ipsa quasi sint fugit cumque molestias rerum quia consectetur nobis tempore nihil fuga labore quae minima magni tempora iste saepe quis."
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "product-info product-options" },
                            React.createElement(
                                "div",
                                { className: "transformed-container" },
                                React.createElement(
                                    "div",
                                    { className: "cont-transformed cont-transformed-1" },
                                    React.createElement("div", { className: "div-circle" }),
                                    React.createElement(
                                        "div",
                                        { className: "info-circle" },
                                        " Today's feed"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "cont-transformed cont-transformed-2" },
                                    React.createElement(
                                        "div",
                                        { className: "update-transformed update-transformed-1" },
                                        React.createElement("div", { className: "update-img" }),
                                        React.createElement(
                                            "div",
                                            { className: "update-info" },
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Product updated"
                                            ),
                                            React.createElement(
                                                "p",
                                                null,
                                                "Last update a few moments ago"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "cont-transformed cont-transformed-3" },
                                    React.createElement("div", { className: "div-circle" }),
                                    React.createElement(
                                        "div",
                                        { className: "info-circle" },
                                        " Yesterday's feed"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "cont-transformed cont-transformed-4" },
                                    React.createElement(
                                        "div",
                                        { className: "update-transformed update-transformed-2" },
                                        React.createElement("div", { className: "update-img" }),
                                        React.createElement(
                                            "div",
                                            { className: "update-info" },
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Product updated"
                                            ),
                                            React.createElement(
                                                "p",
                                                null,
                                                "Last update: 1 hour and 1 day"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "update-transformed update-transformed-3" },
                                        React.createElement("div", { className: "update-img" }),
                                        React.createElement(
                                            "div",
                                            { className: "update-info" },
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Product updated"
                                            ),
                                            React.createElement(
                                                "p",
                                                null,
                                                "Last update: 7 hour and 1 day"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "update-transformed update-transformed-4" },
                                        React.createElement("div", { className: "update-img" }),
                                        React.createElement(
                                            "div",
                                            { className: "update-info" },
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Product updated"
                                            ),
                                            React.createElement(
                                                "p",
                                                null,
                                                "Last update: 18 hour and 1 day"
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "characteristic-product characteristic-product-2" },
                        React.createElement(
                            "div",
                            { className: "product-info product-information" },
                            React.createElement(
                                "h4",
                                null,
                                "Title of the characteristic"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maxime asperiores ad, facere, quos saepe dicta voluptates tempore! Blanditiis corrupti saepe asperiores, accusantium doloribus dolor. Odit alias hic aliquid."
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "product-info product-options" },
                            React.createElement("div", { className: "tab-transformed tab-transformed-1" }),
                            React.createElement("div", { className: "tab-transformed tab-transformed-2" }),
                            React.createElement(
                                "div",
                                { className: "tab-transformed tab-transformed-3" },
                                React.createElement(
                                    "div",
                                    { className: "top-tab" },
                                    React.createElement("div", { className: "circle-tab circle-tab-1" }),
                                    React.createElement("div", { className: "circle-tab circle-tab-2" }),
                                    React.createElement("div", { className: "circle-tab circle-tab-3" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "image-tab" },
                                    React.createElement("img", { src: "http://via.placeholder.com/400x380", alt: "" })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "characteristic-product characteristic-product-3" },
                        React.createElement(
                            "div",
                            { className: "product-info product-information" },
                            React.createElement(
                                "h4",
                                null,
                                "Title of the characteristic"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis placeat fuga, inventore itaque commodi, optio vitae. Vel similique quos, eos minus fugit, necessitatibus. Tempore et mollitia blanditiis tenetur excepturi"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "product-info product-options" },
                            React.createElement("div", { className: "screen-transformed screen-transformed-1" }),
                            React.createElement("div", { className: "screen-transformed screen-transformed-2" }),
                            React.createElement(
                                "div",
                                { className: "screen-transformed screen-transformed-3" },
                                React.createElement(
                                    "div",
                                    { className: "top-tab" },
                                    React.createElement("div", { className: "circle-tab circle-tab-1" }),
                                    React.createElement("div", { className: "circle-tab circle-tab-2" }),
                                    React.createElement("div", { className: "circle-tab circle-tab-3" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "image-tab" },
                                    React.createElement("img", { src: "http://via.placeholder.com/350x250", alt: "" })
                                )
                            ),
                            [].concat(_toConsumableArray(Array(5))).map(function (val, index) {
                                return React.createElement("span", { className: "span-transformed span-transformed-" + (index + 1) });
                            })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "characteristic-product characteristic-product-4" },
                        React.createElement(
                            "div",
                            { className: "product-info product-information" },
                            React.createElement(
                                "h4",
                                null,
                                "Title of the characteristic"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatem numquam architecto nisi cumque quos. Quibusdam, delectus! Illo consequatur nihil nisi, veritatis aperiam earum quidem laborum est rem ut natus hic repellendus"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "product-info product-options" },
                            React.createElement(
                                "div",
                                { className: "laptop" },
                                React.createElement(
                                    "div",
                                    { className: "laptop-screen" },
                                    React.createElement("div", { className: "laptop-cam" }),
                                    React.createElement(
                                        "div",
                                        { className: "laptop-image" },
                                        React.createElement("img", { src: "http://via.placeholder.com/350x250", alt: "" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "laptop-keyboard" },
                                    React.createElement("div", { className: "laptop-touchpad" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "mobile" },
                                React.createElement("div", { className: "mobile-speaker" }),
                                React.createElement("div", { className: "mobile-home-button" }),
                                React.createElement(
                                    "div",
                                    { className: "mobile-screen" },
                                    React.createElement("img", { src: "http://via.placeholder.com/50x120", alt: "" })
                                )
                            )
                        )
                    )
                ),
                " ",
                React.createElement(
                    "section",
                    { className: "third-section section-opinions" },
                    React.createElement(
                        "div",
                        { className: "container-opinion" },
                        React.createElement(
                            "div",
                            { className: "opinion-box" },
                            React.createElement(
                                "div",
                                { className: "opinion-user" },
                                React.createElement(
                                    "div",
                                    { className: "user-avatar" },
                                    React.createElement("img", { src: "http://via.placeholder.com/90x90", alt: "" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "user-info" },
                                    React.createElement(
                                        "div",
                                        { className: "user-name" },
                                        "Name Lastname"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "user-position" },
                                        " Manager of a Big Company"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "opinion-text" },
                                "\"This product was amazing for our companay. It makes our labor easier by delivering a highly productive service to our offices. It improved our comunications inside our team by a lot!\""
                            ),
                            React.createElement(
                                "div",
                                { className: "opinion-logo" },
                                React.createElement("img", { src: "http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png",
                                    alt: "", width: "100", height: "50" })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "join-container" },
                        React.createElement(
                            "div",
                            { className: "join-title" },
                            "Join thousands of developers building sites on CloudCannon Today"
                        ),
                        React.createElement(
                            "div",
                            { className: "join-button" },
                            "Get started free"
                        )
                    )
                )
            );
        }
    }]);

    return Cannon;
}(Component);

exports.default = Cannon;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/react/index.js")))

/***/ })

})