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
  
  const handleSubmit = (e, ids, goal) => {
    e.preventDefault()
    goal.milestones.forEach(ms => {
      if (ids.includes(ms.id.toString())) {
        ms.complete = !ms.complete
      }
    })
    return dispatch(updateGoal(goal))
}

  if (loading) { return 'Loading...' } 
  

  return ( 
    <div id="goals">
      {goals.map(goal => { // map through all goals
        return ( // return div with GoalCard component for each
          <div id="goal-card" className="bg-gray-200 border-2 border-black m-4" key={goal.id}>
            <GoalCard goal={goal} handleSubmit={handleSubmit}/> {/* pass in goal instance through props */}
          </div> 
        )
      })}
    </div>
  )
}

export default GoalContainer 