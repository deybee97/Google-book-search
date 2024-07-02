import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
        className="border border-gray-300 dark:border-gray-600 p-2 w-full max-w-lg rounded-l-md focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
