// import {
//   getCategoriesStart,
//   getCategoriesSuccess,
//   getCategoriesFailure
// } from "./actionCreators";

export const getCategories = () => dispatch => {
  dispatch({ type: "GET_CATEGORIES_START" });
  return fetch("http://localhost:3000/categories", {
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(res => res.json())
    .then(categories => {
      dispatch({ type: "GET_CATEGORIES_SUCCESS", categories: categories });
    })
    .catch(error => {
      dispatch({ type: "GET_CATEGORIES_FAILURE", error: error });
    });
};

export const getCurrentCategoryPosts = id => dispatch => {
  dispatch({ type: "GET_CURRENT_CATEGORY_POSTS_START", categoryID: id });
  // return fetch(`http://localhost:3000/categories/${id}/posts`, {
  //   headers: {
  //     Authorization: localStorage.token
  //   }
  // })
  //   .then(res => res.json())
  //   .then(posts => {
  //     dispatch({ type: "GET_CURRENT_CATEGORY_POSTS_SUCCESS", posts: posts });
  //   })
  //   .catch(error => {
  //     dispatch({ type: "GET_CURRENT_CATEGORY_POSTS_FAILURE", error: error });
  //   });
};
