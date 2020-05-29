'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('commercial_contacts_has_organizations', {
      commercial_contacts_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'commercial_contacts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      organizations_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'organizations',
          key: 'id',
        },
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('commercial_contacts_has_organizations');
  }
}
