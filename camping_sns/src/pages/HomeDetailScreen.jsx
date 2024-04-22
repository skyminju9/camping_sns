import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';

const leftIcon = require('../assets/icons/header/back.png');

const HomeDetailScreen = ({route}) => {
  const {width} = useWindowDimensions();
  const infoDetail = route.params.params.item;
  const navigation = useNavigation();
  const siteUrl = infoDetail.homepage;
  console.log(infoDetail);
  return (
    <SafeAreaView style={styles.background}>
      <CustomHeader
        leftIcon={leftIcon}
        leftPress={() => navigation.goBack()}
        text={'캠핑장 상세 정보'}
      />
      <View style={styles.infoDetailContainer}>
        <Image
          source={{uri: infoDetail.firstImageUrl}}
          style={{width: width, height: 250}}
          resizeMode="cover"
        />
        <View style={[styles.infoDetailWrapper, {width: width}]}>
          <View style={styles.infoDetailTopWrapper}>
            <Text style={styles.infoDivText}>{infoDetail.facltDivNm}</Text>
            <View style={styles.separateBar} />
            <Text style={styles.infoDivText}>{infoDetail.mangeDivNm}</Text>
          </View>
          <View style={styles.infoDetailMidWrapper}>
            <Text style={styles.infoDetailMidText}>{infoDetail.facltNm}</Text>
            <Text style={[styles.infoDetailMidText, {color: '#919191'}]}>
              {infoDetail.resveCl}
            </Text>
          </View>
          <Text style={styles.infoAddrText}>{infoDetail.addr1}</Text>

          {infoDetail.caravInnerFclty ? (
            <Text style={styles.facilityText}>
              {infoDetail.caravInnerFclty}
            </Text>
          ) : (
            <Text style={styles.facilityText}>{infoDetail.sbrsCl}</Text>
          )}

          <View style={styles.introductionWrapper}>
            <Text style={styles.introTitleText}>소개 및 안내</Text>
            {infoDetail.intro ? (
              <Text style={styles.introText}>{infoDetail.intro}</Text>
            ) : (
              <Text style={styles.introText}>{infoDetail.featureNm}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL(siteUrl)}
          style={styles.linkButton}>
          <Text style={styles.linkButtonText}>사이트 방문하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {flex: 1, backgroundColor: '#FFF3E9'},
  infoDetailContainer: {flex: 1, backgroundColor: '#FFF3E9'},
  infoDetailWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 38,
    paddingBottom: 14,
    marginBottom: 32,
  },
  infoDetailTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoDivText: {fontSize: 13, fontWeight: 'bold', color: '#FC9D45'},
  separateBar: {
    width: 1,
    height: 8,
    backgroundColor: '#C8C8C8',
    marginHorizontal: 8,
  },
  infoDetailMidWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoDetailMidText: {fontSize: 16, fontWeight: 'bold', color: '#383838'},
  infoAddrText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#707070',
    marginBottom: 11,
  },
  facilityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#383838',
  },
  introductionWrapper: {marginTop: 16, gap: 9},
  introTitleText: {fontSize: 15, fontWeight: 'bold', color: '#919191'},
  introText: {fontSize: 15, fontWeight: 'bold', color: '#383838'},
  linkButton: {
    paddingVertical: 22,
    paddingHorizontal: 123,
    marginHorizontal: 40,
    borderRadius: 8,
    backgroundColor: '#FDA758',
    alignItems: 'center',
  },
  linkButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#573353',
    letterSpacing: -0.3,
  },
});

export default HomeDetailScreen;
