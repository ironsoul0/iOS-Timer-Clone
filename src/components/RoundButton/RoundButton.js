import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const RoundButton = (props) => {
  const viewBackground = {
    backgroundColor: props.background
  };

  const textColor = {
    color: props.color
  }

  return (
    <TouchableOpacity style={[styles.button, viewBackground]} onPress={props.onPress} activeOpacity={0.7}>
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonTitle, textColor]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default RoundButton;

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    fontSize: 18,
    paddingBottom: 5
  },
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});