import React, { useState } from 'react';
import ProductList from './ProductList';
import Search from './Search';
import './App.css'; // Optional: for styling

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      <h1>Fake E-Commerce Site</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default App;
