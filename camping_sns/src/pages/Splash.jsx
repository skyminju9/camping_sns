import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainTab');
    }, 2000);
  });

  return (
    <View style={styles.SplashStyle}>
      <Text>splash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SplashStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  logoStyle: {
    width: 50,
    height: 60,
  },
});

export default Splash;
