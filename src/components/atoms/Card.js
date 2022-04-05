import React from "react"

const Card = ({ heading, paragraph, technologies, imgUrl, projectLink, image }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        paddingBlock: '10%'
      }}
    >
      <div className="content">
        <div style={{padding: '150px'}}>
          { heading === 'Data register JWA' ?
            <div style={{padding: '23px'}}></div>
            :
            <a
              href={projectLink ? projectLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-success btn-lg border"
              style={{ textDecoration: 'none' }}
            >
              Explore
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default Card
