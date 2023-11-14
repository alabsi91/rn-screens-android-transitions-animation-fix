import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Text>Screen2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0',
  },
});
