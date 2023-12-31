const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }
  Product.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        required :true
      },
      content: {
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING,
        required :true
      },
      status: {
        type: DataTypes.STRING,
        enum: ["FOR_SALE", "SOLD_OUT"],
        default: "FOR_SALE"
      }
    },
    {
      sequelize,
      modelName: "Product"
    }
  );
  return Product;
};
