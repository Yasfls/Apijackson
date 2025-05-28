import { Router } from 'express';
import usersRoutes from './users.js';
import productsRoutes from './products.js';
import categoriesRoutes from './categories.js';

const router = Router();

router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);

export default router;