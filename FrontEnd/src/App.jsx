import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import SignUp from './Components/SignUp'
import Contact from './Contact/Contact'

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Course' element={<Courses/>}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
