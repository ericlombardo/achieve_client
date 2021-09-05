import { BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './components/display/HomePage'
import NewGoalPage from './components/display/NewGoalPage'
import GoalsPage from './components/display/GoalsPage'
import NavBar from './components/display/NavBar'

const App = () => { // uses Router to direct routes to Home, Goals, New Goal
  return (
    <div className="container">
      <Router> {/* renders router component to handle different routes */}
          {/* define what components to render based on route paths */}
          <div id="home" className="bg-img bg-cover bg-center bg-no-repeat w-screen min-h-screen">
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route exact path="/goals/new">
                <NavBar />
                <NewGoalPage />
            </Route>

            <Route exact path="/goals"> 
              <NavBar />
              <GoalsPage />
            </Route>
          </div>
      </Router>
    </div>
  )
}

export default App