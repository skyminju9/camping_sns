import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Comment = ({item}) => {
  return (
    <View style={styles.commentWrapper}>
      <View style={styles.commentContainer}>
        <View style={styles.dummyProfile} />
        <View style={styles.userInofWrapper}>
          <Text style={styles.userName}>{item.nickname}</Text>
          <Text style={styles.timeStamp}>{item.createDate}</Text>
        </View>
      </View>
      <View style={styles.commentSection}>
        <Text style={styles.commentText}>{item.reply}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentWrapper: {
    marginBottom: 20,
  },
  commentContainer: {flexDirection: 'row', gap: 10},
  dummyProfile: {
    backgroundColor: '#DDD',
    height: 28,
    width: 28,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  userInofWrapper: {justifyContent: 'center'},
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#573353',
    letterSpacing: -0.3,
  },
  timeStamp: {
    fontSize: 12,
    letterSpacing: -0.3,
    color: '#AB99A9',
    fontWeight: '400',
  },
  commentSection: {marginLeft: 3, marginTop: 8},
  commentText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#573353',
    letterSpacing: -0.3,
  },
});

export default Comment;
