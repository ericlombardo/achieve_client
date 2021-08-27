import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

// import files to accessing
import Home from './components/Home'
import GoalsNew from './components/GoalsNew'
import ActivityLog from './components/ActivityLog'

class App extends Component {
  render() {
    return (
      <Router> {/* invokes router to handle different routes */}
        <div>
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