import { where } from 'sequelize';
import db from '../models/index.js'

const Order = db.order;

const addOrder = async (req, res) => {
    let info = {
        id_user: req.body.id_user,
        id_product: req.body.id_product,
        quantity: req.body.quantity
    }

    const order = await Order.create(info)
    res.status(200).send(order);
    console.log(`Pedido adicionado: ${order.id_order}`);
}

const getAllOrders = async (req, res) => {
    let orders = await Order.findAll({});
    res.status(200).send(orders);
}

const getSingleOrder = async (req, res) => {
    let id = req.params.id;
    let order = await Order.findOne({ where: { id_order: id } });
    res.status(200).send(order);

}

const updateOrder = async (req, res) => {
    let id = req.params.id;
    const order = await Order.update(req.body, { where: { id_order: id } });
    res.status(200).send(order);
}

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