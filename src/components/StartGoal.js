import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './display/Button'
import { CreateGoal } from '../actions/goalActions'


const StartGoal = () => {

  const [show, setShow] = useState(null)  // tells when to show days
  const [goal, setGoal] = useState({
    title: '',
    goalVerb: '',
    goalNumber: null,
    goalUnit: '',
    durationEnd: '',
    dayCount: null,
    why: 'improve myself',
    milestones: new Array(8).fill(''),
  })

  const dispatch = useDispatch()

  const handleDateCalc = (e) => {  // calculate difference in days to display
    const goalDate = new Date(e.target.value)
    const today = new Date()
    const difInMilli = Math.abs(goalDate - today)
    const difInDays = Math.ceil(difInMilli / (1000 * 60 * 60 * 24))

    setGoal({...goal, durationEnd: e.target.value, dayCount: difInDays})
    setShow('showDays')
  }

  const handleMilestones = (e) => {
    const copyMilestones = [...goal.milestones]
    copyMilestones[e.target.dataset.key] = e.target.value
    setGoal({ ...goal, milestones: copyMilestones })
  }

  const handleChange = (e) => {
    setGoal({...goal, [e.target.dataset.id]: e.target.value })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    return dispatch(CreateGoal(goal))
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
                <h1>In {goal.dayCount} Days, I will have</h1>
            
            : null
            }
            
            <input data-id="goalVerb" type='text' onChange={(e) => handleChange(e)} placeholder="read" />
            <input data-id="goalNumber" type='text' onChange={(e) => handleChange(e)} placeholder="5" />
            <input data-id="goalUnit" type='text' onChange={(e) => handleChange(e)} placeholder="books" />
            <h1>Know your why:</h1>
            <h1>I want to achieve this in order to:</h1>
            <textarea data-id="why" onChange={(e) => handleChange(e)} rows="5" cols="20"></textarea>
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