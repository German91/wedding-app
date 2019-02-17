import { LOGIN_USER, LOGOUT_USER } from '../actions/types';


const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        data: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};
