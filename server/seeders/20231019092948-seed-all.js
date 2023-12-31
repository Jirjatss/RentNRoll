"use strict";

const { hashPassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = require("../data/users.json");
    const dataUsers = users.map((el) => {
      el.password = hashPassword(el.password);
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Users", dataUsers, {});

    const userProfiles = require("../data/userProfiles.json");
    const dataProfiles = userProfiles.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("UserProfiles", dataProfiles, {});

    const categories = require("../data/category.json");
    const dataCategories = categories.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.specifications = JSON.stringify(el.specifications);
      return el;
    });
    await queryInterface.bulkInsert("Categories", dataCategories, {});

    const vehicles = require("../data/vehicle.json");
    const dataVehicles = vehicles.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Vehicles", dataVehicles, {});
    const specs = require("../data/specification.json");
    const dataSpec = specs.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Specifications", dataSpec, {});

    const orders = require("../data/orders.json");
    const dataOrders = orders.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Orders", dataOrders, {});
    const reviews = require("../data/reviews.json");
    const dataReviews = reviews.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Reviews", dataReviews, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vehicles", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("UserProfiles", null, {});
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Orders", null, {});
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
