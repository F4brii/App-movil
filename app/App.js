// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screen

import Login from './src/screen/login';
import Drawer from './src/navigations/drawer';


export default class extends React.Component {

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={
              {
                headerShown: false,
              }
            }
          />
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={
              {
                headerShown: false,
                gestureEnabled: false, //quita gestos de pantalla
              }
            }

          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}