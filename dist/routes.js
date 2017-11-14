'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _index = require('./handlers/index');

function routes(app) {
  app.get('/', _index.introHandler);
  app.get('/url?:url', _index.urlShortenerHandler);
  app.get('/url/:id', _index.redirectUrlHandler);
};