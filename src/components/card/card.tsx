import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import styles from './styles';

export interface CardProps {
  title: string;
  image: ImageSourcePropType;
}

const Card = ({ image, title }: CardProps) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Card;
