import { ToastAndroid } from 'react-native';

import Users from '../../api/users';
import { LOGIN_USER } from './types';
import i18n from './../../utils/i18n';


export const createNewUser = (email, password, payload, cb) => async dispatch => {
  try {
    const user = await Users.createUser(email, password);
    await Users.updateUserProfile(payload);

    ToastAndroid.show(i18n.t('common.accountCreated'), ToastAndroid.SHORT);
    dispatch({ type: LOGIN_USER, payload: user.providerData });
    cb();
  } catch (err) {
    ToastAndroid.show(err.toString(), ToastAndroid.LONG);
    cb(err);
  }
};
