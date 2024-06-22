const CoffeeShop = require('../models/coffeeShopModel');
const Product = require('../models/productModel');

const getCoffeeShops = async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.find();
    res.json(coffeeShops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoffeeShopById = async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.findById(req.params.id);
    res.json(coffeeShop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const createCoffeeShop = async (req, res) => {
  try {
    const { name, location, rating, image, products } = req.body;
    const newCoffeeShop = new CoffeeShop({
      name,
      location,
      rating,
      image,
      products,
    });
    await newCoffeeShop.save();
    res.status(201).json(newCoffeeShop);
  } catch (error) {
    console.error('Error creating coffee shop:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const addProductToCoffeeShop = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category, image } = req.body;

    const coffeeShop = await CoffeeShop.findById(id);
    if (!coffeeShop) {
      return res.status(404).json({ error: 'Coffee shop not found' });
    }

    const newProduct = new Product({
      name,
      price,
      category,
      image,
      coffeeShop: id,
    });
    await newProduct.save();

    coffeeShop.products.push(newProduct._id);
    await coffeeShop.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product to coffee shop:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports = {
  getCoffeeShops,
  getCoffeeShopById,
  createCoffeeShop,
  addProductToCoffeeShop
};
