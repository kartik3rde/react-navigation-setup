import * as React from 'react';
// import { TouchableNativeFeedback } from "react-native"
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from "../page/Home"
import About from "../page/About"
import DrawerElement from './DrawerElement';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerElement {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

const Router = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="App" component={AppDrawer} />
    </Stack.Navigator>
  );
};


export default Router
