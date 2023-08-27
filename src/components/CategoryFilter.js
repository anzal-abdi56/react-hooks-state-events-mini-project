// CategoryFilter.js
import React from 'react';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div>
      <button
        className={selectedCategory === 'All' ? 'selected' : ''}
        onClick={() => onCategoryChange('All')}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;