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
            <HomePage />
          </Route>

          <Route exact path="/goals/new">
            <NavBar />
            <NewGoalPage />
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