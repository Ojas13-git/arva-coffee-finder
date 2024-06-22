import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeShopList = ({ coffeeShops }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {coffeeShops.map(shop => (
        <Link 
          key={shop._id} 
          to={`/coffee-shops/${shop._id}`} 
          className="block overflow-hidden border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img 
            src={shop.image} 
            alt={shop.name} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-2xl font-semibold text-gray-800">{shop.name}</h2>
            <p className="text-gray-600">{shop.location.address}</p>
            <div className="mt-2 flex items-center">
              <span className="text-yellow-500">
                {'★'.repeat(Math.round(shop.rating))}{'☆'.repeat(5 - Math.round(shop.rating))}
              </span>
              <span className="ml-2 text-gray-600">{shop.rating.toFixed(1)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CoffeeShopList;
