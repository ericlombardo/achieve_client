

export const fetchGoals = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOADING_GOALS'
    })
    fetch('http://localhost:3000/goals')
    .then(resp => resp.json())
    .then(goals => dispatch({
        type: 'ADD_GOALS',
        payload: goals
    }))
  }
}


export const updateGoal = (newGoal) => {
 
  return (dispatch) => {
      fetch(`http://localhost:3000/goals/${newGoal.id}`, { // form id is set to goal
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({goal: newGoal})})
      .then(resp => resp.json())
      .then(goal => {
        dispatch({
        type: 'UPDATE_GOAL',
        goal: goal
      })
      alert('Updated Milestones')
    })
  }
}


