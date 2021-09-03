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
            < StartGoal />
      ) : show === "quitGoal" ? (
          < QuitGoal />
        ) : null
      }
      
  
    </div>
  )
}  
      

      
{/* 
      <div className="relative">
        <div className="pl-20 absolute rotate-20 trap bg-green rounded-xl shadow-2xl ">
        </div>
        <div className="pl-20absolute trap bg-orange rounded-xl shadow-2xl ">
          <h1 className="p-2">By:</h1>
          <input type="date" />
        </div>
      </div>


      <div className="relative flex">
        <div className="absolute rotate-20 trap bg-green rounded-xl shadow-2xl ">
        </div>
        <div className="absolute trap bg-orange rounded-xl shadow-2xl ">
          <h1>I will have</h1>
          <input type="text" placeholder="verb" />
          <input type="text" placeholder="number" />
          <input type="text" placeholder="unit" />

        </div>
      </div> */}
    // </div>
//   )
// }

export default NewGoalForm