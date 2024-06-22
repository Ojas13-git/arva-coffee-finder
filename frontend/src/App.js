import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoffeeShopPage from './pages/CoffeeShopPage';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coffee-shops/:id" element={<CoffeeShopPage />} />
      </Routes>
    </Router>
  );
};

export default App;
