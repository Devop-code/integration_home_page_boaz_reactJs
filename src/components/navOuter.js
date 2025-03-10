import React from 'react'

const NavOuter = () => {
  return (
    <div className="nav-outer">
    {/* Main Menu */}
    <nav className="main-menu">
      <div className="navbar-collapse show collapse clearfix">
        <ul className="navigation clearfix">
          <li>
            <a href="/">Acceuil</a>
          </li>
          <li>
            <a href="/about">A propos</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/connexion"> Connexion</a>
          </li>
          <li>
            <a href="/inscription">Inscription</a>
          </li>
        </ul>
      </div>
    </nav>
    {/* Main Menu End*/}
    {/*Mobile Navigation Toggler*/}
    <div className="mobile-nav-toggler">
      <span className="icon lnr-icon-bars" />
    </div>
  </div>
  )
}

export default NavOuter