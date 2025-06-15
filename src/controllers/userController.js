import { where } from 'sequelize';
import db from '../models/index.js'

const User = db.user;

// POST
const addUser = async (req, res) => {
    let info = {
        id_user: req.body.id_user,
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }

    const user = await User.create(info)
    res.status(200).send(user);
    console.log(`Usuário adicionado: ${user.name}`);
}

// GET
const getAllUsers = async (req, res) => {
    let users = await User.findAll({
        attributes: ['id_user', 'name', 'email']
    });
    res.status(200).send(users);
}

// GET
const getSingleUser = async (req, res) => {
    let id = req.params.id;
    let user = await User.findOne({ where: { id_user: id } });
    res.status(200).send(user);

}

// PUT
const updateUser = async (req, res) => {
    let id = req.params.id;
    const user = await User.update(req.body, { where: { id_user: id } });
    res.status(200).send(`Usuário editado com sucesso: ${id}`);
}

// DELETE
const deleteUser = async (req, res) => {
    let id = req.params.id;
    await User.destroy({ where: { id_user: id } });
    res.status(200).send(`Usuário deletado com sucesso: ${id}`);

}

export default {
    addUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}