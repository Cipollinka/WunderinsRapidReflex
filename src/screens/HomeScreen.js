import React, {useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Settings from '../assets/svg/Settings';
import CustomButton from '../components/Button';
import CircleButton from '../components/CircleButton';
import SmallRockSvg from '../assets/svg/SmallRockSvg';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  const balance = useSelector((state) => state.balance.balance);
  // const dispatch = useDispatch();
  const isAlertOn = useSelector((state) => state.settings.isAlertOn);

  useEffect(() => {
    isAlertOn &&
    Alert.alert(
      "Welcome!",
      "The desert relics are stirring again! Test your reflexes and uncover their mysteries!",
      [{ text: "OK", onPress: () => console.log("Alert closed") }]
    );
  }, []);

  const playButton = () => {
    navigation.navigate('Levels');
  };

  const adventureStoriesBnt= () => {
    navigation.navigate('AdventureStories');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/photos/bg.png')} style={{flex:1 ,width: '100%', height: '100%', position: 'absolute'}}/>
      <View style={{    position: 'absolute',
        top: 70,
        left: 20,
        zIndex: 1,}}>
        <CircleButton icon={<Settings/>} onPress={() => navigation.navigate('Settings')} addStyles={{}}/>
      </View>
        <View style={{position: 'absolute',
          top: 70,
          right: 20,
          zIndex: 1}}>
          <CircleButton icon={
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SmallRockSvg/>
              <Text style={{marginLeft: 10, color: '#fff', fontFamily: 'FredokaOne-Regular'}}>{balance}</Text>
            </View>
          } onPress={() => {}} addStyles={{width:80}}/>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/photos/girl.png')} style={styles.image2} resizeMode="contain" />
          <Image source={require('../assets/photos/test.png')} style={styles.image3} resizeMode="contain" />
        </View>
      <View style={styles.buttonContainerColumn}>
        <CustomButton text='Play' onPress={playButton} addStyles={{width: '100%', marginBottom: 8}}/>
        <CustomButton text='Adventure' onPress={adventureStoriesBnt} addStyles={{width: '100%'}}/>
      </View>
        <View style={styles.buttonContainerRow}>
          <CustomButton text='Shop' onPress={()=>{navigation.navigate('Shop')}} addStyles={{width: '50%'}}/>
          <CustomButton text='Rules' onPress={()=>{navigation.navigate('Rules')}} addStyles={{width: '50%'}}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainerColumn: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    marginTop: 20,
    zIndex: 1,
  },
  buttonContainerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 0,
    paddingHorizontal: 24,
    marginTop: 32,
    zIndex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
  },
  image2: {
    // width: '60%',
    height: 300,
    alignSelf: 'center',
  },
  image3: {
    // width: '90%',
    marginTop: -20,
    height: 130,
    alignSelf: 'center',
  },
});

export default HomeScreen;
