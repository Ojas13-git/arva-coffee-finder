import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';
import ProductList from '../components/ProductList';
import axiosInstance from "../axiosInstance"

const CoffeeShopPage = () => {
  const { id } = useParams();
  const [coffeeShop, setCoffeeShop] = useState(null);
  const [products, setProducts] = useState([]);

  const fetchCoffeeShop = async () => {
    try {
      const response = await axiosInstance.get(`/api/coffee-shops/${id}`);
      setCoffeeShop(response.data);
    } catch (error) {
      console.error('Error fetching coffee shop:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(`/api/products/${id}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchCoffeeShop();
    fetchProducts();
  }, [id]);

  if (!coffeeShop) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=' shadow-lg rounded-lg p-4'>
          <h1 className="text-3xl font-bold">{coffeeShop.name}</h1>
          <p className="text-gray-600 mb-4">{coffeeShop.location.address}</p>
          <Map location={coffeeShop.location} />
        </div>
        <div>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default CoffeeShopPage;
