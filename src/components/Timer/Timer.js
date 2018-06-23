import React from 'react';
import { Text, StyleSheet } from 'react-native';
import moment from 'moment';

const process = (value) => {
  if (value < 10)
    return "0" + String(value);
  else
    return String(value);
}

const Timer = (props) => {
  const duration = moment.duration(props.interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);

  return (
    <Text style={props.styling}>
      {process(duration.minutes())}:{process(duration.seconds())},{process(centiseconds)}
    </Text>
  );
}

export default Timer;
