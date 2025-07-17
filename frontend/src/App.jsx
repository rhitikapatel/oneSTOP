import React from 'react'
import Home from './home/home'
import Course from './components/course'    
import { Route, Routes } from "react-router-dom"                
export default function App() {
  return (
    <>
    {/*<Home/>
    <Course/>*/}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
    

    </Routes>
    </>
  )
}
