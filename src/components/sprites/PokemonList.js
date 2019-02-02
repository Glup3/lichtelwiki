import React, { Component } from 'react';
import PokemonSprite from './PokemonSprite';
import axios from 'axios';
import FloatingActionButton from './FloatingActionButton';
import { capitalizeFirstCharacter } from '../Helper';

class PokemonList extends Component {
  state = {
    pokemons: [],
    shinyBool: false
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    this.fetchPokemons(url);
  }

  fetchPokemons = (url) => {
    this.setState({
      pokemons: []
    });

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

  toggleShiny = () => {
    this.setState({
      shinyBool: !this.state.shinyBool
    })
  }

  renderPokemons = () => {
    return this.state.pokemons === [] ? (null) : (
      this.state.pokemons
      .sort((a, b) => { return a.id - b.id })
      .map((pokemon, key) => {
        return <PokemonSprite key={key} id={pokemon.id} sprite={this.state.shinyBool === true ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} name={capitalizeFirstCharacter(pokemon.name)} />
      })
    );
  }

  render() {
    const pokemons = this.renderPokemons();

    return (
      <div className="container">
        <div className="row">
          {pokemons}
        </div>
        <FloatingActionButton fetchList={this.fetchPokemons} toggleShiny={this.toggleShiny}/>
      </div>
    );
  }
}

export default PokemonList
