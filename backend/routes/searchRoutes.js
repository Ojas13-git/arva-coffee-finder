const express = require('express');
const router = express.Router();
const { searchCoffeeShops } = require('../controllers/searchController');

router.post('/', searchCoffeeShops);

module.exports = router;
