import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenNames } from '~types/screen';
import Explore from '~screens/explore/explore';
import EventDetail from '~screens/eventDetail/eventDetail';
import ForYouPage from '~screens/forYou/forYou';

const Stack = createNativeStackNavigator<{
  [ScreenNames.FOR_YOU]: undefined,
  [ScreenNames.EVENT_DETAIL]: undefined
}>()

const ForYouNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.FOR_YOU} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.FOR_YOU} component={ForYouPage} />
      <Stack.Screen name={ScreenNames.EVENT_DETAIL} component={EventDetail} />
    </Stack.Navigator>
  )
}

export default ForYouNavigator;