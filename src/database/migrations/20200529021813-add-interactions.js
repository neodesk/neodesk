'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('interactions', 'tickets_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'tickets',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'tickets_types_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'tickets',
          key: 'types_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'tickets_users_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'tickets',
          key: 'users_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'tickets_users_address_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'tickets',
          key: 'users_address_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'tickets_users_organization_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'tickets',
          key: 'users_organization_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'operators_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'operators',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'operators_address_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'operators',
          key: 'address_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'operators_organization_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'operators',
          key: 'organization_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'users_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'users_address_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'address_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('interactions', 'users_organization_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'organization_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),

    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('interactions', 'tickets_id'),
      queryInterface.removeColumn('interactions', 'tickets_types_id'),
      queryInterface.removeColumn('interactions', 'tickets_users_id'),
      queryInterface.removeColumn('interactions', 'tickets_users_address_id'),
      queryInterface.removeColumn('interactions', 'tickets_users_organization_id'),
      queryInterface.removeColumn('interactions', 'operators_id'),
      queryInterface.removeColumn('interactions', 'operators_address_id'),
      queryInterface.removeColumn('interactions', 'operators_organization_id'),
      queryInterface.removeColumn('interactions', 'users_id'),
      queryInterface.removeColumn('interactions', 'users_address_id'),
      queryInterface.removeColumn('interactions', 'users_organization_id'),
    ])
  },
};
