import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
    <nav>
    <div className="topnav">
    <Link  to="/">VoteToken</Link>

  <Link className="active" to="/">Home</Link>
  <Link to="/">Add Coin</Link>
  <Link to="/votecoin">Vote Coin</Link>
  <a href="/">Search Coin</a>
  <div className="topnav-right">
    <a href="/">Log In</a>
    <a href="/">Sign Up</a>
  </div>
</div>
</nav>
   
</>
  )
}
