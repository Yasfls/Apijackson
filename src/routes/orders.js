import express from 'express';
import orderController from '../controllers/orderController.js';

const router = express.Router();

// Rotas para as requisições de pedidos

// Para criar um pedido utilize a URL: http://localhost:3000/api/orders/addOrder
router.post('/addOrder', orderController.addOrder);

// Para listar todos os pedidos utilize a URL: http://localhost:3000/api/orders/allOrders
router.get('/AllOrders', orderController.getAllOrders);

// Para procurar por um pedido por ID utilize a URL: http://localhost:3000/api/orders/("id do pedido")
router.get('/:id', orderController.getSingleOrder);

// Para deletar um pedido por ID utilize a URL: http://localhost:3000/api/orders/("id do pedido")
router.delete('/:id', orderController.deleteOrder);

export default router;