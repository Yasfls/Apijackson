import express from 'express';
const router = express.Router();
import db from '../models/index.js';
const { order: Order, product: Product, user: User } = db;

router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Product,
          as: 'products',
          through: { attributes: [] },
        },
        {
          model: User,
          as: 'user',
          attributes: ['id_user', 'name', 'email'],
        }
      ]
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar pedidos',
      error: error.message || error
    });
  }
});

router.post('/', async (req, res) => {
  const { idUser, productIds } = req.body;

  if (!idUser || !Array.isArray(productIds) || productIds.length === 0) {
    return res.status(400).json({ message: 'IDs de usuário e produtos são obrigatórios' });
  }

  try {
    const newOrder = await Order.create({ idUser });

    await newOrder.addProducts(productIds);

    res.status(201).json({
      message: 'Pedido criado com sucesso',
      id_order: newOrder.id_order
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao criar pedido',
      error: error.message || error
    });
  }
});

export default router;