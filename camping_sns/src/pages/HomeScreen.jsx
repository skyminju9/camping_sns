import react, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
// import axios from 'axios';

const HomeScreen = () => {
  // const url =
  //   'https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&MobileOS=IOS&MobileApp=camping_sns&serviceKey=6BYYtALyswcaee9dsoZ7H1xWHdigrBlKyXFqqGIQU06RXKt9mqr9sLQx33YbNmSlSFNE4Ezs7u24dm0yYVQgYw%3D%3D&_type=json';

  // useEffect(() => {
  //   fetch(url)
  //     .then(response => {
  //       response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF3E9',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <FlatList
        data={campInfos}
        keyExtractor={item => item.id}
        renderItem={item => {
          return (
            <View>
              <Text>{item.facltNm}</Text>
            </View>
          );
        }}
      /> */}
    </View>
  );
};

export default HomeScreen;
