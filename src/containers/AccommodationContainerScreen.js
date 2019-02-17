import { connect } from 'react-redux';

import AccommodationScreen from './../screens/AccommodationScreen';
import { logoutUser } from '../store/actions/authActions';


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationScreen);
