import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const backIcon = require('../assets/icons/header/back.png');
const bookmarkIcon = require('../assets/icons/header/bookmark_circle.png');
const dummyImage = require('../assets/images/dummyImage.png');

const ArticleDetailScreen = ({route, navigation}) => {
  const [article, setArticle] = useState([]);
  const {height} = useWindowDimensions();

  useEffect(() => {
    const articleId = route.params.params;

    fetch(`http://13.209.27.220:8080/article/${articleId}`)
      .then(response => response.json())
      .then(data => {
        console.log('data:', data);
        setArticle(data.result);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.articleDetail}>
      <View style={styles.articleDetailHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.backIconStyle} />
        </TouchableOpacity>
        <Text style={styles.headerText}>아티클 상세</Text>
        <TouchableOpacity>
          <Image source={bookmarkIcon} style={styles.bookmarkIconStyle} />
        </TouchableOpacity>
      </View>
      <View style={styles.articleSection}>
        <View style={styles.articleImageSection}>
          <Image source={dummyImage} resizeMode="cover" />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.articleContentsContainer, {height: height * 0.6}]}>
          <View style={styles.articleContentsWrapper}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: '#AB99A9'}}>{article.createDate}</Text>
            </View>
            <View>
              <Text style={styles.articleContent}>{article.content}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  articleDetail: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  articleDetailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 10,
    marginBottom: 12,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.3,
    color: '#573353',
    fontWeight: 'bold',
  },
  backIconStyle: {
    width: 64,
    height: 65,
  },
  bookmarkIconStyle: {
    width: 40,
    height: 40,
  },
  articleSection: {
    paddingHorizontal: 20,
    gap: 14,
  },
  articleImageSection: {
    height: 164,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EEE',
    overflow: 'hidden',
  },
  articleContentsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingTop: 14,
    paddingHorizontal: 14,
  },
  articleContentsWrapper: {
    marginBottom: 20,
    gap: 15,
  },
  articleTitle: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.3,
    color: '#573353',
    fontWeight: 'bold',
  },
  articleContent: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.3,
    color: '#573353',
  },
});
export default ArticleDetailScreen;
