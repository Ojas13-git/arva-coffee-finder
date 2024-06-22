const Product = require('../models/productModel');

const getProductsByCoffeeShopId = async (req, res) => {
  try {
    const products = await Product.find({ coffeeShop: req.params.coffeeShopId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { coffeeShopId, name, price, category } = req.body;
    const newProduct = new Product({
      coffeeShopId,
      name,
      price,
      category,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getProductsByCoffeeShopId,
  createProduct
};
