import React from 'react'

const GoalCard = (props) => {
  const {title, why, durationNumber, durationUnit, durationEnd, goalVerb, goalNumber, goalUnit, timeSpent} = props.goal
  return (
    <>
      <h1>{title}</h1>
      <p>{why}</p>
      <p>{durationNumber}</p>
      <p>{durationUnit}</p>
      <p>{durationEnd}</p>
      <p>{goalVerb}</p>
      <p>{goalNumber}</p>
      <p>{goalUnit}</p>
      <p>{timeSpent}</p>
    </>
  )
}

export default GoalCard
