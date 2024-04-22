import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Onboarding from 'react-native-onboarding-swiper';

const SkipButton = ({...props}) => (
  <TouchableOpacity style={styles.skipButton} {...props}>
    <Text style={styles.bottomButtonText}>Skip</Text>
  </TouchableOpacity>
);
const NextButton = ({...props}) => (
  <TouchableOpacity style={styles.rightButton} {...props}>
    <Text style={styles.bottomButtonText}>Next</Text>
  </TouchableOpacity>
);
const DoneButton = ({...props}) => (
  <TouchableOpacity style={styles.rightButton} {...props}>
    <Text style={styles.bottomButtonText}>Done</Text>
  </TouchableOpacity>
);

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(87, 51, 83, 1)' : 'rgba(249, 181, 102, 1)';
  return (
    <View
      style={{
        width: selected ? 10 : 8,
        height: selected ? 10 : 8,
        borderRadius: 100,
        marginHorizontal: 3,
        backgroundColor: backgroundColor,
      }}
    />
  );
};

const OnBoardingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Onboarding
        SkipButtonComponent={SkipButton}
        NextButtonComponent={NextButton}
        DoneButtonComponent={DoneButton}
        DotComponent={Dots}
        bottomBarColor="#FFF"
        bottomBarHighlight={false}
        titleStyles={styles.titleStyles}
        subTitleStyles={styles.subTitleStyles}
        onSkip={() => navigation.replace('LoginScreen')}
        onDone={() => navigation.navigate('LoginScreen')}
        pages={[
          {
            backgroundColor: '#FFF',
            image: (
              <Image
                source={require('../assets/images/image1.png')}
                style={{width: 350, height: 450}}
              />
            ),
            title: '캠핑투게더 사용법',
            subtitle: '캠핑투게더는 캠핑장 위치와\n캠핑 커뮤니티를 제공합니다.',
          },
          {
            backgroundColor: '#FFF',
            image: (
              <Image
                source={require('../assets/images/image2.png')}
                style={{width: 399, height: 399}}
              />
            ),
            title: '캠핑장 추천',
            subtitle:
              '캠핑전문가들이 제공하는 질 높은 아티클로\n시간을 아끼세요.',
          },
          {
            backgroundColor: '#FFF',
            image: (
              <Image
                source={require('../assets/images/image3.png')}
                style={{width: 414, height: 408}}
              />
            ),
            title: '캠핑장 정보',
            subtitle:
              '대한민국 캠핑장 정보를 모두 알아보고\n원하는 곳을 가보세요!',
          },
          {
            backgroundColor: '#FFF',
            image: (
              <Image
                source={require('../assets/images/image4.png')}
                style={{width: 417, height: 309}}
              />
            ),
            title: '캠핑 커뮤니티',
            subtitle:
              '캠핑 커뮤니티에 참여하여\n같이 캠핑 갈 멤버를 모집해보세요.',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardSection: {
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  bottomButtonText: {fontSize: 17, fontWeight: 'bold', color: '#573353'},
  skipButton: {marginHorizontal: 8, marginLeft: 32},
  rightButton: {marginHorizontal: 8, marginRight: 32},
  titleStyles: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#573353',
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  subTitleStyles: {
    fontWeight: '400',
    fontSize: 17,
    color: '#573353',
    lineHeight: 24,
  },
});

export default OnBoardingScreen;
