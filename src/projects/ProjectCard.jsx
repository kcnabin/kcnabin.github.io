import React from 'react'
import { useTheme } from '../context/ThemeContext'
import PillInfo from '../components/PillInfo'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  const { darkTheme } = useTheme()

  return (
    <div className="card rounded-4 overflow-hidden shadow card-zoom">
      <div to={project.photos[0]} className='ratio ratio-4x3'>
        <img
          src={project.photos[0]}
          className="card-img-top object-fit-contain img-fluid border-bottom"
          alt={project.title}
        />
      </div>

      <div className={darkTheme ? 'gray-bg' : ''}>
        <div className="card-body py-2 px-3">
          <h5 className="card-title m-0">
            {project.title}
          </h5>

          <div className='align-center gap-2 my-2'>
            <PillInfo text={project.stack} />
            <PillInfo text={project.type} />
          </div>

          <div className="d-flex justify-content-end">
            <div className='d-flex gap-2'>
              <Link
                to={`/projects/${project.id}`}
                state={{ project }}
                className='font-12 btn btn-outline-success py-1 px-2 rounded-pill'
              >
                View
              </Link>

              <Link
                to={project.github}
                className='font-12 btn btn-outline-success py-1 px-2 rounded-pill'
              >
                Github
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard