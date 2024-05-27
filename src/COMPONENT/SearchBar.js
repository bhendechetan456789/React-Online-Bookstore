// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title, author, or genre..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
