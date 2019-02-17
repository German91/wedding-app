import firebase from '../services/firebaseService';
import { Constants, Facebook } from 'expo';


class Authentication {
  static logInWithFacebook = () => {
    return Facebook.logInWithReadPermissionsAsync(Constants.manifest.facebookAppId, {
      permissions: ['public_profile', 'email'],
    });
  };

  static logInWithCredentials = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  static logOut = () => {
    return firebase.auth().signOut();
  };
}

export default Authentication;
