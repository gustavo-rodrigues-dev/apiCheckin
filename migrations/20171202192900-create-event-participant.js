'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('event_participant', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_confirmation_id: {
        type: Sequelize.INTEGER
      },
      cn_code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.TEXT
      },
      phone_number: {
          type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      check_in: {
        type: Sequelize.DATE
      },
      check_out: {
        type: Sequelize.DATE
      },
      confirmation_code: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('event_participant');
  }
};