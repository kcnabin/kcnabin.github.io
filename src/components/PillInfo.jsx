import React from 'react'

const PillInfo = ({ text }) => {
  return (
    <div className="border px-2 py-1 bg-secondary fw-bold text-white rounded-pill font-12">
      {text}
    </div>
  )
}

export default PillInfo