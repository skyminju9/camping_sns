import Ract, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const signUpImage = require('../assets/images/signup_image.png');
const emailIcon = require('../assets/icons/auth/email_icon.png');
const passwordIcon = require('../assets/icons/auth/password_icon.png');
const userIcon = require('../assets/icons/auth/user_icon.png');
const phoneIcon = require('../assets/icons/auth/phone_icon.png');

const SignUpScreen = ({navigation}) => {
  const [show, setShow] = useState(true);
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hanldeShowButton = () => {
    setShow(!show);
  };

  const handleLoginButton = () => {
    navigation.navigate('LoginScreen');
  };

  const hanldeSubmit = () => {
    fetch('http://13.209.27.220:8080/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        nickname: nickname,
        phoneNumber: phoneNumber,
      }),
    })
      .then(res => {
        res.json();
        if (res.ok) {
          console.log('회원가입 성공! 로그인 페이지로 이동합니다.');
          navigation.navigate('LoginScreen');
        } else {
          console.log(
            '비밀번호는 대소문자, 특수문자, 숫자를 한가지 이상 포함해야 합니다.',
          );
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.Wrapper}>
        <Image source={signUpImage} style={styles.backgroundImage} />
        <Text style={styles.titleStyle}>회원가입</Text>
      </View>
      <View>
        <View style={styles.InputsWrapper}>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image source={userIcon} style={{width: 15, height: 16}} />
            </View>
            <TextInput
              style={styles.inputStyle}
              placeholder="이름"
              color="#FDA758"
              inputMode="text"
              autoCapitalize="none"
              autoFocus={true}
              onChangeText={text => setNickname(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image source={phoneIcon} style={{width: 15, height: 16}} />
            </View>
            <TextInput
              style={styles.inputStyle}
              placeholder="전화번호"
              color="#FDA758"
              inputMode="numeric"
              autoCapitalize="none"
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
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
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                justifyContent: 'space-between',
              },
            ]}>
            <View style={styles.iconContainer2}>
              <Image source={passwordIcon} style={{width: 12, height: 16}} />
            </View>
            <View style={{flex: 1}}>
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
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={20}
            fillColor="#FDA758"
            unFillColor="#FFF"
            text="자동 로그인"
            textStyle={styles.checkboxText}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            onPress={isChecked => {
              console.log(isChecked);
            }}
          />
          <BouncyCheckbox
            size={20}
            fillColor="#FDA758"
            unFillColor="#FFF"
            text="약관 동의"
            textStyle={styles.checkboxText}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            onPress={isChecked => {
              console.log(isChecked);
            }}
          />
        </View>
        <View style={styles.center}>
          <TouchableOpacity onPress={hanldeSubmit} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>회원가입 하기</Text>
          </TouchableOpacity>
          <Text>
            회원이세요?{' '}
            <TouchableOpacity onPress={handleLoginButton}>
              <Text style={{fontWeight: 'bold'}}>로그인</Text>
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
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Wrapper: {
    marginTop: 48,
    gap: 21,
    alignItems: 'center',
    marginBottom: 32,
  },
  backgroundImage: {
    width: 188,
    height: 200,
  },
  titleStyle: {
    color: '#573353',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  InputsWrapper: {
    gap: 8,
    marginBottom: 20,
  },
  inputContainer: {
    borderRadius: 12,
    backgroundColor: '#FFF',
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
  iconContainer2: {
    paddingLeft: 19,
    paddingRight: 18,
    paddingVertical: 22,
    borderRightWidth: 1,
    borderRightColor: '#FFF3E9',
  },
  inputStyle: {
    marginVertical: 19,
    marginLeft: 16,
  },
  checkboxContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 37,
    marginBottom: 28,
    gap: 12,
  },
  checkboxText: {
    color: '#573353',
    textDecorationLine: 'none',
  },
  buttonStyle: {
    backgroundColor: '#FDA758',
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 144,
    borderRadius: 8,
    marginBottom: 14,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: -0.3,
  },
  iconStyle: {borderRadius: 6},
  innerIconStyle: {borderWidth: 1, borderRadius: 6},
});

export default SignUpScreen;
