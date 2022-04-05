import React from "react"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <a
            role="button"
            href="#home"
            className="name"
            style={{color:'white', fontSize:'24px', paddingRight: '10px'}}
            tabIndex={0}
          >
            Portfolio
          </a>
          <div className="links-wrapper">
            <a style={{color:'white', fontSize:'17px', paddingRight: '10px'}} href="#work">Work</a>
            <a style={{color:'white', fontSize:'17px', paddingRight: '10px'}} href="#about">About</a>
            <a style={{color:'white', fontSize:'17px', paddingRight: '10px'}} href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
