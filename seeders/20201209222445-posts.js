'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkPosts = await queryInterface.bulkInsert('posts', [
      {
        userId: 1,
        photo: 'https://imgur.com/a/l7QFXUv',
        locationName: 'Milk Drunk',
        city: 'Seattle',
        state: 'WA',
        category: 'Ice Cream',
        dishName: 'Rainier Cherry, Fig Leaf Coconut Soft Serve',
        body: 'Good thing I don\'t live close by. Otherwise, I would be their most valued customer.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        photo: 'https://imgur.com/a/Hkg1kzR',
        locationName: 'Milk Drunk',
        city: 'Seattle',
        state: 'WA',
        category: 'Appetizer',
        dishName: 'Mozzarella Sticks',
        body: 'Ooooh these are legit! Yup, getting these again next time.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
