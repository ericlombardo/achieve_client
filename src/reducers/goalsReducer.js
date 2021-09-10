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
        goals: action.payload, // add all new goals
        loading: false // alert we are done loading
      }

    case 'UPDATE_GOAL' :
      const index = state.goals.findIndex(g => { // finds goal by index
        return g.id === action.payload.id
      })
      return {
        ...state,
          goals: [
            ...state.goals.slice(0, index),
            action.payload,                 // uses index to slice goals and add new inbetween
            ...state.goals.slice(index + 1)
          ] 
      }

    case 'CREATE_GOAL' : 
      return {
        ...state,  // returns all other state
          goals: [  // returns previous goals and adds new goal
            ...state.goals, action.payload
          ]
      }

    case 'REMOVE_GOAL' : // gives back goals without deleted goal
      const removedIndex = state.goals.findIndex(g => { // finds goal by index
        return g.id === action.payload
      })
      return {
        ...state,
          goals: [
            ...state.goals.slice(0, removedIndex),
            ...state.goals.slice(removedIndex + 1)
          ]
      }

    default : 
      return state
  }
}

export default goalsReducer