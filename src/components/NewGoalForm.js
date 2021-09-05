import Button from './display/Button'
import StartGoal from './StartGoal'
import QuitGoal from './QuitGoal'

import { useState } from 'react'

const NewGoalForm = () => {
  
  const [show, setShow] = useState('start')

  return (
    <div className="divBox flex items-center justify-center w-screen h-screen">
      {show === "start" ? (
        <div id="start-display" className="">
          <Button text="Start Something" handleClick={() => setShow('startGoal')} classes="transform border-2 border-black transition-all hover:scale-110 bg-orange text-black font-bold p-2 rounded-2xl w-48 h-auto lg:w-96 md:text-3xl text-center shadow-2xl f-body m-6" />
          <Button text="Quit Something" handleClick={() => setShow('quitGoal')}classes="transform border-2 border-black transition-all hover:scale-110 bg-orange text-black font-bold p-2 rounded-2xl w-48 h-auto lg:w-96 md:text-3xl text-center shadow-2xl f-body" />
        </div>
      ) : show === "startGoal" ? (
            < StartGoal />
      ) : show === "quitGoal" ? (
          < QuitGoal />
        ) : null
      }
      
  
    </div>
  )
}  

export default NewGoalForm