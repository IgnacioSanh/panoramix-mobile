import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

const Screen = ({children}: PropsWithChildren<{}>) => {
  return (
    <SafeAreaView
      edges={['top', 'bottom', 'left', 'right']}
      style={[styles.flex, styles.background]}>
      {children}
    </SafeAreaView>
  );
}

export default Screen;