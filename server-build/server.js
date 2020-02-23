/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainCarousel_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainCarousel.jsx */ \"./client/components/MainCarousel.jsx\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ \"./client/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* eslint-disable no-console */\n\n/* eslint-disable no-undef */\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      homes: []\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.fetchHomes();\n    }\n  }, {\n    key: \"fetchHomes\",\n    value: function fetchHomes() {\n      var _this2 = this;\n\n      var randomId = Math.floor(Math.random() * 10000000) + 1;\n      var homeId = new URL(window.location.href).searchParams.get('id') || randomId;\n      console.log('id:', homeId);\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/homes', {\n        params: {\n          id: homeId\n        }\n      }).then(function (response) {\n        console.log('response is:', response.data); // to be removed\n\n        if (Array.isArray(response.data)) {\n          _this2.setState({\n            homes: response.data\n          });\n        }\n      })[\"catch\"](function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"module-title\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"More homes you may like\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainCarousel_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        homes: this.state.homes\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/app.jsx?");

/***/ }),

/***/ "./client/components/HomeCarousel.jsx":
/*!********************************************!*\
  !*** ./client/components/HomeCarousel.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_homeCarousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homeCarousel.css */ \"./client/styles/homeCarousel.css\");\n/* harmony import */ var _styles_homeCarousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homeCarousel_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"@fortawesome/free-regular-svg-icons\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n //icons\n\n\n\n\n\nvar HomeCarousel =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(HomeCarousel, _React$Component);\n\n  function HomeCarousel(props) {\n    var _this;\n\n    _classCallCheck(this, HomeCarousel);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomeCarousel).call(this, props));\n    _this.state = {\n      // homes\n      homeCarousel: null,\n      prevButton: null,\n      nextButton: null,\n      id: _this.props.id,\n      slideOffset: 0,\n      slidesTotal: _this.props.photos.length,\n      slideWidth: 300,\n      //I know, hardcoded, need to find a fix\n      slideMaxX: null,\n      controls: null,\n      //dots\n      indicatorDots: null,\n      dotsOffset: 0,\n      dotsindex: 0,\n      dotsTotal: _this.props.photos.length,\n      dotsWidth: 17,\n      //I know, hardcoded, need to find a fix\n      dotsMaxX: null,\n      allDots: null,\n      currDot: 0,\n      //modal\n      modal: null,\n      btn: null,\n      modalClose: null\n    }; // home\n\n    _this.moveSlides = _this.moveSlides.bind(_assertThisInitialized(_this)); // dots\n\n    _this.moveDots = _this.moveDots.bind(_assertThisInitialized(_this));\n    _this.setupDots = _this.setupDots.bind(_assertThisInitialized(_this)); //click left and right\n\n    _this.nextClick = _this.nextClick.bind(_assertThisInitialized(_this));\n    _this.prevClick = _this.prevClick.bind(_assertThisInitialized(_this)); //modal binding\n    // this.faveButtonClick = this.faveButtonClick.bind(this);\n    // this.modalCloseClick = this.modalCloseClick.bind(this);\n    // this.shadowClick = this.shadowClick.bind(this);\n\n    return _this;\n  } //for photos\n\n\n  _createClass(HomeCarousel, [{\n    key: \"moveSlides\",\n    value: function moveSlides(moveAmount) {\n      this.state.homeCarousel.style.transform = 'translateX(-' + moveAmount + 'px)'; // console.log(this.state.slidesWidth);\n    }\n  }, {\n    key: \"moveDots\",\n    // for dots\n    value: function moveDots(moveAmount) {\n      this.state.indicatorDots.style.transform = 'translateX(-' + moveAmount + 'px)';\n    }\n  }, {\n    key: \"nextClick\",\n    value: function nextClick() {\n      if (this.state.slideOffset !== this.state.slideMaxX) {\n        this.state.slideOffset += this.state.slideWidth;\n        this.moveSlides(this.state.slideOffset); //current dot highlight\n\n        this.state.indicatorDots.children[this.state.currDot].classList.remove('curr-dot');\n        this.state.currDot += 1;\n        this.state.indicatorDots.children[this.state.currDot].classList.add('curr-dot');\n      }\n\n      ; //delay dots movement to keep in center\n\n      if (this.state.dotsOffset !== this.state.dotsMaxX) {\n        if (this.state.currDot >= 4) {\n          if (this.state.currDot <= this.state.dotsTotal - 4) {\n            this.state.dotsOffset += this.state.dotsWidth;\n            this.moveDots(this.state.dotsOffset);\n\n            if (this.state.indicatorDots.children[this.state.currDot - 4].classList.contains('small-dots')) {\n              this.state.indicatorDots.children[this.state.currDot - 4].classList.remove('small-dots');\n            }\n\n            ;\n\n            if (this.state.indicatorDots.children[this.state.currDot + 2].classList.contains('small-dots')) {\n              this.state.indicatorDots.children[this.state.currDot + 2].classList.remove('small-dots');\n            }\n\n            ;\n            this.state.indicatorDots.children[this.state.currDot - 3].classList.add('small-dots');\n            this.state.indicatorDots.children[this.state.currDot + 3].classList.add('small-dots');\n\n            if (this.state.currDot === this.state.dotsTotal - 4) {\n              if (this.state.indicatorDots.children[this.state.dotsTotal - 1].classList.contains('small-dots')) {\n                this.state.indicatorDots.children[this.state.dotsTotal - 1].classList.remove('small-dots');\n              }\n\n              ;\n            }\n\n            ;\n          }\n\n          ;\n        }\n\n        ;\n      }\n\n      ;\n    }\n  }, {\n    key: \"prevClick\",\n    value: function prevClick() {\n      if (this.state.slideOffset !== 0) {\n        this.state.slideOffset -= this.state.slideWidth;\n        this.moveSlides(this.state.slideOffset); //current dot highlight\n\n        this.state.indicatorDots.children[this.state.currDot].classList.remove('curr-dot');\n        this.state.currDot -= 1;\n        this.state.indicatorDots.children[this.state.currDot].classList.add('curr-dot');\n      }\n\n      ; //delay dots movement to keep in center\n\n      if (this.state.dotsOffset !== 0) {\n        if (this.state.currDot >= 3) {\n          if (this.state.currDot <= this.state.dotsTotal - 5) {\n            this.state.dotsOffset -= this.state.dotsWidth;\n            this.moveDots(this.state.dotsOffset);\n\n            if (this.state.indicatorDots.children[this.state.currDot - 2].classList.contains('small-dots')) {\n              this.state.indicatorDots.children[this.state.currDot - 2].classList.remove('small-dots');\n            }\n\n            ;\n\n            if (this.state.indicatorDots.children[this.state.currDot + 4].classList.contains('small-dots')) {\n              this.state.indicatorDots.children[this.state.currDot + 4].classList.remove('small-dots');\n            }\n\n            ;\n            this.state.indicatorDots.children[this.state.currDot - 3].classList.add('small-dots');\n            this.state.indicatorDots.children[this.state.currDot + 3].classList.add('small-dots');\n\n            if (this.state.currDot === 3) {\n              if (this.state.indicatorDots.children[0].classList.contains('small-dots')) {\n                this.state.indicatorDots.children[0].classList.remove('small-dots');\n              }\n\n              ;\n            }\n          }\n\n          ;\n        }\n\n        ;\n      }\n\n      ;\n    }\n  }, {\n    key: \"setupDots\",\n    value: function setupDots() {\n      this.state.indicatorDots.children[0].classList.add('curr-dot');\n      this.state.indicatorDots.children[6].classList.add('small-dots');\n    } // faveButtonClick(){\n    //   this.state.modal.style.display = \"block\";\n    // };\n    // modalCloseClick() {\n    //   this.state.modal.style.display = \"none\";\n    // };\n    // shadowClick(event) {\n    //   if (event.target == modal) {\n    //     this.state.modal.style.display = \"none\";\n    //   }\n    // };\n\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.setState({\n        homeCarousel: document.querySelector('.home-carousel' + this.props.id),\n        prevButton: document.querySelector('.home-carousel-button-prev'),\n        nextButton: document.querySelector('.home-carousel-button-next'),\n        // slideWidth: setTimeout(() => {document.querySelector('.slide').style.width}, 0),\n        slideMaxX: this.state.slideWidth * (this.state.slidesTotal - 1),\n        indicatorDots: document.querySelector('.indicator-dots' + this.props.id),\n        dotsMaxX: this.state.dotsWidth * (this.state.dotsTotal - 7),\n        //modal\n        modal: document.querySelector(\".modal-shadow\"),\n        btn: document.getElementById(\"modal-btn\"),\n        modalClose: document.getElementsByClassName(\"close-modal\")[0]\n      });\n      setTimeout(function () {\n        _this2.setupDots();\n      }, 0);\n      jquery__WEBPACK_IMPORTED_MODULE_2___default()(\".home-button-wrapper\").hover(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css(\"opacity\", \"1\");\n      }, function () {\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css(\"opacity\", \"0\");\n      }); //MODAL\n      // var modal = document.getElementById(\"login-modal\");\n      // var btn = document.getElementById(\"modal-btn\");\n      // var modalClose = document.getElementsByClassName(\"close-modal\")[0];\n      // const faveButtonClick() => {\n      //   modal.style.display = \"block\";\n      //   console.log('clicked');\n      // };\n      // const modalCloseClick() => {\n      //   modal.style.display = \"none\";\n      // };\n      // const shadowClick (event) => {\n      //   if (event.target == modal) {\n      //     modal.style.display = \"none\";\n      //   }\n      // };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"home-carousel-wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: 'home-carousel' + this.props.id + '  home-carousel'\n      }, this.props.photos.map(function (photo, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"slide\",\n          key: i\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          src: photo,\n          key: i,\n          className: \"homes-img\"\n        }));\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"home-button-wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"home-carousel-button-prev\",\n        onClick: this.prevClick\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronLeft\"]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"home-carousel-button-next\",\n        onClick: this.nextClick\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronRight\"]\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"indicator-wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: 'indicator-dots' + this.props.id + ' indicator-dots'\n      }, this.props.photos.map(function (item, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"indicator-dot\",\n          key: i + 'id'\n        });\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"modal-btn\",\n        className: \"favorite\",\n        onClick: this.faveButtonClick\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faHeart\"]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"login-modal\",\n        className: \"modal-shadow\",\n        onClick: this.shadowClick\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"modal-contents\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"close-modal\",\n        onClick: this.modalCloseClick\n      }, \"\\xD7\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"SOMETHING HELLO? \"))));\n    }\n  }]);\n\n  return HomeCarousel;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeCarousel);\n\n//# sourceURL=webpack:///./client/components/HomeCarousel.jsx?");

