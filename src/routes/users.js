import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/addUser', userController.addUser);

router.get('/AllUsers', userController.getAllUsers);

router.get('/:id', userController.getSingleUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

export default router;
