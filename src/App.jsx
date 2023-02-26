import React, { useState, useEffect, useRef } from "react"; // Importamos los hooks que utilizaremos en el componente
import axios from "axios"; // Importamos axios para realizar las peticiones a la API
import CharacterList from "./components/charactersList/CharacterList"; // Importamos el componente CharacterList
import s from "./style.module.css"; // Importamos los estilos del componente
import Header  from "./components/header/Header"; // Importamos el componente Header
import openingTheme from "./assets/audio/openingTheme.mp3" // Importamos el audio que se reproducirá en el componente

function App() {
  const [characters, setCharacters] = useState([]); // Estado que almacenará los personajes obtenidos de la API
  const [searchTerm, setSearchTerm] = useState(""); // Estado que almacenará el término de búsqueda ingresado por el usuario
  const [audio] = useState(new Audio(openingTheme)); // Estado que almacenará el objeto de audio que se reproducirá en el componente
  const [playing, setPlaying] = useState(false); // Estado que almacenará si el audio se está reproduciendo o no
  const [page, setPage] = useState(1); // Estado que almacenará el número de página actual de la API a la que se está haciendo la petición
  const [loading, setLoading] = useState(false); // Estado que almacenará si se están cargando más personajes o no
  const [error, setError] = useState(false); // Estado que almacenará si hubo un error al obtener los personajes de la API
  const [filteredTerm, setFilteredTerm] = useState(""); // Estado que almacenará el término de búsqueda filtrado por el estado de filteredTerm
  const wrapperRef = useRef(null); // Referencia al contenedor que contiene la lista de personajes

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`) // Realizamos una petición GET a la API de Rick and Morty utilizando el número de página actual
      .then((res) => {
        setCharacters((prevCharacters) => [...prevCharacters, ...res.data.results]); // Agregamos los personajes obtenidos de la API al estado de characters
        setLoading(false); // Indicamos que ya no se están cargando más personajes
      })
      .catch((err) => {
        setTimeout(()=>{
          setError(true); // Indicamos que hubo un error al obtener los personajes de la API

        }, 3000)
        setLoading(false); // Indicamos que ya no se están cargando más personajes
      });
  }, [page]); // Este efecto se ejecutará cada vez que el valor de la variable page cambie

  useEffect(() => {
    playing ? audio.loop = true && audio.play() : audio.pause(); // Si el audio se está reproduciendo, lo reproducimos en loop. Si no, lo pausamos.
  }, [playing, audio]); // Este efecto se ejecutará cada vez que el valor de las variables playing o audio cambien

// Filtra la lista de personajes para mostrar solo aquellos que contengan el término de búsqueda (ignorando mayúsculas/minúsculas)
const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchTerm));

// Carga más personajes cuando el usuario llega al final del contenedor
const handleScroll = () => {
if (
  !loading &&
  wrapperRef.current &&
  wrapperRef.current.getBoundingClientRect().bottom <= window.innerHeight
) {
  setPage((prevPage) => prevPage + 1);
  setLoading(true);
}
};

// Agrega un listener para el evento scroll y lo remueve al desmontar el componente
useEffect(() => {
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, [handleScroll]);

// Renderiza los componentes de la aplicación
return (
  <div ref={wrapperRef}>
    {/* Botón para reproducir/pausar la música */}
    <button onClick={() => setPlaying(!playing)}>
      {playing ? "Pause" : "Play"}
    </button >
    {/* Renderiza el componente Header */}
    <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
    
    {characters.length === 0 && loading && (
      <div className={s.loading-text}>Cargando personajes...</div>
    )}
    {error && !loading && <div>Error al cargar personajes</div>}
    <CharacterList characters={filteredCharacters} filteredTerm={filteredTerm} searchTerm={searchTerm} />
    {loading && characters.length > 0 && <div>Cargando más personajes...</div>}
  </div>
);
}


export default App;


