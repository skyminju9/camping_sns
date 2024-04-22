import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const rightArrowIcon = require('../assets/icons/settings/rightArrow.png');

const SettingsButton = ({iconImage, title, description, onPress}) => {
  return (
    <TouchableOpacity style={styles.ButtonStyle} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image source={iconImage} style={styles.leftIconStyle} />
      </View>
      <View style={styles.textsWrapper}>
        <Text style={styles.titleText}>{title}</Text>
        {description && (
          <Text style={styles.descriptionText}>{description}</Text>
        )}
      </View>
      <View style={styles.rightIconWrapper}>
        <TouchableOpacity onPress={onPress}>
          <Image source={rightArrowIcon} style={styles.rightIconStyle} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    width: 374,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical: 17,
  },
  iconWrapper: {
    marginLeft: 8,
    marginRight: 12,
    width: 38,
    height: 38,
    backgroundColor: '#FFF6EE',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIconStyle: {
    width: 18,
    height: 18,
  },
  textsWrapper: {gap: 8, flex: 1},
  titleText: {
    fontSize: 18,
    letterSpacing: -0.3,
    color: '#573353',
    fontWeight: '500',
  },
  descriptionText: {fontSize: 14, letterSpacing: -0.3, color: '#AB99A9'},
  rightIconWrapper: {marginRight: 16},
  rightIconStyle: {width: 20, height: 26},
});

export default SettingsButton;
