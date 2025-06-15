import express from 'express';
import productController from '../controllers/productController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Endpoints para gerenciamento de produtos
 */

/**
 * @swagger
 * /api/products/AllProducts:
 *   get:
 *     summary: Retorna todos os produtos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de produtos.
 */
router.get('/AllProducts', productController.getAllProducts);

/**
 * @swagger
 * /api/products/addProduct:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - category_id
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               category_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Produto criado com sucesso
 */
router.post('/addProduct', productController.addProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Retorna um produto pelo ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 */
router.get('/:id', productController.getSingleProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               category_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 */
router.put('/:id', productController.updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Deleta um produto pelo ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 */
router.delete('/:id', productController.deleteProduct);

export default router;