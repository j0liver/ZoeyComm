import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      {/* <Route path='About' component={About} />
      <Route path='/Contact' component={Contact} /> */}

      {/* <NavBar /> */}
    </div>
  );
}

export default App;
