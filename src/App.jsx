import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Introducao from './pages/Introducao';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/" exact component={Introducao} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
