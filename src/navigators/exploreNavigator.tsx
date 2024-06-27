import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenNames } from '~types/screen';
import Explore from '~screens/explore/explore';
import EventDetail from '~screens/eventDetail/eventDetail';

const Stack = createNativeStackNavigator<{[ScreenNames.EXPLORE]: undefined, [ScreenNames.EVENT_DETAIL]: undefined }>()

const ExploreNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.EXPLORE}>
      <Stack.Screen name={ScreenNames.EXPLORE} component={Explore} />
      <Stack.Screen name={ScreenNames.EVENT_DETAIL} component={EventDetail} />
    </Stack.Navigator>
  )
}

export default ExploreNavigator;