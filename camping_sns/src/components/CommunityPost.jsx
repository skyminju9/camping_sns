import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const shareIcon = require('../assets/icons/community/share.png');
const heartIcon = require('../assets/icons/community/heart.png');
const emptyHeartIcon = require('../assets/icons/community/emptyHeart.png');
const commentIcon = require('../assets/icons/community/comment.png');
const profileIcon = require('../assets/images/dummyProfile.png');

const CommunityPost = ({item}) => {
  const navigation = useNavigation();

  const onPressLike = ({item}) => {
    fetch(`http://13.209.27.220:8080/community/${item.id}/like`, {
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

  return (
    <View style={styles.centerItem}>
      <View style={styles.PostWrapper}>
        <View style={styles.postTopWrapper}>
          <View style={styles.userInfoWrapper}>
            <TouchableOpacity>
              <Image source={profileIcon} style={styles.userProfile} />
            </TouchableOpacity>
            <View>
              <Text style={styles.userName}>{item.nickname}</Text>
              <Text style={styles.timeStamp}>41m ago</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={shareIcon} style={styles.shareIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.separateLine} />
        <View>
          <Text style={styles.contentText}>{item.subject}</Text>
          <Text style={styles.contentText}>{item.content}</Text>
        </View>
        <View style={styles.postBottomWrapper}>
          <View style={styles.likeWrapper}>
            <TouchableOpacity onPress={onPressLike({item})}>
              {item.likeCheck ? (
                <Image source={heartIcon} style={styles.heartIcon} />
              ) : (
                <Image source={emptyHeartIcon} style={styles.heartIcon} />
              )}
            </TouchableOpacity>
            <Text>{item.like}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CommunityDetailScreen', {params: item.id})
            }
            style={styles.commentWrapper}>
            <Image source={commentIcon} style={styles.commentIcon} />
            <Text>{item.replyCount}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerItem: {alignItems: 'center'},
  PostWrapper: {
    width: 370,
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 4,
  },
  postTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfoWrapper: {flexDirection: 'row', gap: 10},
  userProfile: {width: 28, height: 28},
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
  postBottomWrapper: {
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
  commentIcon: {width: 10, height: 10},
});

export default CommunityPost;
