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
import AppManager from './src/AppManager';


const App = () => {

  return (
    <AppManager />
  );
};

export default App;
