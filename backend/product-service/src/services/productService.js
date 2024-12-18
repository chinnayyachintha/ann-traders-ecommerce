const Product = require('../models/productModel');

const createProduct = async (productData) => {
    const product = new Product(productData);
    await product.save();
    return product;
};

const getProducts = async () => {
    const products = await Product.find();
    return products;
};

module.exports = { createProduct, getProducts };
