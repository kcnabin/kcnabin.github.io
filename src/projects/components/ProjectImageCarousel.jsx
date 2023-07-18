import React from 'react'

const ProjectImageCarousel = ({ photos }) => {
  const firstPhoto = photos.slice(0, 1)
  const restPhotos = photos.slice(1)

  return (
    <div
      id="projectImages"
      className="carousel carousel-dark slide p-2"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          data-bs-interval="300000">
          <img
            src={firstPhoto}
            className="d-block w-100 object-fit-contain"
            alt="Project Photos"
          />
        </div>

        {
          restPhotos.map((photo, i) => {
            return (
              <div
                className="carousel-item"
                data-bs-interval="200000"
                key={i}
              >
                <img
                  src={photo}
                  className="d-block w-100 object-fit-contain"
                  alt="Project Photos"
                />
              </div>
            )
          })
        }

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#projectImages"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next"
        type="button"
        data-bs-target="#projectImages"
        data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default ProjectImageCarousel