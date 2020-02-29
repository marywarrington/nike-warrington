import React from 'react';
import './controls.scss';

export class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: this.props.searchParam,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      userInput: this.state.userInput,
    });
    this.props.onSubmit(this.state.userInput);
    console.log(this.state.userInput);
  };

  handleInputChange(e) {
    this.setState({ userInput: e.target.value});

  }

  render() {
    return (
      <div className='controls'>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleInputChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}