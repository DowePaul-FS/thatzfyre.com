'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Product.belongsToMany(models.PopularList, { through: "CategorysProducts" })
      models.Product.belongsToMany(models.Category, { through: "CategorysProducts" })
    }
  }
  Product.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    addl_info: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    weight: DataTypes.DOUBLE,
    onHand: DataTypes.INTEGER,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    image3: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};