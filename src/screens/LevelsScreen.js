import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import HomeSvg from '../assets/svg/HomeSvg';
import LockSvg from '../assets/svg/LockSvg';
import CircleButton from '../components/CircleButton';
import {completeLevel, selectCompletedLevels} from '../redux/slices/levelsSlice';
import { useDispatch, useSelector } from 'react-redux';

const LevelsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const completedLevels = useSelector(selectCompletedLevels);

  const levels = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Level ${i + 1}`,
    locked: i > 0 && !completedLevels.includes(i),
  }));

  const handleLevelPress = (levelId) => {
    // if (!completedLevels.includes(levelId)) {
    //   dispatch(completeLevel(levelId));
    // }
    navigation.navigate('SingleLevel', {levelId});
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d8bcd', '#3ca3d8', '#e0f5fe']} style={styles.gradient} />
      <View style={{ position: 'absolute',
        top: 70,
        left: 20,
        zIndex: 1}}>
        <CircleButton icon={<HomeSvg/>} onPress={() => navigation.goBack()} addStyles={{}}/>
      </View>
      <View style={{marginTop: 50, width:'100%'}}>
        <Text style={styles.title}>Levels</Text>
        <FlatList
          style={{paddingHorizontal: 24, zIndex: 1}}
          data={levels}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <LinearGradient
                start={{x: 0.2, y: 0.4}} end={{x: 0.5, y: 0.5}}
              locations={[0,1,1]}
              colors={['#5289a9', '#3c7a75']}
              style={{flexDirection: 'row', width :'100%',marginBottom: 8, alignItems: 'center', borderRadius: 30, borderWidth: 1, borderColor: '#deb541',}}
            >
              <TouchableOpacity disabled={item.locked && !completedLevels.includes(item.id)} onPress={() => handleLevelPress(item.id)} style={{width :'100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{
                  fontSize: 17,
                  fontFamily: 'FredokaOne-Regular',
                  fontWeight: 'bold',
                  color: '#deb541',
                  marginVertical: 20,
                  marginHorizontal: 16}}>
                  {item.title}
                </Text>
                <View style={{ marginRight: 20}}>
                  {item.locked && <LockSvg/>}
                </View>
              </TouchableOpacity>
            </LinearGradient>
          )}
        />
      </View>
      <Image source={require('../assets/photos/sandBack.png')} style={styles.backgroundImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#0d8bcd',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  title: {
    fontSize: 24,
    fontFamily: 'FredokaOne-Regular',
    fontWeight: 'bold',
    color: 'gold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  levelButton: {
    width: '100%',
    overflow: 'hidden',
    // marginRight: 24,
    borderWidth: 2,
    borderColor: 'gold',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  levelText: {
    fontSize: 18,
    color: 'gold',
  },
  backgroundImage: {
    width: '100%',
    height: '40%',
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
  },
});

export default LevelsScreen;
