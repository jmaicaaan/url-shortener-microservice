'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirectUrlHandler = exports.urlShortenerHandler = undefined;

var _urlParse = require('url-parse');

var _urlParse2 = _interopRequireDefault(_urlParse);

var _validUrl = require('valid-url');

var _url = require('../../services/url.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var urlService = new _url.UrlService();

function urlShortenerHandler(req, res) {
  var url = req.query.url;
  if (url && (0, _validUrl.isUri)(url)) {
    return urlService.addUrl(url).then(function (data) {
      res.send({ shortendUrl: shortenUrl(req, data.id), url: data.original_url });
    });
  } else {
    return res.status(500).send({ error: 'Given URL is invalid. Please try again with a valid URL' });
  }
}

function redirectUrlHandler(req, res) {
  var urlId = req.params.id;
  return urlService.findUrlById(urlId).then(function (data) {
    return res.redirect(data.original_url);
  }).catch(function (err) {
    return res.send(err);
  });
}

function shortenUrl(req, id) {
  var host = req.headers.host || req.headers.origin;
  return [host, 'url', id].join('/');
}

exports.urlShortenerHandler = urlShortenerHandler;
exports.redirectUrlHandler = redirectUrlHandler;