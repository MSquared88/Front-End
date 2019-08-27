import React from "react"
import { Menu } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = props => {

  console.log(props.location.pathname)

  return (
    <Menu>
      <Menu.Item header>Party Planner</Menu.Item>
      <NavLink to={`/dashboard/${localStorage.getItem('user_id')}`}>
        <Menu.Item name="My Events"/>
      </NavLink>
      <Link to="/login">
        <Menu.Item        
            onClick={()=>{
            localStorage.removeItem("token");
          }}
          name={props.location.pathname === "/login" || props.location.pathname === "/register" ? "Login" : "Logout"}   
        />
      </Link>
    </Menu>
  )
}

export default NavBar