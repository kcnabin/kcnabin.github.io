import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const SkillCard = ({ skill }) => {
  const { darkTheme } = useTheme()

  return (

    <div className="hover-zoom border rounded-3 overflow-hidden shadow">
      <div className={darkTheme ? '' : ''}>
        <div className="py-2 px-3 ">
          <div className="d-flex justify-content-center">
            <div className='ratio ratio-4x3 mt-2' style={{ width: "50px" }}>
              <img src={skill.src} className="object-fit-contain" alt={skill.name} />
            </div>
          </div>

          <p className="text-center m-0 mt-2">
            {skill.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard