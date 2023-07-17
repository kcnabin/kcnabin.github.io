import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'

const Layout = () => {
  return (
    <div className=''>
      <div className='position-sticky top-0 z-2'>
        <Header />
      </div>
      <Outlet />

    </div>
  )
}

export default Layout