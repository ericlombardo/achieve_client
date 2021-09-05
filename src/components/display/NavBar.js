import { NavLink } from 'react-router-dom'

const NavBar = () => { // navbar links
  return (
    <div id="navbar" className="flex justify-center items-center bg-orange f-title w-screen px-4 md:text-3xl md:h-16 shadow-xl" >

      <NavLink to="/">Home</NavLink>
      <h1> | </h1>
      <NavLink to="/goals">Goals</NavLink>
      <h1> | </h1>
      <NavLink to="/goals/new">New Goal</NavLink>
    
    </div>
  )
}

export default NavBar