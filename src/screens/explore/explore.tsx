import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import fontStyle from '~theme/fonts';
import ButtonCarousel from '~components/buttonCarousel/buttonCarousel';
import CardsDisplay from '~components/cardsDisplay/cardsDisplay';
import Screen from '~components/screen/screen';

const days = ['Today', 'Tomorrow', 'This Week', 'Weekend'];

const Explore = () => {
  const navigator = useNavigation();
  return (
    <Screen>
      <View>
        <Text style={fontStyle.h1}>Explore Events</Text>
        <ButtonCarousel labels={days} onPressLabel={() => {}} />
        <CardsDisplay />
      </View>
    </Screen>
  );
};

export default Explore;
