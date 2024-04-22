import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';

const backIcon = require('../assets/icons/header/back.png');

const ProfileEditScreen = () => {
  const navigation = useNavigation();
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF3E9'}}>
      <CustomHeader
        leftIcon={backIcon}
        leftPress={() => navigation.goBack()}
        text={'프로필 수정'}
      />
    </SafeAreaView>
  );
};

export default ProfileEditScreen;
