const express = require('express');
const { addProduct, fetchProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/add', addProduct);
router.get('/all', fetchProducts);

module.exports = router;
