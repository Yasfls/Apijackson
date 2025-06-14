import { Router } from 'express';
import productsRoutes from './products.js';
import categoriesRoutes from './categories.js';
import ordersRoutes from './orders.js';

const router = Router();

router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/orders', ordersRoutes);

export default router;