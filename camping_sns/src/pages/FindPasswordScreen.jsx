import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';

const backIcon = require('../assets/icons/header/back.png');
const findPasswordImage = require('../assets/images/findPassword.png');

const FindPasswordScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <CustomHeader leftIcon={backIcon} leftPress={() => navigation.goBack()} />
      <View style={styles.contentsWrapper}>
        <View style={styles.topContentsWrapper}>
          <Text style={styles.findPwText}>비밀번호 찾기</Text>
          <Image source={findPasswordImage} style={styles.coverImage} />
        </View>
        <View style={styles.findInputSection}>
          <View style={styles.descriptTexts}>
            <Text style={styles.descriptText}>등록된 이메일로 </Text>
            <Text style={styles.descriptText}>
              비밀번호 변경 메일을 발송합니다.
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="example@example.com"
                color="#FDA758"
                inputMode="email"
                style={styles.inputText}
              />
            </View>
            <TouchableOpacity style={styles.findPwButton}>
              <Text>비밀번호 찾기</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.foundPwText}>
            비밀번호가 기억났나요?{' '}
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.loginText}>로그인</Text>
            </TouchableOpacity>
          </Text>
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
  contentsWrapper: {alignItems: 'center', justifyContent: 'center'},
  topContentsWrapper: {gap: 40, alignItems: 'center', justifyContent: 'center'},
  findPwText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#573353',
  },
  coverImage: {width: 414, height: 264},
  findInputSection: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    width: 370,
    padding: 20,
    gap: 30,
    marginBottom: 100,
  },
  descriptTexts: {alignItems: 'center'},
  descriptText: {color: '#573353', letterSpacing: -0.3},
  inputWrapper: {alignItems: 'center', gap: 10},
  inputContainer: {
    backgroundColor: '#FFF5EC',
    borderRadius: 12,
    paddingVertical: 20,
    paddingLeft: 20,
    width: 330,
  },
  inputText: {fontWeight: 'bold'},
  findPwButton: {
    backgroundColor: '#FDA758',
    paddingVertical: 22,
    paddingHorizontal: 120,
    borderRadius: 12,
  },
  foundPwText: {color: '#573353', letterSpacing: -0.3},
  loginText: {
    color: '#573353',
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
});

export default FindPasswordScreen;
