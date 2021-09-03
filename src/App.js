import { BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './components/HomePage'
import NewGoalPage from './components/NewGoalPage'
import ActivityLogPage from './components/ActivityLogPage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className="container">
      <Router> {/* renders router component to handle different routes */}
          {/* define what components to render based on route paths */}
          <Route exact path="/">
            <div id="home" className="bg-img bg-cover bg-center bg-no-repeat w-screen min-h-screen">
              <HomePage />
            </div>
          </Route>

          <Route exact path="/goals/new">
            <div id="home" className="bg-img bg-cover bg-center bg-no-repeat w-screen min-h-screen">
              <NavBar />
              <NewGoalPage />
            </div>
          </Route>

          <Route exact path="/activitylog"> 
            <NavBar />
            <ActivityLogPage />
          </Route>
      </Router>
    </div>
  )
}

export default App