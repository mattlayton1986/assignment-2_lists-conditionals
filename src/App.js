import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    userInput: '',
    userInputAsArray: []
  }

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  charClickedHandler = (index) => {
    let stringArray = this.state.userInput.split('');
    stringArray.splice(index, 1);

    this.setState({
      userInput: stringArray.join('')
    })
  }

  render() {
    return (
      <div className="App">
        <input 
          type="text"
          value={this.state.userInput}
          onChange={(event) => this.inputChangedHandler(event)} />
        <p>You entered: {this.state.userInput}</p>
        <ValidationComponent length={this.state.userInput.length} />
        {
          this.state.userInput.split('').map((char, index) => 
            <CharComponent clicked={() => this.charClickedHandler(index)} key={index}>
              {char}
            </CharComponent>)
        }
      </div>
    );
  }
}

export default App;
