const express = require('express');
const mongoose = require('mongoose');
const authMiddleware = require('./authMiddleware.js')
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const coffeeShopRoutes = require('./routes/coffeeShopRoutes');
const productRoutes = require('./routes/productRoutes');
const searchRoutes = require('./routes/searchRoutes');

app.use('/api/coffee-shops', authMiddleware,coffeeShopRoutes);
app.use('/api/products',authMiddleware, productRoutes);
app.use('/api/search',authMiddleware, searchRoutes);

const PORT = process.env.PORT || 5000;

console.log('Mongo URI:', process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
