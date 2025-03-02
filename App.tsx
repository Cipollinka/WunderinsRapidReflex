// import React from 'react';
// import HomeScreen from './src/screens/HomeScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// import LevelsScreen from './src/screens/LevelsScreen';
// import SingleLevelScreen from './src/screens/SingleLevelScreen';
// import AdventureStoriesScreen from './src/screens/AdventureStoriesScreen';
// import SingleAdventureScreen from './src/screens/SingleAdventureScreen';
// import RulesScreen from './src/screens/RulesScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
// import ShopScreen from './src/screens/ShopScreen';
//
// const Stack = createNativeStackNavigator();
//
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home" component={HomeScreen}/>
//         <Stack.Screen name="Levels" component={LevelsScreen}/>
//         <Stack.Screen name="SingleLevel" component={SingleLevelScreen}/>
//         <Stack.Screen name="AdventureStories" component={AdventureStoriesScreen}/>
//         <Stack.Screen name="SingleAdventure" component={SingleAdventureScreen}/>
//         <Stack.Screen name="Rules" component={RulesScreen}/>
//         <Stack.Screen name="Settings" component={SettingsScreen}/>
//         <Stack.Screen name="Shop" component={ShopScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// export default App;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LevelsScreen from './src/screens/LevelsScreen';
import SingleLevelScreen from './src/screens/SingleLevelScreen';
import AdventureStoriesScreen from './src/screens/AdventureStoriesScreen';
import SingleAdventureScreen from './src/screens/SingleAdventureScreen';
import RulesScreen from './src/screens/RulesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ShopScreen from './src/screens/ShopScreen';
import Onboarding1Screen from './src/screens/Onboarding1Screen';
import Onboarding2Screen from './src/screens/Onboarding2Screen';
import Onboarding3Screen from './src/screens/Onboarding3Screen';
import GameScreen from './src/screens/GameScreen';
import {persistor, store} from './src/redux/store';
import {Provider, useSelector} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import BackgroundMusic from './src/components/BackgroundMusic';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BackgroundMusic />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding1" component={Onboarding1Screen}/>
            <Stack.Screen name="Onboarding2" component={Onboarding2Screen}/>
            <Stack.Screen name="Onboarding3" component={Onboarding3Screen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Levels" component={LevelsScreen}/>
            <Stack.Screen name="SingleLevel" component={SingleLevelScreen}/>
            <Stack.Screen name="AdventureStories" component={AdventureStoriesScreen}/>
            <Stack.Screen name="SingleAdventure" component={SingleAdventureScreen}/>
            <Stack.Screen name="Rules" component={RulesScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name="Shop" component={ShopScreen}/>
            <Stack.Screen name="Game" component={GameScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
