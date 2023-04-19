import './App.css'
import Navbar from './components/Navbar'
import './components/Navbar.css'
import logo from './components/logo.png'
import { Product } from './pages/product'
import { Applications } from './pages/applications'
import Home from './pages/home'
import ReachOut from './pages/reachout'
import AboutUs from './pages/aboutus'

import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet }
    from 'react-router-dom';
import React from "react";

const links = [
    { title: 'Home', url: '/' },
    { title: 'Product', url: '/product' },
    { title: 'Applications', url: '/applications' },
    { title: 'About Us', url: '/aboutus' },
    { title: 'Reach Out', url: '/reachout'},
];

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<>
    <Navbar logo={logo} links={links}/>
    <Outlet />
  </>}>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/applications" element={<Applications />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/reachout" element={<ReachOut />} />
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
