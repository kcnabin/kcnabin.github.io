import React from 'react'
import Skills from '../skills/Skiils'
import { useTheme } from '../../context/ThemeContext'


const AboutMe = () => {
  const { darkTheme } = useTheme()

  const skills = [
    {
      name: 'JavaScript',
      src: '/icons/js.svg'
    },
    {
      name: 'React.js',
      src: '/icons/react.svg'
    },
    {
      name: 'Bootstrap 5',
      src: '/icons/bootstrap.svg'
    },
    {
      name: 'Express.js',
      src: '/icons/express.png'
    },
    {
      name: 'Node.js',
      src: '/icons/node.svg'
    },
    {
      name: 'MongoDB',
      src: '/icons/mongodb.svg'
    },
    {
      name: 'HTML',
      src: '/icons/html.svg'
    },
    {
      name: 'CSS',
      src: '/icons/css.svg'
    }

  ]

  const techStack = [
    {
      name: 'Redux Toolkit',
      src: '/icons/redux-toolkit.svg'
    },
    {
      name: 'React Router',
      src: '/icons/react-router.png'
    },
    {
      name: 'Git',
      src: '/icons/git.svg'
    },
    {
      name: 'NPM',
      src: '/icons/npm.svg'
    },
    {
      name: 'Webpack',
      src: '/icons/webpack.svg'
    },
  ]

  const resumeAddress = `https://bit.ly/nabin-resume`

  return (
    <>
      <div className={darkTheme ? "bg-dark text-white" : ''}>
        <div className='container-md p-0 px-3 border'>

          <div className='d-flex flex-wrap-reverse align-center justify-content-around gap-3 py-4'>
            <div className='about'>
              <div className=''>
                <span className='me-1 fs-4'>I'm </span>
                <span className='fs-1 '>Nabin KC</span>
              </div>
              <div className='fs-4'>
                Full-Stack Web Developer
              </div>

              <div className='mt-2 mt-sm-3'>
                <a href={resumeAddress} className={darkTheme ? "btn btn-success " : "btn btn-outline-success"}>
                  Download Resume
                </a>
              </div>
            </div>

            <div className='' style={{ width: "200px" }}>
              <img
                src="/images/profile/nabin-profile.png "
                alt="Nabin"
                className='img-fluid w-100 rounded-pill'
              />
            </div>

          </div>

          <Skills skills={skills} title="Skills" />

          <Skills skills={techStack} title="Tech Stack" />
        </div>
      </div>
    </>
  )
}

export default AboutMe