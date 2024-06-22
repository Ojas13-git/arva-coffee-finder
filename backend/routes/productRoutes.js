const express = require('express');
const router = express.Router();
const { getProductsByCoffeeShopId, createProduct } = require('../controllers/productController');

router.get('/:coffeeShopId/products', getProductsByCoffeeShopId);

router.post('/add-products', createProduct);

module.exports = router;
