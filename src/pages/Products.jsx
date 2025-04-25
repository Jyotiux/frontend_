import React, { useState } from 'react';
import './Products.css';

import tshirt from '../assets/images/products/tshirt.png';
import jeans from '../assets/images/products/jeans.png';
import jacket from '../assets/images/products/jacket.png';
import sneakers from '../assets/images/products/sneakers.png';

const dummyProducts = [
  { id: 1, name: 'T-Shirt', price: 499, image: tshirt, status: 'In Stock' },
  { id: 2, name: 'Jeans', price: 999, image: jeans, status: 'In Stock' },
  { id: 3, name: 'Jacket', price: 1999, image: jacket, status: 'In Stock' },
  { id: 4, name: 'Sneakers', price: 1499, image: sneakers, status: 'Out of Stock' },
];

const Products = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const sortByPrice = () => {
    const sorted = [...products].sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
    setProducts(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredProducts = products.filter((p) =>
    (filterStatus === 'All' || p.status === filterStatus) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container products-page">
      <h2 className="mb-4">Our Products</h2>

      <div className="controls">
        <button className="sort-button" onClick={sortByPrice}>
          Sort by Price ({sortOrder === 'asc' ? 'Low to High' : 'High to Low'})
        </button>

        <select className="filter-select" onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
          <option value="All">All</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <input
          type="text"
          className="search-input"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h5>{product.name}</h5>
            <p>₹{product.price}</p>
            <p className={`status ${product.status === 'In Stock' ? 'in' : 'out'}`}>{product.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
