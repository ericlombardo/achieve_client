import GoalCard from './GoalCard'
// connect to store
// get all goals
// map through each and display GoalCard

const GoalContainer = () => {
  return (
    <div id="goal-container" className="border center">
      {/* get all goals from global store and map each one to GoalCard */}
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <GoalCard />
    </div>
  )
}
export default GoalContainer