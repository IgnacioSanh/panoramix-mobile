import { StyleSheet } from "react-native";
import { BorderRadius } from "~theme/spacings";

const styles = StyleSheet.create({
  image: {
    aspectRatio: 5/3,
    width: '100%',
    height: undefined,
    borderRadius: BorderRadius.BORDERED
  }
});

export default styles;