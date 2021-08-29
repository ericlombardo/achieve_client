import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGoals } from '../actions/goalActions'
import GoalCard from './GoalCard'

const GoalContainer = () => {
  
  const dispatch = useDispatch()  // gives access to dispatch method
  const goals = useSelector(state => state.goals.goals) // assigns store value to goals variable
  const loading = useSelector(state => state.goals.loading) // assigns store value to loading variable
  
  useEffect(() => {  // runs side effect
    dispatch(fetchGoals()) // calls dispatch with fetchGoals action
  }, [dispatch]) // renders whenever dispatch changes
  
  if (loading) { return null } 
  
  return ( 
    <div id="goals">
      {goals.map(goal => { // map through all goals
        return ( // return div with GoalCard component for each
          <div id="goal-card" className="border card" key={goal.id}>
            <GoalCard goal={goal} /> {/* pass in goal instance through props */}
          </div> 
        )
      })}
    </div>
  )
}

export default GoalContainer 