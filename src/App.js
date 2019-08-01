import React, { useState } from 'react';
import './App.css';

import Checkbox from './objects/Checkbox';
import About from './objects/About';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';

const App = () => {
  const [activeAbout, setActiveAbout] = useState("")

  const handleClick = () => setActiveAbout("-active");

  return (
    <main className="app">
      <Header onClick={handleClick} />
      <Hashtag />
      <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />

      <About className={activeAbout}>
        <HeaderInternal />

        <ProfileUser />
      </About>
    </main>
  )
};

export default App;
