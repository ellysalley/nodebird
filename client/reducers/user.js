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
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";
export const LOG_OUT = 'LOG_OUT';

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data: data,
  }
}

export const signUpSuccess = {
  type: SIGN_UP_SUCCESS,
}
export const loginAction = {
  type: LOG_IN, 
  data: {
    username: 'elly',
  },
};

export const logoutAction = {
  type: LOG_OUT,
};

export const signUpId = () => {
  return {
    type: SIGN_UP_N
  }
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