import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
import CharacterList from "./components/charactersList/CharacterList";
import s from "./style.module.css";
import { Header } from "./components/header/Header";
import openingTheme from "./assets/audio/openingTheme.mp3"


function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [audio] = useState(new Audio(openingTheme)); // Inicializa el audio usando el archivo mp3
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err));
      
  }, []);

  useEffect(() => {
    playing ? audio.loop = true && audio.play() : audio.pause(); // Actualiza el estado de reproducción del audio en base al estado 'playing'
  }, [playing, audio]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div>
       <button onClick={() => setPlaying(!playing)}> {/* Cambia el estado 'playing' al hacer clic en el botón */}
        {playing ? "Pause" : "Play"}
      </button>


      <Header />
      {/* <SearchBar handleSearch={handleSearch} /> */}
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;
