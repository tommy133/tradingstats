'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE operation 
      ADD COLUMN checklist JSON AFTER id_ac;
    `);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('operation', 'checklist');
  }
};
