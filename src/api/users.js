import firebase from '../services/firebaseService';


class Users {
  static createUser = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  static updateUserProfile = (payload) => {
    const user = firebase.auth().currentUser;
    return user.updateProfile(payload);
  };
}

export default Users;
