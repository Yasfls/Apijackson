export default (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('order_product', {
    id_order_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
});

  return OrderProduct;
};