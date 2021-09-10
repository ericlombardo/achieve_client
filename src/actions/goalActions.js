

export const fetchGoals = () => {  // get all goals and add to redux store
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

export const updateGoal = (updatedGoal) => { // takes in updatedGoal and updates redux store
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_GOAL',
      payload: updatedGoal
    })
  }}

export const updateGoalServer = (newGoal) => {  // sends newGoal to server as patch
  return (dispatch) => {
    fetch(`http://localhost:3000/goals/${newGoal.id}`, { // form id is set to goal
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({goal: newGoal})}
    )
  }
}
  
export const CreateGoal = (goal) => {  // assigns conditional title, posts to server, adds to redux
  const {goalVerb, goalNumber, goalUnit, why } = goal

  const setTitle = () => { // set title based on what type of goal
    if (goal.goalUnit) {
      goal.title = `I will have ${goalVerb} ${goalNumber} ${goalUnit} in order to ${why}`
    } else {
      goal.title = `I will have ${goalVerb} in order to ${why}`
    }
  }
  return (dispatch) => {
    setTitle() // set title based on starting or quiting
    
    fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({goal: goal})
    })
    .then(resp => resp.json())
    .then(goal => 
      dispatch({              // send new goal to Redux store
        type: 'CREATE_GOAL',
        payload: goal
      })
      )
    }
}

export const removeGoal = id => {
  fetch(`http://localhost:3000/goals/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  
  return {
    type: 'REMOVE_GOAL',
    payload: id
  }
}