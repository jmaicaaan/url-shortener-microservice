'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SequelService = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequelService = function SequelService() {
  var _this = this;

  _classCallCheck(this, SequelService);

  this.getInstance = function () {
    return _this._sequel;
  };

  if (process.env.NODE_ENV == 'PRODUCTION') {
    this._sequel = new _sequelize2.default(process.env.DATABASE_URL, {
      dialectOptions: {
        ssl: true
      }
    });
  } else {
    this._sequel = new _sequelize2.default('fcc-url-ms', 'postgres', 'jmsantos17', {
      host: 'localhost',
      dialect: 'postgres'
    });
  }
};

exports.SequelService = SequelService;