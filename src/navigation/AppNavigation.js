import { createStackNavigator } from 'react-navigation';

import AccommodationContainerScreen from '../containers/AccommodationContainerScreen';
import { STYLES } from '../constants';


export const AppNavigation = createStackNavigator({
  Accommodation: AccommodationContainerScreen
}, {
  initialRouteName: 'Accommodation',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: STYLES.COLORS.RED,
    },
    headerTintColor: STYLES.COLORS.WHITE,
  }
});
