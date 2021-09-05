import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="navbar" className="flex justify-center items-center px-4 w-screen bg-orange md:text-3xl f-title md:h-16 shadow-xl" >

      <NavLink to="/">Home</NavLink>
      <h1> | </h1>
      <NavLink to="/goals">Goals</NavLink>
      <h1> | </h1>
      <NavLink to="/goals/new">New Goal</NavLink>
    </div>
  )
}

export default NavBar