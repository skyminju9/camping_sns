import react, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
// import Article from '../components/Article';

const searchIcon = require('../assets/icons/header/search.png');
const moreIcon = require('../assets/icons/header/more.png');
const coverImage = require('../assets/images/articleTitleCover.png');
const downIcon = require('../assets/icons/articles/down.png');
const bookmarkIcon = require('../assets/icons/articles/bookmark.png');
const dummyImage = require('../assets/images/dummyImage.png');

const ArticlesScreen = ({navigation}) => {
  const [articles, setArticles] = useState();
  const [sortType, setSortType] = useState([
    {label: '즐겨찾기순', value: 'FAVORITE'},
    {label: '최신순', value: 'LATEST'},
  ]);

  useEffect(() => {
    fetch('http://13.209.27.220:8080/article?sortType=FAVORITE')
      .then(response => response.json())
      .then(data => {
        console.log('data:', data.articleImages);
        setArticles(data.result);
      })
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({item}) => {
    const handlePressArticle = () => {
      navigation.navigate('ArticleDetailScreen', {params: item.id});
    };

    return (
      <TouchableOpacity
        style={styles.articleContainer}
        onPress={handlePressArticle}>
        <Image
          source={dummyImage} //item.articleImages의 이미지가 불러와지지 않아서 임시로
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
                <Image source={bookmarkIcon} style={styles.iconStyle2} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.ArticleScreen}>
      <View>
        <View style={styles.articleHeader}>
          <TouchableOpacity>
            <Image source={searchIcon} style={styles.iconStyle} />
          </TouchableOpacity>
          <Text style={styles.headerText}>아티클</Text>
          <TouchableOpacity>
            <Image source={moreIcon} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.imageSection}>
            <ImageBackground
              source={coverImage}
              resizeMode="contain"
              style={styles.imageStyle}>
              <View style={styles.imageText}>
                <Text style={styles.imageTitle}>각종 캠핑 정보</Text>
                <Text style={styles.imageDescription}>
                  캠핑투게더가 제공하는 각종 꿀팁으로{'\n'}캠핑을 더 풍성하게
                  즐겨보세요.
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.sortSection}>
            <Text style={styles.sortByText}>Sort By:</Text>
            <TouchableOpacity style={styles.sortSelection}>
              <Text style={styles.sortSelectionText}>{sortType[0].label}</Text>
              <TouchableOpacity>
                <Image source={downIcon} style={styles.downIcon} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.articlesSection}>
            <FlatList
              data={articles}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ArticleScreen: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  iconStyle: {width: 64, height: 65},
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#573353',
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  imageSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  imageStyle: {
    width: 374,
    height: 146,
  },
  imageText: {
    marginTop: 22,
    marginLeft: 25,
    gap: 33,
  },
  imageTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#573353',
  },
  imageDescription: {
    fontSize: 13,
    letterSpacing: -0.3,
    fontWeight: '500',
    color: '#573353',
  },
  sortSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  sortByText: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.3,
    color: '#573353',
  },
  sortSelection: {
    width: 160,
    height: 33,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 19,
  },
  sortSelectionText: {
    fontSize: 14,
    lineHeight: 13,
    letterSpacing: -0.3,
    color: '#573353',
  },
  downIcon: {
    width: 10,
    height: 4,
  },
  articlesSection: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  articleContainer: {
    backgroundColor: '#FFF',
    width: 353,
    height: 300,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFF3E9',
    marginBottom: 8,
    overflow: 'hidden',
    alignItems: 'center',
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
  iconStyle2: {
    width: 11,
    height: 14,
  },
});
export default ArticlesScreen;
