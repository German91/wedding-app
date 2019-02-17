import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';

import Loading from '../components/Loading';
import firebase from './../services/firebaseService';
import store from './../store';
import { LOGIN_USER } from '../store/actions/types';


class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);

    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    // const token = await AsyncStorage.getItem('token');

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.navigation.navigate('Auth');
      } else {
        this.props.navigation.navigate('App');
        store.dispatch({ type: LOGIN_USER, payload: user.providerData });
      }
    });

    // this.props.navigation.navigate(token ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <Loading />
      </View>
    );
  }
}

export default AuthLoadingScreen;
