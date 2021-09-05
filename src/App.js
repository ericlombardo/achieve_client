import { BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './components/HomePage'
import NewGoalPage from './components/NewGoalPage'
import GoalContainer from './components/GoalContainer'
import NavBar from './components/NavBar'

const App = () => {
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
              <GoalContainer />
            </Route>
          </div>
      </Router>
    </div>
  )
}

export default App