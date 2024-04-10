import React from 'react'

const PillInfo = ({ text }) => {
  return (
    <div className="border px-3 py-1 bg-secondary fw-bold text-white rounded-pill font-12 text-center">
      {text}
    </div>
  )
}

export default PillInfo