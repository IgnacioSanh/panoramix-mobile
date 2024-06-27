import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import 'react-native-gesture-handler';

import { ScreenNames } from '../types/screen';
import Home from '../views/home/home';
import MapScreen from '../views/mapScreen/mapScreen';
import ExploreNavigator from './exploreNavigator';

const Tab = createBottomTabNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName={ScreenNames.EXPLORE}>
        <Tab.Screen name={ScreenNames.HOME} component={Home} options={{ title: 'For You' }} />
        <Tab.Screen name={ScreenNames.MAP} component={MapScreen} options={{ title: 'Map' }} />
        <Tab.Screen name={ScreenNames.EXPLORE_NAVIGATOR} component={ExploreNavigator} options={{ title: 'Explore' }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;