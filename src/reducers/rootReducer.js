import { combineReducers } from 'redux'; // gives us combineReducers method

// import each seperate reducer
import goalsReducer from './goalsReducer';

// build routes for each reducer
const rootReducer = combineReducers({
  goals: goalsReducer
})

export default rootReducer