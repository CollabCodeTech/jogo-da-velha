import React, { useState } from 'react';
import './App.css';

import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';

const App = () => {
  const [activeAbout, setActiveAbout] = useState("")

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("")

  return (
    <main className="app">
      <Header onClick={handleClickAdd} />
      <Hashtag />
      <InputCheckbox id="show" value="show" type="checkbox" content="Mostrar eventos" />

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />

        <ProfileUser />
      </LayerDark>
    </main>
  )
};

export default App;
