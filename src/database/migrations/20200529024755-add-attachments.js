'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('attachments', 'interactions_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'interactions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('attachments', 'interactions_tickets_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'interactions',
          key: 'tickets_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('attachments', 'interactions_tickets_types_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'interactions',
          key: 'tickets_types_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('attachments', 'interactions_tickets_users_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'interactions',
          key: 'tickets_users_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('attachments', 'interactions_tickets_users_address_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'interactions',
          key: 'tickets_users_address_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('attachments', 'interactions_tickets_users_organization_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        references: {
          model: 'interactions',
          key: 'tickets_users_organization_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('attachments', 'interactions_id'),
      queryInterface.removeColumn('attachments', 'interactions_tickets_id'),
      queryInterface.removeColumn('attachments', 'interactions_tickets_types_id'),
      queryInterface.removeColumn('attachments', 'interactions_tickets_users_id'),
      queryInterface.removeColumn('attachments', 'interactions_tickets_users_address_id'),
      queryInterface.removeColumn('attachments', 'interactions_tickets_users_organization_id'),
    ])
  },
};
