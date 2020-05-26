'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('permissions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      allowed: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      action: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      target: {
        type: Sequelize.STRING(45)
      },
      type: {
        type: Sequelize.STRING(45)
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('permissions');
  }
}
