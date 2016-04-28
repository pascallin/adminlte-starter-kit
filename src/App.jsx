import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from './redux/actions'

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
