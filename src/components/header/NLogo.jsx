import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const NLogo = () => {
  const { darkTheme } = useTheme()

  return (
    <div>
      {
        darkTheme
          ? (
            <img src="/icons/letter-n-white.png" alt="letter-n" />
          ) : (
            <img src="/icons/letter-n.png" alt="letter-n" />
          )
      }
    </div>
  )
}

export default NLogo