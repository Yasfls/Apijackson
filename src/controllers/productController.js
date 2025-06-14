import { where } from 'sequelize';
import db from '../models/index.js'

const Product = db.product;

const addProduct = async (req, res) => {
    let info = {
        name: req.body.name,
        price: req.body.price,
        idCategory: req.body.idCategory
    }

    const product = await Product.create(info)
    res.status(200).send(product);
    console.log(`Produto adicionado: ${product.name}`);
}

const getAllProducts = async (req, res) => {
    let products = await Product.findAll({});
    res.status(200).send(products);
}

const getSingleProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({ where: { id_product: id } });
    res.status(200).send(product);

}

const updateProduct = async (req, res) => {
    let id = req.params.id;
    const product = await Product.update(req.body, { where: { id_product: id } });
    res.status(200).send(product);
}

const deleteProduct = async (req, res) => {
    let id = req.params.id;
    await Product.destroy({ where: { id_product: id } });
    res.status(200).send(`Produto deletado com sucesso: ${id_product}`);

}

export default{
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}
