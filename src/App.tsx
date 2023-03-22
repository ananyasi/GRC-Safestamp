import './App.css'
import Navbar from './components/Navbar'
import './components/Navbar.css'
import logo from './components/logo.png'
import About from './pages/about'
import Clients from './pages/clients'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet }
    from 'react-router-dom';
import React from "react";

const links = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Clients', url: '/clients' },
    { title: 'Contact', url: '/contact', id: "contact"},
];

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<>
    <Navbar logo={logo} links={links}/>
    <Outlet />
  </>}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/clients" element={<Clients />} />
  </Route>
));

function App() {
  return (
      <div className="App">
          <RouterProvider router={router} />
      </div>    
  )
}

export default App
