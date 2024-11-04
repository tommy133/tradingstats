const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Pcomment extends Model {
    static associate(models) {
      Pcomment.hasOne(models.Projection, { foreignKey: 'id_proj', as: 'projection' });
    }
  }

  Pcomment.init(
    {
      id_pc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT, 
        allowNull: true,
      },
      inserted_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Pcomment',
      tableName: 'Pcomment',
      timestamps: false,
    }
  );

  return Pcomment;
};
