import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const CustomHeader = ({leftIcon, rightIcon, text, leftPress, rightPress}) => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={leftPress}>
        <Image source={leftIcon} style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{text}</Text>
      <TouchableOpacity onPress={rightPress}>
        {rightIcon ? (
          <Image source={rightIcon} style={styles.iconStyle} />
        ) : (
          <View style={styles.iconStyle} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: 64,
    height: 65,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#573353',
  },
});

export default CustomHeader;
