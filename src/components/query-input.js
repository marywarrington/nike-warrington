import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './button';
import './query-input.scss';

/** QueryInput builds an input form, including button, to submit new query param */
export const QueryInput = (props) => {

  const [ userInput, setUserInput] = useState(props.searchParam);

  /**
   * Grabs finalized search param from text input and sets to state
   * @param {object} e - Event Object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(userInput);
  };

  return (
    <div className='query-input'>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <h1>{userInput}</h1>
        <Button theme="dark" onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
}

QueryInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};