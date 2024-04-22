import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  StyleSheet,
  Modal,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';

const searchIcon = require('../assets/icons/header/search.png');
const moreIcon = require('../assets/icons/header/more.png');
const coverImage = require('../assets/images/articleTitleCover.png');
const downIcon = require('../assets/icons/articles/down.png');
const bookmarkIcon = require('../assets/icons/articles/bookmark.png');
const dummyImage = require('../assets/images/dummyImage.png');

const ArticlesScreen = ({navigation}) => {
  const [articles, setArticles] = useState();
  const [sortType, setSortType] = useState('FAVORITE');

  const [modalVisible, setModalVisible] = useState(false);

  const renderArticle = () => {
    fetch(`http://13.209.27.220:8080/article?sortType=${sortType}`)
      .then(response => response.json())
      .then(data => {
        console.log('data:', data.articleImages);
        setArticles(data.result);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    renderArticle();
  }, []);

  const renderItem = ({item}) => {
    const handlePressArticle = () => {
      navigation.navigate('ArticleDetailScreen', {params: item.id});
    };

    const handlePressBookmark = () => {
      fetch(`http://13.209.27.220:8080/article/favorite/${item.id}`, {
        method: 'POST',
      })
        .then(res => {
          res.json();
          if (res.ok) {
            console.log('북마크 성공');
          } else if (res.status == 400) {
            console.log(res.statusText);
          }
        })
        .catch(error => console.error(error));
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
            <Text style={styles.articleDate}>
              {item.createDate.split('T')[0]}
            </Text>
            <TouchableOpacity onPress={handlePressBookmark}>
              <Image source={bookmarkIcon} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.ArticleScreen}>
      <View>
        <CustomHeader
          leftIcon={searchIcon}
          rightIcon={moreIcon}
          text={'아티클'}
        />
        <FlatList
          data={[]}
          renderItem={null}
          ListEmptyComponent={
            <View style={{marginTop: 32, marginBottom: 200}}>
              <View style={styles.imageSection}>
                <ImageBackground
                  source={coverImage}
                  resizeMode="contain"
                  style={styles.imageStyle}>
                  <View style={styles.imageText}>
                    <Text style={styles.imageTitle}>각종 캠핑 정보</Text>
                    <Text style={styles.imageDescription}>
                      캠핑투게더가 제공하는 각종 꿀팁으로{'\n'}캠핑을 더
                      풍성하게 즐겨보세요.
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.sortSection}>
                <Text style={styles.sortByText}>Sort By:</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.sortSelection}>
                  {sortType === 'FAVORITE' ? (
                    <Text style={styles.sortSelectionText}>즐겨찾기순</Text>
                  ) : (
                    <Text style={styles.sortSelectionText}>최신순</Text>
                  )}

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
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={styles.modalHeader}>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.buttonText}>취소</Text>
                        </TouchableOpacity>
                        <Text style={styles.titleText}>정렬</Text>
                        <TouchableOpacity
                          onPress={() => {
                            renderArticle();
                            setModalVisible(!modalVisible);
                          }}>
                          <Text style={styles.buttonText}>저장</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.sortTypesWrapper}>
                        <TouchableOpacity
                          onPress={() => {
                            setSortType('FAVORITE');
                          }}>
                          <Text
                            style={
                              sortType === 'FAVORITE'
                                ? styles.selectedText
                                : styles.unselectedText
                            }>
                            즐겨찾기순
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            setSortType('LATEST');
                          }}>
                          <Text
                            style={
                              sortType === 'LATEST'
                                ? styles.selectedText
                                : styles.unselectedText
                            }>
                            최신순
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          }
        />
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
    marginHorizontal: 30,
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
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFF3E9',
    marginBottom: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  articleTextWrapper: {
    paddingHorizontal: 12,
    paddingTop: 12,
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
    width: 48,
    height: 48,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#FC9D45',
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  sortTypesWrapper: {
    marginTop: 34,
    alignItems: 'center',
    gap: 22,
    marginBottom: 20,
  },
  selectedText: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    color: '#FC9D45',
  },
  unselectedText: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
});
export default ArticlesScreen;
