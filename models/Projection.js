const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Projection extends Model {
    static associate(models) {
      Projection.hasOne(models.Symbol, { foreignKey: 'id_sym', as: 'symbol' });
      Projection.hasOne(models.Timeframe, { foreignKey: 'name_tf', as: 'timeframe' });
      Projection.hasOne(models.Status, { foreignKey: 'id_st', as: 'status' });
      Projection.hasMany(models.Pcomment, {foreignKey: 'id_pc', as: 'pcomment'})
    Projection.belongsTo(models.Operation, {foreignKey: 'id_op', as: 'operation'})
    }
  }

  Projection.init(
    {
      id_proj: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      updown: {
        type: DataTypes.BOOLEAN, 
        allowNull: true,
      },
      date_proj: {
        type: DataTypes.DATEONLY, 
        allowNull: true,
      },
      graph: {
        type: DataTypes.STRING(255),
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
      modelName: 'Projection',
      tableName: 'Projection',
      timestamps: false,
    }
  );

  return Projection;
};
