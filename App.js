import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AppLoading, Asset, Font } from 'expo';
import { Provider } from 'react-redux';

import store from './src/store';
import { cacheFonts, cacheImages } from './src/utils/cache';
import Navigation from './src/navigation';



export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/invitation.jpg'),
      require('./assets/images/landing-image.jpg'),
      require('./assets/images/proposal.jpg'),
      require('./assets/images/siham-german.jpg'),
      require('./assets/images/siham-german-2.jpg'),
      require('./assets/icon.png'),
    ]);

    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

