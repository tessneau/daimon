let initialState = []

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_SUCCESS":
      return action.categories
    default:
      return state;
  }
}

export default categoriesReducer
