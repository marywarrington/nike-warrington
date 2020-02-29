import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './button';
import './query-input.scss';

/** @class QueryInput builds an input form, including button, to submit query */
export class QueryInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: this.props.searchParam,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * Grabs finalized search param from text input and sets to state
   * @param {object} e - Event Object.
   */
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      userInput: this.state.userInput,
    });
    this.props.onSubmit(this.state.userInput);
  };

  /**
   * Typical text input handler. Updates value as user types.
   * @param {object} e - Event Object.
   */
  handleInputChange(e) {
    this.setState({ userInput: e.target.value});
  }

  render() {
    return (
      <div className='query-input'>
        <form>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleInputChange}
          />
          <Button theme="dark" onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    );
  }
}

QueryInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};