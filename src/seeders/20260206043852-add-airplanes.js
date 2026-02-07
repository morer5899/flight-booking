'use strict';
const { Op } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "airBus380",
        capacity: 330,
        createdAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        modelNumber: "airBus390",
        capacity: 500,
        createdAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        modelNumber: "airBus110",
        capacity: 2000,
        createdAt: new Date(),
        UpdatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      "Airplanes",
      {
        [Op.or]: [
          { modelNumber: "airBus380" },
          { modelNumber: "airBus390" },
          { modelNumber: "airBus110" }
        ]
      },
      {}
    );

  }
};
