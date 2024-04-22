import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import CommunityPost from '../components/CommunityPost';

const moreIcon = require('../assets/icons/header/more.png');
const profileIcon = require('../assets/images/dummyProfile.png');

const CommunityScreen = ({navigation}) => {
  const [postlist, setPostlist] = useState();

  const renderCommunityPosts = () => {
    fetch('http://13.209.27.220:8080/community?page=0&pageSize=30')
      .then(response => response.json())
      .then(data => {
        console.log('data:', data);
        setPostlist(data.result.content);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    renderCommunityPosts();
  }, []);

  const renderItem = ({item}) => {
    return <CommunityPost item={item} />;
  };
  return (
    <SafeAreaView style={styles.background}>
      <CustomHeader
        leftIcon={moreIcon}
        rightIcon={profileIcon}
        text={'커뮤니티'}
        rightPress={() => navigation.navigate('ProfileScreen')}
      />
      <View style={[styles.flex, {marginBottom: 80}]}>
        <FlatList
          data={postlist}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
  flex: {
    flex: 1,
  },
});
export default CommunityScreen;
