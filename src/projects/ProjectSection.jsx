import React from 'react'
import ProjectCard from './ProjectCard'
import LineHeader from '../components/LineHeader'

const ProjectSection = () => {
  const highlightedProjects = [
    {
      id: 0,
      title: 'Camping Store',
      stack: 'MERN',
      type: 'E-Commerce',
      photos: ['/images/projects/camping-store/0.png'],
      github: 'https://github.com/kcnabin/camping-store'

    },
    {
      id: 1,
      title: 'Camping Nepal',
      stack: 'MERN',
      type: 'Booking System',
      photos: ['/images/projects/camping-nepal/0.png'],
      github: 'https://github.com/kcnabin/camping-nepal'

    }, {
      id: 2,
      title: 'Portfolio',
      stack: 'Frontend',
      type: 'Portfolio',
      photos: ['/images/projects/portfolio/0.png'],
      github: 'https://github.com/kcnabin/kcnabin.github.io'
    }
  ]
  return (
    <div className='mt-5'>
      <LineHeader header="My Projects" />

      <div className='container-fluid my-1'>
        <div className="row">
          {highlightedProjects.map(project => (
            <div key={project.id} className='col-12 col-sm-6 col-md-4 p-2'>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection