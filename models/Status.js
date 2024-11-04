const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Status extends Model {
    static associate(models) {
        Status.hasMany(models.Operation, {foreignKey: 'id_op', as: 'operation'})
        Status.hasMany(models.Projection, {foreignKey: 'id_proj', as: 'projection'})
    }
  }

  Status.init(
    {
      id_st: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_st: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Status',
      tableName: 'Status', // Optionally specify the exact table name if different from the model name
      timestamps: false, // Set to true if your table has `createdAt` and `updatedAt` fields
    }
  );

  return Status;
};
