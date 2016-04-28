import React from 'react'
import { Link, browserHistory } from 'react-router'

export default React.createClass({
  render: function() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-male"></i> <span>Counter</span> <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><Link to="/counter"><i className="fa fa-circle-o"></i> counter container</Link></li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
});
