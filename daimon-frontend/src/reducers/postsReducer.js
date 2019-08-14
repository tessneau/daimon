let initialState = []

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_POSTS_TO_STATE":
      return action.posts
    default:
      return state;
  }
}

export default postsReducer
