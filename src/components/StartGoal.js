import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from './display/Button'
import { CreateGoal } from '../actions/goalActions'


const StartGoal = () => {
  const history = useHistory()
  const [show, setShow] = useState(null)  // tells when to show days
  const [goal, setGoal] = useState({  // sets all attributes needed for goal
    title: '',
    goalVerb: '',
    goalNumber: null,
    goalUnit: '',
    durationEnd: '',
    dayCount: null,
    why: 'improve myself',
    newMilestones: new Array(8).fill(''),
  })

  const dispatch = useDispatch() // sets up dispatch with hook

  const handleDateCalc = (e) => {  // calculate difference in days to display
    const goalDate = new Date(e.target.value)
    const today = new Date()
    const difInMilli = Math.abs(goalDate - today)
    const difInDays = Math.ceil(difInMilli / (1000 * 60 * 60 * 24))

    // set durationEnd and dayCount based on difInDays
    setGoal({...goal, durationEnd: e.target.value, dayCount: difInDays})
    setShow('showDays')   // sets flag to show calculated days
  }

  const handleMilestones = (e) => {
    const copyMilestones = [...goal.newMilestones] // makes a copy of milestones
    copyMilestones[e.target.dataset.key] = e.target.value // changes specific milestones based on input
    setGoal({ ...goal, newMilestones: copyMilestones })  // updates goal state for milestones
  }

  const handleChange = (e) => {
    // updates goal state for id given with value
    setGoal({...goal, [e.target.dataset.id]: e.target.value }) 
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(CreateGoal(goal)) // sends dispatch with goal object
    alert('Your Goal Has Been Created')
    history.push('/goals') // useHistory hook to redirect after form submission
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>  
        <div className="mx-auto p-6 border-2 f-title text-3xl border-black w-3/4 h-auto bg-orange rounded-xl shadow-2xl transform -skew-x-12 max-w-6xl md:grid md:grid-cols-2"> 
          <div className="text-center form">
            
            <h1>SELECT FINISH DATE</h1>      {/* date selection input*/}
            <input type="date" onChange={handleDateCalc} required />
            
                        {/* show days or not logic*/}
            {                   
            show === null ? 
              <h1>I will have</h1> 
            
            : show === 'showDays' ?
                <h1>In {goal.dayCount} Days, I will have</h1>
            
            : null
            }
            
            {/* goal declaration inputs*/}
            <input data-id="goalVerb" type='text' onChange={(e) => handleChange(e)} placeholder="read  (verb)  " required/>
            <input data-id="goalNumber" type='text' onChange={(e) => handleChange(e)} placeholder="5  (number) " required/>
            <input data-id="goalUnit" type='text' onChange={(e) => handleChange(e)} placeholder="books  (unit) " required/>
           
            <h1>Know your why:</h1>      {/* Why input*/}
            <h1>I want to achieve this in order to:</h1>
            <textarea data-id="why" onChange={(e) => handleChange(e)} rows="5" cols="20" placeholder="continue learning new concepts"required></textarea>
          </div>


          <div className="text-center form">           {/* milestones inputes*/}
            <h1>Set some milestones to celebrate along the way</h1>
            <input data-key={0} onChange={(e) => handleMilestones(e)} type='text' placeholder="Make list of books" />
            <input data-key={1} onChange={(e) => handleMilestones(e)} type='text' placeholder="Find books" />
            <input data-key={2} onChange={(e) => handleMilestones(e)} type='text' placeholder="Read 1st Book" />
            <input data-key={3} onChange={(e) => handleMilestones(e)} type='text'  />
            <input data-key={4} onChange={(e) => handleMilestones(e)} type='text'  />
            <input data-key={5} onChange={(e) => handleMilestones(e)} type='text'  />
            <input data-key={6} onChange={(e) => handleMilestones(e)} type='text'  />
            <input data-key={7} onChange={(e) => handleMilestones(e)} type='text'  />

            <div className="grid grid-cols-2"> {/* track and close button */}
              
                <Button 
                  text="Start Tracking" 
                  classes="bg-green border-2 border-black f-title text-black hover:text-white p-2 w-48 h-auto text-center shadow-2xl rounded-2xl"
                />              
              <button text="Cancel Goal" onClick={() => window.location.reload(true)} className="transform transition-all hover:scale-110 bg-green border-2 border-black f-title text-black hover:text-white p-2 w-48 h-auto text-center shadow-2xl rounded-2xl">
                Cancel Goal
              </button>

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