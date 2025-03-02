import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CloseSvg from '../assets/svg/CloseSvg';
import CircleButton from '../components/CircleButton';
import CustomButton from '../components/Button';

const SingleAdventureScreen = ({ navigation, route}) => {
  const {text, img} = route.params;
  return (
    <ScrollView style={styles.container} horizontal={false} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={['#0d8bcd', '#3ca3d8', '#e0f5fe']} style={styles.gradient}/>
      <View style={{paddingHorizontal: 24, zIndex: 1, marginTop: 100}}>
        <View style={{ position: 'absolute',
          top: -20,
          right: 20,
          zIndex: 1}}>
          <CircleButton icon={<CloseSvg/>} onPress={() => navigation.goBack()} addStyles={{}}/>
        </View>
        <LinearGradient
          start={{x: 0.2, y: 0.4}} end={{x: 0.5, y: 0.5}}
          locations={[0,1,1]}
          colors={['#5289a9', '#3c7a75']}
          style={{width:'100%',alignItems: 'center', borderRadius: 30, justifyContent: 'center', borderWidth: 1, borderColor: '#deb541'}}>
          <View style={styles.imageWrapper}>
            <Image
              source={img}
              resizeMode="cover"
              style={styles.imageStyled}
            />
            <Text style={styles.titleText}>Adventure Stories</Text>
            <Text style={styles.levelText}>{text}</Text>
          </View>
        </LinearGradient>
      </View>
        <Image source={require('../assets/photos/sandBack.png')} style={styles.image} />
        <View style={{marginBottom: 50}}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d8bcd',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FredokaOne-Regular',
    marginVertical: 24,
    color: 'gold',
  },
  levelText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'FredokaOne-Regular',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageWrapper: {
    width: 300,
    // height: 230,
    borderRadius: 30,
    // borderWidth: 3,
    margin: 30,
    // borderColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  imageStyled: {
    width: 300,
    height: 230,
    borderRadius: 20,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  image: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
  },
});

export default SingleAdventureScreen
