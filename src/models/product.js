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
    Product.belongsTo(models.category, {
      foreignKey: 'idCategory',
      as: 'category',
    });

    models.category.hasMany(Product, {
      foreignKey: 'idCategory',
      as: 'products',
    });

    Product.belongsToMany(models.order, {
      through: models.order_product,
      foreignKey: 'idProduct',
      otherKey: 'idOrder',
      as: 'orders',
    });

    models.order.belongsToMany(Product, {
      through: models.order_product,
      foreignKey: 'idOrder',
      otherKey: 'idProduct',
      as: 'products',
    });
  };

  return Product;
};