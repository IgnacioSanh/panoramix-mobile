import { StyleSheet } from "react-native";
import { BorderRadius } from "~theme/spacings";

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 5/3,
    borderRadius: BorderRadius.BORDERED
  }
});

export default styles;