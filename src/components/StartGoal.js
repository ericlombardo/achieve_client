import { useState } from 'react'

const StartGoal = () => {

  const [show, setShow] = useState(null)  // tells when to show days
  const [title, setTitle] = useState('I will have') // assign form inputs for controlled form
  const [dayCount, setDayCount] = useState(null) // allows to calc days for goal
  const [goalVerb, setGoalVerb] = useState('')
  const [goalNumber, setGoalNumber] = useState('')
  const [goalUnit, setGoalUnit] = useState('')
  const [durationEnd, setDurationEnd] = useState(null)
  const [why, setWhy] = useState('to better myself.')

  const handleDateCalc = (e) => {  // calculate difference in days to display
    const goalDate = new Date(e.target.value)
    const today = new Date()
    const difInMilli = Math.abs(goalDate - today)
    const difInDays = Math.ceil(difInMilli / (1000 * 60 * 60 * 24))

    setDayCount(difInDays)
    setShow('showDays')
  }

  return (
    <div className="relative">
        <div className="mx-auto p-6 border-2 f-title text-3xl border-black w-3/4 h-auto bg-orange rounded-xl shadow-2xl transform -skew-x-12 w-max-11/12 h-max-11/12 md:grid md:grid-cols-2"> 
          <div className="text-center">
            <h1>SELECT FINISH DATE</h1>
            <input type="date" onChange={handleDateCalc} />
            
            {
            show === null ? 
              <h1>I will have</h1> 
            
            : show === 'showDays' ?
                <h1>In {dayCount} Days, I will have</h1>
            
            : null
            }
            
            <input type='text' placeholder="read" />
            <input type='text' placeholder="5" />
            <input type='text' placeholder="books" />
            <h1>It's important to know your why:</h1>
            <textarea rows="5" cols="20"></textarea>
          </div>
          <div className="text-center">
            <h1>Set some milestones to celebrate along the way</h1>
            <input type='text' placeholder="Make list of books" />
            <input type='text' placeholder="Buy or checkout books" />
            <input type='text' placeholder="Read 1st Book" />
            <input type='text' placeholder="Read 2nd Book" />
            <input type='text' placeholder="Read 3rd Book" />
            <input type='text' placeholder="Read 4th Book" />
            <input type='text' placeholder="Read 5th Book" />
          </div>
        </div>
      </div>
  )
}

export default StartGoal

// found logic for calculating difference of dates on stack overflow
// https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript