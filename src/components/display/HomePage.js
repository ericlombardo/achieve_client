// Displays / route
import { Link } from 'react-router-dom'
import QuoteContainer from '../QuoteContainer'
import Button from './Button'

const HomePage = () => {
  return (    
    <div className=" grid grid-rows-2 gap-2 max-w-sm pt-44 ml-80">
      <div>
      
        <QuoteContainer /> {/* render container with logic and render quote component*/}
      
      </div>
      <div className="mx-auto">

        <Link to="/goals">  {/* create link for button component */}
          <Button 
            text="TRACK YOUR GOALS" 
            classes="bg-orange text-white f-title text-center p-2 w-48 h-auto shadow-2xl rounded-2xl"
          />
        </Link>
        
      </div>
    </div>
  )
}

export default HomePage
