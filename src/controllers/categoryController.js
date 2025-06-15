import { where } from 'sequelize';
import db from '../models/index.js'

const Category = db.Category;
const Product = db.Product;

// POST
const addCategory = async (req, res) => {
    let info = {
        name: req.body.name
    }

    const category = await Category.create(info)
    res.status(200).send(category);
    console.log(`Categoria criada: ${category.name}`);
}

// GET
const getAllCategories = async (req, res) => {
    let categories = await Category.findAll({});
    res.status(200).send(categories);
}

// GET
const getSingleCategory = async (req, res) => {
    let id = req.params.id;
    let category = await Category.findOne({ where: { id_category: id } });
    res.status(200).send(category);

}

// PUT
const updateCategory = async (req, res) => {
    let id = req.params.id;
    const category = await Category.update(req.body, { where: { id_category: id } });
    res.status(200).send(`Categoria editada com sucesso: ${id}`);
}

// DELETE
const deleteCategory = async (req, res) => {
    let id = req.params.id;
    await Category.destroy({ where: { id_category: id } });
    res.status(200).send(`Categoria deletada com sucesso: ${id}`);

}

//GET
const getProductsbyCategory = async (req, res) => {

    const data = await Category.findAll({
        include: [{
        model: Product,
        as: 'products'
    }],
    where: { id_category: req.params.id }
    });
    res.status(200).json(data);
}

export default {
    addCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
    getProductsbyCategory
}