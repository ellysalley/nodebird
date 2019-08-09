export const initialState = {
  isLoggingOut: false,
  isLoggingIn: false,
  logInErrorReason: '',
  isSignedUp: false,
  isSigningUp: false,
  signUpErrorReason: '',
  me: null,
  followingList: [],
  followerList: [],
  userInfo: null,
  isEditingUsername: false,
  editUsernameErrorReason: ''
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const EDIT_USERNAME_REQUEST = 'EDIT_USERNAME_REQUEST';
export const EDIT_USERNAME_SUCCESS = 'EDIT_USERNAME_SUCCESS';
export const EDIT_USERNAME_FAILURE = 'EDIT_USERNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        logInErrorReason: ''
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        me: action.data,
        isLoading: false
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        logInErrorReason: action.error,
        me: null
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        me: null
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isSignedUp: false,
        signUpErrorReason: ''
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signUpErrorReason: action.error
      };
    }
    case LOAD_USER_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_USER_SUCCESS: {
      if (action.me) {
        return {
          ...state,
          me: action.data
        };
      }
      return {
        ...state,
        userInfo: action.data
      };
    }
    case LOAD_USER_FAILURE: {
      return {
        ...state
      };
    }
    case FOLLOW_USER_REQUEST: {
      return {
        ...state
      };
    }
    case FOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: [{ id: action.data }, ...state.me.Followings]
        }
      };
    }
    case FOLLOW_USER_FAILURE: {
      return {
        ...state
      };
    }
    case UNFOLLOW_USER_REQUEST: {
      return {
        ...state
      };
    }
    case UNFOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: state.me.Followings.filter(v => v.id !== action.data)
        },
        followingList: state.followingList.filter(v => v.id !== action.data)
      };
    }
    case UNFOLLOW_USER_FAILURE: {
      return {
        ...state
      };
    }
    case ADD_POST_TO_ME: {
      return {
        ...state,
        me: { 
          ...state.me,
          Posts: [{ id: action.data }, ...state.me.Posts]
        }
      };
    }
    case LOAD_FOLLOWERS_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_FOLLOWERS_SUCCESS: {
      return {
        ...state,
        followerList: action.data
      };
    }
    case LOAD_FOLLOWERS_FAILURE: {
      return {
        ...state
      };
    }
    case LOAD_FOLLOWINGS_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_FOLLOWINGS_SUCCESS: {
      return {
        ...state,
        followingList: action.data
      };
    }
    case LOAD_FOLLOWINGS_FAILURE: {
      return {
        ...state
      };
    }
    case REMOVE_FOLLOWER_REQUEST: {
      return {
        ...state
      };
    }
    case REMOVE_FOLLOWER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followers: state.me.Followers.filter(v => v.id !== action.data)
        },
        followerList: state.followerList.filter(v => v.id !== action.data)
      };
    }
    case REMOVE_FOLLOWER_FAILURE: {
      return {
        ...state
      };
    }
    case EDIT_USERNAME_REQUEST: {
      return {
        ...state
      };
    }
    case EDIT_USERNAME_SUCCESS: {
      return {
        ...state,
        isEditingUsername: false,
        me: {
          ...state.me,
          username: action.data
        }
      };
    }
    case EDIT_USERNAME_FAILURE: {
      return {
        ...state,
        isEditingUsername: false,
        editUsernameErrorReason: action.data
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
