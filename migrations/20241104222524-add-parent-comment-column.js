'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('pcomment', 'parent_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'pcomment', 
        key: 'id_pc',             
      },
      onDelete: 'CASCADE', // Set to 'CASCADE' if you want to delete all child records on parent deletion
    });

    await queryInterface.addColumn('opcomment', 'parent_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'opcomment', 
        key: 'id_opc',             
      },
      onDelete: 'CASCADE', 
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('pcomment', 'parent_id');
    await queryInterface.removeColumn('opcomment', 'parent_id');
  },
};
