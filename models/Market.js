const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Market extends Model {
    static associate(models) {
        Market.hasMany(models.Symbol, {foreignKey: 'id_sym', as: 'symbol'})
    }
  }

  Market.init(
    {
      id_mkt: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_mkt: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Market',
      tableName: 'Market',
      timestamps: false, 
    }
  );

  return Market;
};
