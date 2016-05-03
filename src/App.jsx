import React from 'react'

import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import SideBar from './components/layout/SideBar.jsx'

export default function App({ children }) {
  return (
      <div class="wrapper">
        <Header />
        <SideBar />
        {children}
        <Footer />
      </div>
  )
}
