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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var _this = this;

window.addEventListener('DOMContentLoaded', function () {
  var game = document.getElementById('canvas');
  var GAME_WIDTH = game.width;
  var GAME_HEIGHT = game.height;
  var ctx = game.getContext('2d');

  var erase = function () {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  }.bind(_this);

  function Sprite(url, sheetX, sheetY, x, y, ctx) {
    this.url = url;
    this.x = x;
    this.y = y;
    this.sheetX = sheetX;
    this.sheetY = sheetY;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = url;
  }

  Sprite.prototype.moveSpriteSheet = function () {};

  Sprite.prototype.draw = function () {
    console.log(_this);
    ctx.drawImage(_this.image, _this.sheetX, _this.sheetY, _this.x, _this.y);
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  };

  function InputTracker() {
    var _this2 = this;

    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    window.addEventListener("keydown", function (e) {
      console.log(e.keyCode);

      if (e.keyCode === 65 || e.keyCode === 37) {
        _this2.left = true;
      }

      if (e.keyCode === 68 || e.keyCode === 39) {
        _this2.right = true;
      }

      if (e.keyCode === 83 || e.keyCode === 40) {
        _this2.down = true;
      }

      if (e.keyCode === 87 || e.keyCode === 38) {
        _this2.up = true;
      }
    });
    window.addEventListener("keyup", function (e) {
      if (e.keyCode === 65 || e.keyCode === 37) {
        _this2.left = false;
      }

      if (e.keyCode === 68 || e.keyCode === 39) {
        _this2.right = false;
      }

      if (e.keyCode === 83 || e.keyCode === 40) {
        _this2.down = false;
      }

      if (e.keyCode === 87 || e.keyCode === 38) {
        _this2.up = false;
      }
    });
  }

  function moveSprite(sprite, tracker) {
    var left = tracker.left,
        right = tracker.right,
        up = tracker.up,
        down = tracker.down;

    if (up && left) {
      sprite.x--;
      sprite.y--;
    } else if (up && right) {
      sprite.x++;
      sprite.y--;
    } else if (down && left) {
      sprite.x--;
      sprite.y++;
    } else if (down && right) {
      sprite.x++;
      sprite.y++;
    } else if (left) {
      sprite.x--;
    } else if (right) {
      sprite.x++;
    } else if (down) {
      sprite.y++;
    } else if (up) {
      sprite.y--;
    }

    erase();
    sprite.ctx.drawImage(sprite.image, sprite.sheetX, sprite.sheetY, 64, 64, sprite.x, sprite.y, 64, 64);
    sprite.sheetX = (sprite.sheetX + 64) % 256;
  }

  var rocketSnail = new Sprite("./src/images/rocket_snail.png", 0, 0, 64, 64, ctx);

  rocketSnail.image.onload = function () {
    ctx.drawImage(rocketSnail.image, rocketSnail.sheetX, rocketSnail.sheetY, 64, 64, rocketSnail.x, rocketSnail.y, 64, 64);
  };

  var tracker = new InputTracker();

  var gameLoop = function gameLoop(timestamp) {
    // look into throttling this
    erase();
    moveSprite(rocketSnail, tracker);
    window.requestAnimationFrame(gameLoop);
  };

  window.requestAnimationFrame(gameLoop);
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map