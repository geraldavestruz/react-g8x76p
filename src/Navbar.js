import React from 'react'
import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Brand</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navb collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Docs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Examples</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Themes</a>
            </li><li className="nav-item">
              <a className="nav-link" href="#">Icons</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
