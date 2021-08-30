import React from 'react'

const GoalCard = (props) => {
  const {title, why, durationNumber, durationUnit, durationEnd, timeSpent, milestones} = props.goal
  return (
    <>
      <h3>I will {title} in {durationNumber} {durationUnit} {why}</h3>
      <h3>{milestones.filter(ms => ms.complete === true).length} / {milestones.length} completed</h3>
      <h4>Milestones</h4>
      <div id="milestones" className="goal-card">
        {milestones.map((milestone, ind) => {
          return (
            <div id="milestone" key={milestone.id}>
              <input 
              type="checkbox" 
              id={milestone.id}  
              value={milestone.complete}
              checked={milestone.complete === true ? true : false}
              onChange={(e) => props.toggle(e)}/>
              <label htmlFor={milestone.id}>{milestone.content}</label><br></br>
            </div>
          )
        })}
      </div>
      
      <p>{durationEnd}</p>

      <p>You have spent {Math.floor(timeSpent / 60)} hours and {timeSpent % 60} minutes on this goal</p>
      
    </>
  )
}

export default GoalCard

// found method to check for pluralizing on stackoverflow
// https://stackoverflow.com/questions/27194359/javascript-pluralize-an-english-string