import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './src/pages/Splash';
import LoginScreen from './src/pages/LoginScreen';
import OnBoardingScreen from './src/pages/OnBoardingScreen';
import HomeScreen from './src/pages/HomeScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import FindPasswordScreen from './src/pages/FindPasswordScreen';
import MainTab from './src/tabs/MainTab';
import ArticleDetailScreen from './src/pages/ArticleDetailScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="FindPasswordScreen" component={FindPasswordScreen} />
      <Stack.Screen
        name="ArticleDetailScreen"
        component={ArticleDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default Router;
