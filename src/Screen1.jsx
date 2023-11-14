import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function Screen1(props) {
  return (
    <View style={styles.page}>
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate('screen2')}>
        <Text style={{color: '#fff'}}>Navigate to Screen 2</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00f',
  },
  button: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#000',
  },
});
