import { combineReducers } from "redux";
import currentUser from "./currentUserReducer";
import loggedIn from "./loggedInReducer";
import categories from './categoriesReducer';
import currentCategory from './currentCategoryReducer';
import habits from './habitReducer';
import posts from './postsReducer';
import currentHabit from './currentHabitReducer'

export default combineReducers({
  currentUser,
  loggedIn,
  categories,
  currentCategory,
  habits,
  posts,
  currentHabit
});
