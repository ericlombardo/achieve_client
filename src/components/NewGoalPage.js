// displays goals/new route
import NewGoalForm from './NewGoalForm'

const NewGoalPage = () => {

  const handleStart = (e) => { // handle start something button click
    e.preventDefualt()
  }

  const handleQuit = (e) => {  // handle quit something button click
    e.preventDefualt()
    debugger
  }
  return (
    <div id="new-goal">
      <NewGoalForm handleStart={handleStart} handleQuit={handleQuit}/>
    </div>
  ) 
}

export default NewGoalPage