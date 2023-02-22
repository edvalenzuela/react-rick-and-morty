import React, { useState } from "react";
import s from './style.module.css'

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form className={s.searchBar} onSubmit={handleSubmit}>
    
      <input className={s.searchInput } type="text" value={searchTerm} onChange={handleChange} placeholder="Search..."/>
    </form>
  );
}

export default SearchBar;
