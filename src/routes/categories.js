import express from 'express';
import mysqlModule from '../mysql.js';
const router = express.Router();
const mysql = mysqlModule.pool;
import pool from '../mysql.js';

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM category');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ 
      error: 'Erro ao buscar categorias', 
      details: error.message || error 
    });
  }
});

router.post('/', (req, res) => {

    mysql.getConnection((error, conn) => {
    if (error) {
        return res.status(500).send({
            message: 'Erro ao conectar ao banco de dados',
            error: error
        });
    }

    conn.query(
        'INSERT INTO category (name) VALUES (?)',
        [req.body.name],
        (error, resultado, fields) => {
            conn.release();

            if (error) {
                return res.status(500).send({
                    message: 'Erro ao executar a query',
                    error: error
                });
            }

            res.status(201).send({
                message: 'Categoria criada com sucesso',
                id_category: resultado.insertId
            });
        }
    );
});

});

export default router;