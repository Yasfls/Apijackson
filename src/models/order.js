export default (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  });

    Order.associate = (models) => {
    Order.belongsTo(models.user, {
      foreignKey: 'idUser',
      as: 'user',
    });
  };

  return Order;
};