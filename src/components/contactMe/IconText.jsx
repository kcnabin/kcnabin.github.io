import React from 'react'

const IconText = ({ text, children, href }) => {

  return (
    <a
      href={href}
      className='align-center px-3 py-2 border border-secondary rounded-pill contact-pill'
      target='_blank'
      rel="noreferrer"
    >
      <div className='align-center'>
        {children}
      </div>
      <span className="ms-2">
        {text}
      </span>
    </a>
  )
}

export default IconText