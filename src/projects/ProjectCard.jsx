import React from 'react'
import { useTheme } from '../context/ThemeContext'
import TitleAndStack from './components/TitleAndStack'
import ExternalLinks from './components/ExternalLinks'

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
          <TitleAndStack project={project} />

          <ExternalLinks project={project} />

        </div>
      </div>
    </div>
  )
}

export default ProjectCard