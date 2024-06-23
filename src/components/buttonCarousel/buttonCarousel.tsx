import React from 'react';
import { ScrollView, View } from 'react-native';

import TagButton from '../tagButton/tagButton';

import { styles, styleMargin } from './styles';

interface ButtonCarouselProps {
  labels: string[];
  onPressLabel: (label: string) => void;
}

const ButtonCarousel = ({ labels, onPressLabel }: ButtonCarouselProps) => {
  return (
    <ScrollView
      style={styles.wrapper}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {labels.map((label, index) => (
        <View style={styleMargin(index === 0)}>
          <TagButton onPress={() => onPressLabel(label)} text={label} />
        </View>
      ))}
    </ScrollView>
  );
};

export default ButtonCarousel;
