import { combineReducers } from "redux";
import currentUser from "./currentUserReducer";
import loggedIn from "./loggedInReducer";
import categories from './categoriesReducer';
import currentCategory from './currentCategoryReducer'

export default combineReducers({
  currentUser,
  loggedIn,
  categories,
  currentCategory
});
