const dummyUser = {
  username: 'elly',
  post: [],
  followings: [],
  followers: [],
  isLoggedIn: true
};

const initialState = {
  isLoggedIn: false, 
  user: null,
};

export const SIGN_UP = "SIGN_UP";
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data: data,
  }

}
export const loginAction = {
  type: LOG_IN, 
  data: {
    username: 'elly',
  },
};

export const logoutAction = {
  type: LOG_OUT,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    }

    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data, 
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
};