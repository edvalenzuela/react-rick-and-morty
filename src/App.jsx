import React from "react";
import s from "./style.module.css"
import Characters from "./components/Character";

function App() {
  return (
    <div className={s.container}>
      < Characters/>
    </div>
  );
}

export default App;
