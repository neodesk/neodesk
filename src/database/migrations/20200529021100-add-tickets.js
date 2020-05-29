'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('tickets', 'types_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'types',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('tickets', 'service_level_agreements_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'service_level_agreements',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('tickets', 'users_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('tickets', 'users_address_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'users',
          key: 'address_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('tickets', 'users_organization_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'users',
          key: 'organization_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('tickets', 'operator_groups_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'operator_groups',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('tickets', 'types_id'),
      queryInterface.removeColumn('tickets', 'service_level_agreements_id'),
      queryInterface.removeColumn('tickets', 'users_id'),
      queryInterface.removeColumn('tickets', 'users_address_id'),
      queryInterface.removeColumn('tickets', 'users_organization_id'),
      queryInterface.removeColumn('tickets', 'operator_groups_id'),
    ])
  },
};
