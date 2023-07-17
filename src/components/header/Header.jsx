import React from 'react'
import { Link } from 'react-router-dom'
import LinkedinIcon from '../../svgIcons/LinkedinIcon'
import GithubIcon from '../../svgIcons/GithubIcon'
import MoonFillIcon from '../../svgIcons/MoonFillIcon'
import SunFillIcon from '../../svgIcons/SunFillIcon'
import { useTheme } from '../../context/ThemeContext'
import NLogo from './NLogo'

const Header = () => {
  const { darkTheme, setDarkTheme } = useTheme()

  const contact = {
    linkedIn: 'https://www.linkedin.com/in/kcnabin/',
    github: 'https://github.com/kcnabin'
  }

  const changeTheme = () => {
    localStorage.setItem('dark-theme', JSON.stringify(!darkTheme))
    setDarkTheme(!darkTheme)
  }

  return (
    <div className={darkTheme ? 'bg-dark text-white' : 'bg-secondary text-white'}>
      <div className='container-md p-0'>
        <div className={darkTheme ? 'border-start border-end' : ''}>
          <div className='justify-between align-center px-3 py-3'>
            <Link to='/' className='hover-zoom'>
              <NLogo />
            </Link >

            <div className='align-center gap-2'>
              <Link to={contact.linkedIn} className='py-1 px-2 hover-zoom'>
                <LinkedinIcon />
              </Link>

              <Link to={contact.github} className='py-1 px-2 hover-zoom'>
                <GithubIcon />
              </Link>

              <div className='btn py-1 px-2 hover-zoom' onClick={() => changeTheme()}>
                <div className={darkTheme ? 'bg-dark text-white' : 'bg-secondary text-white'}>
                  {
                    darkTheme
                      ? (
                        <SunFillIcon />
                      ) : (
                        < MoonFillIcon />
                      )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header