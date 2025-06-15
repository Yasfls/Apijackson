import express from 'express';
import categoryController from '../controllers/categoryController.js';

const router = express.Router();

// Rotas para as requisições de categorias

// Para criar uma categoria utilize a URL: http://localhost:3000/api/categories/addCategory
router.post('/addCategory', categoryController.addCategory);

// Para listar todas as categorias utilize a URL: http://localhost:3000/api/categories/AllCategories
router.get('/AllCategories', categoryController.getAllCategories);

// Para procurar por uma categoria por ID utilize a URL: http://localhost:3000/api/categories/("id da categoria")
router.get('/:id', categoryController.getSingleCategory);

// Para realizar um update de uma categoria por ID utilize a URL: http://localhost:3000/api/categories/("id da categoria")
router.put('/:id', categoryController.updateCategory);

// Para deletar uma categoria por ID utilize a URL: http://localhost:3000/api/categories/("id da categoria")
router.delete('/:id', categoryController.deleteCategory);

router.get('/getProductsbyCategory/:id', categoryController.getProductsbyCategory);

export default router;
