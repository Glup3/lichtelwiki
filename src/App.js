import React, { Component } from 'react';
import PokemonSprite from './components/PokemonSprite';
import axios from 'axios';
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    pokemons: []
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    axios.get(url)
      .then(response => {
        const rawPokemons = response.data.results;
        rawPokemons.forEach((poke) => {
          axios.get(poke.url)
            .then(response => {
              const pokemon = response.data;
              this.setState({
                pokemons: [...this.state.pokemons, pokemon]
              })
            })
            .catch(error => {
              console.log('ERROR fetching single Pokemon', error);
            })
        })
      })
      .catch(error => {
        console.log('ERROR fetching all Pokemon', error);
      })
  }

  render() {

    const pokemons = this.state.pokemons === [] ? (null) : (
      this.state.pokemons
      .sort((a, b) => { return a.id - b.id })
      .map((pokemon, key) => {
        return <PokemonSprite key={key} sprite={pokemon.sprites.front_default} name={pokemon.name} />
      })
    );

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            {pokemons}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
