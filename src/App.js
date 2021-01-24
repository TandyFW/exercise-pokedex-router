import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1> Pokedex </h1>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Switch>
        <Route path="/pokemons/:namePoke"
          render={(props) => <PokemonDetails {...props} pokemons={pokemons} />} />
        <Route path="/About"></Route>
        <Route exact path="/"
          render={ (props) => <Pokedex {...props} pokemons={pokemons}/> } />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;