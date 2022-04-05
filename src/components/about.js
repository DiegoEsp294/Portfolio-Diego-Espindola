import React from "react"
/* import Fade from "react-reveal/Fade"
 */import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <br></br>
            <br></br>
            <h4>{data.aboutParaOne}</h4>
            <p style={{fontSize: '18px', color:'white'}}>
               {data.aboutParaTwo}
            </p>
          </div>
          <div className="image-wrapper">
            <img src="./img/photo1.png" width="80%" height="97%" alt="about"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
