import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './src/pages/Splash';
import {MainTab} from './src/tabs/MainTab';
import HomeScreen from './src/pages/HomeScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Router;
