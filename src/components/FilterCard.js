import React, { useState } from 'react';
import '../styles/FilterCard.css';
import productData from './Product_data.json'; // Ensure this contains your JSON data

const ProductCards = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = productData.filter((product) => {
    const matchesCategory =
      !selectedCategory || product['Product Cateogy Name'] === selectedCategory;

    const matchesSearch = product.ProductName.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="partner-cards-section">
      <h1 className="partner-cards-title">Product Inventory</h1>

      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Category filter */}
      <div className="filter-options">
        <select value={selectedCategory} onChange={handleCategoryChange} className="filter-dropdown">
          <option value="">All Categories</option>
          {[
            ...new Set(productData.map((product) => product['Product Cateogy Name'])),
          ].map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="cards-wrapper">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="partner-card" key={index}>
              <h6 className="card-category">{product['Product Cateogy Name']}</h6>
              <hr className="card-divider" />
              {/* <img
                src={product['Product Image'] || 'placeholder.jpg'}
                alt={product.ProductName}
                className="partner-card-img"
              /> */}
              <hr className="card-divider" />
              <div className="card-content">
                <h3 className="partner-card-title">{product.ProductName}</h3>
                <p className="partner-card-location">{product.Description}</p>
              </div>
              <div className="product-details">
                <p>
                  <strong>Stock Level:</strong> {product.StockLevel}
                </p>
                <p>
                  <strong>Supplier:</strong> {product['Supplier Name']}
                </p>
                <p>
                  <strong>Status:</strong> {product['Order Status']}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
