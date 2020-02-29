import React from 'react';
import { Slide } from './slide';

export const Carousel = (props) => {
  const { images } =  props;
  const slides = [];

  const [current, setCurrent] = React.useState(0);
  const SlideShow = () => {
    for (let [key] of Object.entries(images)) {
      slides.push(<Slide
        key={images[key].id}
        img={images[key].urls.regular}
        desc={images[key].description}
        author={images[key].user.name}
      />);
    }
    return slides;
  }


  React.useEffect(() => {
    const next = (current + 1) % slides.length;
    const id = setTimeout(() => setCurrent(next), 100);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className="carousel">
      <SlideShow />
    </div>
  );
}