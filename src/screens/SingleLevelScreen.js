import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Settings from '../assets/svg/Settings';
import CustomButton from '../components/Button';
import HomeSvg from '../assets/svg/HomeSvg';
import CircleButton from '../components/CircleButton';

const SingleLevelScreen = ({ navigation, route }) => {
  const {levelId} = route.params;

  const playButton = () => {
    navigation.navigate('Game', {levelId});
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d8bcd', '#3ca3d8', '#e0f5fe']} style={styles.gradient}>
        <View style={{ position: 'absolute',
          top: 70,
          left: 20,
          zIndex: 1}}>
          <CircleButton icon={<HomeSvg/>} onPress={() => navigation.goBack()} addStyles={{}}/>
        </View>
        <Text style={styles.title}>Level {levelId}</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/photos/girl.png')} style={styles.image2} resizeMode="contain" />
          <LinearGradient
            start={{x: 0.2, y: 0.4}} end={{x: 0.5, y: 0.5}}
            locations={[0,1,1]}
            colors={['#5289a9', '#3c7a75']}
            style={{marginBottom: 24,width:'100%', alignItems: 'center', borderRadius: 30, justifyContent: 'center', borderWidth: 1, borderColor: '#deb541'}}
          >
            <Text style={{fontSize: 17,
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'FredokaOne-Regular',
              marginVertical: 20,
              marginHorizontal: 16}}>
              I've uncovered something ancient... A relic pulsing with strange energy. Its glowing arrows seem to hold a pattern—maybe even a secret waiting to be unlocked. But there's no time to hesitate! I'll need my sharpest reflexes to decode this mystery before the sands shift again. Let’s do this!            </Text>
          </LinearGradient>
          <CustomButton text='Start' onPress={playButton} addStyles={{width: '100%'}}/>
        </View>
        <Image source={require('../assets/photos/sandBack.png')} style={styles.image} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'FredokaOne-Regular',
    fontWeight: 'bold',
    color: 'gold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 24,
    zIndex: 1
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
    height: 350,
    alignSelf: 'center',
  },
});

export default SingleLevelScreen;
