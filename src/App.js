import React from 'react';
import './App.css';

import Input from './objects/Input';
import Label from './objects/Label';
import Header from './components/Header';
import Hashtag from './components/Hashtag';


const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Input value="show" />
    <Label content="Mostrar eventos" />
  </main>
);

export default App;
