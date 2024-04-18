import react, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

const CommunityScreen = () => {
  const [postlist, setPostlist] = useState();

  useEffect(() => {
    fetch('http://13.209.27.220:8080/community?page=0&pageSize=10')
      .then(response => response.json())
      .then(data => {
        console.log('data:', data);
        setPostlist(data.result.content);
      })
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.subject}</Text>
        <Text>{item.content}</Text>
        <Text>{item.nickname}</Text>
      </View>
    );
  };
  console.log(postlist);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFF3E9',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <FlatList
          data={postlist}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default CommunityScreen;
