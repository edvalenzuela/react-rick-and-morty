import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Character from "../characters/Character";
import s from "./style.module.css";

function CharacterList({ characters, filteredTerm }) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        setCharacters(prevCharacters => [...prevCharacters, ...res.data.results]);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [page]);
  

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={s.container} ref={wrapperRef}>
      <h1>Characters</h1>
      <ul className={s.characterList}>
        {filteredTerm
          ? filteredCharacters.map((character) => (
              <Character key={character.id} character={character} />
            ))
          : characters.map((character, index) => (
              <Character key={index} character={character} />
            ))}
      </ul>
      {loading && <div>Cargando más personajes...</div>}
      {error && <div>Error al cargar personajes</div>}
    </div>
  );
}

export default CharacterList;
