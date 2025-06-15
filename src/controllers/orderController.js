import { where } from 'sequelize';
import db from '../models/index.js'

const Order = db.Order;
const OrderProduct = db.OrderProduct;

// POST
const addOrder = async (req, res) => {
  const { id_user, products } = req.body;

  try {
    const order = await Order.create({ idUser: id_user });

    const orderProducts = products.map((item) => ({
      orderId: order.id_order,
      productId: item.id_product,
      quant: item.quantity
    }));

    await OrderProduct.bulkCreate(orderProducts);

    res.status(201).json({
      message: 'Pedido Feito com Sucesso',
      orderId: order.id_order
    });

    console.log(`Pedido feito: ${order.id_order}`);
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
};

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
    deleteOrder
}