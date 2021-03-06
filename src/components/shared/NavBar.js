import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark animate__animated animate__fadeIn">
          <Link 
            className="navbar-brand" 
            to="/">Heroes React App</Link>

            <div className="navbar-collapse">
              <div className="navbar-nav">
                <NavLink 
                  activeClassName="active"
                  className="nav-item nav-link" 
                  exact
                  to="/marvel">Marvel</NavLink>

                <NavLink 
                  to="/dc"
                  exact
                  activeClassName="active"
                  className="nav-item nav-link">DC</NavLink>
              </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <NavLink 
                  to="/login"
                  exact
                  activeClassName="active"
                  className="nav-item nav-link">Logout</NavLink>
              </ul>
            </div>
        </nav>
    )
}