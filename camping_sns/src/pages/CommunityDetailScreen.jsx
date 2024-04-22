import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Comment from '../components/Comment';

const backIcon = require('../assets/icons/header/back.png');
const profileIcon = require('../assets/images/dummyProfile.png');
const shareIcon = require('../assets/icons/community/share.png');
const heartIcon = require('../assets/icons/community/heart.png');
const emptyHeartIcon = require('../assets/icons/community/emptyHeart.png');
const commentIcon = require('../assets/icons/community/comment.png');

const CommunityDetailScreen = ({route, navigation}) => {
  const [community, setCommunity] = useState([]);
  const [comment, setComment] = useState();

  console.log(route.params.params);

  const renderCommunity = () => {
    fetch(`http://13.209.27.220:8080/community/${route.params.params}`)
      .then(response => response.json())
      .then(data => {
        console.log('data:', data);
        setCommunity(data.result);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    renderCommunity();
  }, []);

  console.log(community.replys);

  const onPressLike = () => {
    fetch(`http://13.209.27.220:8080/community/${community.id}/like`, {
      method: 'PUT',
    })
      .then(res => {
        res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  const handlePressSubmit = () => {
    fetch(`http://13.209.27.220:8080/community/${community.id}/reply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reply: comment,
      }),
    })
      .then(res => {
        res.json();
        if (res.ok) {
          console.log('등록 성공');
          renderCommunity();
        } else if (res.status == 400) {
          console.log(res.statusText);
        }
      })
      .catch(error => console.error(error));
  };

  const renderItem = ({item}) => {
    return <Comment item={item} />;
  };

  return (
    <SafeAreaView style={styles.background}>
      <CustomHeader
        leftIcon={backIcon}
        text={'상세 보기'}
        leftPress={() => navigation.goBack()}
      />
      <View style={styles.contentsWrapper}>
        <View style={styles.contentsContainer}>
          <View style={styles.contentsTopWrapper}>
            <View style={styles.userInfoWrapper}>
              <TouchableOpacity>
                <Image source={profileIcon} style={styles.userProfile} />
              </TouchableOpacity>
              <View>
                <Text style={styles.userName}>{community.nickname}</Text>
                <Text style={styles.timeStamp}>41m ago</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Image source={shareIcon} style={styles.shareIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.separateLine} />
          <View>
            <Text style={styles.contentText}>{community.subject}</Text>
            <Text style={styles.contentText}>{community.content}</Text>
          </View>
          <View style={styles.contentsBottomWrapper}>
            <View style={styles.likeWrapper}>
              <TouchableOpacity onPress={onPressLike}>
                {community.likeCheck ? (
                  <Image source={heartIcon} style={styles.heartIcon} />
                ) : (
                  <Image source={emptyHeartIcon} style={styles.heartIcon} />
                )}
              </TouchableOpacity>
              <Text>{community.like}</Text>
            </View>
            <View style={styles.commentWrapper}>
              <Image source={commentIcon} style={styles.commentIcon} />
              <Text>{community.replyCount}</Text>
            </View>
          </View>
          <View style={styles.commentsSection}>
            <Text style={styles.comment}>댓글</Text>
            <View style={styles.commentsMaxHeight}>
              <FlatList
                data={community.replys}
                renderItem={renderItem}
                keyExtractor={item => item.replyId}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.commentInputLine} />
          <View style={styles.textInputWraper}>
            <TextInput
              placeholder="댓글을 입력하세요."
              style={styles.textInputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => setComment(text)}
            />
            <TouchableOpacity onPress={handlePressSubmit}>
              <Text>등록</Text>
            </TouchableOpacity>
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
  contentsWrapper: {alignItems: 'center'},
  contentsContainer: {
    width: 370,
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  contentsTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfoWrapper: {flexDirection: 'row', gap: 10},
  userProfile: {
    width: 28,
    height: 28,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  userName: {
    fontSize: 14,
    letterSpacing: -0.3,
    color: '#573353',
    fontWeight: 'bold',
  },
  timeStamp: {
    fontSize: 12,
    letterSpacing: -0.3,
    color: '#AB99A9',
    fontWeight: '400',
  },
  shareIcon: {width: 28, height: 28},
  separateLine: {height: 1, backgroundColor: '#FFF3E9', marginVertical: 12},
  contentText: {color: '#573353', letterSpacing: -0.3},
  contentsBottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'flex-end',
  },
  likeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  heartIcon: {width: 12, height: 10},
  commentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  commentIcon: {
    width: 10,
    height: 10,
  },
  commentsSection: {
    marginTop: 22,
    gap: 22,
  },
  comment: {
    fontSize: 16,
    letterSpacing: -0.3,
    color: '#573353',
    fontWeight: '500',
  },
  commentsMaxHeight: {
    maxHeight: 400,
  },
  commentInputLine: {
    height: 0.5,
    backgroundColor: '#E0E0E0',
    marginVertical: 30,
  },
  textInputWraper: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInputStyle: {
    height: 35,
    width: 300,
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
    paddingVertical: 6,
    paddingLeft: 10,
  },
});
export default CommunityDetailScreen;
