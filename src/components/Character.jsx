import axios from "axios";
import { useState, useEffect } from "react";

import s from "./style.module.css"

const API = "https://rickandmortyapi.com/api/character";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Characters</h1>
      <ul className={s.characterContainer}>
        {characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <div className={s.info}>
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
            <p>Ubication: {character.location.name}</p>
          
            </div>
           </li>
        ))}
      </ul>
    </div>
  );
}
export default Characters;