import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Lap from '../Lap/Lap';

const LapsTable = (props) => {
  let mini = 0, maxi = 0;

  if (props.laps.length > 0) {
    for (let i = 0; i < props.laps.length; i++) {
      if (props.laps[i] < props.laps[mini])
        mini = i;
      if (props.laps[i] > props.laps[maxi])
        maxi = i;
    }
  }
  
  return (
    <FlatList
      keyExtractor={(item, index) => String(index)}
      style={styles.flatList}
      data={props.laps}
      renderItem={info => {
        let lapType = "default", lap = info.item;

        if (lap === props.laps[mini])
          lapType = "slowest";
        if (lap === props.laps[maxi])
          lapType = "fastest";

        return (
          <Lap 
            number={props.laps.length - info.index}
            interval={lap}
            lapType={lapType}
          />
        );
      }}
    />
  );
}

export default LapsTable;

const styles = StyleSheet.create({
  flatList: {
    width: '100%'
  }  
});