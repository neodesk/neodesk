'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('operators', 'address_id', {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        references: {
          model: 'addresses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('operators', 'organization_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'organizations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('operators', 'job_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jobs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('operators', 'address_id'),
      queryInterface.removeColumn('operators', 'organization_id'),
      queryInterface.removeColumn('operators', 'job_id')
    ])
  },
};
