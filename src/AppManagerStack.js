import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppManagerMain from './AppManagerMain';
import AppManagerChild from './AppManagerChild';

const Stack = createStackNavigator();

export default function AppManagerStack({dataLoad, userAgent}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="main">
        <Stack.Screen
          name="main"
          component={AppManagerMain}
          initialParams={{data: dataLoad, userAgent: userAgent}}
        />
        <Stack.Screen name="child" component={AppManagerChild} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
