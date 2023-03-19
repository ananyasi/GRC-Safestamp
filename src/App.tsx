import './App.css'
import Navbar from './components/Navbar'
import './components/Navbar.css'
import logo from './components/logo.png'
import {Route, Routes} from "react-router-dom"

function App() {
  const links = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Clients', url: '/clients' },
    { title: 'Contact', url: '/contact', id: "contact"},
  ]
  
  return (
    <div className="App">
      <div>
        <Navbar logo={logo} links={links}/>
      </div>
    </div>
  )
}

export default App
