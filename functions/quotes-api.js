(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 540);
/******/ })
/************************************************************************/
/******/ ({

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.handler = function (event, context, callback) {

  const allBob = ["We don't make mistakes, just happy little accidents.", "Talent is a pursued interest. Anything that you're willing to practice, you can do.", "I guess I’m a little weird. I like to talk to trees and animals. That’s okay though; I have more fun than most people", "wash the brush, just beats the devil out of it.", "Believe that you can do it cause you can do it.", "There's nothing in the world that breeds success like success", "Lets build a happy little cloud.Lets build some happy little trees", "Now then, let's come right down in here and put some nice big strong arms on these trees. Tree needs an arm too. It'll       hold up the weight of the forest. Little bird has to have a place to set there. There he goes...", "wash the brush, just beats the devil out of it.", "That's a crooked tree. We'll send him to Washington.", "In painting you have unlimited power. You have the ability to move mountains. You can bend rivers. But when I get home,        the only thing I have power over is the garbage."];

  var randomBob = allBob.join(', ');

  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      randomBob,
      allBob
    })
  });
};

/***/ })

/******/ })));