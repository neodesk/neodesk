'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('types', 'subcategories_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'subcategories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('types', 'subcategories_categories_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'subcategories',
          key: 'categories_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('types', 'subcategories_categories_departments_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'subcategories',
          key: 'categories_departments_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('types', 'subcategories_id'),
      queryInterface.removeColumn('types', 'subcategories_categories_id'),
      queryInterface.removeColumn('types', 'subcategories_categories_departments_id'),
    ])
  },
};
