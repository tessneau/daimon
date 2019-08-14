export const pinPost = id => dispatch => {
  dispatch({ type: "POST_PIN_START" });

  return fetch(`http://localhost:3000/posts/${id}/pins`, {
    method: "POST",
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(res => res.json())
    .then(post => {
      dispatch({ type: "POST_PIN_SUCCESS", post: post });
    })
    .catch(error => {
      dispatch({ type: "POST_PIN_FAILURE", error: error });
    });
};
