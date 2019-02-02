import React from 'react';

const PokemonSprite = ({ name, sprite}) => {
  
  return (
    <div className="col s6 m4 l3 xl2">
      <div className="sprite center  blue lighten-5">
        <img src={sprite} className="responsive-img" alt={name} />
        <span className="sprite-name">{name}</span>
      </div>
    </div>
  )
}

export default PokemonSprite