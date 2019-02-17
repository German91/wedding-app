import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import { AuthNavigation } from './AuthNavigation';
import { AppNavigation } from './AppNavigation';


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppNavigation,
    Auth: AuthNavigation,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
