export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      username: 'elly',
    },
    content: '첫 번째 게시글',
    img: 'https://lh3.googleusercontent.com/X9Z0Ee95h7iRN4HxOu9OJc674BKRnl63OH4KfQfKT60iyX0CA7Z6Cv37mHrFtjHhOltLb4DeOTJQsuJkgLlrnluopug-2hqn5bJVyAKhsZq659l9ZW_P5WID-OOHvP3t7UXFQlM6xOCsl_KKOZln6YxB9hCpJRSa2T71_rgii6mbgZNo-d3o-uU7VxBr37JuurHMedUdH9XRdxOmet_oMnnxjOD-Ej4u7a76iTe46qJzCF2J57Qy87gM0tFvViQt7maUwhj72adrLcjpKqmPLXxWUIPX16H9OMfHs3y2zCFV1DdGoMsdQ6TyjyUJ6b6fwmE77Bc-HoI_yEjCWLXx1zydPplmu9-2ioHDAmqem_w_lmipf05sQqARkZU7lKwwbDaGwOCDSW8U8IkH0fnSIGIslG5ZJjicQabevDAnxnjMxDHsHhJ9YPDB0ZR1G4F6m5IRgLvLLq8riEKW94iaSa8yHa_8UAcEaSjWxYUS6aPGNs8XQmbQyDuaPb-5plXdXh2Yh5pbS7zf9ofAWS93JJ32vyv1Mp_tCGAV7kSx9fJ9IJxOKQJP_3T3194daTzceczfEbsIZwGTYErI1RB-w_2YeKHHAELWmvBv0TFwbcIHIMPmnD3WddCX-fP42Lv2_rREXvTPyQstBD8Q8kf_Qpr1zQt-g1w=w893-h670-no',
    comments: [],
  }],
  imagePaths: [],
  addPostErrorReason: '',
  isAddingPost: false,
  postAdded: false, 
  isAddingComment: false,
  addCommentErrorReason: '',
  commentAdded: false,
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    username: 'elly',
  },
  content: 'this is dummy post.',
  comments: [],
};

const dummyComment = {
  id: 1,
  User: {
    id: 1,
    username: 'elly'
  },
  createdAt: new Date(),
  content: 'this is dummy comment.'
};

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const ADD_POSTS_REQUEST = 'ADD_POSTS_REQUEST';
export const ADD_POSTS_SUCCESS = 'ADD_POSTS_SUCCESS';
export const ADD_POSTS_FAILURE = 'ADD_POSTS_FAILURE';

export const LIKE_POSTS_REQUEST = 'LIKE_POSTS_REQUEST';
export const LIKE_POSTS_SUCCESS = 'LIKE_POSTS_SUCCESS';
export const LIKE_POSTS_FAILURE = 'LIKE_POSTS_FAILURE';

export const UNLIKE_POSTS_REQUEST = 'UNLIKE_POSTS_REQUEST';
export const UNLIKE_POSTS_SUCCESS = 'UNLIKE_POSTS_SUCCESS';
export const UNLIKE_POSTS_FAILURE = 'UNLIKE_POSTS_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS_REQUEST: {
      return {
        ...state,
        isAddingPost: true,
        addPostErrorReason: '',
        postAdded: false,
      };
    }
    case ADD_POSTS_SUCCESS: {
      return {
        ...state,
        isAddingPost: false,
        mainPosts: [action.data, ...state.mainPosts],
        postAdded: true,
      };
    }
    case ADD_POSTS_FAILURE: {
      return {
        ...state,
        isAddingPost: false, 
        addPostErrorReason: action.error,
      };
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...state, 
        isAddingComment: true,
        addCommentErrorReason: '',
        commentAdded: false, 
      };
    }
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Comments = [...post.Comments, dummyComment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state, 
        isAddingComment: false, 
        mainPosts,
        commentAdded: true, 
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state, 
        isAddingComment: false, 
        addCommentErrorReason: action.error, 
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};