import React from 'react'
import { Link, browserHistory } from 'react-router'

export default React.createClass({
  render: function() {
    return (
      <header className="main-header">
        <a href="/" className="logo">
          <span className="logo-mini"><b>S</b></span>
          <span className="logo-lg"><b>S</b>pider</span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
          <ul className="nav navbar-nav">
            <li><Link to="/counter">Counter</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
});
