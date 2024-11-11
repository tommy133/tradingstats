// models/User.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Opcomment extends Model {
    static associate(models) {
      Opcomment.hasOne(models.Operation, {foreignKey: 'id_op', as: 'operation'})  
    }
  }

  Opcomment.init(
    {
      id_opc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false,
      },
      comment: DataTypes.TEXT,
      inserted_at:{
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    },
    {
      sequelize,
      modelName: 'opcomment',
    }
  );

  return Opcomment;
};
