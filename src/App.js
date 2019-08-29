import React, { useState } from 'react';
import './App.css';

import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';
import HeaderGame from './components/HeaderGame';
import HashtagGame from './components/HashtagGame';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';
import HistoryGame from './components/HistoryGame';


const App = () => {
  const [activeAbout, setActiveAbout] = useState("")
  const history = ["Adiconou O"];

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("")

  const addHistory = (player) => {
    console.log("=================");
    console.log("ANTES DO PUSH", history);
    history.push(`Adicinou ${player.toUpperCase()}`)
    console.log("DEPOIS DO PUSH", history);
  };

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame callback={addHistory} />
      <InputCheckbox id="show" value="show" type="checkbox" content="Mostrar eventos" />

      <HistoryGame history={history}/>

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />

        <ProfileUser />
      </LayerDark>
    </main>
  )
};

export default App;
