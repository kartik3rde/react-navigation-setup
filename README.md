# react-navigation-setup
install react-navigation 

1:-     install react-navigation
Follow this Document 
https://reactnavigation.org/docs/getting-started/

npm install @react-navigation/native

Installing dependencies into a bare React Native project:-
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

drawer navigation :- 
https://reactnavigation.org/docs/drawer-based-navigation
 npm install @react-navigation/drawer

2:-        Setup React native code for navigation
 Create pages like home , about etc (src/component/pages)
 Create Routers folder in src and create files (DrawerElement.js, routes.js)

3:-   Setup Routers in App
   Paste below code in routes.js(src/Routers/routes.js)    
    ---------*********---------------
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from "../page/Home"
import About from "../page/About"
import DrawerElement from './DrawerElement';  // this are your drawer components

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

---------*********---------------





 Paste below code in DrawerElement.js(src/Routers/DrawerElement.js) 
---------*********---------------
     import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

// in drawer you can customise your drower design
const DrawerElement = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
     </DrawerContentScrollView>
  );
};

export default DrawerElement


---------*********---------------











4:- Go to app.js and apply below code
  
---------*********---------------
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

---------*********---------------


5 :- Run  your project and check drawer is working or not 
     (scroll left to right hand side in mobile screen )




6: Some use full function for navigations
for one page to other
onPress={() => navigation.navigate('Details')}
*************************
for back page
 onPress={() => navigation.goBack()}
*************************
Passing parameters to routes

onPress={() => {
           navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
************************* 
 Drawer functions
 navigation.openDrawer();
 navigation.closeDrawer();
 navigation.toggleDrawer();


Git Link :- https://github.com/kartik3rde/react-navigation-setup

npm install @react-navigation/stack
https://reactnavigation.org/docs/stack-navigator/
npm install @react-navigation/drawer
https://reactnavigation.org/docs/drawer-navigator/
npm i @react-navigation/native
https://reactnavigation.org/docs/navigation-container/


Thanks 



