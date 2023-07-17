import React from 'react'
import SkillCard from './SkillCard'

const Skills = ({ skills, title }) => {

  return (
    <div className=''>
      <p className="h5 m-0 ms-2">
        {title}
      </p>

      <div className="d-flex flex-wrap justify-content-around gap-3 my-3">
        {
          skills.map((skill, i) => (
            <div key={i}>
              <SkillCard
                skill={skill}
              />
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Skills