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
      title: 'Money Manager React Native',
      stack: 'React Native & SQLite',
      type: 'Mobile App (Android/iOS)',
      photos: [
        '/images/projects/money-manager-react-native/category-line-chart.png',
        '/images/projects/money-manager-react-native/day-tab.png',
        '/images/projects/money-manager-react-native/expenses-summary-pie-chart.png',
        '/images/projects/money-manager-react-native/add-transaction-form.png',
        '/images/projects/money-manager-react-native/native-date-selector.png',
        '/images/projects/money-manager-react-native/month-tab.png',
        '/images/projects/money-manager-react-native/calendar-tab.png',
        '/images/projects/money-manager-react-native/selected-date-transactions.png',
        '/images/projects/money-manager-react-native/month-selector-modal.png',
        '/images/projects/money-manager-react-native/all-categories.png',
        '/images/projects/money-manager-react-native/add-category-form.png',
        '/images/projects/money-manager-react-native/native-alert.png',
        '/images/projects/money-manager-react-native/search-screen.png',
        '/images/projects/money-manager-react-native/update-transaction-screen.png',
        '/images/projects/money-manager-react-native/empty-summary.png',
        '/images/projects/money-manager-react-native/empty-day-tab.png',
        '/images/projects/money-manager-react-native/about-screen.png',

      ],
      github: 'https://github.com/kcnabin/money-manager-react-native',
      details: {
        frontend: 'React Native, Redux Toolkit, React Navigation',
        backend: 'N/A',
        database: 'SQLite',
        projectInfo: [
          'A React Native App for tracking all of your expenses and incomes'
        ]
      }
    },
    {
      id: 2,
      title: 'Camping Nepal',
      stack: 'MERN',
      type: 'Booking System',
      photos: [
        '/images/projects/camping-nepal/1-index-page-mobile.png',
        '/images/projects/camping-nepal/2-navigation-mobile.png',
        '/images/projects/camping-nepal/3-booking-page-1-mobile.png',
        '/images/projects/camping-nepal/4-booking-page-2-mobile.png',
        '/images/projects/camping-nepal/5-add-camp-1-mobile.png',
        '/images/projects/camping-nepal/6-add-camp-2-mobile.png',
        '/images/projects/camping-nepal/7-my-places-mobile.png',
        '/images/projects/camping-nepal/8-my-booking-mobile.png',
        '/images/projects/camping-nepal/9-booking-page-place-photos-mobile.png',
        '/images/projects/camping-nepal/10-booking-confirmed.png',
        '/images/projects/camping-nepal/11-customer-booking-mobile.png',
        '/images/projects/camping-nepal/12-register-mobile.png',
        '/images/projects/camping-nepal/13-login-mobile.png',
        '/images/projects/camping-nepal/14-my-places-empty-mobile.png',
        '/images/projects/camping-nepal/15-search-mobile.png',
        '/images/projects/camping-nepal/16-profile-mobile.png',
        '/images/projects/camping-nepal/17-update-profile-mobile.png',
        '/images/projects/camping-nepal/18-update-password-mobile.png',
        '/images/projects/camping-nepal/19-homepage-desktop.png',
        '/images/projects/camping-nepal/20-my-camps-desktop.png',
        '/images/projects/camping-nepal/21-booking-page-desktop.png',
      ],
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

    },
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