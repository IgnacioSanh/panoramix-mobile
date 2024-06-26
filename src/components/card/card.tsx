import React from 'react';
import { Image, Text, ImageSourcePropType, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export interface CardProps {
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const Card = ({ image, title, onPress }: CardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
