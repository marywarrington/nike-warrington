import React from 'react';
import './slide.scss';

export const Slide = (props) => {
  return (
    <div className="slide" style={{
      background: `url("${props.img}") center center`,
      backgroundSize: 'cover',
    }}>
      <div className="slide__info">
        <h3 className="slide__desc">{props.desc}</h3>
        <p>{props.author}</p>
      </div>
    </div>
  );
}

Slide.defaultProps = {
  img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  title: 'A beautiful image'
};
