import React from 'react'
import './Common.css'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border">
      <div className="container">
        <a className="navbar-brand" href="/"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link"  href="/">General</a>
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
              <a className="nav-link" href="/pdf">PDF</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/translate">Translate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Header
