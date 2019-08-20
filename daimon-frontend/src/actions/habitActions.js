// export const getCurrentHabits = (userId) => dispatch => {
//   dispatch({ type: "CREATE_HABIT_START" });
//
//   return fetch(`http://localhost:3000/users/${userId}/habits`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Authorization': localStorage.token
//     }
//   })
//     .then(res => res.json())
//     .then(habits => {
//       dispatch({ type: "GET_CURRENT_HABITS_SUCCESS", habits: habits });
//     })
//     .catch(error => {
//       dispatch({ type: "GET_HABITS_FAILURE", error: error });
//     });
// };

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

export const updateHabitProgress = id => dispatch => {
  dispatch({ type: "UPDATE_HABIT_START" });

  return fetch(`http://localhost:3000/habits/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: localStorage.token
    },
  })
    .then(res => res.json())
    .then(habit => {
      dispatch({ type: "UPDATE_HABIT_SUCCESS", habit: habit });
    })
    .catch(error => {
      dispatch({ type: "UPDATE_HABIT_FAILURE", error: error });
    });
};

export const deleteHabit = (id) => dispatch => {
  dispatch({ type: "DELETE_HABIT_START" });

  return fetch(`http://localhost:3000/habits/${id}`, {
    method: "DELETE",
    headers: {
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
