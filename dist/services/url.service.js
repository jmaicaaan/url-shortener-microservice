'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlService = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequel = require('./sequel.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Url = require('../../models/url');

var UrlService = function UrlService() {
  var _this = this;

  _classCallCheck(this, UrlService);

  this.addUrl = function (originalUrl) {
    if (originalUrl) {
      return _this._url.findOrCreate({
        where: {
          original_url: originalUrl
        }
      }).spread(function (url) {
        return url.dataValues;
      });
    }
    throw 'No original URL or short URL passed';
  };

  this.findUrlById = function (id) {
    if (id) {
      return _this._url.findOne({
        where: {
          id: id
        }
      }).then(function (data) {
        return data;
      });
    }
  };

  this.reset = function () {
    _this._url.sync({ force: true });
  };

  var sequel = new _sequel.SequelService().getInstance();
  this._url = Url(sequel, _sequelize2.default);
};

exports.UrlService = UrlService;