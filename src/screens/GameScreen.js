import React, {useState, useEffect, useRef} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text, Modal, Animated, Vibration} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircleButton from '../components/CircleButton';
import HomeSvg from '../assets/svg/HomeSvg';
import CloseSvg from '../assets/svg/CloseSvg';
import SmallRockSvg from '../assets/svg/SmallRockSvg';
import {useDispatch, useSelector} from 'react-redux';
import {completeLevel} from '../redux/slices/levelsSlice';
import {addBalance} from '../redux/slices/balanceSlice';
// import Sound from 'react-native-sound';
// import {useFocusEffect} from '@react-navigation/native';

const availableImages = [
  { id: 1, source: require('../assets/photos/redleft.png'), flipped: false },
  { id: 2, source: require('../assets/photos/redleft.png'), flipped: true },
  { id: 3, source: require('../assets/photos/blueleft.png'), flipped: false },
  { id: 4, source: require('../assets/photos/blueleft.png'), flipped: true },
  { id: 5, source: require('../assets/photos/yellowleft.png'), flipped: false },
  { id: 6, source: require('../assets/photos/yellowleft.png'), flipped: true },
];

const GameScreen = ({ navigation, route }) => {
  const { levelId } = route.params;
  const dispatch = useDispatch();
  const isVibrationOn = useSelector((state) => state.settings.isVibrationOn);
  const [backgroundMusic, setBackgroundMusic] = useState(null);

  const generateInitialImages = (levelId) => {
    return Array.from({ length: levelId + 1 }, (_, index) => ({
      ...availableImages[Math.floor(Math.random() * availableImages.length)],
      uniqueId: Date.now() + Math.random(),
    }));
  };

  //
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const sound = new Sound('gamebgmusic.wav', Sound.MAIN_BUNDLE, (error) => {
  //       if (error) {
  //         console.log('Ошибка загрузки звука:', error);
  //         return;
  //       }
  //       sound.setNumberOfLoops(-1);
  //       sound.play((success) => {
  //         if (!success) {
  //           console.log('Ошибка воспроизведения');
  //         }
  //       });
  //     });
  //     setBackgroundMusic(sound);
  //     return () => {
  //       sound.stop(() => sound.release());
  //     };
  //   }, [])
  // );

  const [images, setImages] = useState(generateInitialImages(levelId));
  const [randomImage, setRandomImage] = useState(images[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => {
    if (images.length === 0) {
      setGameStatus("win");
      setModalVisible(true);
      dispatch(addBalance(levelId * 10));
      dispatch(completeLevel(levelId));
      return;
    }

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  const handleImagePress = (uniqueId) => {
    if (modalVisible || images.length === 0) return;
    isVibrationOn && Vibration.vibrate(50);
    console.log(backgroundMusic)
    if (uniqueId === images[0].uniqueId) {
      setImages((prevImages) => prevImages.filter((img) => img.uniqueId !== uniqueId));
    } else {
      setGameStatus("lose");
      setModalVisible(true);
    }
  };

  const resetGame = () => {
    setImages(generateInitialImages(levelId));
    setRandomImage(images[0]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d8bcd', '#3ca3d8', '#e0f5fe']} style={styles.gradient} />
      <TouchableOpacity style={styles.topButton} onPress={()=>{navigation.pop(2)}}>
        <CircleButton icon={<HomeSvg />} onPress={() => navigation.goBack()} />
      </TouchableOpacity>
      <Text style={styles.title}>Level {levelId}</Text>
      <View style={styles.imageRow}>
        {images.map((img) => (
          <View style={{width: '30%',  aspectRatio: 1,  alignItems: 'center',}} key={img.uniqueId}>
            <Image
              source={img.source}
              style={[styles.imageRock, img.flipped && { transform: [{ scaleX: -1 }] }]}
              resizeMode="contain"
            />
          </View>
        ))}
      </View>
      {images.length > 0 && (
        <Animated.View style={[{ opacity: opacityAnim, alignItems: 'center', zIndex: 1,marginTop: 200 }]}>
          <TouchableOpacity style={styles.randomImageContainer} onPress={() => handleImagePress(randomImage.uniqueId)}>
              <Image
                source={randomImage.source}
                style={[styles.imageRockBig, randomImage.flipped && { transform: [{ scaleX: -1 }] }]}
                resizeMode="contain"
              />
          </TouchableOpacity>
        </Animated.View>
      )}
      <Image source={require('../assets/photos/sandBack.png')} style={styles.image} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={{paddingHorizontal: 24, zIndex: 1}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{ position: 'absolute',
              top: -20,
              right: 20,
              zIndex: 1}}>
              <CircleButton icon={<CloseSvg/>} onPress={() => navigation.goBack()} addStyles={{}}/>
            </TouchableOpacity>
            <LinearGradient
              start={{x: 0.2, y: 0.4}} end={{x: 0.5, y: 0.5}}
              locations={[0,1,1]}
              colors={['#5289a9', '#3c7a75']}
              style={{width:'100%', alignItems: 'center', borderRadius: 30, justifyContent: 'center', borderWidth: 1, borderColor: '#deb541'}}>
              <Text style={styles.titleText}>{gameStatus === "win" ? "Well Done! 🎉" : "You Lost! ❌"}</Text>
              {gameStatus === "win" && (
                <View style={{flexDirection: 'row',marginBottom: 24, alignItems: 'center', borderRadius: 99,borderColor: '#deb541',borderWidth: 2, padding: 16}}>
                  <SmallRockSvg/>
                  <Text style={{marginLeft: 10,fontFamily: 'FredokaOne-Regular', color: '#fff'}}>{levelId*10}</Text>
                </View>
              )}
              <Text style={styles.levelText}>
                {gameStatus === "win" ? "The relic responds to your mastery! You've earned 10 relic points—your journey continues!" : "The runes have faded into the sands… but every mistake is a step toward mastery. Try again!"}
              </Text>
              <View style={styles.buttonContainerRow}>
                <TouchableOpacity style={{width: '40%', alignItems: 'center', borderRadius: 99,borderColor: '#d13043', borderWidth: 2, padding: 16}} onPress={() => {navigation.pop(2)}}>
                  <Text style={{fontFamily: 'FredokaOne-Regular', color: '#d13043'}}>
                    Exit to Menu
                  </Text>
                </TouchableOpacity>
                {gameStatus !== "win" ? (
                  <TouchableOpacity style={{width: '40%', alignItems: 'center', borderRadius: 99,borderColor: '#deb541', borderWidth: 2, padding: 16}} onPress={() => {resetGame()}}>
                    <Text style={{fontFamily: 'FredokaOne-Regular', color: '#fff'}}>
                      Retry
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={{width: '40%', alignItems: 'center', borderRadius: 99,borderColor: '#deb541', borderWidth: 2, padding: 16}} onPress={() => {}}>
                    <Text style={{fontFamily: 'FredokaOne-Regular', color: '#fff'}}>
                      Next Level
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 30,
    alignItems: 'center',
  },
  buttonContainerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
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
  topButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    position: 'absolute',
    top: 84,
    fontFamily: 'FredokaOne-Regular',
    fontWeight: 'bold',
    color: 'gold',
    alignSelf: 'center',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  imageRow: {
    flexDirection: 'row',
    position: 'absolute',
    top: 140,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  imageRock: {
    width: 60,
    height: 70,
    margin: 6,
  },
  randomImageContainer: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  imageRockBig: {
    width: '50%',
  },
  image: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export default GameScreen;
