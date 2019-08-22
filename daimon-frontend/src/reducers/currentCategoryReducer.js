const initialState = {
  id: null,
  name: "",
  habits: [],
  posts: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "GET_CURRENT_CATEGORY_POSTS_START":
      return { ...state, loading: true };

    case "GET_CURRENT_CATEGORY_POSTS_SUCCESS":
      return {
         ...state,
         posts: action.posts,
         loading: false
       };

    case "GET_CURRENT_CATEGORY_POSTS_FAILURE":
      return { ...state, loading: false };

    case "CREATE_BRANCH_SUCCESS":
      const index = state.posts.findIndex(post => post.id === action.post.id)
      state.posts[index] = action.post
      return { ...state };

    case "CREATE_BRANCH_FAILURE":
      console.log('branch failure')
      return state;

    default:
      return state;
  }
};
