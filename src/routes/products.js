import express from 'express';
import mysqlModule from '../mysql.js';
const router = express.Router();
const mysql = mysqlModule.pool;
import pool from '../mysql.js';

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM product');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ 
      error: 'Erro ao buscar produtos', 
      details: error.message || error 
    });
  }
});

router.post('/', async (req, res) => {
  const { name, price, categoryID } = req.body;

  try {
    const conn = await pool.getConnection();

    try {
      const [categories] = await conn.query(
        'SELECT * FROM category WHERE id_category = ?',
        [categoryID]
      );

      if (categories.length === 0) {
        conn.release();
        return res.status(404).send({ message: 'Categoria não encontrada' });
      }

      const [result] = await conn.query(
        'INSERT INTO product (name, price, categoryID) VALUES (?, ?, ?)',
        [req.body.name, req.body.price, req.body.categoryID],
      );

      conn.release();

      res.status(201).send({
        message: 'Produto criado com sucesso',
        id_product: result.insertId
      });
    } catch (error) {
      conn.release();
      res.status(500).send({
        message: 'Erro ao executar a query',
        error
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'Erro ao conectar ao banco de dados',
      error
    });
  }
});

export default router;