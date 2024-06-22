const express = require('express');
const router = express.Router();
const { getCoffeeShops, getCoffeeShopById,createCoffeeShop,addProductToCoffeeShop } = require('../controllers/coffeeShopController');

router.get('/', getCoffeeShops);
router.get('/:id', getCoffeeShopById);
router.post('/add-coffee-shops', createCoffeeShop);
router.put('/:id/add-product', addProductToCoffeeShop);

module.exports = router;
