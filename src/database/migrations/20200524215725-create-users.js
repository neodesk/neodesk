'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      admin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      first_name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(192),
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      date_of_birth: {
        type: Sequelize.DATEONLY
      },
      cellphone_number: {
        type: Sequelize.STRING(45)
      },
      landline: {
        type: Sequelize.STRING(45)
      },
      extension: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      address_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      organization_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      job_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
