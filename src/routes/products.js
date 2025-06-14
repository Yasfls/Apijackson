import express from 'express';
import productController from '../controllers/productController.js';

const router = express.Router();

router.post('/addProduct', productController.addProduct);

router.get('/AllProducts', productController.getAllProducts);

router.get('/:id', productController.getSingleProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

export default router;