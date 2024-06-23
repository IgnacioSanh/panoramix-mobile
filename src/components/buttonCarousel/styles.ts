import { StyleSheet, ViewStyle } from 'react-native';
import { Spacings } from '../../theme/spacings';

export const styles = StyleSheet.create({
  wrapper: {
    marginVertical: Spacings.MEDIUM,
  },
});

export const styleMargin = (isFirst: boolean): ViewStyle => ({
  marginLeft: isFirst ? 0 : Spacings.MEDIUM,
});
