export const createHabit = (habitInformation={}) => dispatch => {
  dispatch({ type: "CREATE_HABIT_START" });

  return fetch(`http://localhost:3000/habits`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(habitInformation)
  })
    .then(res => res.json())
    .then(habit => {
      dispatch({ type: "CREATE_HABIT_SUCCESS", habit: habit });
    })
    .catch(error => {
      dispatch({ type: "CREATE_HABIT_FAILURE", error: error });
    });
};

export const deleteHabit = (id) => dispatch => {
  dispatch({ type: "DELETE_HABIT_START" });

  return fetch(`http://localhost:3000/habits/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': localStorage.token
    }
  })
    .then(() =>{
      dispatch({ type: "DELETE_HABIT_SUCCESS", id: id });
      })
    .catch(error => {
      dispatch({ type: "DELETE_HABIT_FAILURE", error: error });
    });
};
