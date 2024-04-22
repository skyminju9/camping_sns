import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './src/pages/Splash';
import LoginScreen from './src/pages/LoginScreen';
import OnBoardingScreen from './src/pages/OnBoardingScreen';
import HomeScreen from './src/pages/HomeScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import FindPasswordScreen from './src/pages/FindPasswordScreen';
import MainTab from './src/tabs/MainTab';
import ArticleDetailScreen from './src/pages/ArticleDetailScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import NotificationScreen from './src/pages/NotificationScreen';
import CommunityDetailScreen from './src/pages/CommunityDetailScreen';
import ProfileEditScreen from './src/pages/ProfileEditScreen';
import HomeDetailScreen from './src/pages/HomeDetailScreen';
import CommunityScreen from './src/pages/CommunityScreen';
import PostScreen from './src/pages/PostScreen';

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
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen
        name="CommunityDetailScreen"
        component={CommunityDetailScreen}
      />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default Router;
