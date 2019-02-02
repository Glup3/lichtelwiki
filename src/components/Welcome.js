import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <p>List of all <Link to="/list">Pokemon</Link></p>
      <p>Details of my favorite Pokemon: <Link to="/pokemon/25">Pikachu</Link></p>
    </div>
  )
}

export default Welcome