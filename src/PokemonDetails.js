import React from 'react';

class PokemonDetails extends React.Component {
  render() {
    const { match: { params: { namePoke } } } = this.props;
    const { pokemons } = this.props;
    const pokemon = pokemons.find(pokemon => pokemon.name === namePoke);
    const { name, type, averageWeight, image, summary, foundAt } = pokemon;
    return(
      <div className="pokemon-details">
        <h2>{`${name} Details`}</h2>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
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
