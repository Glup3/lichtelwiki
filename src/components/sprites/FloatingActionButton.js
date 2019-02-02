import React, { Component } from 'react'
import M from 'materialize-css'

class FloatingActionButton extends Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
      direction: 'top'
    });
  }

  fetchGeneration = (e) => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    var ending = '';

    switch(e.target.id) {
      case "1": ending = '?limit=151'; break;
      case "2": ending = '?offset=151&limit=100'; break;
      case "3": ending = '?offset=251&limit=135'; break;
      case "4": ending = '?offset=386&limit=107'; break;
      case "5": ending = '?offset=493&limit=156'; break;
      case "6": ending = '?offset=649&limit=72'; break;
      case "7": ending = '?offset=721&limit=86'; break;
      default: ending = '?limit=151'; break;
    }

    this.props.fetchList(baseUrl + ending);
  }

  toggleShiny = (e) => {
    this.props.toggleShiny();
  }

  render() {
    return (
      <div className="fixed-action-btn">
        <button className="btn-floating btn-large red">
          <i className="large material-icons">mode_edit</i>
        </button>
        <ul>
          <li><button onClick={this.fetchGeneration} id="1" className="btn-floating red">1</button></li>
          <li><button onClick={this.fetchGeneration} id="2" className="btn-floating orange">2</button></li>
          <li><button onClick={this.fetchGeneration} id="3" className="btn-floating yellow darken-2">3</button></li>
          <li><button onClick={this.fetchGeneration} id="4" className="btn-floating green">4</button></li>
          <li><button onClick={this.fetchGeneration} id="5" className="btn-floating blue">5</button></li>
          <li><button onClick={this.fetchGeneration} id="6" className="btn-floating purple">6</button></li>
          <li><button onClick={this.fetchGeneration} id="7" className="btn-floating purple accent-1">7</button></li>
          <li><button onClick={this.toggleShiny} className="btn-floating light-blue">Shiny</button></li>
        </ul>
      </div>  
    )
  }
}

export default FloatingActionButton
