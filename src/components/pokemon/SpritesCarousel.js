import React, { Component } from 'react';
import M from 'materialize-css';

class SpritesCarousel extends Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }

  render() {
    const sprites = this.props.sprites;
    return (
      <div className="carousel">
        <div className="carousel-item"><img alt='sprite front default' src={sprites.front_default}/></div>
        <div className="carousel-item"><img alt='sprite back default' src={sprites.back_default}/></div>
        <div className="carousel-item"><img alt='sprite front shiny' src={sprites.front_shiny}/></div>
        <div className="carousel-item"><img alt='sprite back shiny' src={sprites.back_shiny}/></div>
        <div className="carousel-item"><img alt='sprite front female' src={sprites.front_female}/></div>
        <div className="carousel-item"><img alt='sprite back female' src={sprites.back_female}/></div>
        <div className="carousel-item"><img alt='sprite front shiny female' src={sprites.front_shiny_female}/></div>
        <div className="carousel-item"><img alt='sprite back shiny female' src={sprites.back_shiny_female}/></div>
      </div>
    )
  }
}

export default SpritesCarousel
