import { StyleSheet } from 'react-native';

import { BorderRadius, Spacings } from '~theme/spacings';
import { Colors } from '~theme/colors';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Spacings.MEDIUM,
    paddingVertical: Spacings.SMALL,
    backgroundColor: Colors.GRAY,
    borderRadius: BorderRadius.BORDERED,
  },
  text: {
    fontWeight: '400',
  },
});

export default styles;
