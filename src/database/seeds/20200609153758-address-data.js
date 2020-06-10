'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('countries', [{
      name: 'Brazil',
      letter_code: 'BR',
      calling_code: '55',
      created_at: new Date(),
      updated_at: new Date(),
    }]);
    await queryInterface.bulkInsert('states', [{
      name: 'São Paulo',
      letter_code: 'SP',
      calling_code: '11',
      created_at: new Date(),
      updated_at: new Date(),
      country_id: '1',
      // capital_city_id: '1',
    }]);
    await queryInterface.bulkInsert('cities', [{
      name: 'São Paulo',
      latitude: '-23.5489',
      longitude: '-46.6388',
      created_at: new Date(),
      updated_at: new Date(),
      state_id: '1',
    }, ]);
    await queryInterface.bulkUpdate('states', {
      capital_city_id: '1',
      updated_at: new Date(),
    }, {
      id: '1'
    })
    await queryInterface.bulkInsert('addresses', [{
      street: 'Rua Zero',
      number: '0',
      neighborhood: 'Bairro Zero',
      zip_code: '00000000',
      reference_point: 'Ponto Zero',
      complement: 'Casa Zero',
      created_at: new Date(),
      updated_at: new Date(),
      country_id: '1',
    }, ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('countries', {});
    await queryInterface.bulkDelete('cities', {});
    await queryInterface.bulkDelete('states', {});
    await queryInterface.bulkDelete('addresses', {});
  }
};
