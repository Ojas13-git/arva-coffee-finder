import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product._id} className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
