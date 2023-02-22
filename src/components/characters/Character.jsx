import React from "react";
import s from './style.module.css'

function Character({ character }) {
  return (
    <div className={s.characterContainer}>
      <li >
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <div className={s.info}>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
        <p>Ubication: {character.location.name}</p>
      </div>
    </li>
    </div>
  );
}

export default Character;

