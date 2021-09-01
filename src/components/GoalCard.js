import React, { useState } from 'react'

// create class that to hold all true milestone ids

const GoalCard = (props) => {
  const {id, title, why, durationNumber, durationUnit, durationEnd, timeSpent, milestones} = props.goal

  const [msIds, collectmsIds ] = useState([])
  
  const checkboxLogic = (e) => {
    // if id is in msIds already kick out if not add
    // go through each milestone and if id matches switch complete
    if (msIds.includes(parseInt(e.target.id))) {
      collectmsIds(msIds.filter(id => id !== e.target.id))
    } else {
      collectmsIds([...msIds, e.target.id])
    }
  }

  return (
    <>
      <h3>I will {title} in {durationNumber} {durationUnit} {why}</h3>
      <h3>{milestones.filter(ms => ms.complete === true).length} / {milestones.length} completed</h3>
      <h4>Milestones</h4>
      <div id="milestones" className="goal-card">
        <form id={id} onSubmit={(e) => props.handleSubmit(e, msIds, props.goal)}>
        {milestones.sort((a, b) => {return a.id - b.id}).map(milestone => {
          return (
            <div id="milestone" key={milestone.id}>
              <input 
              type="checkbox" 
              id={milestone.id}  
              value={milestone.complete}
              defaultChecked={milestone.complete === true ? true : false}
              onChange={(e) => checkboxLogic(e)}/>
              <label htmlFor={milestone.id}>{milestone.content}</label><br></br>
            </div>
          )
        })}
        <br /><br />
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