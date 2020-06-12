'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('operators', [{
      admin: '1',
      first_name: 'Pedro',
      last_name: 'Pires',
      email: 'pedro.cpires@hotmail.com',
      password_hash: '123456',
      date_of_birth: '1991-11-07',
      personal_email: 'pedro.cpires@hotmail.com',
      cellphone_number: '(11) 99999-9999',
      landline: '(11) 1111-1111',
      extension: '0',
      website: 'https://github.com/pedrocpires',
      bio: 'Full Stack Web Developer',
      created_at: new Date(),
      updated_at: new Date(),
      address_id: '1',
      organization_id: '1',
      job_id: '1',
    }, {
      admin: '1',
      first_name: 'Operator',
      last_name: 'Two',
      email: 'operator@neodesk.com',
      password_hash: '123456',
      date_of_birth: '2000-01-01',
      personal_email: 'operator@hotmail.com',
      cellphone_number: '(12) 88888-8888',
      landline: '(12) 2222-2222',
      extension: '0',
      website: 'https://www.google.com/',
      bio: 'Operator Test',
      created_at: new Date(),
      updated_at: new Date(),
      address_id: '2',
      organization_id: '2',
      job_id: '2'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('operators', {});
  }
};
