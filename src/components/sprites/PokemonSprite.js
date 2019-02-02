import React from 'react';
import { Link } from 'react-router-dom';

const PokemonSprite = ({ name, sprite, id }) => {
  
  return (
    <div className="col s6 m4 l3 xl2">
      <div className="sprite center  blue lighten-5">
        <Link to={'/pokemon/' + id}>
          <img src={sprite} className="responsive-img" alt={name} />
          <span className="sprite-name">{name}</span>
        </Link>
      </div>
    </div>
  )
}

export default PokemonSprite