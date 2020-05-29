'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('service_level_agreements', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      priority: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('service_level_agreements');
  },
};
