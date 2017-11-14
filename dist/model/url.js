'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Url = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Url = {
  name: 'Url',
  attributes: {
    original_url: {
      type: _sequelize2.default.STRING
    }
  },
  options: {
    freezeTableName: true, // avoid making the table name plural
    createdAt: false,
    updatedAt: false
  }
};

exports.Url = Url;