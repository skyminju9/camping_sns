import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const image = require('../assets/images/Background.png');
const emailIcon = require('../assets/icons/auth/email_icon.png');
const passwordIcon = require('../assets/icons/auth/password_icon.png');

const LoginScreen = ({navigation}) => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hanldeShowButton = () => {
    setShow(!show);
  };

  const hanldeSubmit = () => {
    fetch('http://13.209.27.220:8080/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => {
        res.json();
        if (res.ok) {
          console.log('로그인 성공');
          navigation.navigate('MainTab');
        } else if (res.status == 400) {
          console.log(res.statusText);
        }
      })
      .catch(error => console.error(error));
  };

  const hanldeFindPassword = () => {
    navigation.navigate('FindPasswordScreen');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.flex}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={[styles.flex, {justifyContent: 'center'}]}>
        <View style={[styles.flex, styles.center]}>
          <Text style={styles.titleStyle}>환영해요!</Text>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleStyle}>이메일로 로그인하기</Text>
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image source={emailIcon} style={{width: 15, height: 12}} />
              </View>
              <TextInput
                style={styles.inputStyle}
                placeholder="이메일"
                color="#FDA758"
                inputMode="email"
                autoCapitalize="none"
                autoFocus={true}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View
              style={[
                styles.inputContainer,
                {justifyContent: 'space-between'},
              ]}>
              <View style={styles.iconContainer2}>
                <Image source={passwordIcon} style={{width: 12, height: 16}} />
              </View>
              <View style={styles.flex}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="비밀번호"
                  color="#FDA758"
                  autoCapitalize="none"
                  secureTextEntry={show}
                  onChangeText={text => setPassword(text)}
                />
              </View>

              <TouchableOpacity
                onPress={hanldeShowButton}
                style={{marginRight: 20}}>
                <Text style={{color: '#573353'}}>Show</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.center}>
            <TouchableOpacity style={styles.buttonStyle} onPress={hanldeSubmit}>
              <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginBottom: 6}}
              onPress={hanldeFindPassword}>
              <Text style={styles.findPwText}>비밀번호 찾기</Text>
            </TouchableOpacity>
            <Text>
              아직 회원이 아니세요?{' '}
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={{fontWeight: 'bold'}}>회원가입</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 34,
    letterSpacing: -0.03,
  },
  loginContainer: {
    flex: 0.7,
    backgroundColor: '#FFF',
    borderRadius: 24,
  },
  subtitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFF3E9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginBottom: 16,
  },
  subtitleStyle: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.3,
  },
  inputsContainer: {
    gap: 8,
    marginBottom: 20,
  },
  inputContainer: {
    borderRadius: 12,
    backgroundColor: '#FFF6ED',
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingHorizontal: 17,
    paddingVertical: 20,
    borderRightWidth: 1,
    borderRightColor: '#FFF3E9',
  },
  inputStyle: {
    marginVertical: 19,
    marginLeft: 16,
  },
  iconContainer2: {
    paddingLeft: 19,
    paddingRight: 18,
    paddingVertical: 22,
    borderRightWidth: 1,
    borderRightColor: '#FFF3E9',
  },
  buttonStyle: {
    backgroundColor: '#FDA758',
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 165,
    borderRadius: 8,
    marginBottom: 14,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: -0.3,
  },
  findPwText: {
    lineHeight: 22,
    letterSpacing: -0.3,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
