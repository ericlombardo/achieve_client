import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import GoalsNew from './components/GoalsNew'
import ActivityLog from './components/ActivityLog'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router> {/* renders router component to handle different routes */}
      
      {/* define what components to render based on route paths */}
      <>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/goals/new">
          <GoalsNew />
        </Route>

        <Route exact path="/activitylog"> 
          <ActivityLog />
        </Route>
      </>
    </Router>
  )
}

export default App