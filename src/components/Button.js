import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const CustomButton = ({text, onPress=null, addStyles=null}) => {

  return (
    <LinearGradient
      start={{x: 0.2, y: 0.4}}
      end={{x: 0.5, y: 0.5}}
      locations={[0, 1, 1]}
      colors={['#5289a9', '#3c7a75']}
      style={[{
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#deb541',
      }, addStyles]}>
      {onPress !== null ? (
        <TouchableOpacity
          onPress={onPress}>
          <Text
            style={{
              fontFamily: 'FredokaOne-Regular',
              fontSize: 17,
              fontWeight: 'bold',
              color: '#deb541',
              marginVertical: 20,
              marginHorizontal: 16,
            }}>
            {text}
          </Text>
        </TouchableOpacity>
      ) :
        (<Text
              style={{
                fontFamily: 'FredokaOne-Regular',
                fontSize: 17,
                fontWeight: 'bold',
                color: '#deb541',
                marginVertical: 20,
                marginHorizontal: 16,
              }}>
              {text}
            </Text>
        )}

    </LinearGradient>
  );
};

export default CustomButton;
