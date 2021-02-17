import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import PokemonNotFound from './PokemonNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1> Pokedex </h1>
      <nav className="Nav">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>
      <Switch>
        <Route path="/pokemons/:namePoke"
          render={(props) => <PokemonDetails {...props} pokemons={pokemons} />} />
        <Route path="/About" component={ About } />
        <Route exact path="/"
          render={ (props) => <Pokedex {...props} pokemons={pokemons}/> } />
        <Route path="/PokemonNotFound" component= { PokemonNotFound } />
        <Redirect from="/:wrongPokemon" to="/PokemonNotFound" />
        <Redirect from="/Pokemon/:wrongPokemon" to="/PokemonNotFound" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;