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

          <Button 
            text="Start Something" 
            handleClick={() => setShow('startGoal')} 
            classes="bg-orange border-2 border-black text-white text-center text-xl f-title m-6 p-2 w-48 h-auto lg:w-96 md:text-3xl rounded-2xl shadow-2xl" 
          />
          <Button 
            text="Quit Something" 
            handleClick={() => setShow('quitGoal')}
            classes="bg-orange border-2 border-black text-white text-center text-xl f-title m-6 p-2 w-48 h-auto lg:w-96 md:text-3xl rounded-2xl shadow-2xl"
          />
          
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