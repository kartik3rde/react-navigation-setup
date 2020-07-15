/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import Router from "./src/routes/routes"


const App: (props) => React$Node = (props) => {
  return (
    <>
       <NavigationContainer initialState={props.initialNavigationState}>
      <Router />
    </NavigationContainer>
    </>
  );
};



export default App;
