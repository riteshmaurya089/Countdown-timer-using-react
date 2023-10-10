// Timer.jsx
import React, { Component } from 'react';
import './styles.css';
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTime: 10,
      currentTime: 10,
      isRunning: false,
    };
    this.timerInterval = null;
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.timerInterval = setInterval(this.tick, 1000);
    }
  };

  stopTimer = () => {
    if (this.state.isRunning) {
      clearInterval(this.timerInterval);
      this.setState({ isRunning: false });
    }
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({ currentTime: this.state.initialTime });
  };

  tick = () => {
    if (this.state.currentTime > 0) {
      this.setState((prevState) => ({
        currentTime: prevState.currentTime - 1,
      }));
    } else {
      this.stopTimer();
    }
  };

  handleInputChange = (e) => {
    const inputTime = parseInt(e.target.value, 10);
    if (!isNaN(inputTime)) {
      this.setState({ initialTime: inputTime, currentTime: inputTime });
    }
  };

  formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.initialTime}
          onChange={this.handleInputChange}
          ref={this.inputRef}
        />
        <div>{this.formatTime(this.state.currentTime)}</div>
        {!this.state.isRunning ? (
          <button onClick={this.startTimer}>START TIMER</button>
        ) : (
          <button onClick={this.stopTimer}>STOP TIMER</button>
        )}
        <button onClick={this.resetTimer}>RESET TIMER</button>
      </div>
    );
  }
}

export default Timer;
