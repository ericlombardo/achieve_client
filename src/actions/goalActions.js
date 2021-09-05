

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

export const updateGoal = (updatedGoal) => {

  return (dispatch) => {
    dispatch({
      type: 'UPDATE_GOAL',
      payload: updatedGoal
    })
  }}


  export const updateGoalServer = (newGoal) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/goals/${newGoal.id}`, { // form id is set to goal
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({goal: newGoal})})
        .then(resp => resp.json())
        .then(goal => {
          debugger
        //   dispatch({
        //   type: 'UPDATE_GOAL',
        //   goal: goal
        // })
        // alert('Updated Milestones')
      })
    }}
  

  
  export const CreateGoal = (goal) => {
    const {goalVerb, goalNumber, goalUnit, why, dayCount } = goal
    
    const setTitle = () => { // set title based on what type of goal
      if (goal.goalUnit) {
        goal.title = `In ${dayCount} days I will have ${goalVerb} ${goalNumber} ${goalUnit} in order to ${why}`
      } else {
        goal.title = `In ${dayCount} days I will have ${goalVerb} in order to ${why}`
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
        dispatch({
          type: 'CREATE_GOAL',
          payload: goal
        })
        )
      }
    }
    
    
    
    // export const updateMilestone = (milestone) => {
    //   return (dispatch) => {
    //     dispatch({
    //       type: 'UPDATE_MILESTONE',
    //       payload: milestone
    
    //     })
    //   } 
    // }