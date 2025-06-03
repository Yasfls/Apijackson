import express from 'express';
const router = express.Router();
import db from '../models/index.js';
const { user: User } = db;

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ 
      error: 'Erro ao buscar usuários', 
      details: error.message || error 
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const newUser = await User.create({ name, email, password });

    res.status(201).json({
      message: 'Usuário criado com sucesso',
      id_user: newUser.id_user
    });

  } catch (error) {
    res.status(500).json({
      message: 'Erro ao criar usuário',
      error: error.message || error
    });
  }
});

export default router;