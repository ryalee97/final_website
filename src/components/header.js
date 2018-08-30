import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="navi">
    <ul>
      <li>
        <Link to="#about">About</Link>
      </li>
      <li>
        <Link to="#projects">Projects</Link>
      </li>
      <li>
        <Link to="#skills">Skills</Link>
      </li>
      <li>
        <Link to="#services">Events</Link>
      </li>
      <li>
        <Link to="#footer">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
