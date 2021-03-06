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
        habits: userObj.user_habits,
        posts: userObj.posts,
        pinned_posts: userObj.pinned_posts,
        branched_posts: userObj.branched_posts,
        token: action.payload.jwt
      }


    /////////// POST ///////////////////
    case "SAVE_POST_TO_USER":
    return {...state, posts: [ ...state.posts, action.post]}


    /////////// HABIT ///////////////////

    case 'CREATE_HABIT_START':
      return {...state, loading: true}

    case 'CREATE_HABIT_SUCCESS':
    return {
      ...state,
      habits: [...state.habits, action.habit],
      loading: false
    }

    case 'CREATE_HABIT_FAILURE':
      return {...state, loading: false}

    case 'DELETE_HABIT_START':
      return {...state, loading: true}

    case 'DELETE_HABIT_SUCCESS':
    const newHabits = state.habits.filter(habit => habit.id !== action.id)
    return {
      ...state,
      habits: newHabits,
      loading: false
    }

    case 'DELETE_HABIT_FAILURE':
      return {...state, loading: false}

    case "UPDATE_HABIT_START":
      return { ...state, loading: true };
    case "UPDATE_HABIT_SUCCESS":
      const habitIndex = state.habits.findIndex(habit => habit.id === action.habit.id)
      state.habits[habitIndex] = action.habit
      return { ...state, loading: false };
    case "UPDATE_HABIT_FAILURE":
      return { ...state, loading: false };

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

    ///////////// BRANCH ////////////////
    case "CREATE_BRANCH_SUCCESS":
      const postIndex = state.pinned_posts.findIndex(post => post.id === action.post.id)
      state.pinned_posts[postIndex] = action.post
      return { ...state };

    case "CREATE_BRANCH_FAILURE":
      console.log('branch failure')
      return state;

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
