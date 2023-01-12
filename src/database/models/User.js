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
     
  }
  User.init({
    first_name: {
      type:DataTypes.STRING(100),
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'User',
    timestamps:false
  });
  return User;
};