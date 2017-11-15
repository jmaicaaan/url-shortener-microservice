'use strict';
module.exports = (sequelize, DataTypes) => {
  var Url = sequelize.define('Url', {
    original_url: DataTypes.STRING
  }, {
    freezeTableName: true, // avoid making the table name plural
    createdAt: false,
    updatedAt: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Url;
};