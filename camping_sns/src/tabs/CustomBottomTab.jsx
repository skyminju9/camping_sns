import React, {useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';

const homeOn = require('../assets/icons/bottomtab/home_on.png');
const homeOff = require('../assets/icons/bottomtab/home_off.png');
const searchOn = require('../assets/icons/bottomtab/search_on.png');
const searchOff = require('../assets/icons/bottomtab/search_off.png');
const writeIcon = require('../assets/icons/bottomtab/write.png');
const commentOn = require('../assets/icons/bottomtab/comment_on.png');
const commentOff = require('../assets/icons/bottomtab/comment_off.png');
const personOn = require('../assets/icons/bottomtab/person_on.png');
const personOff = require('../assets/icons/bottomtab/person_off.png');

const CustomBottomTab = ({state, navigation, insets, descriptors}) => {
  const tab1Value = useRef(new Animated.Value(0)).current;
  const tab2Value = useRef(new Animated.Value(0)).current;
  const tab3Value = useRef(new Animated.Value(0)).current;
  const tab4Value = useRef(new Animated.Value(0)).current;
  const tab5Value = useRef(new Animated.Value(0)).current;

  const scaleAnimated = (value, animatedValue) =>
    Animated.timing(animatedValue, {
      useNativeDriver: true,
      toValue: value,
      duration: 150,
    });

  const animatedValues = {
    0: tab1Value,
    1: tab2Value,
    2: tab3Value,
    3: tab4Value,
    4: tab5Value,
  };

  return (
    <View style={[styles.bottomTabBarWrapper, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;
        const animatedOf = animatedValues[index];

        const iconFlag = bool => {
          switch (label) {
            case '홈':
              return bool ? homeOn : homeOff;
            case '검색':
              return bool ? searchOn : searchOff;
            case '내 정보':
              return bool ? personOn : personOff;
            case '메세지':
              return bool ? commentOn : commentOff;
            default:
              return bool ? writeIcon : writeIcon;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }

          scaleAnimated(1, animatedOf).start(({finished}) => {
            if (finished) {
              scaleAnimated(0, animatedOf).start();
            }
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center', gap: 2}}>
            <Animated.Image
              source={iconFlag(isFocused)}
              resizeMode={'contain'}
              style={{
                width: 36,
                height: 36,
                transform: [
                  {
                    scale: animatedOf.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9],
                    }),
                  },
                ],
              }}
            />
            <Text style={styles.routeText}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBarWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    paddingVertical: 22,
    paddingHorizontal: 35,
    gap: 32,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
    borderRadius: 16,
    zIndex: 10,
  },
  routeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666666',
  },
});

export default CustomBottomTab;
