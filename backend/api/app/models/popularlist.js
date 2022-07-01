"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PopularList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.PopularList.belongsToMany(models.Category, {
        through: "CategorysProducts",
      });
      models.PopularList.belongsToMany(models.Product, {
        through: "CategorysProducts",
      });
    }
  }
  PopularList.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      ProductId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      CategoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      sequelize,
      modelName: "PopularList",
    }
  );
  return PopularList;
};
