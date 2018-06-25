import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    this.countDown = this.countDown.bind(this);
  }
  countDown() {
    // Set a starting date
    const startDate = new Date('Jul 27, 2018 18:3:00').getTime();

    setInterval(() => {
      const now = new Date().getTime();
      
      // Gets the difference between the starting date and present date
      const difference = startDate - now;

      // Time calculation
      const days =  Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60) % (1000 * 60) / 1000);
      
      // Update the state
      this.setState({ days, hours, minutes, seconds });

    }, 1000);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    this.countDown();
    return (
      <div style={{...styles.flexbox, ...styles.container}}>
        {
          days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0
          ?
            (<h1 style={styles.finishedMessage}>Countdown finished</h1>)
          :
            (<div style={{...styles.flexbox, ...styles.counter}}>
              <Counter number={this.state.days} label="Days"/>
              <Counter number={this.state.hours} label="Hours"/>
              <Counter number={this.state.minutes} label="Minutes"/>
              <Counter number={this.state.seconds} label="Seconds"/>
            </div>)
        }
      </div>
    );
  }
}

const styles = {
  flexbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '100vh',
  },
  counter: {
    flexFlow: 'wrap',
  },
  finishedMessage: {
    textAlign: 'center'
  }
};

export default App;
