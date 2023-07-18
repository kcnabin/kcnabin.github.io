import React from 'react'
import { useTheme } from '../context/ThemeContext'

const LineHeader = ({ header }) => {
  const { darkTheme } = useTheme()

  return (
    <div className="line-header text-center border-top border-2 border-secondary">
      <h3 className='m-0 px-3 py-1 rounded-pill bg-white'>
        <div className={darkTheme ? 'bg-light text-dark' : ''}>
          {header}
        </div>
      </h3>
    </div>
  )
}

export default LineHeader