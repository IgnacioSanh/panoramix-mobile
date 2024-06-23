import { StyleSheet } from 'react-native';

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
});

export default fontStyle;
