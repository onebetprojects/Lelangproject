'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
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
      type: DataTypes.INTEGER,
      // defaultValue: 3_000_000
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "latestbid not null"
        }, notEmpty: {
          msg: "latestbid not empty"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};