const initialState = {
  id: null,
  name: "",
  description: "",
  posts: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "GET_CATEGORIES_SUCCESS":
      return { ...action.categories[0] };

    case "GET_CURRENT_CATEGORY_POSTS_START":
    debugger
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

    case "CREATE_POST_SUCCESS":
      return { ...action.category, loading: false };

    default:
      return state;
  }
};
