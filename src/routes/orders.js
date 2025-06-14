import express from 'express';
import orderController from '../controllers/orderController.js';

const router = express.Router();

router.post('/addOrder', orderController.addOrder);

router.get('/AllOrders', orderController.getAllOrders);

router.get('/:id', orderController.getSingleOrder);

router.put('/:id', orderController.updateOrder);

router.delete('/:id', orderController.deleteOrder);

export default router;