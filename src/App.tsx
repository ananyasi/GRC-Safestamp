import './App.css'
import Navbar from './components/Navbar'
import './components/Navbar.css'
import logo from './components/logo.png'
import { Product } from './pages/product'
import Clients from './pages/clients'
import Home from './pages/home'
import Contact from './pages/contact'
import SocialImpact from './pages/socialimpact'

import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet }
    from 'react-router-dom';
import React from "react";

const links = [
    { title: 'Home', url: '/' },
    { title: 'Product', url: '/product' },
    { title: 'Clients', url: '/clients' },
    { title: 'Social Impact', url: '/socialimpact' },
    { title: 'Contact Us', url: '/contact'},
];

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<>
    <Navbar logo={logo} links={links}/>
    <Outlet />
  </>}>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/clients" element={<Clients />} />
    <Route path="/socialimpact" element={<SocialImpact />} />
    <Route path="/contact" element={<Contact />} />
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
