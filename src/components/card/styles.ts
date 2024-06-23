import { StyleSheet } from 'react-native';
import { BorderRadius, Spacings } from '../../theme/spacings';

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
    borderRadius: BorderRadius.BORDERED,
    marginBottom: Spacings.SMALL,
  },
  title: {
    fontSize: 16,
  },
});

export default styles;
