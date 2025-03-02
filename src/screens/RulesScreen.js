import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CloseSvg from '../assets/svg/CloseSvg';
import CircleButton from '../components/CircleButton';

const RulesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d8bcd', '#3ca3d8', '#e0f5fe']} style={styles.gradient} />
      <View style={{paddingHorizontal: 24, zIndex: 1}}>
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
          style={{width:'100%', alignItems: 'center', borderRadius: 30, justifyContent: 'center', borderWidth: 1, borderColor: '#deb541'}}>
          <Text style={styles.titleText}>Rules</Text>
          <Text style={styles.levelText}>
            Watch the sequence carefully. The runes will appear and disappear quickly.
            Tap the matching rune as soon as it appears on the screen.
            With each level, the number of runes and their speed will increase.
            Stay focused—mistakes will reset the sequence!
          </Text>
          <Text style={styles.listItem}>1. Watch the sequence carefully. The runes will appear and disappear quickly.</Text>
          <Text style={styles.listItem}>2. Tap the matching rune as soon as it appears on the screen.</Text>
          <Text style={styles.listItem}>3. With each level, the number of runes and their speed will increase.</Text>
          <Text style={[styles.listItem, {marginBottom: 24,}]}>4. Stay focused—mistakes will reset the sequence!</Text>
        </LinearGradient>
      </View>
      <Image source={require('../assets/photos/sandBack.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  listItem: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'FredokaOne-Regular',
    textAlign: 'left',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#deb541',
    fontFamily: 'FredokaOne-Regular',
    marginBottom: 24,
    paddingTop: 32,
  },
  levelText: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'FredokaOne-Regular',
    color: '#fff',
    paddingHorizontal: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
  },
});

export default RulesScreen;
