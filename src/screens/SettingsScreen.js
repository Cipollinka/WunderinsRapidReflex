import React, { useState } from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text, Switch, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CloseSvg from '../assets/svg/CloseSvg';
import SoundSvg from '../assets/svg/SoundSvg';
import MobileSvg from '../assets/svg/MobileSvg';
import Notifications from '../assets/svg/Notifications';
import FileSvg from '../assets/svg/FileSvg';
import CircleButton from '../components/CircleButton';
import {useDispatch, useSelector} from 'react-redux';
import {toggleAlert, toggleMusic, toggleVibration} from '../redux/slices/settingsSlice';

const SettingsScreen = ({ navigation }) => {
  // const [isMusicOn, setIsMusicOn] = useState(true);
  // const [isVibrationOn, setIsVibrationOn] = useState(false);
  const dispatch = useDispatch();

  const isMusicOn = useSelector((state) => state.settings.isMusicOn);
  const isVibrationOn = useSelector((state) => state.settings.isVibrationOn);
  const isAlertOn = useSelector((state) => state.settings.isAlertOn);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d8bcd', '#3ca3d8', '#e0f5fe']} style={styles.gradient}/>
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
          <Text style={[styles.titleText, {marginTop: 32}]}>Settings</Text>
          <View style={styles.option}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SoundSvg/>
              <Text style={styles.optionText}>Music</Text>
            </View>
            <Switch
              value={isMusicOn}
              onValueChange={() => dispatch(toggleMusic())}
              trackColor={{ false: '#777', true: 'gold' }}
              thumbColor={isMusicOn ? '#fff' : '#ccc'}
            />
          </View>
          <View style={styles.option}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MobileSvg/>
              <Text style={styles.optionText}>Vibration</Text>
            </View>
            <Switch
              value={isVibrationOn}
              onValueChange={() => dispatch(toggleVibration())}
              trackColor={{ false: '#777', true: 'gold' }}
              thumbColor={isVibrationOn ? '#fff' : '#ccc'}
            />
          </View>
          <View style={styles.option}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Notifications/>
              <Text style={styles.optionText}>Notifications</Text>
            </View>
            <Switch
              value={isAlertOn}
              onValueChange={() => dispatch(toggleAlert())}
              trackColor={{ false: '#777', true: 'gold' }}
              thumbColor={isAlertOn ? '#fff' : '#ccc'}
            />
          </View>
          <TouchableOpacity style={[styles.termsButton, {marginBottom: 32, alignSelf: 'flex-start', marginLeft: 16}]} onPress={() => Linking.openURL('https://www.termsfeed.com/live/4def7324-0172-416f-a3bb-b12cd0decca5')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FileSvg/>
              <Text style={styles.optionText}>Terms of Use</Text>
            </View>
          </TouchableOpacity>
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
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'FredokaOne-Regular',
    color: 'gold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  optionText: {
    fontSize: 18,
    fontFamily: 'FredokaOne-Regular',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  termsButton: {
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
  },
});

export default SettingsScreen;
