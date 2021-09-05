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

    case 'UPDATE_GOAL' :
      const index = state.goals.findIndex(g => {
        return g.id === action.payload.id
      })
      // debugger
      return {
        ...state,
          goals: [
            ...state.goals.slice(0, index),
            action.payload,
            ...state.goals.slice(index + 1)
          ] 
      }
    case 'CREATE_GOAL' :
      return {
        ...state,
          goals: [
            ...state.goals, action.payload
          ]
      }
    // case 'UPDATE_MILESTONE' :
    //   const msIndex = state.goals.findIndex(g => {
    //     return g.id === action.payload.goal_id
    //   })
    //   debugger
    //   return {
    //     ...state,
    //       ...state.goals.slice(0, index),
    //       ...state.goal[Index], 

    //       ...state.goals.slice(index + 1)
    //   }
    default : 
      return state
  }
}

export default goalsReducer