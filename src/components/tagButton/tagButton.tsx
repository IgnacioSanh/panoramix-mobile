import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface TagButtonProps {
  text: string;
  onPress: () => void;
}

const TagButton = ({ text, onPress }: TagButtonProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TagButton;
