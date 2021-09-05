import Button from './display/Button'
import StartGoal from './StartGoal'
import QuitGoal from './QuitGoal'

import { useState } from 'react'

const NewGoalForm = () => {
  
  const [show, setShow] = useState('start')

  return (
    <div className="divBox flex items-center justify-center w-screen h-screen">
      {show === "start" ? (
        <div id="start-display">
          <Button text="Start Something" handleClick={() => setShow('startGoal')} classes="transform transition-all hover:scale-110 bg-orange text-white font-bold p-2 rounded-2xl w-48 h-auto text-center shadow-2xl f-body" />
          <Button text="Quit Something" handleClick={() => setShow('quitGoal')}classes="transform transition-all hover:scale-110 bg-orange text-white font-bold p-2 rounded-2xl w-48 h-auto text-center shadow-2xl f-body" />
        </div>
      ) : show === "startGoal" ? (
            < StartGoal startOrQuit={show}/>
      ) : show === "quitGoal" ? (
          < QuitGoal />
        ) : null
      }
      
  
    </div>
  )
}  

export default NewGoalForm