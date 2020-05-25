'use strict';

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('roles', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('roles');
}
