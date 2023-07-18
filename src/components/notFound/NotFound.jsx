import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [navigate])

  return (
    <div className='full-height d-flex justify-content-center align-items-center bg-dark text-white fw-bold fs-3'>
      <div className='align-center'>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <span className='ms-3'>
          Not Found. Redirecting to home...
        </span>
      </div>
    </div>
  )
}

export default NotFound