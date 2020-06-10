'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('types', [
      {
        name: 'TI',
        description: 'Tickets related to Computing',
        
        // subcategories_id: 1,
        // subcategories_categories_id: 1,
        // subcategories_categories_departments_id: 1,
      },
    ]);
    await queryInterface.bulkInsert('service_level_agreements', [
      {
        time: new Date().toLocaleTimeString(),
        priority: 1,
      },
    ]);
    await queryInterface.bulkInsert('operator_groups', [
      {
        name: 'Camada de Suporte',
        description:
          'Nivel de operacao mais basico com acesso a todos os operadores',
        level: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('types', {});
    await queryInterface.bulkDelete('service_level_agreements', {});
    await queryInterface.bulkDelete('operator_groups', {});
  },
};
