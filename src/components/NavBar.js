import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="navbar" className="navbar center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/goals">Goals</NavLink>
    </div>
  )
}

export default NavBar