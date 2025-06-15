import express from 'express';
import productController from '../controllers/productController.js';

const router = express.Router();

// Rotas para as requisições de produtos

// Para criar um produto utilize a URL: http://localhost:3000/api/products/addProduct
router.post('/addProduct', productController.addProduct);

// Para listar todos os produtos utilize a URL: http://localhost:3000/api/products/allProducts
router.get('/AllProducts', productController.getAllProducts);

// Para procurar por um produto por ID utilize a URL: http://localhost:3000/api/products/("id do produto")
router.get('/:id', productController.getSingleProduct);

// Para realizar um update de um produto por ID utilize a URL: http://localhost:3000/api/products/("id do produto")
router.put('/:id', productController.updateProduct);

// Para deletar um produto por ID utilize a URL: http://localhost:3000/api/products/("id do produto")
router.delete('/:id', productController.deleteProduct);

export default router;