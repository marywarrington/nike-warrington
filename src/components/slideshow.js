import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from './slide';
import Carousel from '@brainhubeu/react-carousel';
import './slideshow.scss';

/**
 * General template for a carousel, using SlideShow to distinguish our component from the imported Carousel library.
 * @param {object} props - button props being passed down from parent.
 */
export const SlideShow = (props) => {
  const { images } =  props;
  const slides = [];

  for (let [key] of Object.entries(images)) {
    slides.push(<Slide
      key={images[key].id}
      img={images[key].urls.regular}
      desc={images[key].description ? images[key].description : 'Untitled'}
      author={images[key].user}
      download={images[key].links.download}
    />);
  }

  return <Carousel
    className="carousel"
    slidesPerPage={3}
    arrows
    infinite>
      {slides}
    </Carousel>;
}


SlideShow.propTypes = {
  images: PropTypes.array.isRequired,
};