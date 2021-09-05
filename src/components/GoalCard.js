import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './display/Button'

const GoalCard = (props) => {
  
  const {id, title, milestones} = props.goal
  const [msIds, collectmsIds ] = useState([])
  const dispatch = useDispatch()


  return (
    <div className="m-4 text-xl">  
      <h2 className="text-3xl f-title">{title}</h2>
      
      {/* show complete vs. total milestones */}
      <h3>{milestones.filter(ms => ms.complete === true).length} / {milestones.length} completed</h3>
      
      {/* display each milestone*/}
      <h4 className="f-title text-2xl">Milestones:</h4>
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
          classes="transform transition-all hover:scale-110
            bg-orange text-white text-2xl 
            p-2 rounded-2xl w-48 h-auto
            text-center shadow-2xl f-title" 
        />

        </form>
      </div>
    </div> 
  )
}

export default GoalCard

// found method to check for pluralizing on stackoverflow
// https://stackoverflow.com/questions/27194359/javascript-pluralize-an-english-string