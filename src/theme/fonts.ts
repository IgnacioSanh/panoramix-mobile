import { StyleSheet } from 'react-native';
import { Colors } from './colors';

enum FontSize {
  SMALL = 8,
  REGULAR = 14,
  LARGE = 20,
  EXTRA_LARGE = 26,
}

const fontStyle = StyleSheet.create({
  h1: {
    fontSize: FontSize.EXTRA_LARGE,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: FontSize.LARGE,
    fontWeight: 'bold',
  },
  regular: {
    fontSize: FontSize.REGULAR,
    fontWeight: 'regular',
  },
  gray: {
    color: Colors.FONT_GRAY
  },
  largeLineHeight: {
    lineHeight: 22
  }
});

export default fontStyle;
