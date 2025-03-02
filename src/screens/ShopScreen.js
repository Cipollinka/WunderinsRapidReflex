import React, { useState, useRef } from 'react';
import { View, Image, Dimensions, FlatList, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CloseSvg from '../assets/svg/CloseSvg';
import CustomButton from '../components/Button';
import SmallRockSvg from '../assets/svg/SmallRockSvg';
import CircleButton from '../components/CircleButton';
import { useDispatch, useSelector } from 'react-redux';
import { buyItem } from '../redux/slices/balanceSlice';

const { width } = Dimensions.get('window');

const shopItems = [
  { id: '1', title: 'Unlock New Desert', image: require('../assets/photos/adventures/bg2.png'), price: 30 },
  { id: '2', title: 'Unlock New Desert', image: require('../assets/photos/adventures/bg3.png'), price: 50 },
  { id: '3', title: 'Unlock New Desert', image: require('../assets/photos/adventures/bg4.png'), price: 40 },
  { id: '4', title: 'Unlock New Desert', image: require('../assets/photos/adventures/bg5.png'), price: 60 },
];

const ShopScreen = ({ navigation }) => {
  const [message, setMessage] = useState(null);
  const flatListRef = useRef(null);
  const dispatch = useDispatch();

  const balance = useSelector((state) => state.balance.balance);
  const purchasedItems = useSelector((state) => state.balance.purchasedItems);

  const handlePurchase = (item) => {
    if (balance >= item.price) {
      dispatch(buyItem({ id: item.id, price: item.price }));
      setMessage({ text: "Congratulations! You've unlocked a new desert! 🌅", type: "success" });
    } else {
      setMessage({ text: "Not enough relics! 🏜️", type: "error" });
    }
    setTimeout(() => setMessage(null), 3000);
  };

  const renderItem = ({ item }) => {
    const isPurchased = purchasedItems?.includes(item.id);

    return (
      <View style={styles.card}>
        <View style={styles.closeButton}>
          <CircleButton icon={<CloseSvg />} onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.balanceButton}>
          <CircleButton icon={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SmallRockSvg />
              <Text style={styles.balanceText}>{balance}</Text>
            </View>
          } addStyles={{width: 80}}/>
        </View>
        <LinearGradient colors={['#5289a9', '#3c7a75']} style={styles.cardContent}>
          <Text style={styles.titleText}>Shop</Text>
          <Text style={styles.levelText}>{item.title}</Text>
          <View style={styles.imageWrapper}>
            <Image source={item.image} resizeMode="cover" style={styles.imageStyled} />
            <View style={styles.buttonWrapper}>
              {!isPurchased && (
                <>
                  <CustomButton text="Unlock" onPress={() => handlePurchase(item)} />
                  <CircleButton icon={
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <SmallRockSvg />
                      <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                  } addStyles={{ width: 95 }} />
                </>
              )}
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d8bcd', '#3ca3d8', '#e0f5fe']} style={styles.gradient} />
      <FlatList
        ref={flatListRef}
        data={shopItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      {message && (
        <View style={[styles.notification, message.type === "success" ? styles.successMessage : styles.errorMessage]}>
          <Text style={styles.notificationText}>{message.text}</Text>
        </View>
      )}
      <Image source={require('../assets/photos/sandBack.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { alignSelf: 'center', width: width - 24, paddingHorizontal: 12, marginHorizontal: 12, marginTop: 30 },
  closeButton: { position: 'absolute', top: -20, right: 20, zIndex: 1 },
  balanceButton: { position: 'absolute', top: -20, left: 20, zIndex: 1 },
  cardContent: { alignItems: 'center', borderRadius: 30, justifyContent: 'center', borderWidth: 1, borderColor: '#deb541' },
  titleText: { fontSize: 20, marginBottom: 32, fontWeight: 'bold', color: 'gold', fontFamily: 'FredokaOne-Regular' },
  levelText: { fontSize: 18, color: '#fff', textAlign: 'center', marginBottom: 24, fontFamily: 'FredokaOne-Regular' },
  imageWrapper: { height: '70%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' },
  imageStyled: { width: 300, height: 700, borderRadius: 20 },
  buttonWrapper: { position: 'absolute', zIndex: 1 },
  balanceText: { marginLeft: 10, fontFamily: 'FredokaOne-Regular', color: '#fff' },
  priceText: { fontFamily: 'FredokaOne-Regular', color: '#fff', marginLeft: 10 },
  notification: {marginBottom: 50,marginTop: -50,  borderRadius: 30, minWidth: width - 48, justifyContent: 'center', alignItems: 'center', padding: 10 },
  successMessage: { backgroundColor: '#34c759' },
  errorMessage: { backgroundColor: '#ff3b30' },
  notificationText: { fontFamily: 'FredokaOne-Regular', color: '#fff' },
  gradient: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 },
  image: { width: '100%', height: '50%', position: 'absolute', bottom: 0, zIndex: -1 },
});

export default ShopScreen;
