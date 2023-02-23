import React, { useState } from "react";
import s from './style.module.css'

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda

  // Función que se ejecuta cada vez que se cambia el valor del input
  const handleChange = (event) => {
    setSearchTerm(event.target.value); // Actualiza el estado con el valor del input
  };

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    handleSearch(searchTerm); // Ejecuta la función que recibe como prop para realizar la búsqueda
  };

  return (
    <form className={s.searchBar} onSubmit={handleSubmit}>
      <input className={s.searchInput } type="text" value={searchTerm} onChange={handleChange} placeholder="Search..."/>
      {/* Input controlado con el valor del estado y la función handleChange */}
    </form>
  );
}

export default SearchBar;

