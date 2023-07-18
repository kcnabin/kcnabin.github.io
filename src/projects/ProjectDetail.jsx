import React from 'react'
import { useLocation } from 'react-router-dom'

const ProjectDetail = () => {
  const location = useLocation()
  console.log('location :', location);

  return (
    <div>ProjectDetail</div>
  )
}

export default ProjectDetail