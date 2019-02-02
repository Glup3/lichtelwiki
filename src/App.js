import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Welcome from './components/Welcome';
import PokemonList from './components/sprites/PokemonList';
import PokeDetails from './components/pokemon/PokeDetails';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/list" component={PokemonList} />
            <Route path="/pokemon/:id(\d+)" component={PokeDetails} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
