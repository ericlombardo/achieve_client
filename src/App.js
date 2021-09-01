import { BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './components/HomePage'
import NewGoalPage from './components/NewGoalPage'
import ActivityLogPage from './components/ActivityLogPage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router> {/* renders router component to handle different routes */}
      
      {/* define what components to render based on route paths */}
      <NavBar />
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/goals/new">
        <NewGoalPage />
      </Route>

      <Route exact path="/activitylog"> 
        <ActivityLogPage />
      </Route>
    </Router>
  )
}

export default App