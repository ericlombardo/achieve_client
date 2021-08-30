import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const GoalCard = (props) => {
  const {title, why, durationNumber, durationUnit, durationEnd, timeSpent, milestones} = props.goal
  return (
    <>
      <h3>I will {title} in {durationNumber} {durationUnit} {why}</h3>
      <h3>{milestones.filter(ms => ms.complete === true).length} / {milestones.length} completed</h3>
      <h4>Milestones</h4>
      {/* make a form with onSubmit*/}
      <div id="milestones" className="goal-card">
        <form onSubmit={e => props.handleUpdate(e)}>
        {milestones.map((milestone) => {
          return (
            <div id="milestone" key={milestone.id}>
              <input 
              type="checkbox" 
              id={milestone.id}  
              value={milestone.complete}
              defaultChecked={milestone.complete === true ? true : false}/>
              <label htmlFor={milestone.id}>{milestone.content}</label><br></br>
            </div>
          )
        })}
        <br/><br/>
        <button type="submit">Update Milestones</button>
        </form>
      </div>
      
      <p>{durationEnd}</p>

      <p>You have spent {Math.floor(timeSpent / 60)} hours and {timeSpent % 60} minutes on this goal</p>
      
    </>
  )
}

export default GoalCard

// found method to check for pluralizing on stackoverflow
// https://stackoverflow.com/questions/27194359/javascript-pluralize-an-english-string