import React from 'react';

class PokemonNotFound extends React.Component {
  render() {
    return(
      <div>
        <h2>Page request not found
        <span role="img" aria-label=""style={{ fontSize: '20px' }}>&#128557;</span>
        </h2>
        
        <img src="https://media.tenor.com/images/6dc9dc360a4b22478a245421e99c669b/tenor.gif" alt="Pokémon crying"></img>
      </div>
    );
  }
}

export default PokemonNotFound;