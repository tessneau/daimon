const defaultState = {
  id: null,
  name: "",
  positive: null,
  maxFrequency: null,
  firstDay: null,
  progress_count: 0,
  loading: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_CURRENT_HABIT_START":
      return { ...state, loading: true };
    case "GET_CURRENT_HABIT_SUCCESS":
      debugger
      return { ...action.problem, loading: false };
    case "GET_CURRENT_HABIT_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
};
