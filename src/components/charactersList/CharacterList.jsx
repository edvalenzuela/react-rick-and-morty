import React from "react";
import Character from "../characters/Character";
import s from "./style.module.css"

function CharacterList({ characters }) {
  return (
    <div className={s.container}>
      <h1>Characters</h1>
      <ul className={s.characterList}>
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
