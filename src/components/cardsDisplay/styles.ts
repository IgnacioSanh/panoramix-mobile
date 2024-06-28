import { StyleSheet } from 'react-native';

import { Spacings } from '~theme/spacings';

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-around',
  },
  itemSeparator: {
    marginVertical: Spacings.SMALL,
  },
});

export default styles;
