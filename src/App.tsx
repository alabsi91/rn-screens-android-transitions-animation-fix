import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{contentStyle: {backgroundColor: 'transparent'}}}
        initialRouteName="screen1">
        <Stack.Screen name="screen1" component={Screen1} />
        <Stack.Screen name="screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
