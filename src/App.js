import React from 'react';
import './App.css';

import Checkbox from './objects/Checkbox';
import About from './objects/About';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />

    <About>
      <HeaderInternal />

      <ProfileUser />
    </About>
  </main>
);

export default App;
