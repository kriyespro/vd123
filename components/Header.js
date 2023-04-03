import React from 'react'

const Header = () => {
  return (
    <>
       <header className="main-header sticky-header header-with-top">
              <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light">
                      <a className="navbar-brand company-logo" href="index.html"> </a>
                         <img src='img/logos/logo.png'alt="logo" width="200" height="50" />
                          
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="fa fa-bars"></span>
                      </button>
                      <div className="navbar-collapse collapse w-100" id="navbar">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Home
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="cars.html">
                                      Properties
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="/carhouse/about.html">
                                      About us
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="services.html">
                                      Services
                                  </a>
                              </li>


                              <li className="nav-item dropdown">
                                  <a className="nav-link" href="contact.html">Contact</a>
                              </li>
                              <li className="nav-item dropdown m-hide">
                                  <a href="#full-page-search" className="nav-link h-icon">
                                      <i className="fa fa-search"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </header>
          </>

  )
}

export default Header