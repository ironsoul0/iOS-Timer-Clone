import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ButtonsRow = (props) => {
  return (
    <View style={styles.container}>
      {props.children}  
    </View>
  );
}

export default ButtonsRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30
  }  
});