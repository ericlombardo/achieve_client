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
        {/* bg-img bg-center bg-repeat-y bg-cover w-screen h-auto this works for form resize */}
          <Route exact path="/">
            <div id="home" className="bg-img bg-cover bg-center bg-no-repeat w-screen min-h-screen">
              <HomePage />
            </div>
          </Route>

          <Route exact path="/goals/new">
            <div id="home" className="bg-img bg-center bg-repeat-y bg-cover w-screen h-auto">
                <NavBar />
                <NewGoalPage />
            </div>
          </Route>

          <Route exact path="/goals"> 
            <div id="home" className="bg-img bg-center bg-repeat-y bg-cover w-screen h-auto">
              <NavBar />
              <GoalsPage />
            </div>
          </Route>
      </Router>
    </div>
  )
}

export default App