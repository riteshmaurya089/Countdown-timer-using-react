// App.jsx
import React, { Component } from 'react';
import Timer from './Timer';
 import './styles.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: false,
    };
  }

  toggleTimer = () => {
    this.setState((prevState) => ({
      showTimer: !prevState.showTimer,
    }));
  };

  render() {
    return (
      <div>
        {this.state.showTimer ? (
          <div>
            <Timer />
            <button onClick={this.toggleTimer}>HIDE TIMER</button>
          </div>
        ) : (
          <button onClick={this.toggleTimer}>SHOW TIMER</button>
        )}
      </div>
    );
  }
}

export default App;

