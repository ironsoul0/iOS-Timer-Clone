import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Timer from '../Timer/Timer';

const Lap = (props) => {
  return (
    <View style={styles.lap}>
      <Text style={styles[props.lapType]}>
        Lap {props.number}
      </Text>
      <Timer
        styling={styles[props.lapType]} 
        interval={props.interval}
      />
    </View>
  );
}

export default Lap;


const styles = StyleSheet.create({
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#151515',
    borderTopWidth: 1,
    paddingVertical: 10
  },
  default: {
    color: '#FFFFFF',
    fontSize: 18
  },
  fastest: {
    color: '#4BC05F',
    fontSize: 18
  },
  slowest: {
    color: '#CC3531',
    fontSize: 18
  }
});