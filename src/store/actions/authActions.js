import { AsyncStorage, ToastAndroid } from 'react-native';

import { LOGIN_USER, LOGOUT_USER } from './types';
import Authentication from './../../api/authentication';
import firebase from './../../services/firebaseService';
import i18n from './../../utils/i18n';


export const loginWithEmail = (email, password, cb) => async dispatch => {
  try {
    const response = await Authentication.logInWithCredentials(email, password);

    ToastAndroid.show(i18n.t('common.welcome'), ToastAndroid.SHORT);
    dispatch({ type: LOGIN_USER, payload: response.user.providerData });
    cb();
  } catch (err) {
    ToastAndroid.show(err.toString(), ToastAndroid.LONG);
    cb(err);
  }
};

export const loginWithFacebook = (cb) => async dispatch => {
  try {
    const { type, token } = await Authentication.logInWithFacebook();

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase.auth().signInAndRetrieveDataWithCredential(credential);
      await AsyncStorage.setItem('token', credential.accessToken);
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);

      ToastAndroid.show(i18n.t('common.welcome'), ToastAndroid.SHORT);
      dispatch({ type: LOGIN_USER, payload: response.json() });
      cb();
    }
  } catch (err) {
    ToastAndroid.show(err.toString(), ToastAndroid.LONG);
    cb(err);
  }
};

export const logoutUser = () => async dispatch => {
  try {
    await AsyncStorage.clear();
    await Authentication.logOut();

    ToastAndroid.show(i18n.t('common.logOut'), ToastAndroid.SHORT);
    dispatch({ type: LOGOUT_USER });
  } catch (err) {
    ToastAndroid.show(err.toString(), ToastAndroid.LONG);
  }
};
