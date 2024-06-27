/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import RootNavigator from './src/navigators/rootNavigator';

AppRegistry.registerComponent(appName, () => RootNavigator);
