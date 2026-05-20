import React from 'react'
import './Common.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border">
      <div className="container">
        <button className="navbar-brand border" style={{border: "None", backgroundColor: "transparent"}}>
            {/*<!-- Dropdown -->*/}
            <li className="nav-item dropdown list-unstyled">
              <a className="nav-link dropdown-toggle no-arrow" href="#" role="button" data-bs-toggle="dropdown"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/client">Clients Panel</a></li>
                <li><a className="dropdown-item" href="#">Quotes Panel</a></li>
                <li><a className="dropdown-item" href="/new-invoice">Invoices Panel</a></li>
              </ul>
            </li>        
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">General</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business">Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/quotes">Quotes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/invoices">Invoices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/payments">Payments</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tax">Tax</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/emails">Emails</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/translate">Translate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pdf">PDF</a>
            </li>
          </ul>
        </div>
      </div>



    </nav>

    </div>
  )
}

export default Header
