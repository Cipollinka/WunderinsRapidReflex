import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircleButton from '../components/CircleButton';

const Onboarding2 = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/photos/onBoard/2.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <CircleButton icon={
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=>{navigation.navigate('Home')}}>
            <Text style={{ fontFamily: 'FredokaOne-Regular', color: '#fff' }}>Skip</Text>
          </TouchableOpacity>
        } addStyles={{ width: 60, position: 'absolute', top: 70,left: 24 }} />
        <View style={{flex: 1}}/>
        <LinearGradient
          start={{x: 0.2, y: 0.4}} end={{x: 0.5, y: 0.5}}
          locations={[0,1,1]}
          colors={['#5289a9', '#3c7a75']}
          style={{width:'100%', alignItems: 'center', borderRadius: 30, justifyContent: 'center', borderWidth: 1, borderColor: '#deb541'}}
        >
          <Text style={styles.buttonText}>
            The desert has always been full of mysteries, but today… something different calls to me
          </Text>
        </LinearGradient>
        <LinearGradient
          start={{x: 0.2, y: 0.4}} end={{x: 0.5, y: 0.5}}
          locations={[0,1,1]}
          colors={['#5289a9', '#3c7a75']}
          style={{marginTop: 32,marginBottom: 50, width:'100%', alignItems: 'center', borderRadius: 30, justifyContent: 'center', borderWidth: 1, borderColor: '#deb541'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Onboarding3')}}>
            <Text style={styles.buttonText}>
              Continue
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    paddingHorizontal: 24,
  },
  button: {
    // paddingVertical: 1,
    // marginHorizontal: 50,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#deb541',
    marginVertical: 20,
    fontFamily: 'FredokaOne-Regular',
    marginHorizontal: 16
  },
});

export default Onboarding2;
