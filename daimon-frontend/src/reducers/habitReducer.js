let initialState = []

export default (state = initialState, action) => {

  switch (action.type) {

    case 'CREATE_HABIT_SUCCESS':
    return [...state, action.habit]

    default:
      return state
  }
}
