import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

export class Navbar extends Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {

    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue">
            <Link to="/" className="brand-logo center">LichtelWiki</Link>
            <Link to="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/list">Pokemons</Link></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><div className="blue white-text center">LichtelWiki</div></li>
          <li><div className="divider"></div></li>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/list">Pokemons</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar
