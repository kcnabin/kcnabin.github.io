import React from 'react'
import PillInfo from '../../components/PillInfo'

const TitleAndStack = ({ project }) => {
  return (
    <>
      <h5 className="card-title m-0">
        {project.title}
      </h5>

      <div className='align-center gap-2 my-2'>
        <PillInfo text={project.stack} />
        <PillInfo text={project.type} />
      </div>
    </>
  )
}

export default TitleAndStack