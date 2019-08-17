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
      const posts = state.posts.filter(post => post.id !== action.post.id)
      const updatedPosts = [...posts, action.post]
      return { ...state, posts: updatedPosts };

    case "CREATE_BRANCH_FAILURE":
      debugger
      return state;

    default:
      return state;
  }
};
