let initialState = []

export default (state = initialState, action) => {

  switch (action.type) {

    // case "GET_CURRENT_HABITS_SUCCESS":
    // debugger
    // return action.habits

    case 'CREATE_HABIT_SUCCESS':
    return [...state, action.habit]

    default:
      return state
  }
}
