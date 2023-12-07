'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react'
import { Theme } from '../style/theme'

// Create a context for the theme
type ThemeContextProps = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

// Create a provider component that will wrap your app
interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Define the state for the theme
  const [theme, setThemeState] = useState<Theme>(Theme.LIGHT)

  const setTheme = (newTheme: Theme) => setThemeState(newTheme)

  // Provide the theme and the function to set the theme
  const contextValue: ThemeContextProps = {
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

// Create a custom hook to consume the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  const { theme, setTheme } = context
  return { theme, setTheme }
}
