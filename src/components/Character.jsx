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
    <div className={s.characterContainer}>
      <h2>Characters</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Characters;