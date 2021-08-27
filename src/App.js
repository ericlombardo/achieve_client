import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import GoalsNew from './components/GoalsNew'
import ActivityLog from './components/ActivityLog'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/goals/new">
            <GoalsNew />
          </Route>
          {/* path may need switched to activity_log */}
          <Route exact path="/activitylog"> 
            <ActivityLog />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App