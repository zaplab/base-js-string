/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zapBaseJsString = __webpack_require__(1);

	describe('zap-base-js-string', function () {
	    beforeEach(function () {});

	    afterEach(function () {});

	    describe('zap-base.string should have the following methods', function () {
	        it('capitalize', function () {
	            expect(_zapBaseJsString.capitalize).toEqual(jasmine.any(Function));
	        });
	        it('capitalizeFirstLetter', function () {
	            expect(_zapBaseJsString.capitalizeFirstLetter).toEqual(jasmine.any(Function));
	        });

	        it('camelize', function () {
	            expect(_zapBaseJsString.camelize).toEqual(jasmine.any(Function));
	        });

	        it('dasherize', function () {
	            expect(_zapBaseJsString.dasherize).toEqual(jasmine.any(Function));
	        });
	    });

	    describe('capitalize', function () {
	        it('capitalize("abc def ghi") should return "Abc Def Ghi"', function () {
	            expect((0, _zapBaseJsString.capitalize)('abc def ghi')).toEqual('Abc Def Ghi');
	        });
	    });

	    describe('capitalizeFirstLetter', function () {
	        it('capitalizeFirstLetter("abcdefghi") should return "Abcdefghi"', function () {
	            expect((0, _zapBaseJsString.capitalizeFirstLetter)('abcdefghi')).toEqual('Abcdefghi');
	        });
	    });

	    describe('camelize', function () {
	        it('camelize("abc-def-ghi") should return "abcDefGhi"', function () {
	            expect((0, _zapBaseJsString.camelize)('abc-def-ghi')).toEqual('abcDefGhi');
	        });

	        it('camelize("abcDefGhi") should return "abcDefGhi"', function () {
	            expect((0, _zapBaseJsString.camelize)('abcDefGhi')).toEqual('abcDefGhi');
	        });
	    });

	    describe('dasherize', function () {
	        it('dasherize("AbcDefGhi") should return "abc-def-ghi"', function () {
	            expect((0, _zapBaseJsString.dasherize)('AbcDefGhi')).toEqual('abc-def-ghi');
	        });

	        it('dasherize("abc-def-ghi") should return "abc-def-ghi"', function () {
	            expect((0, _zapBaseJsString.dasherize)('abc-def-ghi')).toEqual('abc-def-ghi');
	        });
	    });

	    describe('slugify', function () {
	        it('slugify(" 12345@# tRaLala _*( ) ") should return "12345-tralala"', function () {
	            expect((0, _zapBaseJsString.slugify)(' 12345@# tRaLala _*( ) ')).toEqual('12345-tralala');
	            expect((0, _zapBaseJsString.slugify)(' 1-2345@# tRaLala _*( ) ')).toEqual('1-2345-tralala');
	            expect((0, _zapBaseJsString.slugify)(' 1_2345@# tRaLala _*( ) ')).toEqual('1_2345-tralala');
	        });

	        it('slugify(" 12345@# tRaLala _*( ) ", "_") should return "12345_tralala"', function () {
	            expect((0, _zapBaseJsString.slugify)(' 12345@# tRaLala _*( ) ', '_')).toEqual('12345_tralala');
	            expect((0, _zapBaseJsString.slugify)(' 1-2345@# tRaLala _*( ) ', '_')).toEqual('1-2345_tralala');
	            expect((0, _zapBaseJsString.slugify)(' 1_2345@# tRaLala _*( ) ', '_')).toEqual('1_2345_tralala');
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.capitalize = capitalize;
	exports.capitalizeFirstLetter = capitalizeFirstLetter;
	exports.camelize = camelize;
	exports.dasherize = dasherize;
	exports.slugify = slugify;

	/**
	 * @param {String} value
	 * @returns {String}
	 */
	function capitalize(value) {
	    return value.replace(/(?:^|\s)\S/g, function (letter) {
	        return letter.toUpperCase();
	    });
	}

	/**
	 * @param {String} value
	 * @returns {String}
	 */
	function capitalizeFirstLetter(value) {
	    return value.charAt(0).toUpperCase() + value.slice(1);
	}

	/**
	 * @param {String} value
	 * @returns {String}
	 */
	function camelize(value) {
	    // thanks to zeptojs
	    return value.replace(/-+(.)?/g, function (match, newValue) {
	        return newValue ? newValue.toUpperCase() : '';
	    });
	}

	/**
	 * @param {String} value
	 * @returns {String}
	 */
	function dasherize(value) {
	    // thanks to zeptojs
	    return value.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
	}

	/**
	 * @param {String} value
	 * @param {String} [separator] allows '-' or '_'
	 * @returns {String}
	 */
	function slugify(value) {
	    var separator = arguments.length <= 1 || arguments[1] === undefined ? '-' : arguments[1];

	    return value.toString().trim().toLowerCase().replace(/[^\w\s_-]/g, '').replace(/[\s]+/g, separator).replace(/[_-]{2,}/g, separator).replace(/^_+|_+$/g, '').replace(/^-+|-+$/g, '');
	}

/***/ }
/******/ ]);