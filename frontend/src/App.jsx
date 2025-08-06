import React from 'react'
import Home from './home/home'
import Courses from './courses/courses'   
import Signup from './components/signup'
import Contact from './components/contact'
import Technews from './components/technews'
import { Route, Routes } from "react-router-dom"                
export default function App() {
  return (
    <>
    
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/technews" element={<Technews/>}/>
  
    </Routes>
    </div>
    
    </>
  )
}
