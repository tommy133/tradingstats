'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('operation', 'volume');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('operation', 'volume', {
      type: Sequelize.DOUBLE,
      allowNull: true, // Set to false if `volume` was originally non-nullable
    });
  },
};
