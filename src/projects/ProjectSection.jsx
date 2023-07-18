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
      photos: [
        '/images/projects/camping-store/0.png',
        '/images/projects/camping-store/1.png',
        '/images/projects/camping-store/2.png',
        '/images/projects/camping-store/3.png',
        '/images/projects/camping-store/4.png',
        '/images/projects/camping-store/5.png',
        '/images/projects/camping-store/6.png',
        '/images/projects/camping-store/7.png',
        '/images/projects/camping-store/8.png',

      ],
      github: 'https://github.com/kcnabin/camping-store',
      details: {
        frontend: 'React, React Router, Redux Toolkit, Bootstrap 5',
        backend: 'Express, Node',
        database: 'MongoDB',
        projectInfo: [
          'Customers can search products and filter products by price',
          'Customer can add/update/delete products to cart, place order and track their order',
          'Admin can create/update/delete new category and new products',
          'Admin can view and change status of new order',
          'User (Admin & Customer) can update their password and userinfo (address, phone number)'
        ]
      }
    },
    {
      id: 1,
      title: 'Camping Nepal',
      stack: 'MERN',
      type: 'Booking System',
      photos: ['/images/projects/camping-nepal/0.png'],
      github: 'https://github.com/kcnabin/camping-nepal',
      details: {
        frontend: 'React, React Router, Bootstrap 5',
        backend: 'Express, Node',
        database: 'MongoDB',
        projectInfo: [
          'User can add/update/delete new camp/place',
          'User can search for place to camp',
          'User can book camp for particular duration',
          'Camp/Place owner can accept/cancel user booking',
          'User can update their password and userinfo (address, phone number)'
        ]
      }

    }, {
      id: 2,
      title: 'Portfolio',
      stack: 'Frontend',
      type: 'Portfolio',
      photos: ['/images/projects/portfolio/0.png'],
      github: 'https://github.com/kcnabin/kcnabin.github.io',
      details: {
        frontend: 'React, React Router, Bootstrap 5',
        backend: 'N/A',
        database: 'N/A',
        projectInfo: [
          'Portfolio site showcasing my skills and projects',
          `Since you're already here, what do you think?`
        ]
      }
    }
  ]
  return (
    <div className='mt-5 pt-4'>
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