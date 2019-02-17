import { connect } from 'react-redux';

import LoginScreen from './../screens/LoginScreen';
import { loginWithEmail, loginWithFacebook } from '../store/actions/authActions';


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginWithEmail: (email, password, cb) => dispatch(loginWithEmail(email, password, cb)),
    loginWithFacebook: (cb) => dispatch(loginWithFacebook(cb)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
