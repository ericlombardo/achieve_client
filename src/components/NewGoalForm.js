

const NewGoalForm = ({handleStart, handleQuit}) => {
  
  return (
    <div >
      <form id="new-goal-form">

        <div id="form-title">
          <h2>You are more likely to achive your goals</h2>
          <h2>if you are S.M.A.R.T about it!!</h2>

          <p>S = Specific</p>
          <p>M = Measureable</p>
          <p>A = Attainable</p>
          <p>R = Realistic</p>
          <p>T = Time-Based</p><br/>
        </div>

        <div id="start-form">
          <h3>Let's Start Simple. What are you looking to do?</h3>
            <div id="set-goal">
              <h3>
                In 
                
                <input placeholder="number" />
                
                <select name="duration">
                  <option disabled selected> Duration</option>
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
                
                I will have quit

                <input placeholder="verb" />
              </h3>
            </div>
          <button >Start Something</button>
          <button >Quite Something</button>

        </div>

        <div id="set-milestones">

        </div>

        <div id="submit">
          <button type="submit">Start Tracking Goal</button>
        </div>

      </form>
    </div>
  )
}

export default NewGoalForm