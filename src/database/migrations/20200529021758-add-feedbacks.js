'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('feedbacks', 'users_id', {
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
      queryInterface.addColumn('feedbacks', 'users_address_id', {
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
      queryInterface.addColumn('feedbacks', 'users_organization_id', {
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
      queryInterface.addColumn('feedbacks', 'tickets_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tickets',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('feedbacks', 'tickets_types_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tickets',
          key: 'types_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('feedbacks', 'tickets_users_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tickets',
          key: 'users_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('feedbacks', 'tickets_users_address_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tickets',
          key: 'users_address_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('feedbacks', 'tickets_users_organization_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tickets',
          key: 'users_organization_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('feedbacks', 'users_id'),
      queryInterface.removeColumn('feedbacks', 'users_address_id'),
      queryInterface.removeColumn('feedbacks', 'users_organization_id'),
      queryInterface.removeColumn('feedbacks', 'tickets_id'),
      queryInterface.removeColumn('feedbacks', 'tickets_types_id'),
      queryInterface.removeColumn('feedbacks', 'tickets_users_id'),
      queryInterface.removeColumn('feedbacks', 'tickets_users_address_id'),
      queryInterface.removeColumn('feedbacks', 'tickets_users_organization_id'),
    ])
  },
};
