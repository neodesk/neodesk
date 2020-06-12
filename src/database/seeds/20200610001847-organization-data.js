'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('jobs', [{
      name: 'JavaScript Developer	',
      description: ' JavaScript developer is responsible for implementing the front-end logic that defines the behavior of the visual elements of a web application. A JavaScript developer is also responsible for connecting this with the services that reside on the back-end.',
      department: 'Developer',
      seniority: 'IT',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'Front-end Developer	',
      description: 'A front-end developer links together the world of design and technology, packaging up the utility of the back end in an inviting way for users to interact with. They take website design files and convert them into HTML, JavaScript (JS) and/or CSS code.',
      department: 'Developer',
      seniority: 'IT',
      created_at: new Date(),
      updated_at: new Date(),
    }]);
    await queryInterface.bulkInsert('organizations', [{
      name: 'NeoDesk',
      description: 'Ticket and incident management system - Santander Coders Integrator Project - Digital House, São Paulo',
      type: 'Web Development',
      created_at: new Date(),
      updated_at: new Date(),
      address_id: '1'
    }, {
      name: 'Digital House',
      description: 'Education startup offering courses for the training of digital professionals',
      type: 'Education Startup',
      created_at: new Date(),
      updated_at: new Date(),
      address_id: '2'
    }]);
    await queryInterface.bulkInsert('commercial_contacts', [{
      primary_email: 'neodesk@neodesk.com',
      landline_number: '(11) 0000-0000',
      extension: '0',
      created_at: new Date(),
      updated_at: new Date(),
    }, ]);
    await queryInterface.bulkInsert('organizational_emails', [{
      email: 'neodesk@neodesk.com',
      created_at: new Date(),
      updated_at: new Date(),
      commercial_contact_id: '1',
    }, ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('jobs', {});
    await queryInterface.bulkDelete('organizations', {});
    await queryInterface.bulkDelete('commercial_contacts', {});
    await queryInterface.bulkDelete('organizational_emails', {});
  }
};
