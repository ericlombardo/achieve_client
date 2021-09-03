import Button from './display/Button'
import StartGoal from './StartGoal'
import QuitGoal from './QuitGoal'

import { useState } from 'react'

const NewGoalForm = ({handleStart, handleQuit}) => {
  
  const [show, setShow] = useState('start')

  return (
    <div>
      {show === "start" ? (
        <>
        <div>
          <Button text="Start Something" handleClick={() => setShow('startGoal')} classes="ransform transition-all hover:scale-125 bg-orange text-white font-bold p-2 rounded-2xl w-48 h-auto text-center shadow-2xl f-body" />
        </div>
        <div>
          <Button text="Quit Something" handleClick={() => setShow('quitGoal')}classes="ransform transition-all hover:scale-125 bg-orange text-white font-bold p-2 rounded-2xl w-48 h-auto text-center shadow-2xl f-body" />
        </div>
        </>) : show === "startGoal" ? (
            < StartGoal />
        ) : show === "quitGoal" ? (
          < QuitGoal />
        ) : null
      }
      
  
    </div>
  )
}  
      

      
{/* 
      <div className="relative grid-rows-2">
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