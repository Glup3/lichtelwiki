import React, { Component } from 'react';
import M from 'materialize-css';

export class Navbar extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar