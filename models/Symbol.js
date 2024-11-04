const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Symbol extends Model {
    static associate(models) {
      Symbol.hasOne(models.Market, {foreignKey: 'id_mkt', as: 'market'})
    }
  }

  Symbol.init(
    {
      id_sym: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_sym: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      bt_checkpoint: {
        type: DataTypes.DATE,
        allowNull: true,
      },

    },
    {
      sequelize,
      modelName: 'Symbol',
      tableName: 'Symbol', // Optionally specify the table name if different from the model name
      timestamps: false, // Set to true if your table has `createdAt` and `updatedAt` fields
    }
  );

  return Symbol;
};
