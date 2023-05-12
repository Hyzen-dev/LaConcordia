'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('status', [
      {
        id: 1,
        name: 'committee',
        label: 'Membre de la commission',
        type: 'committee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'directionharmonie',
        label: 'Direction de l\'harmonie',
        type: 'harmonie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'directionclique',
        label: 'Direction de la clique',
        type: 'clique',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'musicienharmonie',
        label: 'Musicien de l\'harmonie',
        type: 'harmonie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'musicienclique',
        label: 'Musicien de la clique',
        type: 'clique',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('status', null, {});
  }
};
