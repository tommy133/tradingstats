'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE symbol 
      ADD COLUMN bt_checkpoint DATETIME AFTER description;
    `);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('symbol', 'bt_checkpoint');

  }
};
