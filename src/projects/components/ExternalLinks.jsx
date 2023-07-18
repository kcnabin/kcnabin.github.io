import React from 'react'
import { Link } from 'react-router-dom'

const ExternalLinks = ({ project }) => {
  return (
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
  )
}

export default ExternalLinks