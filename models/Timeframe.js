const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Timeframe extends Model {
    static associate(models) {
        Status.hasMany(models.Operation, {foreignKey: 'id_op', as: 'operation'})
        Status.hasMany(models.Projection, {foreignKey: 'id_proj', as: 'projection'})    }
  }

  Timeframe.init(
    {
      name_tf: {
        type: DataTypes.CHAR(5),
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Timeframe',
      tableName: 'Timeframe',
      timestamps: false, 
    }
  );

  return Timeframe;
};
