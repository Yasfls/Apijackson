export default (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category'
    });

    Product.belongsToMany(models.Order, {
      through: models.OrderProduct,
      foreignKey: 'product_id',
      otherKey: 'order_id',
      as: 'orders'
    });
  };

  return Product;
};