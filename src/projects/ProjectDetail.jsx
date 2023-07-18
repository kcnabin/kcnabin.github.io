import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import ProjectImageCarousel from './components/ProjectImageCarousel';
import TitleAndStack from './components/TitleAndStack';
import StackInfo from './components/StackInfo';
import { useTheme } from '../context/ThemeContext';
import ExternalLinks from './components/ExternalLinks';

const ProjectDetail = () => {
  const { darkTheme } = useTheme()
  const project = useLocation().state?.project

  if (!project) {
    return (<Navigate to="/" />)
  }

  const { frontend, backend, database, projectInfo } = project?.details

  return (
    <div className={darkTheme ? 'bg-dark text-white body-height' : 'body-height'}>
      <div className="container-md border">
        <div className="row my-3 w-100">
          <div className='ms-2 mb-1 d-block d-md-none'>
            <TitleAndStack project={project} />
          </div>

          <div className="col-12 col-md-6 ps-1 pe-0">
            <ProjectImageCarousel photos={project.photos} />
          </div>

          <div className="col-12 col-md-6 ps-4 pe-0 mt-1">
            <div className='d-none d-md-block'>
              <TitleAndStack project={project} />
            </div>

            <StackInfo stack="Frontend" info={frontend} />
            <StackInfo stack="Backend" info={backend} />
            <StackInfo stack="Database" info={database} />

            <ExternalLinks project={project} />

            <div className='my-4'>
              <h5>Details</h5>
              <ul>
                {
                  projectInfo.map((info, i) => <li key={i}>{info}</li>)
                }
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail