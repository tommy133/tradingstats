'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Pcomment', 'parent_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Pcomment', 
        key: 'id_pc',             
      },
      onDelete: 'CASCADE', // Set to 'CASCADE' if you want to delete all child records on parent deletion
    });

    await queryInterface.addColumn('Opcomment', 'parent_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Opcomment', 
        key: 'id_opc',             
      },
      onDelete: 'CASCADE', 
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Pcomment', 'parent_id');
    await queryInterface.removeColumn('Opcomment', 'parent_id');
  },
};
