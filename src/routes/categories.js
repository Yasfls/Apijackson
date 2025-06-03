import express from 'express';
const router = express.Router();
import db from '../models/index.js';
const { category: Category } = db;

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ 
      message: 'Erro ao buscar categorias', 
      error: error.message || error 
    });
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === '') {
    return res.status(400).json({ message: 'O nome da categoria é obrigatório' });
  }

  try {
    const newCategory = await Category.create({ name });

    res.status(201).json({
      message: 'Categoria criada com sucesso',
      category: {
        id_category: newCategory.id_category,
        name: newCategory.name
      }
    });

  } catch (error) {
    res.status(500).json({
      message: 'Erro ao criar categoria',
      error: error.message || error
    });
  }
});

export default router;
