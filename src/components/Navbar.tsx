import React from 'react'
import './Navbar.css'

interface NavbarProps {
    logo: string
    links: {
      title: string
      url: string
      id?: string
    }[]
}

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <ul className="navbar-list">
                {links.map((link) => (
                    <li key={link.title}>
                        <a className="navbar-link" id={link.id} href={link.url}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar