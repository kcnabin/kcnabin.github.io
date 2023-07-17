import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    const ls = localStorage.getItem('dark-theme')
    if (ls) {
      setDarkTheme(JSON.parse(ls))
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

