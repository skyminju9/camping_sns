import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
const bookmarkIcon = require('../assets/icons/articles/bookmark.png');
const dummyImage = require('../assets/images/dummyImage.png');

const Article = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.articleContainer} onPress={onPress}>
      <Image
        source={dummyImage} //item.articleImages의 이미지가 불러와지지 않아서 임시로
        resizeMode="cover"
      />
      <View style={styles.articleTextWrapper}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleContent}>
          {item.content.slice(0, 67)}...
        </Text>
        <View style={styles.bottomWrapper}>
          <Text style={styles.articleDate}>{item.createDate}</Text>
          <TouchableOpacity>
            <View style={styles.bookmarkWrapper}>
              <Image source={bookmarkIcon} style={styles.iconStyle} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: '#FFF',
    height: 300,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFF3E9',
    marginBottom: 8,
    overflow: 'hidden',
  },
  articleTextWrapper: {
    paddingHorizontal: 12,
    paddingTop: 14,
    gap: 8,
  },
  articleTitle: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.3,
    fontWeight: 'bold',
    color: '#573353',
  },
  articleContent: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: -0.3,
    color: '#573353',
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  articleDate: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: -0.3,
    color: '#AB99A9',
  },
  bookmarkWrapper: {
    backgroundColor: '#EEEBEE',
    width: 32,
    height: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: 11,
    height: 14,
  },
});

export default Article;
