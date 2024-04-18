import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import ArticlesScreen from '../pages/ArticlesScreen';
import PostScreen from '../pages/PostScreen';
import CommunityScreen from '../pages/CommunityScreen';
import SettingScreen from '../pages/SettingScreen';

const homeIcon = require('../assets/icons/bottomtab/bottomIcon1.png');
const homeIconOff = require('../assets/icons/bottomtab/bottomIcon1_off.png');
const articleIcon = require('../assets/icons/bottomtab/bottomIcon2.png');
const articleIconOff = require('../assets/icons/bottomtab/bottomIcon2_off.png');
const communityIcon = require('../assets/icons/bottomtab/bottomIcon3.png');
const communityIconOff = require('../assets/icons/bottomtab/bottomIcon3_off.png');
const settingIcon = require('../assets/icons/bottomtab/bottomIcon4.png');
const settingIconOff = require('../assets/icons/bottomtab/bottomIcon4_off.png');
const plusIcon = require('../assets/icons/bottomtab/plus.png');

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.buttonShadow,
    }}>
    <View
      style={{
        width: 64,
        height: 64,
        borderRadius: 35,
        backgroundColor: '#FC9D45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#FFF',
          borderRadius: 16,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Image
                source={focused ? homeIcon : homeIconOff}
                resizeMode="contain"
                style={styles.tabIconStyle}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Article"
        component={ArticlesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Image
                source={focused ? articleIcon : articleIconOff}
                resizeMode="contain"
                style={styles.tabIconStyle}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={plusIcon}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Image
                source={focused ? communityIcon : communityIconOff}
                resizeMode="contain"
                style={styles.tabIconStyle}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Image
                source={focused ? settingIcon : settingIconOff}
                resizeMode="contain"
                style={styles.tabIconStyle}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#FC9D45',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonShadow: {
    shadowColor: '#FC9D45',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  tabIconStyle: {
    width: 50,
    height: 29,
  },
});

export default MainTab;
