const GET_CATEGORIES_START = "GET_CATEGORIES_START"

export const getCategoriesStart = () => (
  { type: GET_CATEGORIES_START }
)

export const getCategoriesSuccess = (posts) => (
  { type: "GET_CATEGORIES_SUCCESS", posts: posts }
)

export const getCategopriesFailure = (error) => {
  return { type: "GET_CATEGORIES_FAILURE", error: error }
}
