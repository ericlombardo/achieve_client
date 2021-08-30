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


export const updateMilestones = (e) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/milestones/${e.target.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({complete: e.target.value === "true" ? false : true})
    })
    .then(resp => resp.json())
    .then(milestone => dispatch({
      type: 'UPDATE_MILESTONE',
      payload: {
        goalIndex: milestone.goal_id - 1,
        milestoneIndex: milestone.id -1,
        complete: milestone.complete
      }
    }))
  }
}


