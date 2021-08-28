import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="navbar" className="navbar center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/goals/new">New Goal</NavLink>
      <NavLink to="/activitylog">Activity Log</NavLink>
    </div>
  )
}

export default NavBar