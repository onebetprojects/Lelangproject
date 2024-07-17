'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Username cannot be empty!"
          },
          notEmpty: {
            args: true,
            msg: "Username cannot be empty!"
          }
        }
      },
      latestBid: {
        type: Sequelize.INTEGER,
        // defaultValue: 3_000_000
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "latestBid cannot be empty!"
          },
          notEmpty: {
            args: true,
            msg: "latestBid cannot be empty!"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};