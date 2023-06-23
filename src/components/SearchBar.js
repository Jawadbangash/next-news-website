import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    // Call onSearch with the keyword
    onSearch(keyword);
  };

  return (
    <div>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
