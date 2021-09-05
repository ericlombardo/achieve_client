import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGoals, updateGoal } from '../actions/goalActions'
import GoalCard from './GoalCard'

const GoalContainer = () => {
  
  const dispatch = useDispatch()  // gives access to dispatch method
  const goals = useSelector(state => state.goals.goals) // assigns store value to goals variable
  const loading = useSelector(state => state.goals.loading) // assigns store value to loading variable
  
  useEffect(() => {  // runs side effect
    dispatch(fetchGoals()) // calls dispatch with fetchGoals action
  }, [dispatch]) // renders whenever dispatch changes
  
  
  const checkboxLogic = (e) => {
    // find index for goal
    const goalIndex = goals.findIndex(goal => goal.id === parseInt(e.target.value))
    // find index for milestone
    const msIndex = goals[goalIndex].milestones.findIndex(ms => ms.id === parseInt(e.target.id))
    // make a copy of goals to alter
    const copyGoals = [...goals] 
    // change checked value for complete
    copyGoals[goalIndex].milestones[msIndex].complete = e.target.checked
    // send dispatch to update the store
    return dispatch(updateGoal(copyGoals[goalIndex]))
  }

  const handleSubmit = (e) => { // goes through each milestone and
    e.preventDefault()                     // switches complete if needed
    
    return dispatch(updateGoal()) // sends disptach with action
}

  if (loading) { return 'Loading...' } 
  
  return ( 
    <div id="goals">
      {goals.map(goal => { // map through all goals and render GoalCard for eac
        return (
        <div id="goal-card" className="bg-gray-300 border-2 border-black m-4" key={goal.id}>
          <GoalCard goal={goal} checkboxLogic={checkboxLogic} handleSubmit={handleSubmit}/> 
        </div>
        )
      })}
    </div>
  )
}

export default GoalContainer 