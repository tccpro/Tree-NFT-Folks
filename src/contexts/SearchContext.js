import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [search, setSearch] = useState(null);
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {props.children}
    </SearchContext.Provider>
  );
};
