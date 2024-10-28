// models/User.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    static associate(models) {
        Operation.hasOne(models.Symbol, {foreignKey: 'id_sym', as: 'symbol'})  
        Operation.hasOne(models.Status, {foreignKey: 'id_st', as: 'status'})
        Operation.hasOne(models.Timeframe, {foreignKey: 'name_tf', as: 'timeframe'})
        Operation.hasOne(models.Account, {foreignKey: 'id_ac', as: 'account'})
        Operation.hasMany(models.Opcomment, {foreignKey: 'id_op', as: 'opcomment'})

    }
  }

  Operation.init(
    {
      updown: DataTypes.INTEGER,
      //class attrs...
    },
    {
      sequelize,
      modelName: 'Operation',
    }
  );

  return User;
};
