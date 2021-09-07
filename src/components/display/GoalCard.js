import Button from './Button'

const GoalCard = (props) => {
  
  const {id, title, milestones, durationEnd} = props.goal

  const getDate = () => {  // calculate difference in days to display
    const goalDate = new Date(durationEnd)
    const today = new Date()
    const difInMilli = Math.abs(goalDate - today)
    return goalDate > today ? Math.ceil(difInMilli / (1000 * 60 * 60 * 24)) : 0
  }
  
  return (
    <div className="m-4 text-xl text-center">  
      <h2 className="text-3xl f-title">In {getDate()} Days</h2>
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
          <br />
          
          <Button 
            text="Update Milestones"
            classes="bg-orange text-white text-2xl p-2 w-48 h-auto rounded-2xl shadow-2xl" 
            handleClick={() => alert('Your Milestones Have Been Updated!')}
          />

        </form>
      </div>
    </div> 
  )
}

export default GoalCard