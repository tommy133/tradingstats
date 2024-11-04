const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Account extends Model {
    static associate(models) {
        Status.hasMany(models.Operation, {foreignKey: 'id_op', as: 'operation'})
    }
  }

  Account.init(
    {
      id_ac: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      account_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Account',
      tableName: 'Account', 
      timestamps: false, 
    }
  );

  return Account;
};
