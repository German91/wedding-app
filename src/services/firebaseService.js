import * as firebase from 'firebase';
import { Constants } from 'expo';


firebase.initializeApp(Constants.manifest.extra.firebase);
firebase.auth().useDeviceLanguage();

export default firebase;
