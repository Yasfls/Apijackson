import express from 'express';
import orderController from '../controllers/orderController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rotas para as requisições de pedidos (USUÁRIO PRECISA ESTAR LOGADO E AUTENTICADO PARA ACESSAR)

// Para criar um pedido utilize a URL: http://localhost:3000/api/orders/addOrder
router.post('/addOrder', authenticateToken, orderController.addOrder);

// Para listar todos os pedidos utilize a URL: http://localhost:3000/api/orders/allOrders
router.get('/AllOrders', authenticateToken, orderController.getAllOrders);

// Para procurar por um pedido por ID utilize a URL: http://localhost:3000/api/orders/("id do pedido")
router.get('/:id', authenticateToken, orderController.getSingleOrder);

// Para deletar um pedido por ID utilize a URL: http://localhost:3000/api/orders/("id do pedido")
router.delete('/:id', authenticateToken, orderController.deleteOrder);

export default router;