import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ContactDetails from './ContactDetails'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <ContactDetails/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
