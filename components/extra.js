


const Header = () => {
  return (
    <>
    <header className="top-header th-2 top-header-bg">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-7">
                      <div className="list-inline">
                          <a href="tel:+917383018982"><i className="fa fa-phone"></i>+917383018982</a>
                          <a href="tel:fastdealproperties@gmail.com"><i className="fa fa-envelope"></i>fastdealproperties@gmail.com</a>
                          <a href="tel:fastdealproperties@gmail.c"><i className="fa fa-clock-o"></i>Mon - Sun: 8:00am - 6:00pm</a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-5">
                      <ul className="top-social-media pull-right">
                          <li>
                              <a href="login.html" className="sign-in"><i className="fa fa-sign-in"></i> Login</a>
                          </li>
                          <li>
                              <a href="signup.html" className="sign-in"><i className="fa fa-user"></i> Register</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>
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