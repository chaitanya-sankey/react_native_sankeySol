/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
//import appOne from './appOne';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => appOne);
