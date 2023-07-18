import React from 'react'

const StackInfo = ({ stack, info }) => {
  return (
    <div className='mt-3 align-center'>
      <span className='me-2' style={{ minWidth: '75px' }}>
        {stack}:
      </span>
      <span className='h6 mb-0 flex-grow-1'>
        {info}
      </span>
    </div>
  )
}

export default StackInfo