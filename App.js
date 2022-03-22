import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      {/* <Text>GIF From URL</Text> */}
      <FastImage
        style={styles.urlImage}
        source={{
          uri: 'https://i.gifer.com/3OdB.gif',
        }}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          position: 'relative',
          // backgroundColor: 'green',
          width: '100%',
          height: windowHeight * 0.09,
          marginTop: -120,
        }}>
        <View>
          <Text style={styles.nameText}>J Balvin</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            marginVertical: 5,
          }}>
          <Text style={styles.tagtext}>2M NFT assets </Text>
          <Pressable style={styles.btnView}>
            <Text style={styles.btnText}>FOLLOW </Text>
          </Pressable>
          <Text style={styles.tagtext}>324K Followers </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  urlImage: {width: '100%', height: windowHeight * 0.5},
  localImage: {width: '100%', height: '40%'},
  nameView: {justifyContent: 'center', alignItems: 'center'},
  nameText: {fontWeight: '700', fontSize: windowWidth * 0.06, color: 'white'},
  tagtext: {color: 'white'},
  btnView: {
    width: '30%',
    height: '90%',
    borderRadius: windowWidth * 0.05,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
  },
});

export default App;