/***/ }),

/***/ "./client/components/HomeDetail.jsx":
/*!******************************************!*\
  !*** ./client/components/HomeDetail.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_homeDetail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homeDetail.css */ \"./client/styles/homeDetail.css\");\n/* harmony import */ var _styles_homeDetail_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homeDetail_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar HomeDetail = function HomeDetail(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"detail-wrapper\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"detail-first-line\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, props.type.toUpperCase(), \" \\xB7 \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, props.location.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"detail-title\"\n  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"detail-cost\"\n  }, \"$\", props.cost, \"/night\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"detail-last-line\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"detail-star\"\n  }, \"\\u2605\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"detail-rating\"\n  }, props.rating), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"detail-reviews\"\n  }, \"(\", props.reviews, \")\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeDetail);\n\n//# sourceURL=webpack:///./client/components/HomeDetail.jsx?");

/***/ }),

/***/ "./client/components/MainCarousel.jsx":
/*!********************************************!*\
  !*** ./client/components/MainCarousel.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Carousel.css */ \"./client/styles/Carousel.css\");\n/* harmony import */ var _styles_Carousel_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Carousel_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _HomeCarousel_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeCarousel.jsx */ \"./client/components/HomeCarousel.jsx\");\n/* harmony import */ var _HomeDetail_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HomeDetail.jsx */ \"./client/components/HomeDetail.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* eslint-disable no-undef */\n\n/* eslint class-methods-use-this: [\"error\", { \"exceptMethods\": [\"moveCarousel\", \"componentDidMount\"] }] */\n\n\n // icons\n\n\n\n\n\n\nvar MainCarousel =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(MainCarousel, _React$Component);\n\n  // eslint-disable-next-line no-useless-constructor\n  function MainCarousel(props) {\n    var _this;\n\n    _classCallCheck(this, MainCarousel);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainCarousel).call(this, props));\n    _this.state = {\n      offset: 0,\n      max: null\n    };\n    _this.handleNextClick = _this.handleNextClick.bind(_assertThisInitialized(_this));\n    _this.handlePrevClick = _this.handlePrevClick.bind(_assertThisInitialized(_this));\n    _this.toggleButton = _this.toggleButton.bind(_assertThisInitialized(_this));\n    _this.setMax = _this.setMax.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(MainCarousel, [{\n    key: \"handlePrevClick\",\n    value: function handlePrevClick() {\n      var _this2 = this;\n\n      if (this.state.offset !== 0) {\n        this.setState({\n          offset: this.state.offset - 320\n        }, function () {\n          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.main-carousel').css('transform', \"translateX(-\".concat(_this2.state.offset, \"px)\"));\n\n          _this2.toggleButton();\n        });\n      }\n    }\n  }, {\n    key: \"handleNextClick\",\n    value: function handleNextClick() {\n      var _this3 = this;\n\n      if (this.state.offset !== (this.state.max || 321)) {\n        this.setState({\n          offset: this.state.offset + 320\n        }, function () {\n          jquery__WEBPACK_IMPORTED_MODULE_1___default()('.main-carousel').css('transform', \"translateX(-\".concat(_this3.state.offset, \"px)\"));\n\n          _this3.setMax();\n\n          _this3.toggleButton();\n        });\n      }\n    }\n  }, {\n    key: \"toggleButton\",\n    value: function toggleButton() {\n      if (this.state.offset !== 0) {\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.main-carousel-button-prev').removeClass('is-hidden');\n      }\n\n      if (this.state.offset === 0) {\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.main-carousel-button-prev').addClass('is-hidden');\n      }\n\n      if (this.state.offset === (this.state.max || 321)) {\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.main-carousel-button-next').addClass('is-hidden');\n      }\n\n      if (this.state.offset !== (this.state.max || 321)) {\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.main-carousel-button-next').removeClass('is-hidden');\n      }\n    }\n  }, {\n    key: \"setMax\",\n    value: function setMax() {\n      var oneWidth = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.card').first()[0].offsetWidth;\n      var totalMargin = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.card').first()[0].offsetLeft * 2;\n      var max = (this.props.homes.length - 3) * (oneWidth + totalMargin);\n      this.setState({\n        max: max\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"all-wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-carousel-button-prev is-hidden\",\n        onClick: this.handlePrevClick\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronLeft\"]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-carousel-wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"main-carousel\"\n      }, this.props.homes.map(function (home) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"card\",\n          key: home.id,\n          id: home.id\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeCarousel_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          photos: home.photos,\n          key: home.id.toString(),\n          id: home.id\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeDetail_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          id: home.id,\n          title: home.title,\n          location: home.location,\n          cost: home.cost,\n          rating: home.rating,\n          reviews: home.reviews,\n          type: home.type\n        }));\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-carousel-button-next\",\n        onClick: this.handleNextClick\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronRight\"]\n      })));\n    }\n  }]);\n\n  return MainCarousel;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainCarousel); // componentDidMount() {\n// $('document').ready(() => {\n//   console.log('document is ready');\n//   const mainCarousel = $('.main-carousel');\n//   const leftButton = $('.main-carousel-button-prev');\n//   const rightButton = $('.main-carousel-button-next');\n//   console.log('cards >', $('.card'));\n//   const cards = Array.from(mainCarousel.children()); // array of cards\n//   console.log('cards', cards);\n//   const getCardWidth = () => {\n//     const oneWidth = cards.length > 0 ? cards[0].offsetWidth : 0;\n//     const totalMargin = cards.length > 0 ? cards[0].offsetLeft * 2 : 0;\n//     return oneWidth + totalMargin;\n//   };\n//   const cardWidth = getCardWidth(); // 320\n//   // track which cards should be displayed.\n//   let offset = 0;\n//   const maxX = (cards.length - 3) * cardWidth;\n//   const moveCards = (moveAmount) => {\n//     mainCarousel.style.transform = `translateX(-${moveAmount}px)`;\n//   };\n//   // used to hide arrows when advancing in that direction is not an option.\n//   const toggleArrows = () => {\n//     if (offset === 0) {\n//       leftButton.addClass('is-hidden');\n//     } else if (offset === maxX) {\n//       rightButton.addClass('is-hidden');\n//     } else {\n//       leftButton.removeClass('is-hidden');\n//       rightButton.removeClass('is-hidden');\n//     }\n//   };\n//   rightButton.on('click', () => {\n//     // shift cards\n//     console.log('right button clicked');\n//     if (offset !== maxX) {\n//       offset += cardWidth;\n//       moveCards(offset);\n//     }\n//     toggleArrows();\n//   });\n//   leftButton.on('click', () => {\n//     if (offset !== 0) {\n//       offset -= cardWidth;\n//       moveCards(offset);\n//     }\n//     toggleArrows();\n//   });\n// });\n// }\n\n//# sourceURL=webpack:///./client/components/MainCarousel.jsx?");

