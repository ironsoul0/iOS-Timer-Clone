import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Timer from './src/components/Timer/Timer';
import RoundButton from './src/components/RoundButton/RoundButton';
import ButtonsRow from './src/components/ButtonsRow/ButtonsRow';
import LapsTable from './src/components/LapsTable/LapsTable';

export default class App extends React.Component {
  state = {
    start: 0,
    now: 0,
    laps: [],
    timePassed: 0,
    stopped: true,
    lastTap: 0
  };

  start = () => {
    const now = new Date().getTime();

    this.setState({
      start: now,
      now: now,
      stopped: false
    })

    this.timer = setInterval(() => {
      this.setState({
        now: new Date().getTime()
      });
    }, 100);
  }

  stop = () => {
    clearInterval(this.timer);
    let timePassed = this.state.timePassed + this.state.now - this.state.start;
    this.setState({
      timePassed: timePassed,
      now: 0,
      start: 0,
      stopped: true
    });
  }

  reset = () => {
    clearInterval(this.timer);
    this.setState({
      start: 0,
      now: 0,
      laps: [],
      timePassed: 0,
      stopped: true,
      lastTap: 0
    });
  }

  lap = () => {
    const timer = this.state.timePassed + this.state.now - this.state.start;
    const lapValue = timer - this.state.lastTap;
    this.setState((prevState, props) => {
      return {
        lastTap: timer,
        laps: [lapValue, ...prevState.laps]
      };
    });
  }

  render() {
    const timer = this.state.timePassed + this.state.now - this.state.start;

    const startButton = (
      <RoundButton 
        title="Start"
        color="#50D167"
        background="#1B361F"
        onPress={this.start}
      />
    );

    const stopButton = (
      <RoundButton 
        title="Stop"
        color="#E33935"
        background="#3C1715"
        onPress={this.stop}
      />
    );

    const resetButton = (
      <RoundButton 
        title="Reset"
        color="#FFFFFF"
        background="#3D3D3D"
        onPress={this.reset}
      />
    );

    const lapButton = (
      <RoundButton 
        title="Lap"
        color="#FFFFFF"
        background="#3D3D3D"
        onPress={this.lap}
      />
    );

    let secondButton = (this.state.stopped ? startButton : stopButton);
    let firstButton = (this.state.stopped ? resetButton : lapButton);

    return (
      <View style={styles.container}>
        <Timer 
          interval={timer}
          styling={styles.mainTimer}
        />
        <ButtonsRow>
          {firstButton}
          {secondButton}
        </ButtonsRow>
        <LapsTable 
          laps={this.state.laps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  mainTimer: {
    color: '#FFFFFF',
    fontSize: 71,
    fontWeight: '100'
  }
});
