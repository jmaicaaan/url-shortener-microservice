'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _intro = require('./intro/intro.handler');

Object.keys(_intro).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _intro[key];
    }
  });
});

var _urlShortener = require('./url-shortener/url-shortener.handler');

Object.keys(_urlShortener).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _urlShortener[key];
    }
  });
});