import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import SettingsButton from '../components/SettingsButton';
import CustomHeader from '../components/CustomHeader';

const moreIcon = require('../assets/icons/header/more.png');
const coverImage = require('../assets/images/settingsCover.png');

const contactIcon = require('../assets/icons/settings/contact.png');
const etcIcon = require('../assets/icons/settings/etc.png');
const infoIcon = require('../assets/icons/settings/info.png');
const notificationIcon = require('../assets/icons/settings/notification.png');
const privacyIcon = require('../assets/icons/settings/privacy.png');
const qnaIcon = require('../assets/icons/settings/qna.png');

const SettingScreen = ({navigation}) => {
  const [email, setEmail] = useState();

  useEffect(() => {
    fetch('http://13.209.27.220:8080/accounts/info')
      .then(response => response.json())
      .then(data => {
        setEmail(data.result.email);
      })
      .catch(error => console.error(error));
  }, []);

  const handleViewProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const handlePressNoti = () => {
    navigation.navigate('NotificationScreen');
  };

  return (
    <SafeAreaView style={styles.background}>
      <CustomHeader leftIcon={moreIcon} text={'Settings'} />
      <ScrollView
        style={styles.scrollviewMargin}
        showsVerticalScrollIndicator={false}>
        <View style={styles.coverImageWrapper}>
          <ImageBackground source={coverImage} style={styles.imageStyle}>
            <View style={styles.imageInnerTextGap}>
              <Text style={styles.imageInnerTitle}>프로필 보기</Text>
              <Text style={styles.imageInnerDescript}>{email}</Text>
            </View>
            <TouchableOpacity
              style={styles.viewImageButton}
              onPress={handleViewProfile}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.settingOptionsWrapper}>
          <Text style={styles.settingOptionTitle}>일반</Text>
        </View>
        <View style={styles.ButtonsWrapper}>
          <SettingsButton
            iconImage={notificationIcon}
            title={'알람'}
            description={'마케팅 알람 받아줘...'}
            onPress={handlePressNoti}
          />
          <SettingsButton
            iconImage={etcIcon}
            title={'기타'}
            description={'그 외 여러 일반적인 설정들...'}
          />
        </View>
        <View style={styles.buttonWrappersGap}>
          <Text style={styles.settingOptionTitle}>Support</Text>
        </View>
        <View style={styles.ButtonsWrapper}>
          <SettingsButton iconImage={contactIcon} title={'문의하기'} />
          <SettingsButton iconImage={qnaIcon} title={'자주 묻는 질문'} />
          <SettingsButton
            iconImage={privacyIcon}
            title={'개인정보 처리 방침'}
          />
          <SettingsButton iconImage={infoIcon} title={'앱 정보'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  scrollviewMargin: {marginBottom: 100},
  coverImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  imageStyle: {
    width: 374,
    height: 146,
    gap: 22,
    paddingHorizontal: 33,
    paddingVertical: 20,
  },
  imageInnerTextGap: {gap: 4},
  imageInnerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#573353',
  },
  imageInnerDescript: {color: '#AB99A9', fontSize: 12, letterSpacing: -0.3},
  viewImageButton: {
    width: 120,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FDA758',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#573353',
  },
  settingOptionsWrapper: {marginTop: 17, marginBottom: 20, marginLeft: 30},
  settingOptionTitle: {
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: '500',
    color: '#573353',
  },
  ButtonsWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonWrappersGap: {marginTop: 16, marginBottom: 20, marginLeft: 30},
});

export default SettingScreen;
