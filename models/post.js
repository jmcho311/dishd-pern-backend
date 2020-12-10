'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.post.belongsTo(models.user)
    }
  };
  post.init({
    userId: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    locationName: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    category: DataTypes.STRING,
    dishName: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};