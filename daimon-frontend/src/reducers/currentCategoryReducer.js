const initialState = {
  id: null,
  name: "",
  description: "",
  posts: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "GET_CATEGORIES_SUCCESS":
      return { ...action.categories[0] };

    case "SET_CURRENT_CATEGORY_SUCCESS":
      const sortedPosts = action.category.posts.sort((a,b) => (b.branch_count - a.branch_count))
      return { ...action.category, posts: sortedPosts, loading: false };

    case "CREATE_BRANCH_SUCCESS":
      const index = state.posts.findIndex(post => post.id === action.post.id)
      state.posts[index] = action.post
      return { ...state };

    case "CREATE_BRANCH_FAILURE":
      console.log('branch failure')
      return state;

    case "CREATE_POST_SUCCESS":
      const sortedPostsCreate = action.category.posts.sort((a,b) => (b.branch_count - a.branch_count))
      return { ...action.category, posts: sortedPosts, loading: false };

    default:
      return state;
  }
};
