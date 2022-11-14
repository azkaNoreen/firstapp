import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
    <nav>
    <div className="topnav">
    <Link  to="/">VoteToken</Link>

  <Link className="active" to="/">Home</Link>
  <Link to="/addcoin">Add Coin</Link>
  <Link to="/votecoin">Vote Coin</Link>
  <Link to="/searchcoin">Search Coin</Link>
  <div className="topnav-right">
    <a href="/">Log In</a>
    <a href="/">Sign Up</a>
  </div>
</div>
</nav>
   
</>
  )
}
