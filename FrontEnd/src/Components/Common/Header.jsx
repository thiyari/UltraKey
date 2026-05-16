import React from 'react'
import './Common.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border">
      <div className="container">
        <Link className="navbar-brand" to="/"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quotes">Quotes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/invoices">Invoices</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/payments">Payments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tax">Tax</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emails">Emails</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pdf">PDF</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/translate">Translate</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Header
