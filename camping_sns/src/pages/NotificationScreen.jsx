import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';

const backIcon = require('../assets/icons/header/back.png');

const NotificationScreen = ({navigation}) => {
  const [isOn, setIsOn] = useState(false);
  const handlePressOn = () => {
    setIsOn(!isOn);
  };
  return (
    <SafeAreaView style={styles.background}>
      <CustomHeader
        leftIcon={backIcon}
        text={'알람 설정'}
        leftPress={() => navigation.goBack()}
      />
      <View style={styles.NotiSettingWrapper}>
        <Text>푸시 메시지 허용</Text>
        {isOn ? (
          <TouchableOpacity onPress={handlePressOn}>
            <View style={styles.buttonIsOn}>
              <Text style={styles.isOnText}>On</Text>
              <View style={styles.circleIsOn} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePressOn}>
            <View style={styles.buttonIsOff}>
              <View style={styles.circleIsOff} />
              <Text style={styles.isOffText}>Off</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  NotiSettingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  buttonIsOn: {
    borderRadius: 15,
    width: 60,
    height: 30,
    backgroundColor: '#573353',
    padding: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  isOnText: {color: '#FFF'},
  circleIsOn: {
    borderRadius: 100,
    width: 20,
    height: 20,
    backgroundColor: '#EEEBEE',
  },
  buttonIsOff: {
    borderRadius: 15,
    width: 60,
    height: 30,
    backgroundColor: '#EEEBEE',
    padding: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  circleIsOff: {
    borderRadius: 100,
    width: 20,
    height: 20,
    backgroundColor: '#573353',
  },
  isOffText: {color: '#573353'},
});

export default NotificationScreen;
