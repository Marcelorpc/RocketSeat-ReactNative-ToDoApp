import { StatusBar } from 'react-native';
import { Fragment } from 'react';
import { Text } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <Fragment>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </Fragment>
  );
}