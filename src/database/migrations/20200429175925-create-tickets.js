'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('tickets', {
      id {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      main_ticket: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      type_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'types',
          id: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      service_level_agreements_id {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'service_level_agreements',
          id: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      users_id {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      users_address_id {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      users_organization_id {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      operator_groups_id {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'operator_groups',
          id: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('tickets');
  }
};
