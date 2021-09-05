// Displays / route
import { Link } from 'react-router-dom'
import QuoteContainer from '../QuoteContainer'
import Button from './Button'

const HomePage = () => {
  return (    
    <div className="flex justify-center items-center w-screen h-screen grid grid-rows-2 ">
      <div className="max-w-md grid gap-2">
      
        <QuoteContainer /> {/* render container with logic and render quote component*/}
        <Link to="/goals">  {/* create link for button component */}
          <Button 
            text="TRACK YOUR GOALS" 
            classes="bg-orange text-white f-title text-center p-2 w-48 h-auto text-2xl md:text-3xl shadow-2xl rounded-2xl"
          />
        </Link>
      
      </div>
    </div>
  )
}

export default HomePage
