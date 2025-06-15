import { Sequelize, DataTypes } from 'sequelize';
import dbConfig from '../config/config.js';

import UserModel from './user.js';
import CategoryModel from './category.js';
import ProductModel from './product.js';
import OrderModel from './order.js';
import OrderProductModel from './orderProduct.js';

const sequelize = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
    operatorsAliases: false,
  }
);

// Testando a conexão com o banco
try {
  await sequelize.authenticate();
  console.log('Conectado com o Banco de Dados.');
} catch (err) {
  console.error('Não foi possível conectar ao banco de dados:', err);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = UserModel(sequelize, DataTypes);
db.category = CategoryModel(sequelize, DataTypes);
db.product = ProductModel(sequelize, DataTypes);
db.order = OrderModel(sequelize, DataTypes);
db.orderProduct = OrderProductModel(sequelize, DataTypes);


try {
  await sequelize.sync({ force: false });
  console.log('Tabelas sincronizadas.');
} catch (err) {
  console.error('Erro ao sincronizar as tabelas:', err);
}

export default db;