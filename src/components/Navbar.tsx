import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

interface NavbarProps {
    logo: string
    links_left: {
      title: string
      url: string
      id?: string
    }[]
    links_right: {
        title: string
        url: string
        id?: string
      }[]
}

const Navbar: React.FC<NavbarProps> = ({ links_left, logo, links_right }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
              <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className="navbar-list">
                {links_left.map((link) => (
                    <li key={link.title}>
                        <Link className="navbar-link" id={link.id} to={link.url}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <ul className="navbar-list">
                {links_right.map((link) => (
                    <li key={link.title}>
                        <Link className="navbar-link" id={link.id} to={link.url}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar