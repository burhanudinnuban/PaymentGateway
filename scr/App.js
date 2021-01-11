import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routing from './config/routing';

export default function App() {
  return (
    <NavigationContainer>
      <Routing />
    </NavigationContainer>
  );
}
