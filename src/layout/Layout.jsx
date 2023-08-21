import React from 'react'
import Navbar from '../components/Navbar.component'
import Footer from '../components/Footer.component'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout