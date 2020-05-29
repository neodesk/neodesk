'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('service_level_agreements', 'types_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'types',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('service_level_agreements', 'types_id'),
    ])
  },
};
