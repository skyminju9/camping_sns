import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';

const postIcon = require('../assets/icons/header/post.png');
const backIcon = require('../assets/icons/header/back.png');

const PostScreen = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [subject, setSubject] = useState();
  const [content, setContent] = useState();

  const handlePressSubmit = () => {
    fetch('http://13.209.27.220:8080/community', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: subject,
        content: content,
      }),
    })
      .then(res => {
        res.json();
        if (res.ok) {
          console.log('게시글 작성 성공');
          navigation.navigate('CommunityScreen');
        }
      })
      .catch(error => console.error(error));
  };
  return (
    <SafeAreaView style={styles.background}>
      <CustomHeader
        leftIcon={backIcon}
        rightIcon={postIcon}
        leftPress={() => navigation.goBack()}
        rightPress={handlePressSubmit}
        text={'새 글 쓰기'}
      />
      <View style={styles.titleInputWrapper}>
        <View style={styles.titleInputContainer}>
          <View style={styles.titleInputStyle}>
            <TextInput
              placeholder="제목을 입력해주세요."
              placeholderTextColor={'#AB99A9'}
              style={styles.placeholderStyle}
              autoCapitalize="none"
              autoCorrect={false}
              multiline={false}
              autoFocus={true}
              onChangeText={text => setSubject(text)}
            />
          </View>
        </View>
        <View style={styles.contentsInputWrapper}>
          <View style={[styles.contentsInputStyle, {height: height * 0.6}]}>
            <TextInput
              placeholder="내용을 입력해주세요."
              placeholderTextColor={'#AB99A9'}
              style={styles.contentsPlaceholderStyle}
              multiline={true}
              numberOfLines={40}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => setContent(text)}
            />
          </View>
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
  titleInputWrapper: {marginTop: 14, gap: 8, paddingHorizontal: 30},
  titleInputContainer: {alignItems: 'flex-start'},
  titleInputStyle: {
    backgroundColor: '#FFF',
    width: 300,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  placeholderStyle: {fontSize: 16, letterSpacing: -0.3, fontWeight: '400'},
  contentsInputWrapper: {alignItems: 'center'},
  contentsInputStyle: {
    backgroundColor: '#FFF',
    width: 370,
    borderRadius: 12,
    padding: 12,
  },
  contentsPlaceholderStyle: {
    fontSize: 16,
    letterSpacing: -0.3,
    fontWeight: '400',
  },
});

export default PostScreen;
