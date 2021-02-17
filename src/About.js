import React from 'react';

class About extends React.Component {
  render() {
    return(
      <div>
        <h2>About Pokédex</h2>
        <p>This Application simulates a Pokédex, a digital enciclopedia containing all Pokémons</p>
        <p>One can filter Pokémons by type, and see more details for each one of them.</p>
        <img src="https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/120px-Gen_I_Pok%C3%A9dex.png" alt="Pokédex" />
      </div>
    );
  }
}

export default About;