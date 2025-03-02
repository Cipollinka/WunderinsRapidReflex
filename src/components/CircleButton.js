import LockSvg from '../assets/svg/LockSvg';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Settings from '../assets/svg/Settings';

const CircleButton = ({icon, onPress= null, addStyles= null}) => {
  return (
    <LinearGradient
      start={{x: 0.2, y: 0.4}}
      end={{x: 0.5, y: 0.5}}
      locations={[0, 1, 1]}
      colors={['#5289a9', '#3c7a75']}
      style={[{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        // paddingLeft: -2,
        // paddingBottom: 1,
        borderColor: '#deb541',
        width:57,
        borderRadius: 50,
        height:57,
        zIndex: 1,
      }, addStyles]}>
        <TouchableOpacity
          style={{
            color: '#deb541',
          }}
          onPress={onPress}>
          {icon}
        </TouchableOpacity>
    </LinearGradient>
  );
};

export default CircleButton;
