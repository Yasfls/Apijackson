import { where } from 'sequelize';
import db from '../models/index.js'

const Product = db.Product;
const Category = db.Category;
const Order = db.Order;

// POST
const addProduct = async (req, res) => {
    let info = {
        name: req.body.name,
        price: req.body.price,
        category_id: req.body.category_id
    }

    const product = await Product.create(info)
    res.status(200).send(product);
    console.log(`Produto criado: ${product.name}`);
}

// GET
const getAllProducts = async (req, res) => {
    let products = await Product.findAll({});
    res.status(200).send(products);
}

// GET
const getSingleProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({ where: { id_product: id } });
    res.status(200).send(product);

}

// PUT
const updateProduct = async (req, res) => {
    let id = req.params.id;
    const product = await Product.update(req.body, { where: { id_product: id } });
    res.status(200).send(`Produto editado com sucesso: ${id}`);
}

// DELETE
const deleteProduct = async (req, res) => {
    let id = req.params.id;
    await Product.destroy({ where: { id_product: id } });
    res.status(200).send(`Produto deletado com sucesso: ${id}`);

}

export default{
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}
