import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  const addToHistory = (query) => {
    setSearchHistory(prev => {
      const filtered = prev.filter(item => item !== query);
      return [query, ...filtered].slice(0, 5);
    });
  };

  return (
    <SearchContext.Provider value={{ searchHistory, addToHistory }}>
      {children}
    </SearchContext.Provider>
  );
};