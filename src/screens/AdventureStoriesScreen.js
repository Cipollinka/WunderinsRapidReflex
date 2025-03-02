import React, { useState, useRef } from 'react';
import { View, Image,FlatList,  StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CloseSvg from '../assets/svg/CloseSvg';
import CustomButton from '../components/Button';
import CircleButton from '../components/CircleButton';
import SmallRockSvg from '../assets/svg/SmallRockSvg';

const { width } = Dimensions.get('window');

const AdventureStoriesItems = [
  {
    id: '1',
    title: 'The Whispers of the Shifting Dunes',
    text: 'Wunderin leaned on the hood of her sand-colored pickup truck, watching the dunes shift unnaturally in the distance. The desert had always been her second home, but today, something felt different. The radio in her truck, which was turned off, suddenly crackled with static. A low vibration pulsed beneath her boots.\n' +
      'She revved the engine and sped toward the disturbance, tires digging into the soft sand. As she approached, the ground trembled, and a massive stone slab emerged from beneath the shifting sands. Strange runes flickered to life across its surface, glowing in alternating patterns of red and blue.\n' +
      'Curious, Wunderin stepped forward, brushing her fingers over the symbols. The runes suddenly rearranged into a rapid sequence of arrows, each one flashing for only a second. She barely had time to react before the ground beneath her started sinking.\n' +
      'She had no choice but to play by the relic’s rules. Her fingers moved fast, tapping the runes in the order they appeared. Each correct press sent a pulse of energy through the ancient structure, but a single mistake made the sand shift dangerously beneath her feet.\n' +
      'With one final input, the sequence completed, and the stone slab rumbled. A secret passage cracked open beneath it, revealing a staircase leading underground. Cold air rushed out, carrying the scent of something ancient and forgotten.\n' +
      'Wunderin smirked and glanced back at her truck. "Well, looks like we’ve got another mystery to solve.".',
    image: require('../assets/photos/adventures/bg5.png'),
    price: 30,
  },
  {
    id: '2',
    title: 'The Mirage Gate',
    text: "The sun was high, and the desert stretched endlessly before her, golden and unchanging. But today, something new appeared on the horizon—an unfamiliar city, its golden spires shimmering in the heatwaves.\n" +
      "Wunderin frowned. She had driven this path a hundred times, and there was no city here. Her hands tightened on the wheel, and she pressed the gas pedal.\n" +
      "As she approached, the buildings flickered like a mirage and vanished, leaving only a massive stone archway covered in glowing arrow-shaped runes. The desert was silent, as if holding its breath.\n" +
      "She stepped out of her truck and cautiously approached the arch. The moment she placed her hand on the stone, the runes flared to life, flashing in a rapid, shifting pattern. It was a challenge. She had to match the sequence exactly—hesitation was not an option.\n" +
      "The air around her grew heavy, the heat rising in waves as she tapped each rune in perfect order. A single mistake could mean losing the gateway forever.\n" +
      "As she entered the final sequence, the runes pulsed brightly, and the world around her dissolved into pure light.\n" +
      "When she opened her eyes, she was no longer in the same desert. The sand was darker, the sky a deep violet. A new land stretched before her, untouched by time.\n" +
      "\"Well, that’s new,\" she muttered, stepping forward into the unknown.",
    image: require('../assets/photos/adventures/bg2.png'),
    price: 50,
  },
  {
    id: '3',
    title: 'The Curse of the Sandstorm Ruins',
    text: "The storm was coming fast. The sky turned an eerie shade of yellow, and the wind roared like a beast, whipping sand into the air.\n" +
      "Wunderin gritted her teeth and pushed her truck to its limits, searching for shelter. Just as the first waves of sand struck, she spotted ruins—massive stone pillars standing against the raging winds.\n" +
      "She swerved into the ancient city remains, parking between two crumbling walls. As soon as she stepped out, the storm circled the ruins but did not enter, as if held back by an invisible force.\n" +
      "Then, the runes appeared. Glowing arrows shifted along the stone walls, changing faster than her eyes could follow. She felt it immediately—this was a test.\n" +
      "If she wanted the storm to pass, she had to complete the sequence. The faster the runes moved, the quicker she had to react.\n" +
      "Her fingers danced over the stone, tapping each rune in the order it appeared. The air pulsed with energy, and the wind howled louder. A single mistake could trigger disaster.\n" +
      "With the final tap, the ruins trembled, and the storm outside suddenly died down.\n" +
      "A heavy slab on the ground slid open, revealing a passage leading deep underground. Wunderin wiped the sweat from her brow and grinned.\n" +
      "\"Looks like the real adventure is just beginning.\"",
    image: require('../assets/photos/adventures/bg3.png'),
    price: 40,
  },
  {
    id: '4',
    title: 'The Forgotten Caravan of Light',
    text: "Legends spoke of a lost caravan that traveled under the cover of darkness, led by lanterns that never went out. No one had ever found it, but Wunderin wasn’t one to ignore a challenge.\n" +
      "One night, while camping in her truck, she saw strange lights flickering in the distance. Without hesitation, she turned the ignition and sped toward them.\n" +
      "The deeper she drove into the desert, the stranger the terrain became. The sand turned smooth, almost glass-like, reflecting the night sky.\n" +
      "And then, she saw it—the caravan. Golden wagons moved slowly, their wheels never touching the ground. No drivers guided them, only floating orbs of light leading the way.\n" +
      "She stepped out of her truck, mesmerized. The orbs suddenly shifted, rearranging into a rune pattern above the caravan. She recognized the challenge.\n" +
      "Each light pulsed in a sequence, a code she had to repeat. The moment she touched the first glowing rune, the lights flickered in rapid succession. If she hesitated, the caravan would vanish for another hundred years.\n" +
      "She moved fast, matching the lights with precision. As she completed the final input, the caravan stopped. The wagons opened, revealing treasures untouched by time.\n" +
      "Wunderin let out a low whistle. \"Not bad. Not bad at all.\"",
    image: require('../assets/photos/adventures/bg4.png'),
    price: 60,
  },
  {
    id: '5',
    title: 'The Oasis That Wasn’t There',
    text: "Her pickup roared over the dunes, dust trailing behind as she followed an old legend—an oasis that appeared only once every ten years.\n" +
      "She didn’t believe in fairy tales, but she believed in puzzles.\n" +
      "As she crested the next dune, there it was—a shimmering lake surrounded by lush palm trees. She skidded to a stop and jumped out. But as she approached, something was off.\n" +
      "The oasis was silent. No wind, no rustling leaves, no rippling water.\n" +
      "Floating on the surface of the lake were ancient rune tiles, shifting in rhythmic patterns. She knelt by the shore, watching them carefully. This was no ordinary mirage. It was a puzzle.\n" +
      "The moment she reached out to touch a tile, the oasis flickered, threatening to disappear. She had to match the sequence before it was gone for another decade.\n" +
      "She worked quickly, her mind racing to keep up with the shifting runes. One wrong move and the oasis would vanish.\n" +
      "With the final tap, the water rippled, and the silence was broken. The trees swayed in the wind, the lake shimmered, and a hidden doorway rose from beneath the water.\n" +
      "Wunderin smirked. \"Guess I just unlocked something worth waiting ten years for.\"",
    image: require('../assets/photos/adventures/bg5.png'),
    price: 60,
  },
];

const AdventureStoriesScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const readingleAdventure = (text, img) => {
    navigation.navigate('SingleAdventure', {text, img});
  };

  const renderItem = ({ item }) => (
    <View style={styles.secondContainer}>
      <View style={{ position: 'absolute',
        top: -20,
        right: 20,}}>
        <CircleButton icon={<CloseSvg/>} onPress={() => navigation.goBack()} addStyles={{}}/>
      </View>
      <LinearGradient
        start={{x: 0.2, y: 0.4}} end={{x: 0.5, y: 0.5}}
        locations={[0,1,1]}
        colors={['#5289a9', '#3c7a75']}
        style={{width:'100%',alignItems: 'center', borderRadius: 30, justifyContent: 'center', borderWidth: 1, borderColor: '#deb541'}}>
        <Text style={styles.titleText}>Adventure Stories</Text>
        <Text style={styles.levelText}>{item.title}</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={styles.imageStyled}
          />
          <View style={styles.overlay} />
          <CustomButton text='Read' onPress={()=>{readingleAdventure(item.text, item.image)}} addStyles={{position: 'absolute',}}/>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d8bcd', '#3ca3d8', '#e0f5fe']} style={styles.gradient}/>
      <FlatList
        ref={flatListRef}
        data={AdventureStoriesItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
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
  secondContainer: {
    zIndex: 1,
    alignSelf: 'center',
    width: width - 24,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    marginTop: 30
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FredokaOne-Regular',
    color: 'gold',
    marginTop:32,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  levelText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'FredokaOne-Regular',
    marginBottom: 12,
    marginTop: 32
  },
  imageWrapper: {
    width: 300,
    height: 230,
    borderRadius: 30,
    margin: 30,
    marginTop: 0,
    // borderWidth: 3,
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
  imageButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
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
    zIndex: -1,
  },
});

export default AdventureStoriesScreen;
