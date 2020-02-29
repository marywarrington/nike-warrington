import React from 'react';
import PropTypes from 'prop-types';
import './slide.scss';
import { Button } from "./button";

/**
 * Template for a single slide, to be pulled into the slideshow
 * @param {object} props - Slide props being passed down from slideshow.
 */
export const Slide = (props) => {
  const {img, desc, author, download} = props;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(download);
  };

  /**
   * Creates a link, if present, to the author's instagram. Otherwise, returns just the author name.
   */
  const Author = () => {
    if (author.name && author.instagram_username) {
      return (<p>Photo by <a
        href={`https://www.instagram.com/${author.instagram_username}`}
        target="_blank"
        className="slide__author"
      >{author.name}</a></p>)
    } else {
      return <p>Photo by {author.name}</p>;
    }
  };

  return (
    <div className="slide" style={{
      background: `url("${img}") center center`,
      backgroundSize: 'cover',
    }}>
      <div className="slide__info">
        <h3 className="slide__desc">{desc}</h3>
        {author ? <Author /> : ''}
        <Button theme="light" onClick={handleClick}>Download</Button>
      </div>
    </div>
  );
}

Slide.propTypes = {
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  download: PropTypes.string.isRequired,
};
