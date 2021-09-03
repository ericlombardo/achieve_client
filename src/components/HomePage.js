// Displays / route
import { NavLink } from 'react-router-dom'
import QuoteContainer from './QuoteContainer'
import Button from '../components/display/Button'

const HomePage = () => {
  return (    
    <div className="flex grid grid-rows-2 gap-2 max-w-sm pt-14 ml-14">
      <div className="flex-shrink">
      
        <QuoteContainer /> {/* render container with logic and render quote component*/}
      
      </div>
      <div className="flex-shrink mx-auto">
        <NavLink to="/goals/new">  {/* create navlink to route button */}
          <Button 
            text="TRACK YOUR GOALS" 
            classes="transform transition-all hover:scale-125
            bg-orange text-white font-bold 
            p-2 rounded-2xl w-48 h-auto
            text-center shadow-2xl f-body"
          />
        </NavLink>
      </div>
    </div>
  )
}

export default HomePage
