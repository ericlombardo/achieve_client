// Displays / route
import Quote from './Quote'
import NavBar from './NavBar'
import GoalContainer from './GoalContainer'
import ActivityTracker from './ActivityTracker'

const Home = () => {
  return (
    <div id="home">
      <Quote />
      <ActivityTracker />
      <NavBar />
      <GoalContainer />
    </div>
  )
}

export default Home
