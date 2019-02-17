import { connect } from 'react-redux';

import RegisterScreen from './../screens/RegisterScreen';
import { createNewUser } from '../store/actions/userActions';


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: (email, password, payload, cb) => dispatch(createNewUser(email, password, payload, cb)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
