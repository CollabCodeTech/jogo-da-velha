import React from 'react';
import './App.css';
import Profile from './img/profile.jpg';

import Checkbox from './objects/Checkbox';
import About from './objects/About';
import AvatarProfile from './objects/AvatarProfile';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import HeaderInternal from './components/HeaderInternal';

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />

    <About>
      <HeaderInternal />

      <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
    </About>
  </main>
);

export default App;
