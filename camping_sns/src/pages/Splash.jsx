import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';

const backgroundImage = require('../assets/images/Splash_Screen.png');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoardingScreen');
    }, 2000);
  });

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.SplashStyle}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>캠핑 투게더</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  SplashStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#573353',
    letterSpacing: -0.3,
    lineHeight: 40,
  },
});

export default Splash;
