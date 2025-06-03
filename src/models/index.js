// models/index.js
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { Sequelize, DataTypes } from 'sequelize';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, '../config/config.json');
const configData = JSON.parse(await readFile(pathToFileURL(configPath)));
const env = process.env.NODE_ENV || 'development';
const config = configData[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {};
const files = readdirSync(__dirname).filter(file =>
  file.endsWith('.js') && file !== path.basename(__filename)
);

for (const file of files) {
  const { default: modelFn } = await import(pathToFileURL(path.join(__dirname, file)).href);
  const model = modelFn(sequelize, DataTypes);
  db[model.name] = model;
}

for (const modelName of Object.keys(db)) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;