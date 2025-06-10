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

router.put("/:id_category", async (req, res) => {
  const { id_category } = req.params;
  const { name } = req.body;

  try {
    const category = await Category.findByPk(id_category);

    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    if (name) category.name = name;

    await category.save();

    res.status(200).json({ message: "Categoria atualizada com sucesso" });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar categoria",
      error: error.message || error,
    });
  }
});

export default router;
