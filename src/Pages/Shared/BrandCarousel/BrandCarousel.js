import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/player-2.jpg';
import Brand2 from '../../../assets/brands/player-4.jpg';
const BrandCarousel = () => {
    return (
        <div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Brand1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Brand2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default BrandCarousel;