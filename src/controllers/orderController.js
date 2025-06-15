import { where } from 'sequelize';
import db from '../models/index.js'

const Order = db.order;

// POST
const addOrder = async (req, res) => {
    let info = {
        id_user: req.body.id_user,
        id_product: req.body.id_product,
        quantity: req.body.quantity
    }

    const order = await Order.create(info)
    res.status(200).send(order);
    console.log(`Pedido feito: ${order.id_order}`);
}

// GET
const getAllOrders = async (req, res) => {
    let orders = await Order.findAll({});
    res.status(200).send(orders);
}

// GET
const getSingleOrder = async (req, res) => {
    let id = req.params.id;
    let order = await Order.findOne({ where: { id_order: id } });
    res.status(200).send(order);

}

// DELETE
const deleteOrder = async (req, res) => {
    let id = req.params.id;
    await Order.destroy({ where: { id_order: id } });
    res.status(200).send(`Pedido deletado com sucesso: ${id}`);

}

export default {
    addOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder
}