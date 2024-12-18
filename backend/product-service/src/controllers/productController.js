const { createProduct, getProducts } = require('../services/productService');

const addProduct = async (req, res) => {
    const productData = req.body;

    try {
        const newProduct = await createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const fetchProducts = async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addProduct, fetchProducts };
