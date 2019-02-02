import React, { Component } from 'react'
import axios from 'axios';
import { capitalizeFirstCharacter, getPokedexNumber } from '../Helper';
import SpritesCarousel from './SpritesCarousel';

class PokeDetails extends Component {

  state = {
    pokemon: null
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
    axios.get(url)
      .then(response => {
        const pokemon = response.data;
        this.setState({
          pokemon: pokemon
        })
      })
      .catch(error => {
        console.log('ERROR fetching pokemon with the id: ' + id, error);
      })
  }

  renderContent = (pokemon) => {
    if (pokemon === null) {
      return (<h1>loading...</h1>);
    }
    
    return (
      <div>
        <SpritesCarousel sprites={pokemon.sprites}/>
        <h1>{getPokedexNumber(pokemon.id)} {capitalizeFirstCharacter(pokemon.name)}</h1>
        <table className="responsive-table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Height</th>
              <th>Weight</th>
            </tr>
            <tr>
              <td>{getPokedexNumber(pokemon.id)}</td>
              <td>{capitalizeFirstCharacter(pokemon.name)}</td>
              <td>{pokemon.height}</td>
              <td>{pokemon.weight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render () {
    return (
      <div className="container">
        {this.renderContent(this.state.pokemon)}
      </div>
    )
  }
}

export default PokeDetails