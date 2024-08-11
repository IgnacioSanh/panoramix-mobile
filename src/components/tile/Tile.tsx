import React from 'react';
import { View, Image, Text, ImageSourcePropType, TouchableOpacity } from 'react-native';

import styles from './styles';
import fontStyle from '~theme/fonts';
import { Spacings } from '~theme/spacings';

interface TileProps {
  imageSrc: ImageSourcePropType;
  title: string;
  subtitles?: string[]
}

const Tile = ({ imageSrc, title, subtitles }: TileProps) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View>
        <Image source={imageSrc} style={styles.image} />
        <Text style={fontStyle.h2}>{title}</Text>
        {subtitles ? subtitles.map(subtitle => (
          <Text key={subtitle} style={[fontStyle.regular, fontStyle.gray, fontStyle.largeLineHeight]}>{subtitle}</Text>
        )) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Tile;