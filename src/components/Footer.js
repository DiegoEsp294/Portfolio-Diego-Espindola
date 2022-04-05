import React from "react"
// import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <div>
            <h1>Contact me</h1>
          </div>
          <a className="email-link" style={{marginTop: '20px'}}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
