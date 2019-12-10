import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />
    </div>
  );
}

export default App;
