import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './display/Button'

const GoalCard = (props) => {
  
  const {id, title, milestones} = props.goal
  const [msIds, collectmsIds ] = useState([])
  const dispatch = useDispatch()


  return (
    <>  
      <h2>{title}</h2>
      
      {/* show complete vs. total milestones */}
      <h3>{milestones.filter(ms => ms.complete === true).length} / {milestones.length} completed</h3>
      
      {/* display each milestone*/}
      <h4 >Milestones</h4>
      <div id="milestones" className="goal-card">
        <form id={id} onSubmit={(e) => props.handleSubmit(e)}>
        {milestones.sort((a, b) => {return a.id - b.id}).map(milestone => {
          return (
            <div id="milestone" key={milestone.id}>
              <input type="checkbox" id={milestone.id} value={milestone.goal_id}  defaultChecked={milestone.complete === true ? true : false}
                onChange={(e) => props.checkboxLogic(e)}/>
              <label htmlFor={milestone.id}>{milestone.content}</label><br></br>
            </div>
          )
        })}
        <br /><br />
        
        <Button 
          text="Update Milestones" 
        />

        </form>
      </div>
    </> 
  )
}

export default GoalCard

// found method to check for pluralizing on stackoverflow
// https://stackoverflow.com/questions/27194359/javascript-pluralize-an-english-string