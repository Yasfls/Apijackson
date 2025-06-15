import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// Rotas para as requisições de usuário

// Para adicionar um usuário utilize a URL: http://localhost:3000/api/users/addUser
router.post('/addUser', userController.addUser);

// Para listar todos os usuários criados utilize a URL: http://localhost:3000/api/users/AllUsers
router.get('/AllUsers', userController.getAllUsers);

// Para procurar um usuário por ID utilize a URL: http://localhost:3000/api/users/("id do usuário")
router.get('/:id', userController.getSingleUser);

// Para realizar o update de um usuário por ID utilize a URL: http://localhost:3000/api/users/("id do usuário")
router.put('/:id', userController.updateUser);

// Para deletar um usuário por ID utilize a URL: http://localhost:3000/api/users/("id do usuário")
router.delete('/:id', userController.deleteUser);

export default router;
