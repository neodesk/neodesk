'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      street: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      neighborhood: {
        type: Sequelize.STRING(45),
      },
      zip_code: {
        type: Sequelize.INTEGER,
      },
      reference_point: {
        type: Sequelize.STRING(256),
      },
      complement: {
        type: Sequelize.STRING(45),
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addresses');
  }
}