/***/ }),

/***/ "./client/styles/Carousel.css":
/*!************************************!*\
  !*** ./client/styles/Carousel.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Carousel.css */ \"./node_modules/css-loader/dist/cjs.js!./client/styles/Carousel.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/styles/Carousel.css?");

/***/ }),

/***/ "./client/styles/homeCarousel.css":
/*!****************************************!*\
  !*** ./client/styles/homeCarousel.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./homeCarousel.css */ \"./node_modules/css-loader/dist/cjs.js!./client/styles/homeCarousel.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/styles/homeCarousel.css?");

/***/ }),

/***/ "./client/styles/homeDetail.css":
/*!**************************************!*\
  !*** ./client/styles/homeDetail.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./homeDetail.css */ \"./node_modules/css-loader/dist/cjs.js!./client/styles/homeDetail.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/styles/homeDetail.css?");

/***/ }),

/***/ "./client/styles/style.css":
/*!*********************************!*\
  !*** ./client/styles/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/styles/style.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/styles/style.css?");

/***/ }),

/***/ "./database/index.js":
/*!***************************!*\
  !*** ./database/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Pool = _require.Pool;\n\nvar pool = new Pool({\n  user: process.env.DB_USER,\n  host: process.env.DB_HOST,\n  database: process.env.DB,\n  password: process.env.DB_PASS,\n  port: process.env.DB_PORT\n});\npool.connect() // eslint-disable-next-line no-console\n.then(function () {\n  return console.log('postgres connected');\n})[\"catch\"](function (err) {\n  return console.error('postgres connection error', err.stack);\n});\nmodule.exports = pool;\n\n//# sourceURL=webpack:///./database/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/styles/Carousel.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/styles/Carousel.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n\\n.all-wrapper{\\n  position: relative;\\n  width: 1000px;\\n  margin: 0 auto;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.main-carousel-wrapper {\\n  position: relative;\\n  overflow: hidden;\\n  width: 960px;\\n  height: 350px;\\n  margin: 0 auto;\\n}\\n\\n/*\\n.button-wrapper {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: relative;\\n  margin: auto 0;\\n  float: left;\\n  vertical-align: middle;\\n  border: 10px solid red;\\n}\\n*/\\n\\n.main-carousel {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  width: 100%;\\n  display: flex;\\n  position: absolute;\\n  left: 0;\\n  transition: all 1s ease;\\n}\\n\\n.card {\\n  min-width: 300px;\\n  height: 350px;\\n  margin: 0 10px;\\n  display: inline-block;\\n\\n  /* temp style */\\n  /* background: rgb(238, 225, 227); */\\n}\\n\\n.main-carousel-button-prev{\\n  float: left;\\n  cursor: pointer;\\n  font-size: 25px;\\n  color: #282828;\\n\\n}\\n\\n.main-carousel-button-next{\\n  float: right;\\n  cursor: pointer;\\n  font-size: 25px;\\n  color: #282828;\\n\\n}\\n\\n.is-hidden{\\n  display: none;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./client/styles/Carousel.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/styles/homeCarousel.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/styles/homeCarousel.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".home-carousel-wrapper {\\n  position: relative;\\n  overflow: hidden;\\n  width: 300px;\\n  height: 220px;\\n  margin: 0 auto;\\n}\\n\\n.home-button-wrapper {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: relative;\\n  margin: auto 0;\\n  float: left;\\n  vertical-align: middle;\\n  z-index: 10;\\n  opacity: 0;\\n}\\n\\n.home-carousel {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  width: 100%;\\n  display: flex;\\n  position: absolute;\\n  left: 0;\\n  transition: all 1s ease;\\n\\n}\\n\\n.slide {\\n  min-width: 300px;\\n  height: 220px;\\n  margin: 0px;\\n  display: inline-block;\\n  overflow: hidden;\\n  border-radius: 5px;\\n  background-color: #DCDCDC;\\n\\n  /* temp style */\\n  /* background: rgb(190, 10, 70); */\\n}\\n\\n .homes-img { /* use className so it doesn't conflict with anyone else  */\\n  height: 100%;\\n  display: block;\\n  margin: 0 auto;\\n\\n}\\n\\n.home-carousel-button-prev {\\n  /* border: 2px solid peru; */\\n  /* display: none; */\\n  padding: 50% 20px;\\n  cursor: pointer;\\n  font-size: 25px;\\n  color: white;\\n  background-image: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.3));\\n}\\n\\n.home-carousel-button-next {\\n  /* border: 2px solid peru; */\\n  /* display: none; */\\n  padding: 50% 20px;\\n  cursor: pointer;\\n  font-size: 25px;\\n  color: white;\\n  background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.3));\\n}\\n\\n.indicator-wrapper {\\n  position: relative;\\n   width: 119px;\\n  height: 20px;\\n  /* border: 3px solid darkolivegreen; */\\n  margin: 0 auto;\\n  overflow: hidden;\\n  z-index: 9;\\n  bottom: 25px;\\n}\\n\\n.indicator-dots {\\n  position: absolute;\\n  display: flex;\\n  white-space: nowrap;\\n  margin: 0;\\n  padding: 0;\\n  left: 0;\\n  transition: all 1s ease;\\n  list-style: none;\\n}\\n\\n.indicator-dot {\\n display: inline-block;\\n vertical-align: top;\\n width: 7px;\\n height: 7px;\\n border-radius: 50%;\\n margin: auto 5px;\\n background-color: #E0E0E0;\\n}\\n\\n.curr-dot {\\n  width: 9px;\\n  height: 9px;\\n  margin: auto 4px;\\n  border-radius: 50%;\\n  background-color: white;\\n}\\n\\n.small-dots {\\n  width: 5px;\\n  height: 5px;\\n  margin: auto 6px;\\n  border-radius: 50%;\\n  background-color: #E0E0E0;\\n}\\n\\n/*\\nMath\\n7 to display\\n5+7+5 = 17px wide\\n17 * 7 = 119\\n\\n-small dots-\\nmargin 6\\nwidth 5\\n\\n-big dot-\\nmargin 4\\nwidth 9\\n\\noffsetstart\\n68\\n*/\\n\\n.favorite {\\n  position: absolute;\\n  float: right;\\n  top: 8px;\\n  right: 8px;\\n  font-size: 24px;\\n  z-index: 11;\\n  color: white;\\n}\\n\\n.modal-shadow {\\n  display: none; /* Hidden by default */\\n  position: fixed; /* Stay in place */\\n  z-index: 100; /* Sit on top */\\n  /* padding-top: 100px; Location of the box */\\n  left: 0;\\n  top: 0;\\n  width: 100%; /* Full width */\\n  height: 100%; /* Full height */\\n  overflow: auto; /*Enable scroll if needed */\\n  background-color: rgb(0,0,0); /* Fallback color */\\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\\n}\\n\\n/* Modal Content */\\n.modal-contents {\\n  background-color: #fefefe;\\n  margin: auto;\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 80%;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n/* The Close Button */\\n.close-modal {\\n  color: #aaaaaa;\\n  float: left;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n\\n.close-modal:hover,\\n.close-modal:focus {\\n  color: #000;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./client/styles/homeCarousel.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/styles/homeDetail.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/styles/homeDetail.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \".detail-first-line {\\n  font-family: 'Montserrat', sans-serif;\\n  font-weight: 600;\\n  font-size: 12px;\\n  margin-top: 12px;\\n  color: #585858;\\n}\\n\\n.detail-title {\\n  font-family: 'Montserrat', sans-serif;\\n  font-weight: 600;\\n  font-size: 18px;\\n  margin-top: 7px;\\n  color: #282828;\\n}\\n\\n.detail-cost {\\n  font-family: 'Montserrat', sans-serif;\\n  font-weight: 400;\\n  font-size: 14px;\\n  margin-top: 7px;\\n  color: #585858;\\n}\\n\\n.detail-rating {\\n  font-family: 'Montserrat', sans-serif;\\n  font-weight: 600;\\n  font-size: 12px;\\n\\n  color: #282828;\\n}\\n\\n.detail-reviews {\\n  font-family: 'Montserrat', sans-serif;\\n  font-weight: 400;\\n  font-size: 12px;\\n\\n  color: #585858;\\n}\\n\\n.detail-star {\\n  color: #00A699;\\n  font-size: 12px;\\n\\n}\\n\\n.detail-last-line {\\n  margin-top: 5px;\\n}\\n\\n\\n/* font-family: 'Montserrat', sans-serif; */\", \"\"]);\n\n\n//# sourceURL=webpack:///./client/styles/homeDetail.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/styles/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/styles/style.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \".main-wrapper {\\n  width: 100%;\\n\\n}\\n.module-title {\\n  width: 1000px;\\n  margin: 0 auto;\\n  padding: 24px 0;\\n\\n  font-family: 'Montserrat', sans-serif;\\n  font-weight: 600;\\n  font-size: 24px;\\n\\n  color: #282828;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./client/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./server/controller.js":
/*!******************************!*\
  !*** ./server/controller.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var db = __webpack_require__(/*! ../database/index */ \"./database/index.js\");\n\nvar Create = function Create(req, res) {\n  var queryArgs = [req.body.id, req.body.title, req.body.location, req.body.cost, req.body.rating, req.body.reviews, req.body.type, req.body.favorite, req.body.photos];\n  var queryStr = 'INSERT INTO newhomes VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)';\n  db.query(queryStr, queryArgs).then(function () {\n    res.sendStatus(201);\n  })[\"catch\"](function (err) {\n    console.error('create fail', err);\n    res.sendStatus(500);\n  });\n};\n/** read from homes table, NOT IN USE */\n// eslint-disable-next-line no-unused-vars\n// const $Read = (req, res) => {\n//   const { id } = req.query;\n//   const queryStr = 'SELECT similarhomes FROM homes WHERE id = ($1)';\n//   db.query(queryStr, [id])\n//     .then((data) => {\n//       const similarHomesIds = data.rows[0].similarhomes;\n//       const homes = [];\n//       const promises = similarHomesIds.map((similarHomeId) => (\n//         db.query('SELECT * FROM homes WHERE id = ($1)', [similarHomeId])\n//           .then((home) => {\n//             homes.push(home.rows[0]);\n//           })\n//           .catch((err) => {\n//             console.error('read fail', err);\n//             res.sendStatus(500);\n//           })\n//       ));\n//       Promise.all(promises)\n//         .then(() => {\n//           res.json(homes);\n//         })\n//         .catch((err) => {\n//           console.error(err);\n//           res.sendStatus(500);\n//         });\n//     })\n//     .catch((err) => {\n//       console.error(err);\n//       res.sendStatus(500);\n//     });\n// };\n\n/** read from newhomes and homerelations tables */\n\n\nvar Read = function Read(req, res) {\n  var id = req.query.id;\n  var queryStr = 'SELECT * FROM newhomes INNER JOIN homerelation ON newhomes.id = homerelation.similarhomeid WHERE homerelation.homeid = $1';\n  db.query(queryStr, [id]).then(function (data) {\n    res.json(data.rows);\n  })[\"catch\"](function (err) {\n    console.error(err);\n    res.sendStatus(500);\n  });\n};\n/** read from combined tables */\n// const $$Read = (req, res) => {\n//   const { id } = req.query;\n//   const queryStr = 'SELECT * FROM combined WHERE homeid = $1';\n//   db.query(queryStr, [id])\n//     .then((data) => {\n//       res.json(data.rows);\n//     })\n//     .catch((err) => {\n//       console.error(err);\n//       res.sendStatus(500);\n//     });\n// };\n\n\nvar Update = function Update(req, res) {\n  var queryArgs = [req.body.id, req.body.title, req.body.location, req.body.cost, req.body.rating, req.body.reviews, req.body.type, req.body.favorite, req.body.photos];\n  var queryStr = 'UPDATE newhomes SET title = $2, location = $3, cost = $4, rating = $5, reviews = $6, type = $7, favorite = $8, photos = $9 WHERE id = $1';\n  db.query(queryStr, queryArgs).then(function (_result) {\n    // console.log('update success', result.rowCount);\n    res.sendStatus(202);\n  })[\"catch\"](function (err) {\n    console.error('update fail', err);\n    res.sendStatus(500);\n  });\n};\n\nvar Delete = function Delete(req, res) {\n  var queryArgs = [req.query.id];\n  var queryStr = 'DELETE FROM newhomes WHERE id = $1';\n  db.query(queryStr, queryArgs).then(function (_result) {\n    // console.log('delete success', result.rowCount);\n    res.sendStatus(202);\n  })[\"catch\"](function (err) {\n    console.error('delete fail', err);\n    res.sendStatus(500);\n  });\n};\n\nmodule.exports = {\n  Create: Create,\n  Read: Read,\n  Update: Update,\n  Delete: Delete\n};\n\n//# sourceURL=webpack:///./server/controller.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_app_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/app.jsx */ \"./client/app.jsx\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller */ \"./server/controller.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_controller__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvar Console = console;\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\nvar port = process.env.PORT || 3022;\napp.use(morgan__WEBPACK_IMPORTED_MODULE_6___default()('dev'));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a[\"static\"]('public'));\napp.get('/', function (req, res) {\n  var reactHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_client_app_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null));\n  var indexFile = '/Users/jenny/dev/hrr41/sdc/more-homes-module/public/index.html';\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Error Message >', err);\n      return res.status(500).send('Oops!');\n    }\n\n    res.send(data.replace('<div id=\"more\"></div>', \"<div id=\\\"more\\\">\".concat(reactHtml, \"</div>\")));\n  });\n});\napp.post('/homes', _controller__WEBPACK_IMPORTED_MODULE_8___default.a.Create);\napp.get('/homes', _controller__WEBPACK_IMPORTED_MODULE_8___default.a.Read);\napp.put('/homes', _controller__WEBPACK_IMPORTED_MODULE_8___default.a.Update);\napp[\"delete\"]('/homes', _controller__WEBPACK_IMPORTED_MODULE_8___default.a.Delete);\napp.listen(port, function () {\n  Console.log(\"Listening on port \".concat(port));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/free-regular-svg-icons\");\n\n//# sourceURL=webpack:///external_%22@fortawesome/free-regular-svg-icons%22?");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/free-solid-svg-icons\");\n\n//# sourceURL=webpack:///external_%22@fortawesome/free-solid-svg-icons%22?");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/react-fontawesome\");\n\n//# sourceURL=webpack:///external_%22@fortawesome/react-fontawesome%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jquery\");\n\n//# sourceURL=webpack:///external_%22jquery%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });