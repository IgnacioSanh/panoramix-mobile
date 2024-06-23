import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import fontStyle from '../../theme/fonts';
import ButtonCarousel from '../../components/buttonCarousel/buttonCarousel';
import CardsDisplay from '../../components/cardsDisplay/cardsDisplay';

const days = ['Today', 'Tomorrow', 'This Week', 'Weekend'];

const Explore = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={fontStyle.h1}>Explore Events</Text>
        <ButtonCarousel labels={days} onPressLabel={() => {}} />
        <CardsDisplay />
      </View>
    </SafeAreaView>
  );
};

export default Explore;
