// Displays / route
import Quote from './Quote'
import GoalContainer from './GoalContainer'
import ActivityTracker from './ActivityTracker'

const Home = () => {
  return (
    <div id="home">
      <Quote />
      <ActivityTracker />
      <GoalContainer />
    </div>
  )
}

export default Home
