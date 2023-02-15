import React from "react";
import s from "./style.module.css"
import Characters from "./components/Character";
import { useState, useEffect } from "react";
import openingTheme from "./assets/audio/openingTheme.mp3"

function App() {

  const [audio] = useState(new Audio(openingTheme)); // Inicializa el audio usando el archivo mp3
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.loop = true && audio.play() : audio.pause(); // Actualiza el estado de reproducción del audio en base al estado 'playing'
  }, [playing, audio]);

  return (
    <div>
      <button onClick={() => setPlaying(!playing)}> {/* Cambia el estado 'playing' al hacer clic en el botón */}
        {playing ? "Pause" : "Play"}
      </button>

      
      < Characters/>
    </div>
  );
}

export default App;
