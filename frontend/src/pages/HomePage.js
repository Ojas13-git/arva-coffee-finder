import React, { useState, useEffect } from 'react';
import CoffeeShopList from '../components/CoffeeShopList';
import SearchBar from '../components/SearchBar';
import axiosInstance from '../axiosInstance';

const HomePage = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [searchParams, setSearchParams] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosInstance.post('/api/search', searchParams);
        setCoffeeShops(result.data);
      } catch (error) {
        console.error('Error fetching coffee shops:', error);
      }
    };

    fetchData();
  }, [searchParams]);

  const fetchCoffeeShops = async () => {
    try {
      const response = await axiosInstance.get('/api/coffee-shops');
      setCoffeeShops(response.data);
    } catch (error) {
      console.error('Error fetching coffee shops:', error);
    }
  };

  useEffect(() => {
    fetchCoffeeShops();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-semibold text-gray-800">Arva Coffee Shop Finder</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Discover Coffee Shops</h2>
              <SearchBar setSearchParams={setSearchParams} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <CoffeeShopList coffeeShops={coffeeShops} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
