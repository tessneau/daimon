export const logIn = (loginInformation={}) => dispatch => {
  dispatch({ type: "LOGIN_REQUEST_START" })
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(loginInformation)
  })
  .then(res => res.json())
  .then((response) => {
      if (!response.error) {
        localStorage.setItem("token", response.jwt)
        dispatch({ type: 'LOGIN_REQUEST_SUCCESS' })
        dispatch({type: "SAVE_USER_TO_STATE", payload: response})
      }
      else {
        dispatch({ type: 'LOGIN_REQUEST_FAILURE', error: response.error })
      }
    })
}

export const getCurrentUser = (token) => {
  return (dispatch) => {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        "Authorization": token
      }
    })
    .then(response => {
        if (response.status === 401) {
          throw new Error("Unauthorized")
        }
         return response
    })
    .then(res => res.json())
    .then(response =>{
      dispatch({ type: 'LOGIN_REQUEST_SUCCESS' })
      dispatch({type: "SAVE_USER_TO_STATE", payload: response})
    })
  }
}


export const signUp = (signUpInformation={}) => dispatch => {
  dispatch({ type: "SIGNUP_REQUEST_START" })
  return fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({user: signUpInformation})
  })
  .then(res => res.json())
  .then(response => {
    if (!response.error) {
      localStorage.setItem("token", response.jwt)
      dispatch({ type: 'SIGNUP_REQUEST_SUCCESS' })
      dispatch({type: "SAVE_USER_TO_STATE", payload: response})
    }
  })
  .catch(error => {
    console.log('eroor time')
    dispatch({ type: 'SIGNUP_REQUEST_FAILURE', error: error })
  })
}

export const createPost = (postInformation={}) => dispatch => {
  return fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify({post: postInformation})
    })
    .then(res => res.json())
    .then(data => {
      dispatch({type: "CREATE_POST_SUCCESS", category: data.category})
      dispatch({type: "SAVE_POST_TO_USER", post: data.post})
      })
    .catch(error => {
      console.log('create post failure')
      // dispatch({ type: 'SIGNUP_REQUEST_FAILURE', error: error })
    })
}

export const logOut = () => dispatch => {
  localStorage.clear()
  dispatch({ type: 'LOGOUT' })
}
