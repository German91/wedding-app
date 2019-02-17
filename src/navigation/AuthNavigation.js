import { createStackNavigator } from 'react-navigation';

import LoginContainerScreen from '../containers/LoginContainerScreen';
import { STYLES } from '../constants';
import RegisterContainerScreen from '../containers/RegisterContainerScreen';
import i18n from './../utils/i18n';


export const AuthNavigation = createStackNavigator({
  Login: {
    screen: LoginContainerScreen,
    navigationOptions: {
      header: null,
    }
  },
  Register: {
    screen: RegisterContainerScreen,
    navigationOptions: {
      headerTitle: i18n.t('navigation.registerTitle'),
    }
  },
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: STYLES.COLORS.RED,
    },
    headerTintColor: STYLES.COLORS.WHITE,
  }
});
