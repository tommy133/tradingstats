'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('Operation', 'volume');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Operation', 'volume', {
      type: Sequelize.DOUBLE,
      allowNull: true, // Set to false if `volume` was originally non-nullable
    });
  },
};
