const goalsReducer = (  // this is where you update and return new state
  state = {goals: [], loading: true}, // set state defaults
  action
  ) => { 
  switch(action.type) { 
    case 'LOADING_GOALS' :
      return {
        ...state, // return previous state
        goals: [...state.goals], // and goals
        loading: true // alert we are still loading
      }
    case 'ADD_GOALS' :
      return {
        ...state, // return previous state
        goals: action.payload, // add new goal to previous goals
        loading: false // alert we are done loading
      }

    case 'LOADING_MILESTONE' :
      return {
        ...state,
        goals: [...state.goals],
        loading: true
      }

    case 'UPDATE_MILESTONE' :
      return {
        ...state,
        // ,
        //   ...state.goals,
        //     ...state.goals.slice(0, action.goalIndex - 1),
        //       ...state.goals[goalIndex],
        //     ...state.goals.slice(action.goalIndex + 1),
        loading: false
      }
    default : 
      return state
  }
}

export default goalsReducer