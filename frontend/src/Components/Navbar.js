import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", borderBottom: "2px solid #ddd" }}>
        <a href="#dashboard">Dashboard</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
        <Link to={"/profile"}>Profile</Link>
    </nav>
  )
}

export default Navbar