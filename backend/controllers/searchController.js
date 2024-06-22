// const CoffeeShop = require('../models/coffeeShopModel');

// const searchCoffeeShops = async (req, res) => {

//   const { name, address, minRating, category, sortBy } = req.body;
//   console.log(req.body);
//   let sortCriteria = {};

//   // Handle sorting
//   if (sortBy === 'name') {
//     sortCriteria = { name: 1 }; // Sort by name ascending
//   } else if (sortBy === 'rating') {
//     sortCriteria = { rating: -1 }; // Sort by rating descending
//   }

//   try {
//     let query = {};
//     if (name) query.name = { $regex: name, $options: 'i' };
//     if (address) query['location.address'] = { $regex: address, $options: 'i' };
//     if (minRating) query.rating = { $gte: parseFloat(minRating) };
//     if (category) query['products.category'] = { $regex: category, $options: 'i' };
//     console.log(query);

//     const coffeeShops = await CoffeeShop.find(query).sort(sortCriteria);
//     // console.log(coffeeShops);
//     res.json(coffeeShops);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   searchCoffeeShops,
// };


const CoffeeShop = require('../models/coffeeShopModel');

const searchCoffeeShops = async (req, res) => {
  const { name, address, minRating, category, sortBy } = req.body;
  console.log(req.body);
  let sortCriteria = {};

  // Handle sorting
  if (sortBy === 'name') {
    sortCriteria = { name: 1 }; // Sort by name ascending
  } else if (sortBy === 'rating') {
    sortCriteria = { rating: -1 }; // Sort by rating descending
  }

  try {
    let query = {};
    if (name) query.name = { $regex: name, $options: 'i' };
    if (address) query['location.address'] = { $regex: address, $options: 'i' };
    if (minRating) query.rating = { $gte: parseFloat(minRating) };

    let pipeline = [
      { $match: query },
      {
        $lookup: {
          from: 'products',
          localField: 'products',
          foreignField: '_id',
          as: 'products'
        }
      }
    ];

    if (category) {
      pipeline.push({
        $match: { 'products.category': { $regex: category, $options: 'i' } }
      });
    }

    console.log(sortCriteria);
    if(Object.keys(sortCriteria).length > 0)
      pipeline.push({ $sort: sortCriteria });
    console.log(query);
    

    const coffeeShops = await CoffeeShop.aggregate(pipeline);
    console.log(coffeeShops, "res");
    res.json(coffeeShops);
    // res.json([]);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  searchCoffeeShops,
};
