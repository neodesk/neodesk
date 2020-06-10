'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      admin: '1',
      first_name: 'Pedro',
      last_name: 'Pires',
      email: 'pedro.cpires@hotmail.com',
      password_hash: '123456',
      date_of_birth: '1991-11-07',
      cellphone_number: '(11) 99999-9999',
      landline: '(11) 1111-1111',
      extension: '0',
      created_at: new Date(),
      updated_at: new Date(),
      address_id: '1',
      organization_id: '1',
      job_id: '1'
    }, ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {});
  }
};
