import React from "react";
import PropTypes from 'prop-types';
import s from './style.module.css'

const SearchBar = ({searchTerm, setSearchTerm}) => {   
    // Función que se ejecuta cada vez que se cambia el valor del input
    const handleChange = e => {
      setSearchTerm(e.target.value.toLowerCase()); // Actualiza el estado con el valor del input
    };

    // Función que se ejecuta cuando se envía el formulario
    const handleSubmit = e => {
      e.preventDefault(); // Evita que se recargue la página al enviar el formulario
      
      // validando busqueda del input
      if(!searchTerm){
        console.log('campos vacios !!!')
        return
      }
      setSearchTerm('')
  };

  return (
    <form className={s.searchBar} onSubmit={handleSubmit}>
      <input className={s.searchInput } type="text" value={searchTerm} onChange={handleChange} placeholder="Search..."/>
    </form>
  );
}


SearchBar.propTypes = {
  setSearchTerm : PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default SearchBar;

