import express from 'express';
import routes from './routes/index.js';
import db from './models/index.js';


const app = express();

app.use(express.json());
app.use(routes);

db.sequelize.sync().then((req) => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});