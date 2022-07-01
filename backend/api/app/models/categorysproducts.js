'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategorysProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategorysProducts.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    CategoryId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    ProductId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    }
  }, {
    sequelize,
    modelName: 'CategorysProducts',
  });
  return CategorysProducts;
};