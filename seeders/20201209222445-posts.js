'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkPosts = await queryInterface.bulkInsert('posts', [
      {
        userId: 1,
        photo: 'https://i.imgur.com/RWDyg9K.jpg',
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
        photo: 'https://i.imgur.com/zJH20Z4.jpg',
        locationName: 'Milk Drunk',
        city: 'Seattle',
        state: 'WA',
        category: 'Appetizer',
        dishName: 'Mozzarella Sticks',
        body: 'Ooooh these are legit! Yup, getting these again next time.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        photo: 'https://i.imgur.com/9p2W0CZ.jpg',
        locationName: 'Kitanda',
        city: 'Seattle',
        state: 'WA',
        category: 'Sandwich',
        dishName: 'Pastrami Spinach and Cheese',
        body: 'Gluten-free cheese bread sandwiches. This one is my go-to.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        photo: 'https://i.imgur.com/gHTVXMC.jpg',
        locationName: 'Kitanda',
        city: 'Seattle',
        state: 'WA',
        category: 'Acai',
        dishName: 'Enery Blast Acai Bowl',
        body: 'Pretty close to Hawaii. I could eat this every day.',
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
