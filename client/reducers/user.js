const initialState = {
  isLoggedIn: false, 
  user: {},
};

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const loginAction = {
  type: LOG_IN, 
  data: {
    username: 'elly',
  },
};

const logoutAction = {
  type: LOG_OUT,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
};