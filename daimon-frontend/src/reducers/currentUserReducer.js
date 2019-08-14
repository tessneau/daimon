let initialState = {
  id: null,
  username: '',
  avatar_img: '',
  habits: [],
  posts: [],
  pinned_posts: [],
  token: '',
  loading: false
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'SAVE_USER_TO_STATE':
      let userObj = action.payload.user
      return {
        ...state,
        id: userObj.id,
        username: userObj.username,
        avatar_img: userObj.avatar_img,
        habits: userObj.habits,
        posts: userObj.posts,
        pinned_posts: userObj.pinned_posts,
        token: action.payload.jwt
      }

    // case 'SAVE_HABITS_TO_USER':
    //   return {...state, habits: [...state.habits, action.payload]}

    //////////// PINS ///////////////////

    case 'POST_PIN_START':
      return {...state, loading: true}

    case 'POST_PIN_SUCCESS':
      return {
        ...state,
        pinned_posts: [...state.pinned_posts, action.post], 
        loading: false
      }

    case 'POST_PIN_FAILURE':
      return {...state, loading: false}

    //////////// LOGIN ///////////////////

    case 'LOGIN_REQUEST_START':
      return {...state, loading: true}

    case 'LOGIN_REQUEST_SUCCESS':
      return {...state, loading: false}

    case 'LOGIN_REQUEST_FAILURE':
      return {...state, loading: false}

    //////////// SIGNUP ///////////////////

    case 'SIGNUP_REQUEST_START':
      return {...state, loading: true}

    case 'SIGNUP_REQUEST_SUCCESS':
        return {...action.user, loading: false}

    case 'SIGNUP_REQUEST_FAILURE':
      return {...state, loading: false}

    ///////// LOGOUT ////////////////////

    case 'LOGOUT':
      return initialState

    default:
      return state
  }
}
