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
        Operation.belongsTo(models.Projection, {foreignKey: 'id_proj', as: 'projection'})

    }
  }

  Operation.init(
    {
      id_op: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      time_op: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      time_close: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      graph: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      rr_ratio: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      volume: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      revenue: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },

      updown: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      checklist: {
        type: DataTypes.TEXT('long'),
        allowNull: true,
      },
      inserted_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Operation',
    }
  );

  return Operation;
};
