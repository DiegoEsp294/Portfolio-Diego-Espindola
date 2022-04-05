import React from "react"
// import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <div>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </div>
          <div>
            <div className="heading-wrapper">
              <h1 className="headerTagline">
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
            </div>
          </div>
          <div>
            <p>{data.headerParagraph}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
