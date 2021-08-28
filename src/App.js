import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

// import files to accessing
import Home from './components/Home'
import GoalsNew from './components/GoalsNew'
import ActivityLog from './components/ActivityLog'

class App extends Component {
  render() {
    return (
      <Router> {/* renders router component to handle different routes */}
        <div id="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/goals/new">New Goal</NavLink>
          <NavLink to="/activitylog">Activity Log</NavLink>
        </div>
        <div id="routes">
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/goals/new">
            <GoalsNew />
          </Route>

          <Route exact path="/activitylog"> 
            <ActivityLog />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App