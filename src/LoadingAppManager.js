import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';

const styleView = {
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: '#000000',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
};
const styleImage = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0.5,
};

export default function LoadingAppManager() {

  return (
    <View style={styleView}>
      <Image style={styleImage} source={require('./assets/loader2.png')} />
      <ActivityIndicator color={'white'} />
    </View>
  );
}
