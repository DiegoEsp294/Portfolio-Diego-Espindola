import React from "react"
import Card from "./atoms/Card"
// import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <div className="row text-center">
            <h1>Work</h1>
            {data.projects.map((project, index) => (
              <div className="col-lg-6" style={{ paddingBlockStart: '50px' }}>
                <div style={{ paddingBlockEnd: '5px' }}>
                  <h4 style={{ color:'honeydew' }} className="text">{project.para}</h4>
                </div>
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  technologies={project.technologies}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  image={project.image}
                ></Card>
                <div style={{ paddingBlockStart: '10px', paddingBlockEnd: '10px', color:'honeydew' }}>
                  <h6 style={{ color:'honeydew' }} className="text"> Technologies: {project.technologies}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
