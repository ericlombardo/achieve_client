import { BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './components/display/HomePage'
import NewGoalPage from './components/display/NewGoalPage'
import GoalsPage from './components/display/GoalsPage'
import NavBar from './components/display/NavBar'
import { Footer } from './components/display/Footer'

const App = () => { // uses Router to direct routes to Home, Goals, New Goal
  return (
    <div className="container">
      <Router> {/* renders router component to handle different Route paths */}
          
          <Route exact path="/">
            {/* set background each time to handle resizing of forms */}
            <div id="home" className="bg-img bg-cover bg-center bg-no-repeat w-screen min-h-screen">
              <HomePage />
              <Footer />
            </div>
          </Route>

          <Route exact path="/goals/new">
            <div id="home" className="bg-img bg-center bg-repeat-y bg-cover w-screen h-auto">
                <NavBar />
                <NewGoalPage />
                <Footer />
            </div>
          </Route>

          <Route exact path="/goals"> 
            <div id="home" className="bg-img bg-center bg-repeat-y bg-cover w-screen min-h-screen">
              <NavBar />
              <GoalsPage />
              <Footer />
            </div>
          </Route>
      </Router>
    </div>
  )
}

export default App