import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import SettingsButton from '../components/SettingsButton';

const backIcon = require('../assets/icons/header/back.png');
const postIcon = require('../assets/icons/header/post.png');
const dummyProfile = require('../assets/images/dummyProfile.png');
const bookmarkIcon = require('../assets/icons/profile/bookmark_circle.png');
const clockIcon = require('../assets/icons/profile/clock.png');
const medalIcon = require('../assets/icons/profile/medal.png');
const premiumIcon = require('../assets/icons/profile/premium.png');

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://13.209.27.220:8080/accounts/info')
      .then(response => response.json())
      .then(data => {
        setUser(data.result);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <CustomHeader
        leftIcon={backIcon}
        rightIcon={postIcon}
        text={'Profile'}
        leftPress={() => navigation.goBack()}
        rightPress={() => navigation.navigate('ProfileEditScreen')}
      />
      <View style={styles.profileCard}>
        <View style={styles.profileWrapper}>
          <View style={styles.userProfileInfos}>
            <Image source={dummyProfile} style={styles.profileImage} />
            <View style={styles.textsWrapper}>
              <Text style={styles.userName}>{user.nickName}</Text>
              {user.introduce === null && (
                <Text style={styles.userIntroduction}>
                  아직 자기소개가 없어요. 자기소개를 입력하세요.
                </Text>
              )}
            </View>
          </View>
          <View style={styles.separateLine} />
          <View style={styles.userActivityWrapper}>
            <TouchableOpacity style={styles.myPostWrapper}>
              <View style={styles.myPostTexts}>
                <Text style={styles.activityDescript}>내가 쓴 글</Text>
                <Text style={styles.countText}>{user.communityCount}</Text>
              </View>
              <View>
                <Image source={clockIcon} style={styles.iconStyle} />
              </View>
            </TouchableOpacity>
            <View style={styles.separateLineVertical} />
            <TouchableOpacity style={styles.myBookmarkWrapper}>
              <View style={styles.myPostTexts}>
                <Text style={styles.activityDescript}>북마크</Text>
                <Text style={styles.countText}>{user.favoriteCount}</Text>
              </View>
              <View>
                <Image source={bookmarkIcon} style={styles.iconStyle} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonsWrapper}>
          <SettingsButton iconImage={premiumIcon} title={'프리미엄 전환'} />
          <SettingsButton iconImage={medalIcon} title={'캠핑 기록'} />
          <SettingsButton iconImage={medalIcon} title={'그 외 메뉴들!'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  profileCard: {marginTop: 32, marginHorizontal: 20},
  profileWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 12,
  },
  userProfileInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    marginLeft: 16,
  },
  profileImage: {width: 60, height: 60},
  textsWrapper: {gap: 4},
  userName: {
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: 'bold',
    color: '#573353',
  },
  userIntroduction: {color: '#AB99A9', fontSize: 12, letterSpacing: -0.3},
  separateLine: {backgroundColor: '#FFF3E9', height: 1},
  userActivityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  myPostWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
  },
  myPostTexts: {alignItems: 'flex-start', gap: 8},
  activityDescript: {fontSize: 12, letterSpacing: -0.3, color: '#AB99A9'},
  countText: {
    fontSize: 24,
    letterSpacing: -0.5,
    fontWeight: 'bold',
    color: '#573353',
  },
  iconStyle: {width: 40, height: 40},
  myBookmarkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
  },
  separateLineVertical: {backgroundColor: '#FFF3E9', width: 1},
  buttonsWrapper: {marginTop: 12, alignItems: 'center', gap: 8},
});

export default ProfileScreen;
