import React from 'react'
import './Navbar.css'

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
              <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <ul className="navbar-list">
                {links_left.map((link) => (
                    <li key={link.title}>
                        <a className="navbar-link" id={link.id} href={link.url}>{link.title}</a>
                    </li>
                ))}
            </ul>
            <ul className="navbar-list">
                {links_right.map((link) => (
                    <li key={link.title}>
                        <a className="navbar-link" id={link.id} href={link.url}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar