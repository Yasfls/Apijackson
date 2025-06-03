import express from 'express';
const router = express.Router();
import db from '../models/index.js';
const { product: Product, category: Category } = db;

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{
        model: Category,
        as: 'category',
      }]
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ 
      error: 'Erro ao buscar produtos', 
      details: error.message || error 
    });
  }
});

router.post('/', async (req, res) => {
  const { name, price, idCategory } = req.body;

  if (!name || !price || !idCategory) {
    return res.status(400).json({
      error: 'Campos obrigatórios: name, price, idCategory',
    });
  }

  try {
    const categoryExists = await Category.findByPk(idCategory);

    if (!categoryExists) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }

    const newProduct = await Product.create({
      name,
      price,
      idCategory,
    });

    res.status(201).json({
      message: 'Produto criado com sucesso',
      id_product: newProduct.id_product,
    });

  } catch (error) {
    res.status(500).json({
      message: 'Erro ao criar produto',
      error: error.message || error,
    });
  }
});

export default router;