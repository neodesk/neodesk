'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('types', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      subcategories_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subcategories_categories_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subcategories_categories_departments_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('types');
  },
};
