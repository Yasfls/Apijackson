import express from 'express';
import categoryController from '../controllers/categoryController.js';

const router = express.Router();

router.post('/addCategory', categoryController.addCategory);

router.get('/AllCategories', categoryController.getAllCategories);

router.get('/:id', categoryController.getSingleCategory);

router.put('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);

export default router;
