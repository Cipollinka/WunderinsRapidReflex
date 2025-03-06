// import React from 'react';
// import HomeScreen from './screens/HomeScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// import LevelsScreen from './screens/LevelsScreen';
// import SingleLevelScreen from './screens/SingleLevelScreen';
// import AdventureStoriesScreen from './screens/AdventureStoriesScreen';
// import SingleAdventureScreen from './screens/SingleAdventureScreen';
// import RulesScreen from './screens/RulesScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import ShopScreen from './screens/ShopScreen';
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
import HomeScreen from './screens/HomeScreen';
import LevelsScreen from './screens/LevelsScreen';
import SingleLevelScreen from './screens/SingleLevelScreen';
import AdventureStoriesScreen from './screens/AdventureStoriesScreen';
import SingleAdventureScreen from './screens/SingleAdventureScreen';
import RulesScreen from './screens/RulesScreen';
import SettingsScreen from './screens/SettingsScreen';
import ShopScreen from './screens/ShopScreen';
import Onboarding1Screen from './screens/Onboarding1Screen';
import Onboarding2Screen from './screens/Onboarding2Screen';
import Onboarding3Screen from './screens/Onboarding3Screen';
import GameScreen from './screens/GameScreen';
import {persistor, store} from './redux/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import BackgroundMusic from './components/BackgroundMusic';

const Stack = createNativeStackNavigator();

const WhiteRoot = () => {

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

export default WhiteRoot;
