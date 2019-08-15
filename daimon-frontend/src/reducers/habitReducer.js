let initialState = {
  id: null,
  name: '',
  positive: true,
  maxFrequency: 0,
  firstDay: null,
  loading: false
}

export default (state = initialState, action) => {

  switch (action.type) {

    case 'CREATE_HABIT_START':
      return {...state, loading: true}

      case 'CREATE_HABIT_SUCCESS':
      debugger
      let habitObj = action.habit
      return {
        ...state,
        id: habitObj.id,
        name: habitObj.name,
        positive: habitObj.positive,
        maxFrequency: habitObj.maxFrequency,
        firstDay: habitObj.firstDay,
        loading: false
      }

    case 'CREATE_HABIT_FAILURE':
      return {...state, loading: false}

    default:
      return state
  }
}
