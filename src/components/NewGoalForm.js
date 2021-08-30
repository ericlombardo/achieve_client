

const NewGoalForm = ({handleStart, handleQuit}) => {
  
  return (
    <form id="new-goal-form" onSubmit={console.log('bingo')}>
      <div id="step-1">
        <h3>Let's Start Simple. What are you looking to do?</h3>
        <button onClick={handleStart} value="start">Start Something</button>
        <button onClick={handleQuit} value="quit">Quit Something</button>
      </div>
      <div id="step-2-start">

      </div>
      <div id="set-2-quite">

      </div><br/><br/>
      <button type="submit">Start Tracking Goal</button>

    </form>
  )
}

export default NewGoalForm