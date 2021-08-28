import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import Home from './components/Home'
import GoalsNew from './components/GoalsNew'
import ActivityLog from './components/ActivityLog'

const App = () => {
  return (
    <Router> {/* renders router component to handle different routes */}
      
      {/* render NavLink components for each route needed */}
      <div id="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/goals/new">New Goal</NavLink>
        <NavLink to="/activitylog">Activity Log</NavLink>
      </div>
      
      {/* define what components to render based on route paths */}
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

export default App