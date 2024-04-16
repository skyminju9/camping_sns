import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from './CustomBottomTab';
import HomeScreen from '../pages/HomeScreen.jsx';

const Tab = createBottomTabNavigator();
const renderTabBar = props => <CustomBottomTab {...props} />;

export const MainTab = () => {
  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name="홈" component={HomeScreen} />
    </Tab.Navigator>
  );
};
