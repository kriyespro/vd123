import React from 'react'

const TopNav = () => {
  return (
    <>
    <header class="top-header th-2 top-header-bg">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-7">
                <div class="list-inline">
                    <a href="tel:+917383018982"><i class="fa fa-phone"></i>+917383018982</a>
                    <a href="tel:fastdealproperties@gmail.com"><i class="fa fa-envelope"></i>fastdealproperties@gmail.com</a>
                    <a href="tel:fastdealproperties@gmail.c"><i class="fa fa-clock-o"></i>Mon - Sun: 8:00am - 6:00pm</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-5">
                <ul class="top-social-media pull-right">
                    <li>
                        <a href="login.html" class="sign-in"><i class="fa fa-sign-in"></i> Login</a>
                    </li>
                    <li>
                        <a href="signup.html" class="sign-in"><i class="fa fa-user"></i> Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>

    </>
  )
}
export default TopNav