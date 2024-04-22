import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {campingInfo} from '../data/campingInfo';

const moreIcon = require('../assets/icons/header/more.png');
const profileIcon = require('../assets/images/dummyProfile.png');
const heartIcon = require('../assets/icons/home/heart.png');

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    const handlePressInfo = () => {
      navigation.navigate('HomeDetailScreen', {params: {item}});
    };

    return (
      <TouchableOpacity
        style={styles.campInfoWrapper}
        onPress={handlePressInfo}>
        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={{uri: item.firstImageUrl}}
            resizeMode="cover"
            style={styles.campInfoImage}>
            <View style={styles.campTypeWrapper}>
              <View style={styles.campType}>
                <Text style={styles.campTypeText}>{item.induty}</Text>
              </View>
              <TouchableOpacity style={{margin: 8}}>
                <Image source={heartIcon} style={styles.iconStyle} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.campInfoTextsWrapper}>
          <View style={styles.divDetails}>
            <Text style={styles.divText}>{item.facltDivNm}</Text>
            <Text style={styles.divText}>{item.mangeDivNm}</Text>
          </View>
          <View style={styles.facltNmWrapper}>
            <Text style={styles.facltNm}>{item.facltNm}</Text>
          </View>
          <View style={styles.addrResveWrapper}>
            <Text style={styles.addrResveText}>{item.addr1}</Text>
            <Text style={styles.addrResveText}>{item.resveCl}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.background}>
      <CustomHeader
        leftIcon={moreIcon}
        rightIcon={profileIcon}
        text={'캠핑투게더'}
        rightPress={() => navigation.navigate('ProfileScreen')}
      />
      <View style={styles.campInfosContainer}>
        <FlatList
          data={campingInfo}
          keyExtractor={item => item.contentId}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  campInfosContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 140,
  },
  campInfoWrapper: {
    backgroundColor: '#FFF',
    marginVertical: 8,
    borderRadius: 8,
    width: 380,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  campInfoImage: {
    width: 360,
    height: 150,
    borderRadius: 4,
    overflow: 'hidden',
  },
  campTypeWrapper: {justifyContent: 'space-between', flexDirection: 'row'},
  campType: {
    borderRadius: 4,
    backgroundColor: '#FC9D45',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  campTypeText: {fontWeight: 'bold', color: '#FFF'},
  iconStyle: {width: 24, height: 24},
  campInfoTextsWrapper: {marginTop: 8},
  divDetails: {
    marginHorizontal: 4,
    marginBottom: 6,
    gap: 8,
    flexDirection: 'row',
  },
  divText: {color: '#919191', fontWeight: 'bold', fontSize: 13},
  facltNmWrapper: {marginBottom: 33},
  facltNm: {fontSize: 18, fontWeight: 'bold', color: '#545454'},
  addrResveWrapper: {flexDirection: 'row', justifyContent: 'space-between'},
  addrResveText: {fontSize: 13, fontWeight: 'bold', color: '#707070'},
});

export default HomeScreen;
