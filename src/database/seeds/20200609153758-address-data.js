'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('countries', [{
      name: 'Brazil',
      letter_code: 'BR',
      calling_code: '55',
      created_at: new Date(),
      updated_at: new Date(),
    },{
      name: 'Argentina',
      letter_code: 'AR',
      calling_code: '54',
      created_at: new Date(),
      updated_at: new Date(),
    }]);
    await queryInterface.bulkInsert('states', [{
      name: 'São Paulo',
      letter_code: 'SP',
      created_at: new Date(),
      updated_at: new Date(),
      country_id: '1',
    },{
      name: 'Buenos Aires',
      letter_code: 'BA',
      created_at: new Date(),
      updated_at: new Date(),
      country_id: '2',
    }]);
    await queryInterface.bulkInsert('cities', [{
      name: 'São Paulo',
      latitude: '-23.5489',
      longitude: '-46.6388',
      calling_code: '11',
      created_at: new Date(),
      updated_at: new Date(),
      state_id: '1',
    },{
      name: 'La Plata',
      latitude: '-52.0021',
      longitude: '-53.9941',
      calling_code: '31',
      created_at: new Date(),
      updated_at: new Date(),
      state_id: '2',
    }]);
    await queryInterface.bulkUpdate('states', {
      capital_city_id: '1',
      updated_at: new Date(),
    }, {
      id: '1'
    });
    await queryInterface.bulkUpdate('states', {
      capital_city_id: '2',
      updated_at: new Date(),
    }, {
      id: '2'
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
    }, {
      street: 'Rua Um',
      number: '1',
      neighborhood: 'Bairro Um',
      zip_code: '11111111',
      reference_point: 'Ponto Um',
      complement: 'Casa Um',
      created_at: new Date(),
      updated_at: new Date(),
      country_id: '2',
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('countries', {});
    await queryInterface.bulkDelete('cities', {});
    await queryInterface.bulkDelete('states', {});
    await queryInterface.bulkDelete('addresses', {});
  }
};
