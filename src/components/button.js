import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * General template for a button
 * @param {object} props - button props being passed down from parent.
 */
export const Button = (props) => {
  const { children, onClick, theme } = props;
  const classes = [
    'button',
    theme == 'light' ? 'button--light' : 'button--dark',
  ];


  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  theme: PropTypes.string,
};


Button.defaultProps = {
  theme: 'dark',
};