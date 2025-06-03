export default (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    id_category: {
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
  });

  return Category;
};