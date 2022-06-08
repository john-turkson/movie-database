import React from 'react'
import Home  from "./pages/Home/Home";

import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App;