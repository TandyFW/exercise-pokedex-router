import React from 'react';
import { Redirect } from 'react-router-dom';
import PokemonNotFound from './PokemonNotFound';
import './PokemonDetails.css'
import Pokemon from './Pokemon';

class PokemonDetails extends React.Component {
  render() {
    const { match: { params: { namePoke } } } = this.props;
    const { pokemons } = this.props;
    const pokemon = pokemons.find(pokemon => pokemon.name === namePoke);
    const { name, summary, foundAt } = pokemon;

    if(!pokemons.find(pokemon => pokemon.name === namePoke)) {
      return (
        <Redirect to={ PokemonNotFound }/>
      );
    }
    return(
      <div className="pokemon-details">
        <h2>{`${name} Details`}</h2>
        <Pokemon pokemon={ pokemon }/>
        <h2>Summary</h2>
        <p>{summary}</p>
        <h2>{`Game Location of ${name}`}</h2>
        <div className="poke-location">
            {foundAt.map(element =>
              <figure>
                <img src={element.map} alt="map" />
                <figcaption>{element.location}</figcaption> 
              </figure>
            )}
        </div>
        <form>
          <label>Pokemon Favorito?
            <input type="checkbox"></input>
          </label>
        </form>
      </div>
    );
  }
}

export default PokemonDetails;
