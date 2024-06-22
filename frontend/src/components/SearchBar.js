import React, { useState } from 'react';

const SearchBar = ({ setSearchParams }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [minRating, setMinRating] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = {
      name,
      address,
      minRating,
      category,
      sortBy,
    };
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-gray-50 p-4 rounded-lg shadow-lg flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4 w-full">
      <div className="flex-1 mb-4 md:mb-0">
        <label className="block text-gray-700 font-bold mb-2">Search by Name</label>
        <input
          type="text"
          placeholder="Enter coffee shop name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1 mb-4 md:mb-0">
        <label className="block text-gray-700 font-bold mb-2">Search by Address</label>
        <input
          type="text"
          placeholder="Enter coffee shop address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1 mb-4 md:mb-0">
        <label className="block text-gray-700 font-bold mb-2">Minimum Rating</label>
        <input
          type="text"
          placeholder="Enter minimum rating"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1 mb-4 md:mb-0">
        <label className="block text-gray-700 font-bold mb-2">Category</label>
        {/* <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select...</option>
          <option value="Coffee">Coffee</option>
          <option value="Drinks">Drinks</option>
          <option value="food">Food</option>
          <option value="smoothie">Smoothie</option>
          <option value="pastry">Pastry</option>
          <option value="tea">Tea</option>
        </select>
      </div>
      <div className="flex-1 mb-4 md:mb-0">
        <label className="block text-gray-700 font-bold mb-2">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select...</option>
          <option value="name">Name (A-Z)</option>
          <option value="rating">Rating (High to Low)</option>
        </select>
      </div>
      <div className="flex-none w-full md:w-auto">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 w-full md:w-auto"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
