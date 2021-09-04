import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './display/Button'
import { CreateGoal } from '../actions/goalActions'


const StartGoal = () => {

  // set goal state and then have that be an object with everything
  // fill object in with object.key = name
  // handleChange => goal[e.target.dataset.]

  //setGoal({...goal, milestone: copyMilestone})
  const [show, setShow] = useState(null)  // tells when to show days
  const [title, setTitle] = useState('') // assign form inputs for controlled form
  const [dayCount, setDayCount] = useState(null) // allows to calc days for goal
  const [goalVerb, setGoalVerb] = useState('')
  const [goalNumber, setGoalNumber] = useState('')
  const [goalUnit, setGoalUnit] = useState('')
  const [durationEnd, setDurationEnd] = useState(null)
  const [why, setWhy] = useState('to better myself.')
  const [milestone, setMilestone] = useState(new Array(8).fill(''))

  const dispatch = useDispatch()

  const handleDateCalc = (e) => {  // calculate difference in days to display
    const goalDate = new Date(e.target.value)
    const today = new Date()
    const difInMilli = Math.abs(goalDate - today)
    const difInDays = Math.ceil(difInMilli / (1000 * 60 * 60 * 24))

    setDayCount(difInDays)
    setShow('showDays')
  }

  const handleMilestones = (e) => {
    const copyMilestone = [ ...milestone ]
    copyMilestone[e.target.dataset.key] = e.target.value

    setMilestone(copyMilestone)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    debugger
    return dispatch(CreateGoal({title, why, goalVerb, goalNumber, goalUnit, milestone}))
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>  
        <div className="mx-auto p-6 border-2 f-title text-3xl border-black w-3/4 h-auto bg-orange rounded-xl shadow-2xl transform -skew-x-12 max-w-6xl md:grid md:grid-cols-2"> 
          <div className="text-center form">
            <h1>SELECT FINISH DATE</h1>
            <input type="date" onChange={handleDateCalc} />
            
            {
            show === null ? 
              <h1>I will have</h1> 
            
            : show === 'showDays' ?
                <h1>In {dayCount} Days, I will have</h1>
            
            : null
            }
            
            <input type='text' onChange={(e) => {
              setGoalVerb(e.target.value)
              setTitle(`I will ${goalVerb} ${goalNumber} ${goalUnit} to ${why}`)
            }} placeholder="read" />
            <input type='text' onChange={(e) => {
              setGoalNumber(e.target.value)
              setTitle(`I will ${goalVerb} ${goalNumber} ${goalUnit} to ${why}`)
            }} placeholder="5" />
            <input type='text' onChange={(e) => {
              setGoalUnit(e.target.value)
              setTitle(`I will ${goalVerb} ${goalNumber} ${goalUnit} to ${why}`)
            }} placeholder="books" />
            <h1>It's important to know your why:</h1>
            <textarea onChange={(e) => {
              setWhy(e.target.value)
              setTitle(`I will ${goalVerb} ${goalNumber} ${goalUnit} to ${why}`)
            }} rows="5" cols="20"></textarea>
          </div>
          <div className="text-center form">
            <h1>Set some milestones to celebrate along the way</h1>
            <input data-key={0} onChange={(e) => handleMilestones(e)} type='text' placeholder="Make list of books" />
            <input data-key={1} onChange={(e) => handleMilestones(e)} type='text' placeholder="Buy or checkout books" />
            <input data-key={2} onChange={(e) => handleMilestones(e)} type='text' placeholder="Read 1st Book" />
            <input data-key={3} onChange={(e) => handleMilestones(e)} type='text' placeholder="Read 2nd Book" />
            <input data-key={4} onChange={(e) => handleMilestones(e)} type='text' placeholder="Read 3rd Book" />
            <input data-key={5} onChange={(e) => handleMilestones(e)} type='text' placeholder="Read 4th Book" />
            <input data-key={6} onChange={(e) => handleMilestones(e)} type='text' placeholder="Read 5th Book" />
            <input data-key={7} onChange={(e) => handleMilestones(e)} type='text' placeholder="Reflect on Books" />

            <div className="grid grid-cols-2">
              <Button text="Start Tracking" classes="transform transition-all hover:scale-110 bg-green border-2 hover:text-white border-black text-black font-bold p-2 rounded-2xl w-48 h-auto text-center shadow-2xl f-body"/>
              <Button text="Cancel Goal" classes="transform transition-all hover:scale-110 bg-green border-2 hover:text-white border-black text-black font-bold p-2 rounded-2xl w-48 h-auto text-center shadow-2xl f-body"/>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default StartGoal

// found logic for calculating difference of dates on stack overflow
// https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript